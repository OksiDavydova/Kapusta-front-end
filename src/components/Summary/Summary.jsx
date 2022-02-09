import {
    SumItem,
    SummaryContainer,
    SumTitle,
    SumMonth,
    SumValue,
} from "./SummaryStyle.styled";


function Summary() {
  return (
    <SummaryContainer>
          <SumTitle>Сводка</SumTitle>
          <ul>
          <SumItem>

      <SumMonth>Ноябрь</SumMonth>          
      <SumValue>10 000.00</SumValue>
          </SumItem>
           <SumItem>

      <SumMonth>Ноябрь</SumMonth>          
      <SumValue>10 000.00</SumValue>
          </SumItem>
           <SumItem>

      <SumMonth>Ноябрь</SumMonth>          
      <SumValue>10 000.00</SumValue>
          </SumItem>
           <SumItem>

      <SumMonth>Ноябрь</SumMonth>          
      <SumValue>10 000.00</SumValue>
          </SumItem>
           <SumItem>

      <SumMonth>Ноябрь</SumMonth>          
      <SumValue>10 000.00</SumValue>
          </SumItem>
           <SumItem>

      <SumMonth>Ноябрь</SumMonth>          
      <SumValue>10 000.00</SumValue>
          </SumItem>
</ul>
      </SummaryContainer>
  );
}
export default Summary;
