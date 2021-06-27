/**
 *
 * @param props - {item: Object}
 * @returns {JSX.Element}
 * @constructor
 */
export default function ListItem(props) {
  function Her() {
    if(props.item.children){
      return <div>
        <span>{props.item.level}  -  </span>
        {props.item.title}
      </div>
    } else {
      return <div>
        {props.item.title}
      </div>
    }




  }

  return <li onClick={() => props.click(props.item)}
             style={{marginLeft: props.item.level ? 16 * props.item.level + 'px' : null}}>
    <Her />
  </li>;
}