import styled from "styled-components";

export default function Header({children}) {
  const Header = styled.header`
    min-height: 64px;
    padding: 0 24px;
    border-bottom: 1px solid var(--primary-color);
    box-sizing: border-box;
  `

  return <Header className="flex align-center">
    header
  </Header>
}