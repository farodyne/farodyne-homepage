/**
 * Class that implements our backend REST API.
 */
import cors from 'cors';
import express from 'express';
import requestIp from 'request-ip';
import bodyParser from 'body-parser';
import { DatabaseClient, EnvironmentParameters } from '@/utils';

export class RestApi {
    databaseClient: DatabaseClient;
    parameters: EnvironmentParameters;
    api: express.Express;

    /**
     * Creates and instance of this REST API.
     */
    constructor(databaseClient: DatabaseClient, parameters: EnvironmentParameters) {
        this.databaseClient = databaseClient;
        this.parameters = parameters;
        this.api = express();
        this.api.use(cors());
        this.api.use(bodyParser.json());

        const { apiRoot } = parameters;

        // Map API endpoints to local class methods.
        this.api.get(apiRoot + '/albums/:id', this.getAlbum.bind(this));
    }

    /**
     * The reason for separating the starting of the server into a separate method
     * is that it allows us to perform unit tests without using up an actual port.
     */
    start() {
        const { apiRoot, apiPort } = this.parameters;
        console.info(`Started REST API at ${apiRoot} on port ${apiPort}.`);
        this.api.listen(apiPort);
    }

    /**
     * Method for retrieving an individual photo album.
     * @param {Object} req - An Express request object.
     * @param {Object} res - An Express return object.
     */
    async getAlbum(req: express.Request, res: express.Response) {
        const {
            params: { id }
        } = req;

        console.info(`${requestIp.getClientIp(req)} - Getting album ${id}`);

        const cursor = await this.databaseClient.getAlbum(id);

        if (cursor) {
            //res.json(new Album(cursor));
            console.log('AAAAAAAAAA', cursor);
            res.json({ message: 'lala' });
        } else {
            const error = `No album with id: ${id}.`;
            console.error({ error });
            res.status(404).send({ error });
        }
    }
}
