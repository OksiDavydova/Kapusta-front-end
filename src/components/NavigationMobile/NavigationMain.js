import { NavigationLink } from "./NavigationLink";
import { NavMobileWrapper } from "./NavMobile.styled";

function NavigationMainMobile() {
  return (
    <NavMobileWrapper>
      <NavigationLink pathTo={"expense"} text={"расход"} />
      <NavigationLink pathTo={"income"} text={"доход"} />
    </NavMobileWrapper>
  );
}
export default NavigationMainMobile;
