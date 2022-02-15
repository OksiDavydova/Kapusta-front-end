import {getUserEmail} from "../../../redux/selectors";
import { useSelector} from "react-redux";
import { AvatarLetter, UserName, ProfileWrapper } from "./UserProfile.styled";

function UserProfile(isAuth) {
  const userEmail = useSelector(getUserEmail)
  const userName = (userEmail) => {
    if (userEmail) {
      const index = userEmail.indexOf("@");
    return userEmail.slice(0, index)
    }
    return "Guest";
  };

  const userFirstLetter = (userEmail) => {
    if (userEmail) {
       return userEmail.slice(0, 1);
    }
    return "G";
  };

  // 

  return (
    
    <ProfileWrapper>
      {/* {UserAvatar ?
                ( <img src="/" alt="Avatar" />) 
                :  
                (< className={s.userFirstLetter}>{UserFirstLetter}</p>)} */}
      <AvatarLetter>{userFirstLetter(userEmail)}</AvatarLetter>
      <UserName> {userName(userEmail)} </UserName>
    </ProfileWrapper>
  );
}

export default UserProfile;
