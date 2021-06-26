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

  return (
    <ul style={props.style}>
      {listItems}
    </ul>
  );
}