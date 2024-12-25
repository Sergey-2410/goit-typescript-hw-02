import s from './ImageCard.module.css';
const ImageCard = ({ image, description, modalOpen }) => {
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
