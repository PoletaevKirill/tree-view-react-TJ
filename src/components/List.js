import ListItem from "./ListItem";
import styled from "styled-components";
import {useState, useEffect} from 'react'
import {logDOM} from "@testing-library/react";

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`
/**
 *
 * @param props  - {item: Array}
 * @returns {JSX.Element}
 * @constructor
 */
export default function List(props) {
  const [active, setActive] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    const listArray = Object.values(props.items || {})
    setList([...listArray.filter(o => !o.parentId)])
  }, [])

  function toggle({id}) {
    const index = list.findIndex(item => item.id === id)

    if (!active.includes(id)) {
      const children = Object.values(props.items || {}).filter(o => o.parentId === id)
      active.push(id)
      list.splice(index + 1, 0, ...children)

    } else {
      const tempArray = []

      let l = function (_id) {
        let result = list.reduce((res, o) => {
          if (o.parentId === _id) {
            res.push(o.parentId)
          }
          if (active.includes(o.id) && o.parentId === _id) {
            l(o.id)
          }
          return res
        }, tempArray)

        return result
      }
      const activeTreeNode = l(id)

      list.splice(index + 1, activeTreeNode.length)

      new Set(activeTreeNode).forEach(i=>{
        active.splice(active.indexOf(i), 1)
      })

      setActive(active)
    }
    console.log(active, 'active')
    setList([...list])
  }

  const listItems = list.map((item) =>
    <ListItem click={toggle} active={active.includes(item.id)} key={item.id} item={item}/>
  );
  const style = {...props.style, ...{listStyleType: 'none'}}

  return (
    <StyledUl style={style}>
      {listItems}
    </StyledUl>
  );
}