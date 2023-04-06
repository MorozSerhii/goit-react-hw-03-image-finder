import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

import 'index.css';

export const ImageGallery = ({ images, modalShown }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem images={images} modalShown={modalShown} />
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
  modalShown: PropTypes.func,
};
