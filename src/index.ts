import { Client } from 'ts-postgres';

export const run = async () => {
    let client = new Client({ user: 'materialize', port: 6875 });
    await client.connect();

    
    console.log('asdf3');
};
