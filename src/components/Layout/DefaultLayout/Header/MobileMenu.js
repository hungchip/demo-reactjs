import styles from '@/components/Layout/DefaultLayout/Header/style.module.scss';
import mobile from '@/components/Layout/DefaultLayout/Header/mobile.module.scss';
import { Link } from 'react-router-dom';
import iconPhone from '@/upload/icon/phone.png';
import { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const MobileMenu = ({ open, handleCloseMenu }) => {
  const [openSub, setOpenSub] = useState(false);
  const handleOpenSub = () => {
    setOpenSub(!openSub);
  };
  return (
    <>
      <div className={mobile.overlay} style={{ display: open ? 'block' : 'none' }} onClick={handleCloseMenu}></div>
      <div className={mobile.menuMB} style={{ marginLeft: open ? '0px' : '-375px' }}>
        <ul className="">
          <li className="">
            <Link to={'/'} className={mobile.menuItem}>
              Trang chủ
            </Link>
          </li>
          <li className="">
            <Link to={'/'} className={mobile.menuItem}>
              Giới thiệu
            </Link>
          </li>
          <li className="">
            <div className={mobile.hasSub}>
              <Link to={'/'} className={mobile.menuItem}>
                Sản phẩm
              </Link>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ transform: openSub ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%) rotate(0)' }}
                className={mobile.iconArrow}
                onClick={handleOpenSub}
              />
            </div>
            <ul className={mobile.subMenu} style={{ height: openSub ? '400px' : 0 }}>
              <li className="">
                <Link to={'/'} className={mobile.menuItem}>
                  Căn hộ chung cư
                </Link>
              </li>
              <li className="">
                <Link to={'/'} className={mobile.menuItem}>
                  Nhà riêng
                </Link>
              </li>
              <li className="">
                <Link to={'/'} className={mobile.menuItem}>
                  Biệt thự liền kề
                </Link>
              </li>
              <li className="">
                <Link to={'/'} className={mobile.menuItem}>
                  Nhà mặt phố
                </Link>
              </li>
              <li className="">
                <Link to={'/'} className={mobile.menuItem}>
                  Đất nền dự án
                </Link>
              </li>
              <li className="">
                <Link to={'/'} className={mobile.menuItem}>
                  Trang trại, khu nghỉ dưỡng
                </Link>
              </li>
              <li className="">
                <Link to={'/'} className={mobile.menuItem}>
                  Kho, nhà xưởng
                </Link>
              </li>
            </ul>
          </li>
          <li className="">
            <Link to={'/'} className={mobile.menuItem}>
              Tin tức
            </Link>
          </li>
          <li className="">
            <Link to={'/'} className={mobile.menuItem}>
              Liên hệ
            </Link>
          </li>
        </ul>
        <div className={mobile.contactBtn}>
          <a href={'tel:19006750'} className={styles.navLinkBtn}>
            <img src={iconPhone} alt="" />
            Liên hệ tư vấn
          </a>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
