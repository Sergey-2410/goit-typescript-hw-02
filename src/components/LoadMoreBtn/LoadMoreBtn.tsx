import s from './LoadMoreBtn.module.css';
const LoadMoreBtn = ({ loadMore }) => {
  return (
    <div className={s.boxBtn}>
      <button className={s.btnLoadMore} type="button" onClick={loadMore}>
        load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
