import {getUserEmail} from "../../../redux/selectors";
import { useSelector} from "react-redux";
import { AvatarLetter, UserName, ProfileWrapper } from "./UserProfile.styled";

function UserProfile(isAuth) {
  const userEmail = useSelector(getUserEmail)
  const userName = (userEmail) => {
    const index = userEmail.indexOf("@");
   return userEmail.slice(0, index)

  }
  return (
    
    <ProfileWrapper>
      {/* {UserAvatar ?
                ( <img src="/" alt="Avatar" />) 
                :  
                (< className={s.userFirstLetter}>{UserFirstLetter}</p>)} */}
      <AvatarLetter>U</AvatarLetter>
      <UserName> {userName(userEmail)} </UserName>
    </ProfileWrapper>
  );
}

export default UserProfile;
