import { Client, Query } from 'ts-postgres';
// import React from 'react';

// let asdf0 = <div>
//     <div>asdf0</div>
// </div>;

let DB_CONFIG = {
    user: 'materialize', port: 6875, database: 'materialize'
};

export async function run() {

    let client = new Client(DB_CONFIG);

    let q = async (queryStr: string): Promise<any> => {
        let query = new Query(queryStr);
        return await client.execute(query);
    };


    await client.connect();

    console.log(await q(`
        DROP TABLE IF EXISTS symbols
    `));

    console.log(await q(`
        CREATE TABLE IF NOT EXISTS symbols (
            symbol text,
            ticker text
        )
    `));

    console.log(1);

    await client.query('BEGIN');
    console.log(1);
    await client.query('DECLARE cursor0 CURSOR FOR TAIL symbols');
    console.log(1);

    setInterval(() => {
        console.log(3);


        // q(`
        //         INSERT INTO symbols
        //         SELECT *
        //         FROM (VALUES ('Apple','AAPL'),
        //                      ('Google','GOOG'),
        //                      ('Elerium','ELER'),
        //                      ('Bespin Gas','BGAS'),
        //                      ('Linen Cloth','LCLO')
        //         )
        //     `)

    }, 500);

    let done = false;

    // setTimeout(() => {
    //     done = true;
    // }, 1000);

    // while(!done) {
    client.query('FETCH ALL cursor0').then((res) => {
        console.log(res.rows);
    }).finally(() => {
        console.log(1)
    });
    // }
    

    await new Promise((resolve, reject) => {
        setTimeout(resolve, 200);
    });

    q(`
        INSERT INTO symbols
        SELECT *
        FROM (VALUES ('Apple','AAPL'),
                     ('Google','GOOG'),
                     ('Elerium','ELER'),
                     ('Bespin Gas','BGAS'),
                     ('Linen Cloth','LCLO')
        )
    `)

    await new Promise((resolve, _reject) => {
        setTimeout(resolve, 1500);
    });
}
