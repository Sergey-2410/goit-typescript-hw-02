import Modal from 'react-modal';
import s from './ImageModal.module.css';
import { ModalProps } from '../App/App.types';
const customStyles: Record<string, any> = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    maxWidth: '90vw',
    maxHeight: '90vh',
    transform: 'translate(-50%, -50%)',
    overlay: {
      background: 'rgba(30, 30, 30, 0.9)',
    },
  },
};

Modal.setAppElement('#root');

const ImageModal: React.FC<ModalProps> = ({
  stateIsOpen,
  closeModal,
  image,
}) => {
  return (
    <Modal
      isOpen={stateIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      overlayClassName={s.overlay}
      shouldCloseOnOverlayClick={true}
    >
      {image && <img src={image} alt="Selected" />}
    </Modal>
  );
};
export default ImageModal;
