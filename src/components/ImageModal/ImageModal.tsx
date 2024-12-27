import Modal from 'react-modal';
import s from './ImageModal.module.css';
import { ModalProps } from '../App/App.types';

const ImageModal: React.FC<ModalProps> = ({
  stateIsOpen,
  closeModal,
  style,
  image,
}) => {
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
