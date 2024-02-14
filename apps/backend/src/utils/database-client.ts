import { MongoClient } from 'mongodb';
import { EnvironmentParameters } from 'farodyne-common';

export class DatabaseClient {
    client!: MongoClient;
    parameters: EnvironmentParameters;

    /**
     * Constructs an instance of this database client.
     */
    constructor(parameters: EnvironmentParameters) {
        this.parameters = parameters;
        this.connect(parameters);
    }

    /**
     * Connects to the database.
     */
    connect(parameters: EnvironmentParameters) {
        const { databaseUser, databasePassword, databasePort } = parameters;
        const uri = `mongodb://${databaseUser}:${databasePassword}@localhost:${databasePort}`;

        try {
            this.client = new MongoClient(uri);
            this.client.connect();
            console.info('Successfully connected to the Farodyne database.');
        } catch (error) {
            console.error('Failed to connect to the Farodyne database.', error);
        }
    }

    /**
     * Returns the album with the provided identifier.
     */
    async getAlbum(id: string) {
        const { databaseName } = this.parameters;
        return await this.client.db(databaseName).collection('albums').findOne({ id });
    }
}
