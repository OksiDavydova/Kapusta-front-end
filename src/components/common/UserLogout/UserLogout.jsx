import sprite from '../../../assets/svg/symbol-defs.svg'
import s from './UserLogout.module.scss';

function UserLogout() {
    return (
        <div>
            <button className={s.logoutMobile}>
                <svg width="16" height="16">
                    <use href={`${sprite}#icon-logout`}></use>
                </svg>
                
            </button>

            <button className={s.logoutTextButton}>
                 <p className={s.txtButton}>Выйти</p>
            </button>
        </div>
    )
};
export default UserLogout;