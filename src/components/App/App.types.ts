export interface Image {
  id: string;
  alt_description: string;
  urls: { small: string; regular: string };
  user: { name: string };
  likes: number;
  created_at: string;
}
export interface FetchImagesResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

export interface ImagesModalProps {
  images: Image[];
  modal: (image: string) => void;
}
export interface ImageCardProps {
  image: string;
  description: string;
  modalOpen: () => void;
}

export interface ModalProps {
  stateIsOpen: boolean;
  closeModal: () => void;
  style: Record<string, any>;
  image: string;
}

export interface LoadMoreBtnProps {
  loadMore: () => void;
}
export interface SearchBarProps {
  onChangeQuery: (query: string) => void;
}
export interface FormValues {
  query: string;
}
