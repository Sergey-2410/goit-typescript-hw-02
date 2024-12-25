import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';
const ImageGallery = ({ images, modal }) => {
  return (
    <div>
      <ul className={s.galleryList}>
        {images.map(image => (
          <li className={s.galleryItem} key={image.id}>
            <a href="#" onClick={e => e.preventDefault()}>
              <ImageCard
                image={image.urls.small}
                description={image.alt_description}
                modalOpen={() => modal(image.urls.regular)}
              />
            </a>

            <div>
              <p>Author: {image.user.name}</p>
              <p>Published Date:{image.created_at}</p>
              <p>Likes:{image.likes}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ImageGallery;
{
  /* <p>
                Description:
                {image.description ? image.description : image.alt_description}
              </p> */
}
