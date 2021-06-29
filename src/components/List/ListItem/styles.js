import styled from "styled-components";

const StyledLi = styled.li`
  font-size: 14px;
  position: relative;
`
const Arrow = styled.img`
  position: absolute;
  left: -10px;
  display: inline-block;
  width: 8px;
  top: 50%;
  height: 8px;
  transform: translateY(-50%) rotate(90deg);
  transition: transform .3s ease;
`

export  {StyledLi, Arrow}