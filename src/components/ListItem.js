import styled from 'styled-components'
import {useState, useEffect} from 'react'

const StyledLi = styled.li`
  font-size: 14px;
  position: relative;
  padding: 8px 0 8px 16px;
`
const Arrow = styled.span`
  position: absolute;
  left: 8px;
  display: inline-block;
  width: 0;
  top: 11px;
  height: 0;
  border: 4px solid transparent;
  border-left-color: var(--text-black);
`

/**
 *
 * @param props - {item: Object}
 * @returns {JSX.Element}
 * @constructor
 */
export default function ListItem({item, click, active, lastItem = false}) {
  const activeClass = (val) => (val) ? 'active' : null

  function Btn() {
    if (lastItem) {
      return <div>
        {item.title}
      </div>
    } else {
      return <div className={activeClass(active)}>
        <Arrow/>
        {item.title}
      </div>
    }
  }

  return <StyledLi onClick={() => click(item)}
                   style={{marginLeft: item.level ? 16 * item.level + 'px' : null}}>
    <Btn/>
  </StyledLi>;
}