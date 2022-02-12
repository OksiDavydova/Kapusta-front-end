import React, { useState } from "react";
import PropTypes from "prop-types";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";

const StyledButton = styled("button")`
//   font-family: IBM Plex Sans, sans-serif;
//   font-size: 0.875rem;
//   box-sizing: border-box;
//   min-height: calc(1.5em + 22px);
//   background: #fff;
//   border: 1px solid #ccc;
//   border-radius: 0.75em;
//   margin: 0.5em;
//   line-height: 1.5;
//   color: #000;

    min-width: 278px;
    min-height: 42px;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: 0.02em;
    outline: 1px solid red;
    border: none;
    background: none;
    padding: 10px 22px;
    text-align: left;
    color: #C7CCDC;



//   &.${selectUnstyledClasses.focusVisible} {
//     outline: 4px solid rgba(100, 100, 100, 0.3);
//   }

  &.${selectUnstyledClasses.expanded} {
    // border-radius: 0.75em 0.75em 0 0;

    &::after {
      content: '▴';
        // content: '';
        // display: block;
        // height: 28px;
        // width: 28px;
        // background-size: 28px 28px;
        // background-image: url('./toTop.svg');
    }
  }

  &::after {
    content: '▾';
    float: right;
    margin-right: 10px;
  }
`;

const StyledListbox = styled("ul")`
  //   font-family: IBM Plex Sans, sans-serif;
  //   font-size: 0.875rem;
  //   box-sizing: border-box;
  //   padding: 0;
  margin-left: -2px;
  background-color: #ffffff;
  min-width: 282px;
  border: 2px solid #f5f6fb;
  //   border-top: none;
  color: #c7ccdc;
  &:focus {
    color: #52555f;
    background-color: #f5f6fb;
  }
  &:hover {
    color: #52555f;
    background-color: #f5f6fb;
  }
`;

const StyledOption = styled(OptionUnstyled)`
  list-style: none;
  text-align: left;
  padding: 4px 10px;
  margin: 0;
  //   border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.disabled} {
    color: #888;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: rgba(25, 118, 210, 0.08);
    // background-color: F5F6FB;
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: #16d;
    // background-color: F5F6FB;

    color: #fff;
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: #05e;
    // background-color: F5F6FB;
    color: #52555f;
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: #39e;
    // background-color: F5F6FB;
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

function CategorySelectUnstyled() {
  const [value, setValue] = useState("");

  console.log(value);

  return (
    <CustomSelect value={value} onChange={setValue} renderValue={renderValue}>
      <StyledOption value={1}>Транспорт</StyledOption>
      <StyledOption value={2}>Продукты</StyledOption>
      <StyledOption value={3}>Здоровье</StyledOption>
      <StyledOption value={4}>Алкоголь</StyledOption>
      <StyledOption value={5}>Развлечения</StyledOption>
      <StyledOption value={6}>Всё для дома</StyledOption>
      <StyledOption value={7}>Техника</StyledOption>
      <StyledOption value={8}>Коммуналка, связь</StyledOption>
      <StyledOption value={9}>Спорт, хобби</StyledOption>
      <StyledOption value={10}>Образование</StyledOption>
      <StyledOption value={11}>Прочее</StyledOption>
    </CustomSelect>
  );
}

export { CategorySelectUnstyled };
