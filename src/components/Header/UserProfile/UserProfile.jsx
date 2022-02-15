import React from "react";
import { getUserEmail } from "../../../redux/selectors";
import { useSelector } from "react-redux";

import { AvatarLetter, UserName, ProfileWrapper } from "./UserProfile.styled";
// import { userEmailAuth } from "../../../redux/selectors";

function UserProfile(isAuth) {
  const userEmail = useSelector(getUserEmail);

  const userName = (userEmail) => {
    if (userEmail) {
      const index = userEmail.indexOf("@");
      return userEmail.slice(0, index);
    }
    return "Guest";
  };

  const userFirstLetter = (userEmail) => {
    if (userEmail) {
      const firstSymbol = userEmail.slice(0, 1);
      return firstSymbol.toUpperCase();
    }
    return "G";
  };

  //

  return (
    <ProfileWrapper>
      <AvatarLetter>{userFirstLetter(userEmail)}</AvatarLetter>
      <UserName> {userName(userEmail)} </UserName>
    </ProfileWrapper>
  );
}

export default UserProfile;
