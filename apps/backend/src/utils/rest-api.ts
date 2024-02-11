/**
 * Class that implements our backend REST API.
 */
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { DatabaseClient, EnvironmentParameters } from '@/utils';

export class RestApi {
    constructor(databaseClient: DatabaseClient, parameters: EnvironmentParameters) {
        const api = express();
        api.use(cors());
        api.use(bodyParser.json());

        console.info('Instanciated REST API.');
    }

    /**
     * The reason for separating the starting of the server into a separate method
     * is that it allows us to perform unit tests without using up an actual port.
     */
    start() {
        console.info('Started REST API.');
    }
}
