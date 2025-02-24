import { BurgerBtn } from '@/components/organisms/Header/styles';

interface IHeaderBurgerBtnProps {
  onClick?: () => void;
  forClose?: boolean;
}

export default function HeaderBurgerBtn(props: IHeaderBurgerBtnProps) {
  const { onClick, forClose = false } = props;

  return (
    <BurgerBtn type="text" onClick={onClick} $forClose={forClose}>
      <span></span>
      <span></span>
      <span></span>
    </BurgerBtn>
  );
}
