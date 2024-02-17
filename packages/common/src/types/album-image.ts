/**
 * Model class used to represent album image objects.
 */
export class AlbumImage {
    caption: string;
    url: string;

    constructor(caption: string, url: string) {
        this.caption = caption;
        this.url = url;
    }
}
