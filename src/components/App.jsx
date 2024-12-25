import { useEffect, useState } from 'react';
import '../index.css';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallary/ImageGallery';
import ImageModal from './ImageModal/ImageModal';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import SearchBar from './SearchBar/SearchBar';
import { fetchImages } from '../services/API';
import Modal from 'react-modal';
import toast from 'react-hot-toast';

const customStyles = {
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
const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectImage, setSelectImage] = useState('');

  const openModal = image => {
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

  const handleQuery = query => {
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
          style={customStyles}
          image={selectImage}
        />
      )}
    </div>
  );
};

export default App;
