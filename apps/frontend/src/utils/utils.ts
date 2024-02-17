/**
 * This class contains a collection of reusable utility methods that are used
 * throughout the application.
 */
import { AlbumImage } from 'farodyne-common';
import { CarouselImage } from '@/models';

export class Utils {
    static contentUrl: string = import.meta.env.VITE_CONTENT_BASE;

    /**
     * Returns the full image path including content base.
     */
    static fullImagePath(imageUrl: string) {
        return `${this.contentUrl}/${imageUrl}`;
    }

    /**
     * Preloads the specified image.
     */
    static loadImage(image: AlbumImage): Promise<CarouselImage> {
        image.url = this.fullImagePath(image.url);

        return new Promise((resolve, reject) => {
            const imageToLoad = new Image();

            // Resolve the returned promise if the image loads as expected.
            imageToLoad.onload = () => {
                resolve(new CarouselImage(image.id, image.caption, image.url));
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
