import styled from 'styled-components'
import ArrowList from '../img/arrow-list.svg'

const StyledLi = styled.li`
  font-size: 14px;
  position: relative;
  padding: 8px 0 8px 16px;
`
const Arrow = styled.span`
  position: absolute;
  left: 8px;
  display: inline-block;
  width: 8px;
  top: 8px;
  height: 0;
`

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