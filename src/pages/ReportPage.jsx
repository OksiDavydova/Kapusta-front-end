import React from "react";
import { useSelector } from "react-redux";
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

import { LoaderReport } from "../components/Loader";
import { diagramLoading } from "../redux/setDataDiagram/dataDiagram-selector";

export default function ReportPage() {
  const isLoading = useSelector(diagramLoading);

  return (
    <>
      {isLoading && <LoaderReport />}
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
    </>
  );
}
