/**
 * Model class used to represent an album image.
 */
export class AlbumImage {
    id: string;
    caption: string;
    url: string;

    constructor({ id, caption, url }: AlbumImage) {
        this.id = id;
        this.caption = caption;
        this.url = url;
    }
}
