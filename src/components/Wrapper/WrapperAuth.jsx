import {AuthWrapper} from './Wrapper.styled'

function WrapperAuth({children}) {
    return (
        <AuthWrapper>
       {children}
        </AuthWrapper>
    );
  }
  export {WrapperAuth};