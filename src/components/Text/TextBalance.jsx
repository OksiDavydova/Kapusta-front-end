import {BalanceText} from './Text.styled'

function TextBalance({margin, fontWeight, letterSpacing, text}) {
    return (
        <BalanceText 
        margin={margin} 
        weight={fontWeight} 
        spacing={letterSpacing}>
          {text}
        </BalanceText>
    );
  }
  export {TextBalance};