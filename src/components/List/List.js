import ListItem from "./ListItem/ListItem";
import {useState, useEffect} from 'react'
import {StyledUl} from './styles'

/**
 *
 * @param props  - {item: Array}
 * @returns {JSX.Element}
 * @constructor
 */
export default function List(props) {
  const [active, setActive] = useState([])
  const [list, setList] = useState([])
  const [link, setLink] = useState(false)

  // хук вызывается при хот релоад? Но в доке же говорится что это }, []) дает мне вызов только при маунте...
  useEffect(() => {
    const listArray = Object.values(props.items || {})
    setList(listArray.filter(o => !o.parentId))
  }, [])


  /**
   * @param id
   */
  function toggleList({id}) {
    const index = list.findIndex(item => item.id === id)
    const isIdActive = active.includes(id)

    if (!isIdActive) {
      const children = Object.values(props.items || {}).filter(o => o.parentId === id)

      setActive(prev => [...prev, id])
      setList(prev => {
        return [
          ...prev.slice(0, index + 1),
          ...children,
          ...prev.slice(index + 1, list.length)
        ];
      })
    }

    if (isIdActive) {
      /**
       * @param _id
       * @param count
       * @returns Number
       */
      const countActiveChildById = (_id, count = 0) => list.reduce((tempCount, item) => {
        if (item.parentId === _id) tempCount += 1
        if (active.includes(item.id) && item.parentId === _id) return countActiveChildById(item.id, tempCount)
        return tempCount
      }, count)

      // Почему то я не могу получить обновленный list после setList. По этому использую временную переменную
      let tempList = [];
      setList(prev => {
        tempList = [
          ...prev.slice(0, index + 1),
          ...prev.slice(index + 1 + countActiveChildById(id), list.length)
        ];
        return tempList
      })
      // а еще и костыль с таймаутом. Наверное есть какой то хук?
      setTimeout(_ => {
        setActive(active.filter(i => i !== id && Array.from(tempList, o => o.id).includes(i)))
      }, 1)
    }
  }

  function onClickLastChild({id}){
        setLink(id)
  }


  const style = {...props.style}

  return (
    <StyledUl style={style}>
      {list.map((item, i) => {
        //@todo - почему убирая key={i.toString()} ререндерится вообще весь список?????? Весь прикол в ключах? нужно больше ключей богу ключей?
        //  если так оно и есть, можно ли как то генеировать ключи аля: {item.id+'childComponents1'}, найти примеры.
        const children = Object.values(props.items || {}).filter(o => o.parentId === item.id)
        return <ListItem key={i.toString()}
                         active={active.includes(item.id)}
                         activeLink={link}
                         click={toggleList}
                         clickLastChild={onClickLastChild}
                         lastItem={!!children.length}
                         item={item}/>
      })}
    </StyledUl>
  );
}