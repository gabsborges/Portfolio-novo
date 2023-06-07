import styled, { keyframes } from "styled-components";
import { SobreMimIcon } from "./sobreMim-icon";

const levitateAnimation = keyframes`
  0% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(5px);
  }
  `;

const Section = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > svg {
    animation: ${levitateAnimation} 2s ease-in-out infinite;
  }
`;

const TextDiv = styled.div`
  width: 65%;
`;

const Title = styled.h1`
  color: var(--primary-color);
  font-size: 32px;
  padding-bottom: 30px;
`;

const Text = styled.p`
  color: var(--secondary-color);
  padding-bottom: 30px;
`;

const Button = styled.button`
  border: 1px solid var(--primary-color);
  background-color: transparent;
  padding: 7px 18px 6px 18px;
  border-radius: 20px;
  font-size: 18px;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
  
  &:hover {
    border: 1px solid transparent;
    background-color: var(--primary-color);
  }
`;




export function SobreMim() {
  return (
    <Section id="sobreMim">
      <TextDiv>
        <Title>Sobre mim</Title>
        <Text>
          Olá! Meu nome é Gabriel e sou apaixonado por soluções simples para problemas difíceis, com mais de 1 ano de experiência na construção e manutenção de websites. Entusiasta de métodos ágeis, ambientes flexíveis e entrega contínua. Meu interesse em desenvolvimento web vem desde adolescente criando temas personalizados para jogos online e blogs.
        </Text>
        <Text>
          Sou uma pessoa bem organizada, solucionadora de problemas, funcionário independente com grande atenção aos detalhes. Interessado em todo o espectro de front e back-end e trabalhando em projetos ambiciosos com pessoas positivas.
        </Text>
        <Button>Converse comigo</Button>
      </TextDiv>
      <SobreMimIcon/>
    </Section>
  );
}
