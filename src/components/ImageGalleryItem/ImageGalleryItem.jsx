import 'index.css';
import LazyLoad from 'react-lazy-load';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images, modalShown }) => {
  return (
    <>
      {images.map(({ id, largeImageURL, webformatURL }) => (
        <li key={id} className="ImageGalleryItem">
          <LazyLoad>
            <img
              onClick={() => {
                modalShown(largeImageURL);
              }}
              className="ImageGalleryItem-image"
              src={webformatURL}
              alt=""
            />
          </LazyLoad>
        </li>
      ))}
    </>
  );
};
ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
  modalShown: PropTypes.func,
};
