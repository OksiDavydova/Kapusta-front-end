import { useLocation } from "react-router-dom";
import { StyledLink } from "./ButtonsStyles.styled";

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

// const StyledLink = styled(Link)`
//   color: Blue;
//   text-decoration: none;
//   margin: 1rem;
//   position: relative;
// `;

// function Nav() {
//   return (
//     <NavUnlisted>
//       <StyledLink to="/">Home</StyledLink>
//       <StyledLink to="/about">About</StyledLink>
//     </NavUnlisted>
//   );
// }
