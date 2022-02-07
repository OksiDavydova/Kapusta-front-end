import {SingleText} from './Text.styled'

function Text({widthText, alignText, text}) {
    return (
      <>
        <SingleText width={widthText} align={alignText}>{text}</SingleText>
      </>
    );
  }
  export {Text};