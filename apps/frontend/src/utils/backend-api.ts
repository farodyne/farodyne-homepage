/**
 * Class implementing the connection to the backend API.
 */
import axios from 'axios';

export class BackendApi {
    base: string = import.meta.env.VITE_BACKEND_BASE_URL;

    /**
     * Method to fetch the frontpage carousel images from backend.
     */
    async getFrontpageImages() {
        // TODO: Add basic auth stuff.
        const { data } = await axios.get(`${this.base}/rest/v1/albums/carousel-images`);
        const images = data.images.sort(() => 0.5 - Math.random());
        return images.slice(0, 3);
    }
}
