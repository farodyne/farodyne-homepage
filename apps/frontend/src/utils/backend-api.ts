/**
 * Class implementing the connection to the backend API.
 */
import axios from 'axios';

export class BackendApi {
    base: string = `${import.meta.env.VITE_BACKEND_BASE_URL}/rest/v1`;

    /**
     * Method to fetch the frontpage carousel images from backend.
     */
    async getCarouselImages(count: number) {
        // TODO: Add basic auth stuff.
        const { data } = await axios.get(`${this.base}/carousel-images/${count}`);
        return data.images;
    }

    /**
     * Method to fetch the newest, latest albums.
     */
    async getLatestAlbums(count: number) {
        // TODO: Add basic auth stuff.
        const { data } = await axios.get(`${this.base}/latest-albums/${count}`);
        return data;
    }
}
