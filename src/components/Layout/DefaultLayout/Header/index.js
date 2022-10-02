import styles from '@/components/Layout/DefaultLayout/Header/style.module.css';
import { Link } from 'react-router-dom';
import logo from '@/upload/img/logo.png';
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.headerNav}>
            <Link to={'/'} className={styles.logoLink}>
              <img src={logo} className="header-logo" />
            </Link>
            <ul className={styles.listNav}>
              <li className={styles.navItem}>
                <Link to={'/'} className={styles.navLink}>
                  Trang chủ
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to={'/'} className={styles.navLink}>
                  Giới thiệu
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to={'/'} className={styles.navLink}>
                  Sản phẩm
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to={'/'} className={styles.navLink}>
                  Tin tức
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to={'/'} className={styles.navLink}>
                  Liên hệ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
