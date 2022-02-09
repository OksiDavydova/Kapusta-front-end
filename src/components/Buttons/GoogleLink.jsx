
import { useDispatch } from 'react-redux';
import { SvgIcon } from '../SvgIcon';
import { LinkGoogle } from './ButtonsStyles.styled';

import { googleAuthUsers } from '../../redux/operation';


function GoogleLink({ text }) {
  const dispatch = useDispatch();
  const googleAuth = () => {
    dispatch(googleAuthUsers());
  };
  return (
    <>

      <LinkGoogle onClick={googleAuth}>
        <SvgIcon w={18} h={18} hrefIcon={`#icon-google`} />

      <LinkGoogle>
        <SvgIcon w={18} h={18} idIcon={"#icon-google"} />
        {text}
      </LinkGoogle>
    </>
  );
}
export { GoogleLink };
