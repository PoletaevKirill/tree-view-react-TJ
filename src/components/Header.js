import styled from "styled-components";

const StyledHeader= styled.header`
    min-height: 64px;
    padding: 0 24px;
    border-bottom: 1px solid var(--primary-color);
    box-sizing: border-box;
  `

export default function Header({children}) {
  return <StyledHeader className={'flex align-center'}>
    header
  </StyledHeader>
}