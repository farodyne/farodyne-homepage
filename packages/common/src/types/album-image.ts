/**
 * Model class used to represent an album image.
 */
export class AlbumImage {
    id: string;
    caption: string;
    url: string;

    constructor(id: string, caption: string, url: string) {
        this.id = id;
        this.caption = caption;
        this.url = url;
    }
}
