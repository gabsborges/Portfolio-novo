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

const Card = styled.div`
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


const menuItems = [
    { label: "HTML5", icon: <HtmlIcon /> },
    { label: "CSS3", icon: <CssIcon /> },
    { label: "Javascript", icon: <JavaScriptIcon /> },
    { label: "Wordpress", icon: <WordPressIcon /> },
    { label: "Bootstrap", icon: <BootstrapIcon /> },
    { label: "Typescript", icon: <TypeScriptIcon /> },
    { label: "React.js", icon: <ReactIcon /> },
    { label: "Styled Component", icon: <StyledComponentsIcon /> },
    { label: "GraphQL", icon: <GraphQlIcon /> },
    { label: "MySQL", icon: <MySqlIcon /> },
    { label: "Git", icon: <GitIcon /> },
    { label: "GitHub", icon: <GitHubIcon /> },
    { label: "Node.js", icon: <NodeJsIcon /> },
    { label: "Java", icon: <JavaIcon /> },
];

export function Conhecimentos() {
    return (
        <Section>
            <H1>Conhecimentos</H1>
            <Cards>
                {menuItems.map((item) => (
                    <Card key={item.label}>
                        <Label>{item.label}</Label>
                        {item.icon}
                    </Card>
                ))}
            </Cards>
        </Section>
    );
}