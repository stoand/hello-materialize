import { Client, Query } from 'ts-postgres';
import React from 'react';

let asdf0 = <div>
    <div>asdf0</div>
</div>;

let asdf1 = <div>
    <div>asdf0</div>
    <div>asdf1</div>
</div>;


export const run = async () => {
    let client = new Client({
        user: 'materialize', port: 6875, database: 'materialize'
    });

    await client.connect();

    let q = async (queryStr: string): Promise<any> => {
        let query = new Query(queryStr);
        return await client.execute(query);
    };


    console.log(await q(`
        DROP TABLE IF EXISTS symbols
    `));

    console.log(await q(`
        CREATE TABLE symbols (
            symbol text,
            ticker text
        )
    `));


    console.log(await q(`
        INSERT INTO symbols
        SELECT *
        FROM (VALUES ('Apple','AAPL'),
                     ('Google','GOOG'),
                     ('Elerium','ELER'),
                     ('Bespin Gas','BGAS'),
                     ('Linen Cloth','LCLO')
        )
    `));

    console.log(await q(`SELECT * FROM symbols`));
}
