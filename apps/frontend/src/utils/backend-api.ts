/**
 * Class implementing the connection to the backend API.
 */
import axios from 'axios';
import { settings } from './settings';

export class BackendApi {
    base: string = `${import.meta.env.VITE_BACKEND_BASE_URL}/rest/v1`;
    options: any;

    /**
     * Creates an instance of the backend API class.
     */
    constructor() {
        this.options = {
            auth: { username: settings.apiUser, password: settings.apiPassword }
        };
    }

    /**
     * Method to fetch the frontpage carousel images from backend.
     */
    async getCarouselImages(count: number) {
        const { data } = await axios.get(`${this.base}/carousel-images/${count}`, this.options);
        return data.images;
    }

    /**
     * Method to fetch the newest, latest albums.
     */
    async getLatestAlbums(count: number) {
        const { data } = await axios.get(`${this.base}/latest-albums/${count}`, this.options);
        return data;
    }

    /**
     * Method to fetch all the album miniatures belonging to a particular section.
     */
    async getSection(type: string) {
        const { data } = await axios.get(`${this.base}/sections/${type}`, this.options);
        return data;
    }

    /**
     * Method to fetch the images in the specified album.
     */
    async getAlbum(id: string) {
        const { data } = await axios.get(`${this.base}/albums/${id}`, this.options);
        return data;
    }
}
