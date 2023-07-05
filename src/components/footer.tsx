import { styled } from "styled-components"

const Section = styled.div`
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const P = styled.p`
    font-size: 14px;
`;

export function Footer() {
    return (
        <Section>
            <P>Ⓒ 2023 | Gabriel Borges</P>
        </Section>
    )
}