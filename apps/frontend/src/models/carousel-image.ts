/**
 * Model class used to represent a carousel image.
 */
import { AlbumImage } from 'farodyne-common';

export class CarouselImage extends AlbumImage {
    visible: boolean;

    constructor(albumImage: AlbumImage) {
        super(albumImage);
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
