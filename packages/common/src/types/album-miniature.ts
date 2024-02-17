/**
 * Model class used to represent album miniature objects.
 */
import { AlbumTypes } from './album-types';

export class AlbumMiniature {
    id: string;
    caption: string;
    type: string;
    url: string;

    constructor(id: string, caption: string, type: AlbumTypes, url: string = '') {
        this.id = id;
        this.caption = caption;
        this.type = type;
        this.url = url;
    }
}
