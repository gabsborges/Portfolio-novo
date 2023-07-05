import { styled } from "styled-components";
import { HtmlIcon } from "./html-icon";
import { CssIcon } from "./css-icon";
import { JavaScriptIcon } from "./javascript-icon";
import { WordPressIcon } from "./wordPress-icon";
import { BootstrapIcon } from "./bootstrap-icon";
import { TypeScriptIcon } from "./typescript-icon";
import { ReactIcon } from "./react-icon";
import { StyledComponentsIcon } from "./styledComponent-icon";
import { GraphQlIcon } from "./graphQl-icon";
import { MySqlIcon } from "./mySql-icon";
import { GitIcon } from "./git-icon";
import { GitHubIcon } from "./gitHub-icon";
import { NodeJsIcon } from "./nodejs-icon";
import { JavaIcon } from "./java-icon";
import { useState } from "react";

interface CardProps {
  show?: boolean;
}

interface Messages {
  [key: string]: string;
}

const Section = styled.section`
  padding: 100px 0;
`;

const H1 = styled.h1`
  font-size: 32px;
  color: var(--primary-color);
  padding-bottom: 30px;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;


const Label = styled.p`
  font-size: 18px;
  color: var(--primary-color);
`;

const Card = styled.div<CardProps>`
  width: 150px;
  height: 120px;
  display: flex;
  padding: 12px 15px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--primary-color);
  border-width: 1px 1px 6px 1px;
  border-radius: 20px 0 0 0;
  cursor: pointer;

  &:nth-child(8) ${Label} {
    font-size: 14px
  }

  &:nth-child(8) {
    padding: 15px 4px;
  }

  &:hover {
    background-color: var(--secondary-color);
  }

  & > svg {
    width: 50px;
  }
`;

const MessageCard = styled.div<CardProps>`
  padding-top: 50px;
  line-height: 2;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  opacity: ${(props) => (props.show ? 1 : 0)};
  pointer-events: ${(props) => (props.show ? 'auto' : 'none')};
  transition: opacity 0.2s;
`;

const MessageTitle = styled.div`
  padding-bottom: 10px;
  color: var(--primary-color);
  font-size: 32px;
`;

const Message = styled.div`
  line-height: 2;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

const menuItems = [
    { label: "HTML5", icon: <HtmlIcon /> },
    { label: "CSS3", icon: <CssIcon /> },
    { label: "Javascript", icon: <JavaScriptIcon /> },
    { label: "Wordpress", icon: <WordPressIcon /> },
    { label: "Bootstrap", icon: <BootstrapIcon /> },
    { label: "Typescript", icon: <TypeScriptIcon /> },
    { label: "ReactJs", icon: <ReactIcon /> },
    { label: "StyledComponent", icon: <StyledComponentsIcon /> },
    { label: "GraphQL", icon: <GraphQlIcon /> },
    { label: "MySQL", icon: <MySqlIcon /> },
    { label: "Git", icon: <GitIcon /> },
    { label: "GitHub", icon: <GitHubIcon /> },
    { label: "NodeJs", icon: <NodeJsIcon /> },
    { label: "Java", icon: <JavaIcon /> },
];

const messages: Messages = {
  HTML5: 'O HTML5 é a versão mais recente da linguagem de marcação HTML, amplamente utilizada no desenvolvimento de páginas da web. Com recursos avançados, como suporte nativo a áudio e vídeo, elementos semânticos e capacidade de criar layouts responsivos, o HTML5 permite aos desenvolvedores criar experiências web modernas, interativas e compatíveis com dispositivos móveis. No meu portfólio, destaco meu sólido conhecimento em HTML5 como parte essencial das minhas habilidades em desenvolvimento web. Com o HTML5, sou capaz de criar estruturas semânticas, implementar recursos avançados e garantir que os sites que desenvolvo sejam acessíveis e otimizados para uma experiência web de qualidade.',
  CSS3: 'O CSS3 é a versão mais recente da linguagem de estilos em cascata, utilizada para estilizar páginas da web. Com recursos avançados, como seletores avançados, animações, gradientes e flexibilidade no design responsivo, o CSS3 permite aos desenvolvedores criar interfaces atraentes e modernas. No meu portfólio, destaco meu amplo conhecimento em CSS3, pois considero essa linguagem essencial para dar vida e personalidade aos meus projetos. Com o CSS3, posso implementar layouts flexíveis, estilizar elementos de forma elegante e garantir uma experiência visualmente agradável para os usuários.',
  Javascript: 'O JavaScript é uma das linguagens de programação mais populares e amplamente utilizadas no desenvolvimento web. Com ele, é possível tornar páginas da web interativas, dinâmicas e responsivas. Tenho sólido conhecimento em JavaScript e sou capaz de utilizar suas poderosas funcionalidades para criar experiências de usuário envolventes. No meu portfólio, destaco meu domínio em JavaScript como parte essencial das minhas habilidades como desenvolvedor web. Com JavaScript, posso manipular elementos da página, realizar requisições assíncronas, criar animações e implementar lógica complexa. Estou sempre atualizado com as melhores práticas e recursos mais recentes do JavaScript, garantindo que meus projetos sejam modernos, eficientes e entreguem uma experiência de alta qualidade aos usuários.',
  Wordpress: 'O WordPress é uma das plataformas de gerenciamento de conteúdo mais populares e amplamente utilizadas para criação de sites e blogs. Com ele, é possível construir e personalizar sites de forma rápida e eficiente, mesmo sem conhecimentos avançados de programação. Tenho experiência sólida em desenvolvimento com WordPress e sou capaz de criar sites profissionais e atrativos. No meu portfólio, destaco meu expertise em WordPress como parte essencial das minhas habilidades em desenvolvimento web. Com o WordPress, posso personalizar temas, criar plugins e gerenciar o conteúdo de forma fácil e intuitiva. Estou familiarizado com as melhores práticas de otimização e segurança no WordPress, garantindo que meus projetos sejam eficientes, seguros e ofereçam uma ótima experiência aos usuários.',
  Bootstrap: 'O Bootstrap é um dos frameworks front-end mais populares e amplamente utilizados para desenvolvimento de interfaces web responsivas. Com ele, é possível criar sites e aplicações com um design moderno e responsivo de forma rápida e eficiente. Tenho conhecimento sólido em Bootstrap e sou capaz de utilizar suas poderosas funcionalidades para criar layouts flexíveis e atrativos. No meu portfólio, destaco minha expertise em Bootstrap como parte essencial das minhas habilidades em desenvolvimento web. Com o Bootstrap, posso aproveitar a biblioteca de componentes prontos, grids flexíveis e recursos de responsividade para criar interfaces consistentes e adaptáveis a diferentes dispositivos. Estou sempre atualizado com as últimas versões do Bootstrap e suas melhores práticas, garantindo que meus projetos tenham um design moderno, profissional e compatível com dispositivos móveis.',
  Typescript: 'O TypeScript é uma linguagem de programação de alto nível que se baseia no JavaScript, adicionando recursos de tipagem estática e outros recursos avançados. Com ele, é possível escrever código mais seguro, escalável e de fácil manutenção. Tenho conhecimento sólido em TypeScript e sou capaz de utilizá-lo para desenvolver aplicações robustas e de alta qualidade. No meu portfólio, destaco minha especialização em TypeScript como parte essencial das minhas habilidades em desenvolvimento web. Com o TypeScript, posso aproveitar os benefícios da tipagem estática, interfaces e recursos avançados de orientação a objetos para criar código mais confiável e fácil de dar manutenção. Estou sempre atualizado com as últimas práticas e recursos do TypeScript, garantindo que meus projetos sejam escaláveis, seguros e mantenham um alto nível de qualidade.',
  ReactJs: 'O React.js é uma das bibliotecas JavaScript mais populares e amplamente utilizadas para construção de interfaces de usuário. Com ele, é possível criar componentes reutilizáveis e construir interfaces interativas de forma eficiente. Tenho expertise em React.js e sou capaz de desenvolver aplicações modernas e escaláveis. No meu portfólio, destaco minha especialização em React.js como parte essencial das minhas habilidades em desenvolvimento web. Com o React.js, posso criar interfaces ricas e dinâmicas, utilizando a abordagem baseada em componentes. Estou familiarizado com conceitos avançados, como estado, ciclo de vida dos componentes e gerenciamento de estado com Redux. Estou sempre atualizado com as últimas práticas e recursos do React.js, garantindo que meus projetos sejam eficientes, robustos e ofereçam uma ótima experiência aos usuários.',
  StyledComponent: 'O Styled Components é uma biblioteca popular de estilização em CSS para React e React Native. Com ela, é possível escrever estilos diretamente nos componentes, de forma declarativa e modular. Tenho experiência em utilizar o Styled Components para criar estilos elegantes e reutilizáveis em meus projetos. No meu portfólio, destaco minha especialização em Styled Components como parte essencial das minhas habilidades em desenvolvimento web. Com o Styled Components, posso criar estilos de forma mais organizada, encapsulando-os diretamente nos componentes. Isso oferece benefícios como maior legibilidade, reutilização de estilos e melhor manutenção. Estou sempre atualizado com as melhores práticas e recursos do Styled Components, garantindo que meus projetos tenham uma aparência consistente, elegante e fácil de manter.',
  GraphQL: 'O GraphQL é uma linguagem de consulta e manipulação de dados, projetada para ser uma alternativa mais eficiente e flexível em relação às APIs tradicionais. Com ele, é possível buscar e atualizar dados de forma precisa e eficiente, reduzindo a quantidade de requisições necessárias. Tenho conhecimento em GraphQL e sou capaz de implementar soluções de consulta e manipulação de dados eficientes. No meu portfólio, destaco minha expertise em GraphQL como parte essencial das minhas habilidades em desenvolvimento web. Com o GraphQL, posso otimizar o fluxo de dados entre o front-end e o back-end, personalizando as requisições e obtendo somente os dados necessários. Estou familiarizado com a criação de esquemas GraphQL, resolvers e consultas eficientes. Estou sempre atualizado com as melhores práticas e recursos do GraphQL, garantindo que meus projetos tenham um desempenho excepcional e forneçam uma experiência de usuário otimizada.',
  MySQL: 'O MySQL é um dos sistemas de gerenciamento de banco de dados mais populares e amplamente utilizados. Com ele, é possível armazenar, organizar e recuperar dados de forma eficiente e segura. Tenho experiência em trabalhar com o MySQL e sou capaz de criar e otimizar consultas, gerenciar bancos de dados e garantir a integridade dos dados. No meu portfólio, destaco minha especialização em MySQL como parte essencial das minhas habilidades em desenvolvimento web. Com o MySQL, posso projetar e implementar bancos de dados robustos, utilizando recursos avançados como índices, chaves estrangeiras e transações. Estou familiarizado com a modelagem de dados, normalização e otimização de consultas para garantir um desempenho eficiente. Estou sempre atualizado com as melhores práticas e recursos do MySQL, garantindo que meus projetos tenham uma base de dados sólida e confiável.',
  Git: 'O Git é um sistema de controle de versão distribuído amplamente utilizado na indústria de desenvolvimento de software. Com ele, é possível rastrear alterações em arquivos, colaborar com outros desenvolvedores e gerenciar o histórico de um projeto de forma eficiente. Tenho experiência em utilizar o Git e sou capaz de gerenciar efetivamente o controle de versão em meus projetos. No meu portfólio, destaco minha especialização em Git como parte essencial das minhas habilidades em desenvolvimento web. Com o Git, posso criar branches, mesclar alterações, lidar com conflitos e trabalhar de forma colaborativa em equipe. Estou familiarizado com comandos como commit, push, pull e branch, e sei como utilizar ferramentas como GitHub e GitLab. Estou sempre atento às melhores práticas e fluxos de trabalho do Git, garantindo que meus projetos sejam organizados, rastreáveis e fáceis de colaborar.',
  GitHub: 'O GitHub é uma plataforma popular de hospedagem e colaboração de projetos de desenvolvimento de software. Com ele, é possível compartilhar, colaborar e controlar o versionamento de código-fonte de forma eficiente. Tenho experiência em utilizar o GitHub e sou capaz de gerenciar repositórios, criar pull requests e colaborar em projetos de código aberto. No meu portfólio, destaco minha especialização em GitHub como parte essencial das minhas habilidades em desenvolvimento web. Com o GitHub, posso compartilhar meus projetos, contribuir com projetos de código aberto e demonstrar meu trabalho para a comunidade. Estou familiarizado com recursos como issues, pull requests, branches e merge, e sei como utilizar ferramentas de integração contínua e deploy. Estou sempre atualizado com as melhores práticas e fluxos de trabalho do GitHub, garantindo que meus projetos sejam colaborativos, bem documentados e fáceis de compartilhar.',
  NodeJs: 'O Node.js é uma plataforma de desenvolvimento de aplicações web que utiliza a linguagem JavaScript no lado do servidor. Com o Node.js, é possível construir aplicações escaláveis, rápidas e eficientes. Tenho experiência em trabalhar com o Node.js e sou capaz de desenvolver APIs, criar servidores web e construir aplicações de backend robustas. No meu portfólio, destaco minha especialização em Node.js como parte essencial das minhas habilidades em desenvolvimento web. Com o Node.js, posso utilizar bibliotecas e frameworks populares, como o Express.js, para criar APIs RESTful e implementar lógica de negócio complexa. Estou familiarizado com conceitos como manipulação de arquivos, operações assíncronas, criação de rotas e autenticação. Estou sempre atualizado com as melhores práticas e recursos do Node.js, garantindo que meus projetos tenham desempenho e escalabilidade excepcionais.',
  Java: 'Java é uma linguagem de programação versátil e amplamente adotada em diversos tipos de aplicações. Com Java, é possível desenvolver desde aplicativos desktop até sistemas empresariais escaláveis. Tenho experiência em trabalhar com Java e sou capaz de criar soluções robustas e de alto desempenho. No meu portfólio, destaco minha especialização em Java como parte essencial das minhas habilidades em desenvolvimento de software. Com o Java, posso desenvolver aplicações orientadas a objetos, utilizar frameworks populares como Spring e Hibernate, e integrar sistemas complexos. Estou familiarizado com conceitos como herança, polimorfismo, tratamento de exceções e banco de dados. Estou sempre atualizado com as melhores práticas e recursos do Java, garantindo que meus projetos sejam eficientes, seguros e escaláveis.',
};

export function Conhecimentos() {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');

  const handleMouseEnter = (label: string) => {
    setMessage(messages[label] || '');
    setTitle(label || '');
    setShowMessage(true);
  };

  const handleMouseLeave = () => {
    setShowMessage(false);
  };

  return (
    <Section id="conhecimentos">
      <H1>Conhecimentos</H1>
      <Cards>
        {menuItems.map((item) => (
          <Card
            key={item.label}
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            <Label>{item.label}</Label>
            {item.icon}
          </Card>
        ))}
      </Cards>
      <MessageCard show={showMessage}>
        <MessageTitle>{title}</MessageTitle>
        <Message>{message}</Message>
      </MessageCard>
    </Section>
  );
}