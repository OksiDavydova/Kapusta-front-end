import React from "react";
// import { useSelector } from "react-redux";
import { AvatarLetter, UserName, ProfileWrapper } from "./UserProfile.styled";
// import { userEmailAuth } from "../../../redux/selectors";

function UserProfile() {
  // const userEmail = useSelector(userEmailAuth);
  // console.log(userEmail);
  return (
    <ProfileWrapper>
      {/* {UserAvatar ?
                ( <img src="/" alt="Avatar" />) 
                :  
                (< className={s.userFirstLetter}>{UserFirstLetter}</p>)} */}
      <AvatarLetter>U</AvatarLetter>
      <UserName>User Name</UserName>
    </ProfileWrapper>
  );
}

export default UserProfile;
