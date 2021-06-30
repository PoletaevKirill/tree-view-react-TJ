import List from "../List";
import Index from "../ui/SkeletonLoader";
import {StyledSidebar} from "./styles";

export default function Sidebar({loader, list}) {
  return <StyledSidebar className="pt-6 pb-0 pl-8 pr-8">
    {
      loader && <Index></Index>
    }
    {
      !loader && <List items={list}/>
    }
  </StyledSidebar>
}