import { useDispatch } from "react-redux";
import { changeTypeTransaction } from "../../redux/typeTransaction/transaction-slice";
import { NavigationLink } from "./NavigationLink";
import { NavMobileWrapper } from "./NavMobile.styled";

function NavigationMainMobile() {
  const dispatch = useDispatch();

  const changeTypeOperation = type => {
    dispatch(changeTypeTransaction(type));
  };

  return (
    <NavMobileWrapper>
      <NavigationLink
        pathTo={"expense"}
        text={"расход"}
        onClick={() => changeTypeOperation(false)}
      />
      <NavigationLink
        pathTo={"income"}
        text={"доход"}
        onClick={() => changeTypeOperation(true)}
      />
    </NavMobileWrapper>
  );
}
export default NavigationMainMobile;
