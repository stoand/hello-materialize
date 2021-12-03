const { Client } = require('pg');

/**

start shell:

psql -U materialize -h localhost -p 6875 materialize

then:

DROP TABLE IF EXISTS symbols;

CREATE TABLE symbols (
    symbol text,
    ticker text
);


INSERT INTO symbols
SELECT *
FROM (VALUES ('Apple','AAPL'),
             ('Google','GOOG'),
             ('Elerium','ELER'),
             ('Bespin Gas','BGAS'),
             ('Linen Cloth','LCLO')
);

INSERT INTO symbols
SELECT *
FROM (VALUES ('New2','NEW2'));

*/


async function main() {
    const client = new Client('postgres://materialize@localhost:6875/materialize');
    await client.connect();

    await client.query('BEGIN');
    await client.query('DECLARE c CURSOR FOR TAIL symbols');

    console.log('starting');

    while (true) {
        let res = await client.query('FETCH ALL c');
        console.log(res.rows);
    }
}

main();
