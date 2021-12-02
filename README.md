# Hello Materialize DB

Stream data from materilize db inside a javascript application.

## Running

* Start the [Kakoune editor](https://github.com/mawww/kakoune#installing) - `kak src/tests.ts` 
* Install npm packages - `npm install`
* Start test runner `npm test`

## Steps

* [Create a Kafka JSON Sink in materialize DB](https://materialize.com/docs/sql/create-sink/#json-sinks)
* [Connect to the sink using Javascript](https://kafka.js.org/docs/configuration)
* [Create a consumer and subscribe](https://kafka.js.org/docs/consuming)
