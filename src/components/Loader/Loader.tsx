import { Rings } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = ({ position = 'top' }) => {
  return (
    <div className={`${s.wrapper} ${position === 'bottom' ? s.bottom : s.top}`}>
      <Rings
        visible={true}
        height="80"
        width="80"
        color="#007BFF"
        ariaLabel="loading-indicator"
      />
    </div>
  );
};

export default Loader;
