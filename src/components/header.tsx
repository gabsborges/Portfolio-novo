"use client"

import { styled } from "styled-components";
import { LogoBranca } from "./logo-branca";

const HeaderBar = styled.div`
    width: 80%;
    padding: 30px 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const HeaderMenuUl = styled.ul`
    display: flex;
    list-style: none;
    gap: 38px;
`

const HeaderMenuLi = styled.li`

`

const HeaderMenuA = styled.a`
    color: white;
    text-decoration: none;
`

export function Header() {
    return (
        <HeaderBar>
            <LogoBranca/>
            <HeaderMenuUl>
                <HeaderMenuLi><HeaderMenuA href="">Sobre Mim</HeaderMenuA></HeaderMenuLi>
                <HeaderMenuLi><HeaderMenuA href="">Conhecimentos</HeaderMenuA></HeaderMenuLi>
                <HeaderMenuLi><HeaderMenuA href="">Projetos</HeaderMenuA></HeaderMenuLi>
                <HeaderMenuLi><HeaderMenuA href="">Contato</HeaderMenuA></HeaderMenuLi>
            </HeaderMenuUl>
        </HeaderBar>
    )
}