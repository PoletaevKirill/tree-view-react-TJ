import Right from '../../../img/right.svg'
import {StyledLi, Arrow} from './styles'
import store from "../../../store";

/**
 *
 * @param props - {item: Object}
 * @returns {JSX.Element}
 * @constructor
 */
export default function ListItem({item, click, clickLastChild, active, activeLink, lastItem = false}) {
  const activeClass = (active) ? 'active' : null
  const styleLeftMargin = {marginLeft: item.level ? 16 * item.level + 'px' : null}


  return <StyledLi key={item.id}
                   style={styleLeftMargin}>
    {
      <div className={`pt-2 pb-2 ${activeClass}`} onClick={() => click(item)} style={{"position": "relative"}}>
        {lastItem && <Arrow src={Right} alt="React Logo" width="10" height="10"/>}
        <span>{item.title}</span>
      </div>
    }
    {
      active && item.anchors && item.anchors.map((anc, i) => {
        const anchors = store['anchors'][anc]
        return <div key={anchors.id} className="pt-2 pb-2">
          <a href={anchors.anchor}>{anchors.title}</a>
        </div>
      })
    }
  </StyledLi>;
}