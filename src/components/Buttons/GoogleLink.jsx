import React from 'react';
import { SvgIcon } from '../SvgIcon';
import { LinkGoogle } from './ButtonsStyles.styled';

function GoogleLink({ text }) {
  return (
    <>
      <LinkGoogle href="https://api-kapusta.herokuapp.com/api/v1/auth/googlelogin">
        <SvgIcon w={18} h={18} idIcon={'#icon-google'} />
        {text}
      </LinkGoogle>
    </>
  );
}
export { GoogleLink };
