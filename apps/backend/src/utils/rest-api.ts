/**
 * Class that implements our backend REST API.
 */
import cors from 'cors';
import express from 'express';
import requestIp from 'request-ip';
import bodyParser from 'body-parser';
import { Album, AlbumImage } from 'farodyne-common';
import { DatabaseClient, EnvironmentParameters } from '@/utils';
import { AlbumTypes } from '../../../../packages/common/dist/types/album-types';

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
        this.api.get(apiRoot + '/carousel-images/:count', this.getCarouselImages.bind(this));
        this.api.get(apiRoot + '/albums/:id', this.getAlbum.bind(this));
        this.api.get(apiRoot + '/latest-albums/:count', this.getLatestAlbums.bind(this));
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
            const latestAlbums = await this.databaseClient.getLatestAlbums(Number(count || 3));
            res.json(latestAlbums);
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

        const cursor = await this.databaseClient.getAlbum(id);

        /**
        if (cursor) {
            const { id, caption, type, images, videos } = cursor;
            res.json(new Album(id, caption, type as AlbumTypes, images, videos));
        } else {
            const error = `No album with id: ${id}.`;
            console.error({ error });
            res.status(404).send({ error });
        }
         */
    }
}
