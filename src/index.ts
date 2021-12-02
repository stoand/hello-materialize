import { Client, Query } from 'ts-postgres';

export const run = async () => {
    let client = new Client({ user: 'materialize', port: 6875 });
    await client.connect();

    let query = new Query('SELECT 5');
    let result = await client.execute(query);
    
    console.log(result.rows[0][0]);
};
