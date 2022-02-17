import { NoResultDiv } from './NoResult.styled';
import noResult from '../../../assets/img/noResult.png';

function NoResult() {
  return (
    <NoResultDiv>
        <img  src={noResult} alt="noResult"/>
    </NoResultDiv>
  );
}

export {NoResult}
