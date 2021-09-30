import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../imageGalleryItem/imageGalleryItem';
import s from './imageGallery.module.css';
import pixabayFetch from '../../services/pixabayFetch';

export default function ImageGallery({
  onSelect,
  imageName,
  page,
  statusOff,
  status,
}) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([]);
  }, [imageName]);

  useEffect(() => {
    if (status === 'load') {
      pixabayFetch(imageName, page).then(image => {
        if (image.hits.length === 0 && page === 1) {
          statusOff('idle');
          return;
        }

        setImages(prevImages => [...prevImages, ...image.hits]);
      });
    }

    statusOff('idle');
  }, [imageName, page, status, statusOff]);

  return (
    <ul className={s.imageGallery}>
      {images.map(img => (
        <ImageGalleryItem
          key={img.webformatURL}
          url={img.webformatURL}
          openModal={() => onSelect(img.largeImageURL)}
          bigImgUrl={img.largeImageURL}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  imageName: PropTypes.string,
  page: PropTypes.number,
  onSelect: PropTypes.func,
  statusOff: PropTypes.func,
};
