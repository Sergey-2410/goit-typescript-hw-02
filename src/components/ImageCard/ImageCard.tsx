import s from './ImageCard.module.css';
import { ImageCardProps } from '../App/App.types';

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  description,
  modalOpen,
}) => {
  return (
    <>
      <img
        className={s.galleryImage}
        src={image}
        alt={description}
        onClick={modalOpen}
      />
    </>
  );
};
export default ImageCard;
