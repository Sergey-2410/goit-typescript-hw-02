import { useEffect, useState } from 'react';
import '../../index.css';
import toast from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallary/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { Image } from './App.types';
import { fetchImages } from '../../services/API';

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectImage, setSelectImage] = useState<string>('');

  const openModal = (image: string): void => {
    setSelectImage(image);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectImage('');
  };

  useEffect(() => {
    if (images.length > 0 && totalPages === page) {
      toast.dismiss();
      toast.success('That is all I could find');
    }
  }, [images, totalPages, page]);

  useEffect(() => {
    const getData = async () => {
      if (query.trim() === '') return;
      try {
        setLoading(true);
        setError(false);
        const { results, total_pages } = await fetchImages(query, page);
        setTotalPages(total_pages);
        setImages(prev => [...prev, ...results]);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleQuery = (query: string): void => {
    if (query.trim() === '') {
      toast.dismiss();
      toast.error('Error, the search field cannot be empty!');
      return;
    }
    setImages([]);
    setQuery(query);
    setPage(1);
  };

  const loadImages = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div>
      <SearchBar onChangeQuery={handleQuery} />
      {loading && images.length === 0 && <Loader position="top" />}
      {error && <ErrorMessage />}
      <ImageGallery modal={openModal} images={images} />
      {query && totalPages > page && (
        <>
          {loading && images.length > 0 && <Loader position="bottom" />}
          <LoadMoreBtn loadMore={loadImages} />
        </>
      )}
      {selectImage && (
        <ImageModal
          stateIsOpen={modalIsOpen}
          closeModal={closeModal}
          image={selectImage}
        />
      )}
    </div>
  );
};

export default App;
