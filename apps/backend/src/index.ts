import { DatabaseClient, Environment } from './utils';

console.log('Hello world!');

const kaka = new Environment();

const laka = new DatabaseClient(new Environment());
