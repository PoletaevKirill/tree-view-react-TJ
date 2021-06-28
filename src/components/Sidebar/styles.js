import styled from "styled-components";

const StyledSidebar = styled.nav`
  width: 281px;
  padding: 24px 32px;
  box-sizing: border-box;
  max-height: calc(100vh - var(--header-height));
  border-right: 1px solid var(--primary-color);
  overflow-y: auto;
`
export {StyledSidebar}
