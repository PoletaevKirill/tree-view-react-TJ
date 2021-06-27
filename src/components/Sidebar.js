
import styled from 'styled-components'

import List from "./List";
import SkeletonLoader from "./ui/SkeletonLoader";

const StyledSidebar = styled.nav`
  width: 281px;
  padding: 24px 32px;
  box-sizing: border-box;
  border-right: 1px solid var(--primary-color);
`

export default function Sidebar({loader, list}) {

  console.log(list)
  return <StyledSidebar>
    {
      loader && <SkeletonLoader></SkeletonLoader>
    }
    <List style={{textAlign: 'left'}} click={() => {
    }} items={list}/>
  </StyledSidebar>
}