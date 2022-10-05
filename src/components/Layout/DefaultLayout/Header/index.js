import styles from '@/components/Layout/DefaultLayout/Header/style.module.css';
import { Link } from 'react-router-dom';
import logo from '@/upload/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.headerNav}>
            <a
              href={'https://template-bat-dong-san.mysapo.net/'}
              target="_blank"
              rel="noreferrer"
              className={styles.logoLink}
            >
              <img src={logo} className="header-logo" alt={logo} />
            </a>
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
              <li className={styles.navItem + ' ' + styles.hasSub}>
                <Link to={'/'} className={styles.navLink}>
                  Sản phẩm
                  <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '10px' }} />
                </Link>
                <div className={styles.hasPerspative + ' ' + styles.subMenu}>
                  <ul className={styles.subMenu}>
                    <li>
                      <Link to={'/'} className={styles.subNavLink}>
                        Căn hộ chung cư
                      </Link>
                    </li>
                    <li>
                      <Link to={'/'} className={styles.subNavLink}>
                        Nhà riêng
                      </Link>
                    </li>
                    <li>
                      <Link to={'/'} className={styles.subNavLink}>
                        Biệt thự liền kề
                      </Link>
                    </li>
                    <li>
                      <Link to={'/'} className={styles.subNavLink}>
                        Nhà mặt phố
                      </Link>
                    </li>
                    <li>
                      <Link to={'/'} className={styles.subNavLink}>
                        Đất nền dự án
                      </Link>
                    </li>
                    <li>
                      <Link to={'/'} className={styles.subNavLink}>
                        Trang trại, khu nghỉ dưỡng
                      </Link>
                    </li>
                    <li>
                      <Link to={'/'} className={styles.subNavLink}>
                        Đất nền, kho, nhà xưởng
                      </Link>
                    </li>
                  </ul>
                </div>
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
