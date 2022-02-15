import React from "react";

import Media from "react-media";
import { ArrowButton } from "../components/Buttons";
import { MonthPicker } from "../components/MonthPicker";

import { BalanceOval } from "../components/Balance/BalanceOval";
import { Chart, ChartMobile } from "../components/Chart";

import { CategoryReportList } from "../components/CategoryReportList";
import { ReportBalance } from "../components/ReportBalance";
import {
  ReportPageWrapper,
  ReportPageTopWrapper,
  ChartTabletWrapper,
} from "../components/Wrapper/Wrapper.styled";

export default function ReportPage() {
  return (
    <ReportPageWrapper>
      <Media query="(max-width: 767px)" render={() => <ArrowButton />} />
      <Media query="(max-width: 767px)" render={() => <MonthPicker />} />
      <Media query="(max-width: 767px)" render={() => <BalanceOval />} />

      <Media
        query="(min-width: 768px)"
        render={() => (
          <ReportPageTopWrapper>
            <ArrowButton />
            <BalanceOval />
            <MonthPicker />
          </ReportPageTopWrapper>
        )}
      />
      <ReportBalance />

      <CategoryReportList />
      <Media query="(max-width: 767px)" render={() => <ChartMobile />} />

      <Media
        query="(min-width: 768px)"
        render={() => (
          <ChartTabletWrapper>
            <Chart />
          </ChartTabletWrapper>
        )}
      />
    </ReportPageWrapper>
  );
}
