import Header from '@/components/Layout/DefaultLayout/Header';
import slider from '@/upload/img/slider_1.jpg';
import style from './style.module.css';
const Home = () => {
  return (
    <>
      <Header></Header>
      <div className={style.sliderTop}>
        <img src={slider} alt="" />
      </div>
    </>
  );
};

export default Home;
