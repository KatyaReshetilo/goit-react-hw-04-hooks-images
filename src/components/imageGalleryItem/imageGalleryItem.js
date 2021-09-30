import PropTypes from 'prop-types';
import s from './imageGalleryItem.module.css';
export default function ImageGalleryItem({ openModal, bigImageURL, url }) {
  const onClickItem = () => {
    openModal(bigImageURL);
  };
  return (
    <li className={s.imageGalleryItem}>
      <img
        src={url}
        alt=""
        className={s.imageGalleryItemImage}
        onClick={onClickItem}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  bigImageURL: PropTypes.string,
  url: PropTypes.string,
  openModal: PropTypes.func,
};
