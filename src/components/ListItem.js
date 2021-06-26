/**
 *
 * @param props - {item: Object}
 * @returns {JSX.Element}
 * @constructor
 */
export default function ListItem(props) {
  return <li onClick={()=> props.click(props.item.id)}  style={{paddingLeft: props.item.level ? 16 * props.item.level + 'px': null }}>{props.item.title}</li>;
}