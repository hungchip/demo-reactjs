import styles from '@/components/Layout/DefaultLayout/Header/style.module.scss';
import { Link } from 'react-router-dom';
import logo from '@/upload/img/logo.png';
import iconPhone from '@/upload/icon/phone.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpenMenu = () => {
    setOpen(true);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };
  const handleResize = (e) => {
    if (open && e.target.innerWidth >= 992) {
      setOpen(false);
    }
  };
  window.addEventListener('resize', handleResize);
  return (
    <>
      <header className={styles.header}>
        <Container>
          <Row>
            <Col lg={3} xs={8} className={styles.menuLeftMB}>
              <div className={styles.IconMenu} onClick={handleOpenMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <a
                href={'https://template-bat-dong-san.mysapo.net/'}
                target="_blank"
                rel="noreferrer"
                className={styles.logoLink}
              >
                <img src={logo} className={'header-logo ' + styles.headerLogo} alt={logo} />
              </a>
            </Col>
            <Col lg={9} xs={4} className={styles.menuRightMB}>
              <nav className={styles.headerNav}>
                <div className={styles.menuRight}>
                  <ul className={styles.listNav}>
                    <li className={styles.navItem}>
                      <Link to={'/'} className={styles.navLink + ' ' + styles.active}>
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
                  <div className={styles.contactBtn}>
                    <a href={'tel:19006750'} className={styles.navLinkBtn}>
                      <img src={iconPhone} alt="" />
                      Liên hệ tư vấn
                    </a>
                  </div>
                </div>
              </nav>
            </Col>
          </Row>
        </Container>
      </header>
      <MobileMenu open={open} handleCloseMenu={handleCloseMenu} />
    </>
  );
};

export default Header;
