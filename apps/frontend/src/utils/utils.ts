/**
 * This class contains a collection of reusable utility methods that are used
 * throughout the application.
 */
import { AlbumImage } from 'farodyne-common';

export class Utils {
    /**
     * Preloads the specified image.
     */
    static loadImage(image: AlbumImage) {
        return new Promise((resolve, reject) => {
            const imageToLoad = new Image();

            // Resolve the returned promise if the image loads as expected.
            imageToLoad.onload = () => {
                // resolve(new AlbumImage(image.url, image.caption));
            };

            // Reject the returned promise if the image fails to load.
            imageToLoad.onerror = () => {
                reject(new Error(`Failed to load image: ${image.url}`));
            };

            // This line triggers the actual loading.
            imageToLoad.src = image.url;
        });
    }
}
