import styled from "styled-components";

const MainArea = styled.div`
  display: flex;
  padding: 100px 0;
  justify-content: space-between;
  align-items: center;
`;

const MainTextArea = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
`;

const MainFirstText = styled.p`
  font-size: 42px;
`;

const MainSecondText = styled.h1`
  font-size: 52px;
  color: var(--primary-color);
`;

const MainThirdText = styled.h2`
  font-size: 28px;
  color: var(--secondary-color);
  margin-bottom: 24px;
`;

const ButtonArea = styled.div`
  display: flex;
  gap: 28px;
`;

const MainButton = styled.button<{ primary?: boolean }>`
  border: 1px solid ${(props) =>
    props.primary ? "transparent" : "var(--primary-color)"};
  background-color: ${(props) =>
    props.primary ? "var(--primary-color)" : "transparent"};
  padding: 7px 18px 6px 18px;
  border-radius: 20px;
  font-size: 18px;
  transition: all ease-in-out 0.3s;
  cursor: pointer;

  &:hover {
    border: 1px solid
      ${(props) => (props.primary ? "var(--primary-color)" : "transparent")};
    background-color: ${(props) =>
    props.primary ? "transparent" : "var(--primary-color)"};
  }
`;

export function MainSection() {
  return (
    <MainArea>
      <MainTextArea>
        <MainFirstText>Olá, eu sou o</MainFirstText>
        <MainSecondText>Gabriel Borges</MainSecondText>
        <MainThirdText>Desenvolvedor Front-End</MainThirdText>
        <ButtonArea>
          <MainButton primary>Download CV</MainButton>
          <MainButton>Entrar em contato</MainButton>
        </ButtonArea>
      </MainTextArea>
      <img src="./mainImage.png" width={550} alt="Imagem principal" />
    </MainArea>
  );
}
