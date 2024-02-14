/**
 * Model class used to represent an album image.
 */
export class AlbumImage {
    caption: string;
    url: string;

    constructor({ caption, url }: AlbumImage) {
        this.caption = caption;
        this.url = url;
    }
}
