import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import s from './modal.module.css';

export default function Modal({ bigImg, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  const handleClickBackdrope = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={s.overlay} onClick={handleClickBackdrope}>
      <div className={s.modal}>
        <img src={bigImg} alt="" width="800" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
  bigImg: PropTypes.string,
};
