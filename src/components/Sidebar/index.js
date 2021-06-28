import List from "../List/List";
import SkeletonLoader from "../ui/SkeletonLoader/SkeletonLoader";
import {StyledSidebar} from "./styles";

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