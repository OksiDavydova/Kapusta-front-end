import {SingleWrapper} from './Wrapper.styled'

function WrapperSingle({width, children}) {
    return (
        <SingleWrapper width={width}>
       {children}
        </SingleWrapper>
    );
  }
  export {WrapperSingle};