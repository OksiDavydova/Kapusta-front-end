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
import { device } from "../../styles/utils";

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
    /* outline: 1px solid red; */
    border: none;
    background: none;
    padding: 10px 22px;
    text-align: left;
    color: #C7CCDC;
@media ${device.tablet}{
  min-width: 170px;
}


//   &.${selectUnstyledClasses.focusVisible} {
//     outline: 4px solid rgba(100, 100, 100, 0.3);
//   }


  &.${selectUnstyledClasses.expanded} {
    // border-radius: 0.75em 0.75em 0 0;

    &::after {

      content: "▴";
      // content: '';
      // display: block;
      // height: 28px;
      // width: 28px;
      // background-size: 28px 28px;
      // background-image: url('./toTop.svg');

    }
  }

  &::after {
    content: "▾";
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
  @media ${device.tablet} {
    min-width: 170px;
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
    background-color: #c3cddb;
    // background-color: F5F6FB;

    color: #fff;
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: #d89f36;
    // background-color: F5F6FB;
    color: #52555f;
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: #eec233;
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

function CategorySelectUnstyled({ children }) {
  return (
    <CustomSelect
      value={children.valueSelect}
      onChange={children.setValueSelect}
      renderValue={renderValue}
    >
      <StyledOption value={"Транспорт"}>Транспорт</StyledOption>
      <StyledOption value={"Продукты"}>Продукты</StyledOption>
      <StyledOption value={"Здоровье"}>Здоровье</StyledOption>
      <StyledOption value={"Алкоголь"}>Алкоголь</StyledOption>
      <StyledOption value={"Развлечения"}>Развлечения</StyledOption>
      <StyledOption value={"Всё для дома"}>Всё для дома</StyledOption>
      <StyledOption value={"Техника"}>Техника</StyledOption>
      <StyledOption value={"Коммуналка, связь"}>Коммуналка, связь</StyledOption>
      <StyledOption value={"Спорт, хобби"}>Спорт, хобби</StyledOption>
      <StyledOption value={"Образование"}>Образование</StyledOption>
      <StyledOption value={"Прочее"}>Прочее</StyledOption>
    </CustomSelect>
  );
}

export { CategorySelectUnstyled };
