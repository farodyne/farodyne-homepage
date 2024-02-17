/**
 * Database client class that implements our operations towards the database.
 */
import { MongoClient } from 'mongodb';
import { EnvironmentParameters } from './environment-parameters';
import { Album, AlbumImage, AlbumMiniature, AlbumTypes } from 'farodyne-common';

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
     * Method to return the N latest albums from the database.
     */
    async getLatestAlbums(limit: number) {
        const { databaseName } = this.parameters;

        const albums = await this.client
            .db(databaseName)
            .collection('albums')
            .find({})
            .sort({ created: -1 })
            .limit(limit);

        // Bail out if album not found.
        if (!albums) {
            throw new Error(`Failed to find latest albums in the database.`);
        }

        const albumArray = await albums.toArray();

        // Calculate image paths.
        return albumArray.map((album) => {
            const { id, caption, type } = album;
            const url = `${this.parameters.contentUrl}/${type}/${id}/thumbnail.webp`;
            return new AlbumMiniature(id, caption, type, url);
        });
    }

    /**
     * Returns the album with the provided identifier.
     */
    async getAlbum(id: string) {
        const { databaseName } = this.parameters;
        const album = await this.client.db(databaseName).collection('albums').findOne({ id });

        // Bail out if album not found.
        if (!album) {
            throw new Error(`No album with id: ${id} found in database.`);
        }

        // Calculate image paths.
        album.images = album.images.map(
            (image: any) =>
                new AlbumImage(image.caption, `${this.parameters.contentUrl}/${album.type}/${album.id}/${image.id}`)
        );

        const { caption, type, images, videos } = album;
        return new Album(id, caption, type as AlbumTypes, images, videos);
    }
}
