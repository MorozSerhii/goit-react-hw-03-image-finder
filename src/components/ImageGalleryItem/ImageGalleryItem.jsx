import 'index.css';
import LazyLoad from 'react-lazy-load';
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
