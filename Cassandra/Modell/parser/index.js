const readline = require("readline");
const cassandra = require("cassandra-driver");
const csv = require("csv-parse");
const fs = require("fs");

let counter = 0;

//#region Config

const client = new cassandra.Client({
  contactPoints: ["localhost"],
  localDataCenter: 'datacenter1',
  protocolOptions: { port: 9042 },
  keyspace: "taxidata",
});

const file = "./taxi.csv";
const parser = csv({
  columns: true,
});
//#endregion

// Setup Parser
parser.on("readable", async () => {
  let record;
  while ((record = parser.read())) {
    await insertIntoDB(record);
    counter++;
    console.log(counter);
  }
});

const tableNames = [
  'taxi_by_vendorid',
  'taxi_by_distance',
  'taxi_by_passengercount',
  'taxi_by_totalamount'
]

async function createTablesIfNotExist() {
  const basicTable = `
    VendorID int,
    tpep_pickup_datetime timestamp,
    tpep_dropoff_datetime timestamp,
    passenger_count int,
    trip_distance float,
    ratecodeid int,
    store_and_fwd_flag text,
    pulocationid int,
    dolocationid int,
    payment_type int,
    fare_amount float,
    extra float,
    mta_tax float,
    tip_amount float,
    tolls_amount float,
    improvement_surcharge float,
    total_amount float,`;

  const tableByVendorId = `CREATE TABLE IF NOT EXISTS taxi_by_vendorid (
    ${basicTable}
    PRIMARY KEY(vendorid, trip_distance)
    )`;

  const tableByDistance = `CREATE TABLE IF NOT EXISTS taxi_by_distance (
    ${basicTable}
    PRIMARY KEY(trip_distance, passenger_count)
  )`;

  const tableByPassengerCount = `CREATE TABLE IF NOT EXISTS taxi_by_passengercount (
    ${basicTable}
    PRIMARY KEY(passenger_count, total_amount)
  )`;

  const tableByTotalAmount = `CREATE TABLE IF NOT EXISTS taxi_by_totalamount (
    ${basicTable}
    PRIMARY KEY(total_amount, tip_amount)
  )`;

  const prom = [
    client.execute(tableByDistance),
    client.execute(tableByPassengerCount),
    client.execute(tableByTotalAmount),
    client.execute(tableByVendorId),
  ]
  try {
    await Promise.all(prom);
    console.log('Tables created');
    console.log('Parsing CSV and inserting data');
    const readStream = fs.createReadStream(file);
    readStream.pipe(parser);
  } catch (error) {
    console.error(err);
  }
}

async function insertIntoDB(data) {
  const proms = [];
  for (const tableName of tableNames) {
    const insertStatement = generateInsertStatement(tableName);
    params = [
      data.VendorID,
      data.tpep_pickup_datetime,
      data.tpep_dropoff_datetime,
      data.passenger_count,
      data.trip_distance,
      data.ratecodeid,
      data.store_and_fwd_flag,
      data.pulocationid,
      data.dolocationid,
      data.payment_type,
      data.fare_amount,
      data.extra,
      data.mta_tax,
      data.tip_amount,
      data.tolls_amount,
      data.improvement_surcharge,
      data.total_amount
    ]
    proms.push(client.execute(insertStatement, params, { prepare: true }));
  }
  return Promise.all(proms);
}

function generateInsertStatement(tableName) {
  return `INSERT INTO ${tableName} (
    VendorID,
    tpep_pickup_datetime,
    tpep_dropoff_datetime,
    passenger_count,
    trip_distance,
    ratecodeid,
    store_and_fwd_flag,
    pulocationid,
    dolocationid,
    payment_type,
    fare_amount,
    extra,
    mta_tax,
    tip_amount,
    tolls_amount,
    improvement_surcharge,
    total_amount
    )
    VALUES (
      ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?
    )`;
}

parser.on("error", () => {
  console.error(error);
  process.exit(1);
});

parser.on("end", () => {
  console.log(`Inserted ${counter} rows into the DB\nExiting now`);
  process.exit(0);
});

createTablesIfNotExist();
