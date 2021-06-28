import ArrowList from '../../../img/arrow-list.svg'
import {StyledLi, Arrow} from './styles'
import {logDOM} from "@testing-library/react";

/**
 *
 * @param props - {item: Object}
 * @returns {JSX.Element}
 * @constructor
 */
export default function ListItem({item, click, clickLastChild, active, activeLink, lastItem = false}) {
  const activeClass =  (active) ? 'active' : null
  const styleLeftMargin = {marginLeft: item.level ? 16 * item.level + 'px' : null}


  return <StyledLi key={item.id}
                   style={styleLeftMargin}>
    {
      lastItem &&
      <div className={activeClass} onClick={() => click(item)}>
        <Arrow>
          <img src={ArrowList} alt="React Logo" width="10" height="10"
               style={{display: 'inline-block', transition: '.3s ease'}}/>
        </Arrow>
        <span>{item.title}</span>
      </div>
    }
    {
      !lastItem &&
      <div onClick={()=>clickLastChild(item)}>
        <div>{item.title}</div>
        {
          activeLink === item.id && item.anchors.map((anc, i) => {
            return <a key={i.toString()} href="#">{anc}</a>
          })
        }
      </div>
    }
  </StyledLi>;
}