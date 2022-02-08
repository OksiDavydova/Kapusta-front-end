import {BalanseWrapper} from './Wrapper.styled'

function WrapperBalance({children}) {
    return (
        <BalanseWrapper>
       {children}
        </BalanseWrapper>
    );
  }
  export {WrapperBalance};