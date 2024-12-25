import Modal from 'react-modal';
import s from './ImageModal.module.css';

const ImageModal = ({ stateIsOpen, closeModal, style, image }) => {
  return (
    <Modal
      isOpen={stateIsOpen}
      onRequestClose={closeModal}
      style={style}
      overlayClassName={s.overlay}
      shouldCloseOnOverlayClick={true}
    >
      {image && <img src={image} alt="Selected" />}
    </Modal>
  );
};
export default ImageModal;
