/**
 * Class that implements our backend REST API using Node Express.
 */
import cors from 'cors';
import express from 'express';
import requestIp from 'request-ip';
import bodyParser from 'body-parser';
import basicAuth from 'express-basic-auth';
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

        // Extract required environment parameters.
        const { apiUser, apiPassword, apiRoot } = parameters;

        // Register the middleware to use.
        this.api = express();
        this.api.use(cors());
        this.api.use(bodyParser.json());
        this.api.use(basicAuth({ users: { [apiUser]: apiPassword } }));

        // Map API endpoints to local class methods.
        this.api.get(apiRoot + '/carousel-images/:count', this.getCarouselImages.bind(this));
        this.api.get(apiRoot + '/albums/:id', this.getAlbum.bind(this));
        this.api.get(apiRoot + '/latest-albums/:count', this.getLatestAlbums.bind(this));
        this.api.get(apiRoot + '/sections/:type', this.getSection.bind(this));
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
     * Returns the number of specified carousel images in randomized order.
     */
    async getCarouselImages(req: express.Request, res: express.Response) {
        const {
            params: { count }
        } = req;

        console.info(`IP [${requestIp.getClientIp(req)}] - Getting ${count} frontpage images.`);

        try {
            const album = await this.databaseClient.getAlbum('carousel-images');
            album.images.sort(() => 0.5 - Math.random());
            album.images = album.images.slice(0, Number(count));
            res.json(album);
        } catch (error: any) {
            console.error(error);
            res.status(404).send({ error: error.message });
        }
    }

    /**
     * Fetches the N newest albums from the database.
     */
    async getLatestAlbums(req: express.Request, res: express.Response) {
        const {
            params: { count }
        } = req;

        console.info(`IP [${requestIp.getClientIp(req)}] - Getting latest ${count} albums.`);

        try {
            res.json(await this.databaseClient.getLatestAlbums(Number(count || 3)));
        } catch (error: any) {
            console.error(error);
            res.status(404).send({ error: error.message });
        }
    }

    /**
     * Retreives an individual photo album.
     */
    async getAlbum(req: express.Request, res: express.Response) {
        const {
            params: { id }
        } = req;

        console.info(`Request from ${requestIp.getClientIp(req)} - Getting album "${id}".`);

        try {
            res.json(await this.databaseClient.getAlbum(id));
        } catch (error: any) {
            console.error(error);
            res.status(404).send({ error: error.message });
        }
    }

    /**
     * Retreives an individual photo album.
     */
    async getSection(req: express.Request, res: express.Response) {
        const {
            params: { type }
        } = req;

        console.info(`Request from ${requestIp.getClientIp(req)} - Getting albums of type "${type}".`);

        try {
            res.json(await this.databaseClient.getSection(type));
        } catch (error: any) {
            console.error(error);
            res.status(404).send({ error: error.message });
        }
    }
}
