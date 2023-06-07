"use client"

import { styled } from "styled-components";
import { LogoBranca } from "./logo-branca";

const HeaderBar = styled.div`
    width: 80%;
    padding: 30px 0;
    margin: 0 auto;
`

export function Header() {
    return (
        <HeaderBar>
            <LogoBranca/>
        </HeaderBar>
    )
}