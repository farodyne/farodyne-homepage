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
