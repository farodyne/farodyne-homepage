import { MongoClient } from 'mongodb';
import { EnvironmentParameters } from '@/types';

export class DatabaseClient {
    client: MongoClient;

    /**
     * Constructs an instance of a MongoDB client.
     */
    constructor({ databaseUser, databasePassword, databaseHost }: EnvironmentParameters) {
        const uri = `mongodb+srv://${databaseUser}:${databasePassword}@${databaseHost}/?retryWrites=true&w=majority`;

        this.client = new MongoClient(uri);
    }
}
