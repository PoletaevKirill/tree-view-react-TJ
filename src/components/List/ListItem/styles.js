import styled from "styled-components";

const StyledItem  = styled.div`
  font-size: 14px;
  position: relative;
  cursor: pointer;
  transition: background .25s ease-in-out;
  &:hover{
    background: var(--primary-color)
  }
  // чет мне не нравится, хотя и имеет место быть
  &.active--with-anchors{
    background: var(--primary-color);
    &:hover{
      background: var(--secondary-color);
    }
  }
`

const StyledItemAnchor = styled(StyledItem)`
  background: var(--primary-color);
  &:hover{
    background: var(--secondary-color);
  } 
`

const StyledItemTitle= styled.span`
  ${StyledItem}.active & {
    font-weight: 600;
  }
`

// Требования по отсупу стрелочки от текста 4px, но отрисовано явно не 4
const Arrow = styled.img`
  position: absolute;
  display: inline-block;
  width: 10px;
  top: 12px;
  height: 10px;
  transform: translateX(-10px) rotate(90deg);
  transition: transform .25s ease-in-out;
  
  ${StyledItem}.active & {
    transform: translateX(-10px) rotate(180deg);
    display: inline-block;
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  color: var(--text-black);
`

export  {Arrow, StyledItem, StyledLink, StyledItemTitle, StyledItemAnchor}