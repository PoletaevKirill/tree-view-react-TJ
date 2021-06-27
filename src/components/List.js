import ListItem from "./ListItem";
import styled from "styled-components";

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


  const items = Object.values(props.items);
  const listItems = items.map((item) =>
    <ListItem click={props.click}  key={item.id} item={item}/>
  );
  const style = {...props.style, ...{listStyleType:'none'}}

  return (
    <StyledUl style={style}>
      {listItems}
    </StyledUl>
  );
}