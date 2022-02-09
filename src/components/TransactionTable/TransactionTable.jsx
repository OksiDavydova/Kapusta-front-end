import {
  Table,
  Thead,
  Tr,
  ThDescription,
  ThCategory,
  ThSum,
  TdBtnDel,
  ThDay,
  TrItem,
  TdDay,
  TdDescription,
  TdCategory,
  TdSum,
} from "./TransactionTableStyle.styled";
import { SvgIcon } from "../SvgIcon";

function TransactionTable() {
  return (
    <div>
      <Table>
        <Thead>
          <Tr>
            <ThDay>Дата</ThDay>
            <ThDescription>Описание</ThDescription>
            <ThCategory>Категория</ThCategory>
            <ThSum>Сумма</ThSum>
          </Tr>
        </Thead>

        <tbody>
          {/* TODO map transaction */}
          <TrItem>
            <TdDay>11.10.2021</TdDay>
            <TdDescription>Banana</TdDescription>
            <TdCategory>Products</TdCategory>
            <TdSum>- 30.00 грн.</TdSum>
            <TdBtnDel>
              <SvgIcon w={16} h={16} idIcon={`#icon-delete`} />
            </TdBtnDel>
          </TrItem>
          {/* delete ======> */}
          <TrItem>
            <TdDay>25.10.2022</TdDay>
            <TdDescription>Метро</TdDescription>
            <TdCategory>Products</TdCategory>
            <TdSum>250.00 грн.</TdSum>
            <TdBtnDel>
              {" "}
              <SvgIcon w={16} h={16} idIcon={`#icon-delete`} />
            </TdBtnDel>
          </TrItem>
          <TrItem>
            <TdDay>25.10.2022</TdDay>
            <TdDescription>Метро</TdDescription>
            <TdCategory>Products</TdCategory>
            <TdSum>250.00 грн.</TdSum>
            <TdBtnDel>
              <SvgIcon w={16} h={16} idIcon={`#icon-delete`} />
            </TdBtnDel>
          </TrItem>
          <TrItem>
            <TdDay>25.10.2022</TdDay>
            <TdDescription>Метро</TdDescription>
            <TdCategory>Products</TdCategory>
            <TdSum>250.00 грн.</TdSum>
            <TdBtnDel>
              {" "}
              <SvgIcon w={16} h={16} idIcon={`#icon-delete`} />
            </TdBtnDel>
          </TrItem>
          {/* <=========== delete*/}
        </tbody>
      </Table>
    </div>
  );
}
export default TransactionTable;
