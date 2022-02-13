import { useLocation } from "react-router-dom";
import { StyledLink } from "./NavigationLinkStyle.styled";

function NavigationLink({ pathTo, text, onClick }) {
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
        onClick={onClick}
      >
        {text}
        {/* <SquareButton></SquareButton> */}
      </StyledLink>
    </>
  );
}
export default NavigationLink;
