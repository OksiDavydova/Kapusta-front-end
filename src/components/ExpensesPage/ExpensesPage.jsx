import {Button} from '../Buttons'
import {WrapperMain, WrapperSingle} from '../Wrapper'
import {ProductWrapper, ArrowButton, Form, Input, DivSelect, Select, ProductDiv, ProductSpan, ProductInput, ProductButton} from './ExpensesPage.styled'
import {SvgIcon} from '../SvgIcon'

function ExpensesPage(){
    return(
        <WrapperMain>
            <ProductWrapper>
                <ArrowButton style={{fill: 'red'}} >
                <SvgIcon w={24} h={24} hrefIcon={'#icon-arrow-left'}/>
                </ArrowButton>
                <Form>
                    <Input
                    type="text"
                    name="product"
                    id="product"
                    placeholder="Описание товара"/>
                </Form>
                <DivSelect>
                    <Select/>
                </DivSelect>
                <ProductDiv>
         <ProductSpan>
            <ProductInput
                type="text"
                name="balance"
                id="balance"
                placeholder="00.00" />
            UAH
            </ProductSpan>
        <ProductButton>
        <SvgIcon w={20} h={20} hrefIcon={'#icon-calculator'}/>
        </ProductButton>
     </ProductDiv>
            </ProductWrapper>
            <WrapperSingle width={'265px'}>
                <Button text={'ввод'}/>
                <Button text={'очистить'}/>
            </WrapperSingle>
         </WrapperMain>

        )
}

export {ExpensesPage}