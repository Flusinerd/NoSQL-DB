# Start instances
Falls das Netzwerk noch nicht existiert:
```bash
docker network create cassandra-network
```

First instance:
```bash
$ docker run --name cassandra-master --network cassandra-network -d -p 9042:9042 cassandra
```

Every other instance: 
```bash
$ docker run --name cassandra-node-1 -d --network cassandra-network -e CASSANDRA_SEEDS=cassandra-master cassandra
```

Jetzt muss noch der Keyspace von Hand angelegt werden:  
```
CREATE KEYSPACE taxidata WITH replication = {'class': 'SimpleStrategy', 'replication_factor': <node_anzahl>};
```

