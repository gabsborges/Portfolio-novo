"use client"

import { Conhecimentos } from "@/components/conhecimentos";
import { Header } from "@/components/header";
import { MainSection } from "@/components/mainSection";
import { SobreMim } from "@/components/sobreMim";
import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`

export default function Home() {
  return (
    <Wrapper>
      <Header/>
      <MainSection/>
      <SobreMim/>
      <Conhecimentos/>
    </Wrapper>
  )
}
