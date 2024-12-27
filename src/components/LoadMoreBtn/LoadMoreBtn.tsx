import { LoadMoreBtnProps } from '../App/App.types';
import s from './LoadMoreBtn.module.css';
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ loadMore }) => {
  return (
    <div className={s.boxBtn}>
      <button className={s.btnLoadMore} type="button" onClick={loadMore}>
        load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
