import { styled } from "styled-components";
import { ArrowDiagonalIcon } from "./arrowDiagonal";

const Section = styled.section`
  padding: 100px 0 50px 0;

  @media screen and (max-width: 870px) {
    padding: 40px 0 30px 0;
  }

  @media screen and (max-width: 590px) {
      padding: 40px 0 30px 20px;
    }
`;

const H1 = styled.h1`
  font-size: 32px;
  color: var(--primary-color);
  padding-bottom: 30px;
`;

const ProjectCards = styled.div`
  padding: 0 20px;
  height: 700px; 
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  border-top: solid 1.5px #8B8B8B;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
`;

const CardsInfo = styled.div`
  display:flex;
  gap: 20px;

  @media screen and (max-width: 1210px) {
    flex-direction: column;
  }
`;

const CardsInfoText = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1210px) {
    height: 120px;
  }

  @media screen and (max-width: 500px) {
    height: 170px;
  }
`;

const CardsInfoTitle = styled.h3`
  font-size: 18px;
`;

const CardsInfoParagraphe = styled.p`
  font-size: 14px;
`;

const CardsInfoTechnology = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media screen and (max-width: 485px) {
    padding: 20px 0;
  }
`;

const CardsTechnology = styled.div`
  font-size: 14px;
  padding: 3px 14px;
  border: solid 1px white;
  border-radius: 20px;
  transition: all ease-in-out .2s;

  &:hover {
    background-color: white;
    color: #13131F;
  }
`;

const Imagem = styled.img`
  border-radius: 10px;
  transition: all ease-in-out .2s;

  @media screen and (max-width: 460px) {
    width: 250px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const VisitSite = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    & > p {
      color: var(--primary-color);
    }

    & > svg {
      path {
        fill: var(--primary-color);
      }
    }
  }
`;

export function Projetos() {
  const projetos = [
    {
        imagem: "./imobCoinSistem.png",
        titulo: "Imobcoin",
        descricao: "Fiz parte da criação do sistema da Imobcoin.",
        tecnologias: ["Html", "Css", "Php", "angularJs"],
        link: "https://client.imobcoin.com/#!/login"
      },
    {
        imagem: "./imobCoin.png",
        titulo: "Imobcoin",
        descricao: "Criação do site institucional da Imobcoin.",
        tecnologias: ["Html", "Css", "Javascript", "React"],
        link: "https://www.imobcoin.com"
    },
    {
        imagem: "./aldeiaDoFuturo.png",
        titulo: "Aldeia do Futuro",
        descricao: "Cuidava das atualizações do site da Aldeia do Futuro.",
        tecnologias: ["Html", "Css", "Php", "CodeIgniter"],
        link: "https://www.aldeiadofuturo.org.br"
    },
    {
      imagem: "./aliveVilaMariana.png",
      titulo: "Alive - Vila Mariana",
      descricao: "Criação do site de um dos empreendimentos do DWIncorp.",
      tecnologias: ["Html", "Css", "Javascript", "React"],
      link: "https://alivevilamariana.com.br"
    },
    {
      imagem: "./diyBelaVista.png",
      titulo: "Diy - Bela Vista",
      descricao: "Criação do site de um dos empreendimentos do DWIncorp.",
      tecnologias: ["Html", "Css", "Javascript", "React"],
      link: "https://diy.unityengenharia.com"
    },
    {
      imagem: "./hubSc.png",
      titulo: "HubSc",
      descricao: "Criação do site institucional da HubSc.",
      tecnologias: ["Html", "Css", "Javascript", "React"],
      link: "https://hubsc.com.br"
    },
    {
      imagem: "./alloyMit.png",
      titulo: "AlloyMit",
      descricao: "Criação do site institucional da AlloyMit.",
      tecnologias: ["Html", "Css", "Javascript", "React"],
      link: "https://alloymit.com"
    },
    {
      imagem: "./dwIncorp.png",
      titulo: "DWIncorp",
      descricao: "Criação do site institucional da DWIncorp.",
      tecnologias: ["Html", "Css", "Javascript", "React"],
      link: "https://dwincorp.com.br"
    },
    {
      imagem: "./rinoBox.png",
      titulo: "Rinobox",
      descricao: "Criação do site institucional da Rinobox.",
      tecnologias: ["Html", "Css", "Javascript", "React"],
      link: "https://rinobox.com.br"
    },
  ];

  return (
    <Section id="projetos">
      <H1>Projetos</H1>
      <ProjectCards>
        {projetos.map((projeto, index) => (
          <Cards key={index}>
            <CardsInfo>
              <VisitSite href={projeto.link} target="_blank">
                <Imagem src={projeto.imagem} width={300} alt={projeto.titulo} />
              </VisitSite>
              <CardsInfoText>
                <CardsInfoTitle>
                  {projeto.titulo}
                </CardsInfoTitle>
                <CardsInfoParagraphe>
                  {projeto.descricao}
                </CardsInfoParagraphe>
                <CardsInfoTechnology>
                  {projeto.tecnologias.map((tecnologia, index) => (
                    <CardsTechnology key={index}>{tecnologia}</CardsTechnology>
                  ))}
                </CardsInfoTechnology>
              </CardsInfoText>
            </CardsInfo>
            <VisitSite href={projeto.link} target="_blank">
              <p>Visualizar site</p>
              <ArrowDiagonalIcon />
            </VisitSite>
          </Cards>
        ))}
      </ProjectCards>
    </Section>
  );
}
