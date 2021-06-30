import Right from '../../../img/right.svg'
import store from "../../../store";

import {StyledItem, Arrow, StyledLink, StyledItemTitle, StyledItemAnchor} from './styles'

/**
 *
 * @param {Object} props
 * @param {Object} props.item - Узел который необходио отрисовать
 * @param {cbEvent} props.click - Функция обработчик
 * @param {Boolean} [props.active=false] - Активный элемент или узел
 * @param {Boolean} [props.lastItem=false]  - Последний элемент в иерархии
 * @returns {JSX.Element}
 * @constructor
 */
export default function Index({item, click, active = false, lastItem = false}) {
  const activeClass = (active) ? 'active' : null
  const styleLeftPadding = {paddingLeft: item.level ? 16 * (item.level + 1) + 'px' : '16px'}

  const isAnchors = active && !!item.anchors && item.anchors.length > 0
  const ActiveItemWithAnchors = isAnchors ? 'active--with-anchors' : null

  const anchorsList = isAnchors && item.anchors.map((anc, i) => {
    const anchors = store['anchors'][anc]
    return <StyledItemAnchor style={styleLeftPadding} key={anchors.id} className="pt-2 pb-2 anchors">
      <StyledLink href={anchors.anchor}>{anchors.title}</StyledLink>
    </StyledItemAnchor>
  })

  return <li>
    <StyledItem className={`pt-2 pb-2 ${activeClass} ${ActiveItemWithAnchors} `} onClick={() => click(item)}
                style={styleLeftPadding}>
      {lastItem && <Arrow src={Right} alt="React Logo" width="10" height="10"/>}
      <StyledItemTitle>{item.title}</StyledItemTitle>
    </StyledItem>
    {anchorsList}
  </li>;
}