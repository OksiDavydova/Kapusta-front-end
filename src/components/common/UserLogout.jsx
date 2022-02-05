import sprite from "../../assets/svg/symbol-defs.svg";
import {
  LogoutButton,
  LogoutButtonText,
  LogoutBtnText,
} from "../../styled/components";


function UserLogout() {
  return (
    <div>
      <LogoutButton>
        <svg width="16" height="16">
          <use href={`${sprite}#icon-logout`}></use>
        </svg>
      </LogoutButton>

      <LogoutButtonText>
        <LogoutBtnText>Выйти</LogoutBtnText>
      </LogoutButtonText>
    </div>
  );
}
export default UserLogout;
