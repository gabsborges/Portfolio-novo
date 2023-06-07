import styled from "styled-components";
import { LogoBranca } from "./logo-branca";

const MenuBar = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderMenuUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 38px;
`;

const HeaderMenuLi = styled.li``;

const HeaderMenuLink = styled.a`
  color: white;
  text-decoration: none;
`;

const menuItems = [
  { label: "Sobre Mim", url: "#sobreMim" },
  { label: "Conhecimentos", url: "/" },
  { label: "Projetos", url: "/" },
  { label: "Contato", url: "/" },
];

export function Header() {
  return (
    <>
      <MenuBar>
        <LogoBranca />
        <HeaderMenuUl>
          {menuItems.map((item, index) => (
            <HeaderMenuLi key={index}>
              <HeaderMenuLink href={item.url}>{item.label}</HeaderMenuLink>
            </HeaderMenuLi>
          ))}
        </HeaderMenuUl>
      </MenuBar>
    </>
  );
}
