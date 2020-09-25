Cassandra nutzt identifier. Es gibt 2 Typen:  
- Quoted (case sensitive)  
  - Niemals Keywords 
  - Immer in ``"`` 
  - Kann espaced werden mit ``""`` 
    - ``"foo "" bar"``
- Unquoted (case insensitive)

Viele idientifier sind Keywords

Comments mit  
- ``--`` 
- ``//``
- ``/* */``


Data -> Tables (Besteht aus Rows und Col) -> Keyspace( Ein keyspace pro application)
```
keyspace_name ::=  name
table_name    ::=  [ keyspace_name '.' ] name
name          ::=  unquoted_name | quoted_name
unquoted_name ::=  re('[a-zA-Z_0-9]{1, 48}')
quoted_name   ::=  '"' unquoted_name '"'
```


## Keyspace Creation
[Creation](https://cassandra.apache.org/doc/latest/cql/ddl.html#create-keyspace)
```
CREATE KEYSPACE excelsior
    WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 3};

CREATE KEYSPACE excalibur
    WITH replication = {'class': 'NetworkTopologyStrategy', 'DC1' : 1, 'DC2' : 3}
    AND durable_writes = false;
```

```IF NOT EXISTS``` returned ein Fehler, wenn bereits existiert.  
Ohne: no-op