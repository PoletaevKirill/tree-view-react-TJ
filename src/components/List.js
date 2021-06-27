import ListItem from "./ListItem";

/**
 *
 * @param props  - {item: Array}
 * @returns {JSX.Element}
 * @constructor
 */
export default function List(props) {
  const items = Object.values(props.items);
  const listItems = items.map((item) =>
    <ListItem click={props.click}  key={item.id.toString()} item={item}/>
  );
  const style = {...props.style, ...{listStyleType:'none'}}

  return (
    <ul style={style}>
      {listItems}
    </ul>
  );
}