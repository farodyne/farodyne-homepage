import { MongoClient } from 'mongodb';
import { EnvironmentParameters } from '@/types';

export class DatabaseClient {
    client!: MongoClient;

    /**
     * Constructs an instance of a MongoDB client.
     */
    constructor({ databaseUser, databasePassword, databaseHost }: EnvironmentParameters) {
        const uri = `mongodb+srv://${databaseUser}:${databasePassword}@${databaseHost}/?retryWrites=true&w=majority`;

        try {
            this.client = new MongoClient(uri);
            this.client.connect();
            console.info('Successfully connected to the database.');
        } catch (error) {
            console.error('Failed to connect to database.', error);
        }
    }
}
