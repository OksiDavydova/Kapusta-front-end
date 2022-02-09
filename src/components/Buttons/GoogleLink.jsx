import { useDispatch } from 'react-redux';
import { SvgIcon } from '../SvgIcon';
import { LinkGoogle } from './ButtonsStyles.styled';
import sprite from '../../assets/svg/symbol-defs.svg';
import { googleAuthUsers } from '../../redux/operation';

function GoogleLink({ text }) {
  const dispatch = useDispatch();
  const googleAuth = () => {
    dispatch(googleAuthUsers());
  };
  return (
    <>
      <LinkGoogle onClick={googleAuth}>
        <SvgIcon w={18} h={18} hrefIcon={`${sprite}#icon-google`} />
        {text}
      </LinkGoogle>
    </>
  );
}
export { GoogleLink };
