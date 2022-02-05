import s from './Header.module.scss'
import HeaderLogo from '../common/HeaderLogo/HeaderLogo'; 
import UserLogout from '../common/UserLogout';
import UserProfile from '../common/UserProfile';
function Header() {
    return (
        <header className={s.header}>
            <div className={s.headerContainer}>

                <div className={s.logo}>
                    <HeaderLogo />
                </div>
                <div className={s.userContainer}>
                    <UserProfile />
                    <UserLogout />
                </div>
            </div>
        </header>
    )
};

export default Header;