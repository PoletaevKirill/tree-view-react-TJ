import styled from "styled-components";
const StyledFooter = styled.footer`
    min-height: 120px;
    padding: 0 24px;
    box-sizing: border-box;
    background-color: var(--primary-color);
  `
export default function Footer({children}) {
  return <StyledFooter className={'flex align-center'}>
    footer
  </StyledFooter>
}