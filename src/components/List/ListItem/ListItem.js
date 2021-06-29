import Right from '../../../img/right.svg'
import store from "../../../store";

import {StyledItem, Arrow, StyledLink, StyledItemTitle, StyledItemAnchor} from './styles'

/**
 *
 * @param props - {item: Object}
 * @returns {JSX.Element}
 * @constructor
 */
export default function ListItem({item, click, active, lastItem = false}) {
  const activeClass = (active) ? 'active' : null
  const styleLeftPadding = {paddingLeft: item.level ? 16 * (item.level +1) + 'px' : '16px'}

  const isAnchors = active && item.anchors
  const ActiveItemWithAnchors = isAnchors ? 'active--with-anchors': null

  const Anchors = ()=>{
   return  isAnchors && item.anchors.map((anc, i) => {
      const anchors = store['anchors'][anc]
      return <StyledItemAnchor style={styleLeftPadding} key={anchors.id} className="pt-2 pb-2 anchors">
        <StyledLink href={anchors.anchor}>{anchors.title}</StyledLink>
      </StyledItemAnchor>
    })
  }

  return <li key={item.id}>
    {
      <StyledItem className={`pt-2 pb-2 ${ActiveItemWithAnchors}`} onClick={() => click(item)} style={styleLeftPadding}>
        {lastItem && <Arrow src={Right}  className={activeClass} alt="React Logo" width="10" height="10"/>}
        <StyledItemTitle className={activeClass}>{item.title}</StyledItemTitle>
      </StyledItem>
    }
    {
      <Anchors/>
    }
  </li>;
}