import s from './UserProfile.module.scss'
function UserProfile() {
    return (
        <div className={s.userAvatar}>
            {/* {UserAvatar ?
                ( <img src="/" alt="Avatar" />) 
                :  
                (< className={s.userFirstLetter}>{UserFirstLetter}</p>)} */}
            <p className={s.userFirstLetter}>U</p>
            <p className={s.userName}>User Name</p>
        </div>
    )
};
export default UserProfile;