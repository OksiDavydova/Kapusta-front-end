import styled from "@emotion/styled";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px;
`

export const Label = styled.label`
    margin-bottom: 12px;

    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.04em;
    text-align: left;
    text-transform: none;

    color: #000000;
`

export const Input = styled.input`
    outline: none;
    margin-bottom: 30px;
    padding: 17px 20px;
    border: none;
    max-width: 253px;

    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.04em;
    text-align: left;
    text-transform: none;

    color: #52555f;

    background: #f6f7fb;
    border-radius: 30px;

        &::placeholder {
            color: #a6abb9;
        }
`