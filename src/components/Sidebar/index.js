import List from "../List/List";
import SkeletonLoader from "../ui/SkeletonLoader/SkeletonLoader";
import {StyledSidebar} from "./styles";

export default function Sidebar({loader, list}) {
  return <StyledSidebar className="pt-6 pb-0 pl-8 pr-8">
    {
      loader && <SkeletonLoader></SkeletonLoader>
    }
    {
      !loader && <List items={list}/>
    }
  </StyledSidebar>
}