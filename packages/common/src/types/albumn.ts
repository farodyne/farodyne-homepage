/**
 * Model class for representing an album in the web page.
 */
import { AlbumImage } from './album-image';

export class Album {
    id: string;
    type: string;
    caption: string;
    images: AlbumImage[];

    constructor({ id, type, caption, images }: Album) {
        this.id = id;
        this.type = type;
        this.caption = caption;
        this.images = images;
    }
}
