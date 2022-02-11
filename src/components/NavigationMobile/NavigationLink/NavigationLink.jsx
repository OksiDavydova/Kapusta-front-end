import { useLocation } from "react-router-dom";
import { StyledLink } from "./NavigationLinkStyle.styled";

function NavigationLink({ pathTo, text }) {
  const location = useLocation();
  return (
    <>
      <StyledLink
        to={{
          pathname: `/${pathTo}`,
          state: {
            from: location,
            label: "back",
          },
        }}
      >
        {text}
        {/* <SquareButton></SquareButton> */}
      </StyledLink>
    </>
  );
}
export default NavigationLink;
