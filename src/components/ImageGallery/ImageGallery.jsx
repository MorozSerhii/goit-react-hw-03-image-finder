import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import 'index.css';

export const ImageGallery = ({ images, modalShown }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem images={images} modalShown={modalShown} />
    </ul>
  );
};
