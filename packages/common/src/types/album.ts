/**
 * Model class used to represent album objects.
 */
import { AlbumTypes } from './album-types';
import { AlbumImage } from './album-image';

export class Album {
    id: string;
    caption: string;
    type: string;
    images: AlbumImage[];
    videos: AlbumImage[];
    width: number;

    constructor(
        id: string,
        caption: string,
        type: AlbumTypes,
        images: AlbumImage[] = [],
        videos: AlbumImage[] = [],
        width: number
    ) {
        this.id = id;
        this.caption = caption;
        this.type = type;
        this.images = images;
        this.videos = videos;
        this.width = width;
    }
}
