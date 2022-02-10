import React from "react";
import { CategoryToReport } from "../components/CategoryToReport";
import { useNavigate } from "react-router-dom";
import { CategoryReportList } from "../components/CategoryReportList";
import {MonthPicker} from '../components/MonthPicker';
import {ArrowButton} from '../components/ExpensesPage/ExpensesPage.styled';
import {TextBalance} from '../components/Text';
import {BalanceOval} from '../components/BalanceOval';
import {CashPicker} from '../components/CashPicker';
import {ChartMobile} from '../components/ChartMobile';
import {ReportWrapper} from '../components/Wrapper/Wrapper.styled';
import {SvgIcon} from '../components/SvgIcon';


export default function ReportPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main");
  };
  return (
    <ReportWrapper>
      <button type="button" onClick={handleClick}>
        to main
      </button>
      <ArrowButton>
        <SvgIcon w={24} h={24} hrefIcon={'#icon-arrow-left'}/>
      </ArrowButton>
      <MonthPicker/>
      <TextBalance text={'Баланс:'}/>
      <BalanceOval/>
      <CashPicker/>
      <CategoryToReport />
      <CategoryReportList />
      <ChartMobile/>
    </ReportWrapper>
  );
}
