import { NoResultDiv } from './NoResult.styled';
import noResult from './no-result2.png';

function NoResult() {
  return (
    <NoResultDiv>
        <img  src={noResult} alt="noResult"/>
    </NoResultDiv>
  );
}

export {NoResult}
