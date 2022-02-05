import {
  AvatarLetter,
  UserName,
  ProfileWrapper,
} from "../../styled/components";

function UserProfile() {
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
