import styled from 'styled-components'


import List from "./List";
import SkeletonLoader from "./ui/SkeletonLoader";

const StyledSidebar = styled.nav`
  width: 281px;
  padding: 24px 32px;
  box-sizing: border-box;
  max-height: calc(100vh - var(--header-height));
  border-right: 1px solid var(--primary-color);
  overflow-y: auto;
`

export default function Sidebar({loader, list}) {
  return <StyledSidebar>
    {
      loader && <SkeletonLoader></SkeletonLoader>
    }
    {
      !loader && <List style={{textAlign: 'left'}} items={list}/>
    }

  </StyledSidebar>
}