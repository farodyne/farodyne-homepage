import { MongoClient } from 'mongodb';
import { EnvironmentParameters } from '@/utils';

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
            console.info('Successfully connected to the database.');
        } catch (error) {
            console.error('Failed to connect to database.', error);
        }
    }

    async lala() {
        const section = await this.client.db('farodyne').collection('albums').findOne({ id: 'carousel-images' });

        console.log('AAAAAAAAAAAAAAAAD', section);

        return section;
    }
}
