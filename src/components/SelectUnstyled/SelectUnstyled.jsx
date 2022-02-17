import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";
import { device } from "../../styles/utils";
import { getTypeTransaction } from "../../redux/typeTransaction/transaction-selector";
import { CATEGORIES_FOR_SELECT } from "../../const/constants";
import { colors } from "../../styles/utils/colors";
import toTop from "./toTop.svg";
import toBottom from "./toBottom.svg";

const StyledButton = styled("button")`
  position: relative;
  min-width: 278px;
  min-height: 42px;
  border: none;
  background: none;
  padding: 10px 22px;
  text-align: left;
  color: ${colors.textColor};
  transition: color ${colors.animation};

  &:hover {
    color: ${colors.selectColor};
  }

  @media ${device.tablet} {
    min-width: 167px;
    padding: 10px 22px;
  }

  @media ${device.desktop} {
    min-width: 184px;
  }

  &.${selectUnstyledClasses.expanded} {
    position: relative;

    &::after {
      content: url(${toTop});
      position: absolute;
      left: 90%;
      bottom: 30%;
      z-index: 3;

      @media ${device.tablet} {
        left: 82%;
        bottom: 30%;
      }
    }
  }

  &::after {
    content: url(${toBottom});
    position: absolute;
    left: 90%;
    bottom: 30%;
    z-index: 3;

    @media ${device.tablet} {
      left: 82%;
      bottom: 30%;
    }
  }
`;

const StyledListbox = styled("ul")`
  margin-left: -2px;
  background-color: ${colors.white};
  min-width: 282px;
  border: 2px solid ${colors.bgSummary};
  border-bottom: none;
  box-shadow: 0px 3px 4px rgba(170, 178, 197, 0.4);
  transition: color ${colors.animation};

  &:focus {
    color: ${colors.textColor};
    background-color: ${colors.white};
  }
  &:hover {
    color: ${colors.textColor};
    background-color: ${colors.bgSummary};
  }
  @media ${device.tablet} {
    min-width: 171px;
  }
  @media ${device.desktop} {
    min-width: 188px;
  }
`;

const StyledOption = styled(OptionUnstyled)`
  list-style: none;
  text-align: left;
  padding: 10px 20px;
  margin: 0;
  color: ${colors.selectColor};
  cursor: pointer;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${colors.bgSummary};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${colors.bgSummary};
    color: #fff;
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${colors.bgSummary};
    color: ${colors.textColor};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${colors.bgSummary};
  }
`;

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

function CustomSelect(props) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} components={components} />;
}

CustomSelect.propTypes = {
  components: PropTypes.shape({
    Listbox: PropTypes.elementType,
    Popper: PropTypes.elementType,
    Root: PropTypes.elementType,
  }),
};

function renderValue(option) {
  if (option == null) {
    return <span>Категория товара</span>;
  }
  return <span>{option.label}</span>;
}

function CategorySelectUnstyled({ children }) {
  // тип нужен для того, чтобы правильно отрисовывать категории для транзакций
  const typeTransaction = useSelector(getTypeTransaction);
  // const dispatch = useDispatch();

  return (
    <CustomSelect
      value={children.valueSelect}
      onChange={children.setValueSelect}
      renderValue={renderValue}
    >
      {typeTransaction
        ? CATEGORIES_FOR_SELECT[1].income.map((el, ind) => {
            return (
              <StyledOption key={ind} value={el}>
                {`${el}`}
              </StyledOption>
            );
          })
        : CATEGORIES_FOR_SELECT[0].expense.map((el, ind) => {
            return (
              <StyledOption key={ind} value={el}>
                {`${el}`}
              </StyledOption>
            );
          })}
    </CustomSelect>
  );
}

export { CategorySelectUnstyled };
