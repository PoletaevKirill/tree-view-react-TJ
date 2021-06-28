import ArrowList from '../../../img/arrow-list.svg'
import {StyledLi, Arrow} from './styles'

/**
 *
 * @param props - {item: Object}
 * @returns {JSX.Element}
 * @constructor
 */
export default function ListItem({item, click, active, lastItem = false}) {
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
      <div>
        <div>{item.title}</div>
      </div>
    }
  </StyledLi>;
}