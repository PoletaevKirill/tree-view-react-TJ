import styled from "styled-components";

export default function Footer({children}) {
  const Footer = styled.footer`
    min-height: 120px;
    padding: 0 24px;
    box-sizing: border-box;
    background-color: var(--primary-color);
  `

  return <Footer className="flex align-center">
    footer
  </Footer>
}