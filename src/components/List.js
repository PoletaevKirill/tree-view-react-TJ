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
    setList(listArray.filter(o => !o.parentId))
  }, [])

  function toggle({id}) {
    const index = list.findIndex(item => item.id === id)

    if (!active.includes(id)) {
      const children = Object.values(props.items || {}).filter(o => o.parentId === id)
      setActive(prev => [...prev, id])
      setList(prev => {
        return [
          ...prev.slice(0, index + 1),
          ...children,
          ...prev.slice(index + 1, list.length)
        ];
      })

    } else {
      const tempArray = []
      let l = function (_id) {
        let result = list.reduce((res, o) => {
          if (o.parentId === _id) { // находим активных дочек
            res.push(o.parentId)
          }

          if (active.includes(o.id) && o.parentId === _id) { // спускаемся вниз по ветке
            l(o.id)
          }

          return res
        }, tempArray)

        return result
      }
      const activeTreeNode = l(id)

      list.splice(index + 1, activeTreeNode.length)

      setList(prev => {
        return [
          ...list
        ];
      })


      new Set(activeTreeNode).forEach(i => {
        active.splice(active.indexOf(i), 1)
      })

      setActive(active)
    }
    console.log(active)
  }


  const style = {...props.style}

  return (
    <StyledUl style={style}>
      {list.map((item, i) => {
        //@todo - почему убирая key={i.toString()} ререндерится вообще весь список?????? Весь прикол в ключах? нужно больше ключей богу ключей?
        //  если так оно и есть, можно ли как то генеировать ключи аля: {item.id+'childComponents1'}, найти примеры.

        const children = Object.values(props.items || {}).filter(o => o.parentId === item.id)
        return <ListItem key={i.toString()} active={active.includes(item.id)} click={toggle}
                         lastItem={!!children.length} item={item}/>
      })}
    </StyledUl>
  );
}