/**
 * Model class for representing an album in the web page.
 */
import { AlbumImage } from './album-image';
import { environmentParameters } from '@/utils';

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

        // If the album contains images, transform the array to an array
        // of frontend image models.
        this.images = images
            ? images.map((image) => {
                  const url = `${environmentParameters.contentUrl}/${type}/${id}/${image.id}`;
                  return { ...image, url };
              })
            : [];
    }
}
