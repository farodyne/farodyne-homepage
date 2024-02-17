/**
 * Model class used to represent a carousel image.
 */
import { AlbumImage } from 'farodyne-common';

export class CarouselImage extends AlbumImage {
    visible: boolean;

    constructor(id: string, caption: string, url: string) {
        super(id, caption, url);
        this.visible = false;
    }

    /**
     * Marks the image as visible.
     */
    show() {
        this.visible = true;
    }

    /**
     * Marks the image as hidden.
     */
    hide() {
        this.visible = false;
    }
}
