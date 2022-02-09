import { BaseButton } from './ButtonsStyles.styled';

function Button({ text, type }) {
  return (
    <>
      <BaseButton type={`${type}`}>{text}</BaseButton>
    </>
  );
}
export { Button };
