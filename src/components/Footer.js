import styled from "styled-components";

const StyledFooter = styled.footer`
  min-height: 120px;
  padding: 0 24px;
  box-sizing: border-box;
  border-top: 1px solid var(--primary-color);
`

export default function Footer({children}) {
  return <StyledFooter className={'flex align-center'}>
    {/*{children}*/}
  </StyledFooter>
}