/**
 * Common type definitions.
 */
export interface AlbumImage {
    id: string;
    caption: string;
}

export interface Album extends AlbumImage {
    type: string;
    images: AlbumImage[];
}

export class Album {
    constructor(album: Album) {
        this.id = album.id;
        this.caption = album.caption;
        this.type = album.type;
        this.images = album.images;
    }
}
