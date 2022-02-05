import s from './HeaderLogo.module.scss'
import sprite from '../../../assets/svg/symbol-defs.svg'

function HeaderLogo() {
    return (
        <div className={s.logo_container}>

            <svg width="90" height="31">
                <use href={`${sprite}#icon-logo-with-bg`}></use>
            </svg>
        </div>
    )
};
export default HeaderLogo;