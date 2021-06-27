import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import List from "./List";
import SkeletonLoader from "./ui/SkeletonLoader";

export default function ({loader}) {
  const Sidebar = styled.nav`
    min-width: 281px;
    padding: 24px 32px;
    box-sizing: border-box;
    border-right: 1px solid var(--primary-color);
  `
  // function handleClick({id, parentId, children = []}) {
  //   const item = list.find(o => o.id === id)
  //   const index = list.findIndex(o => o.id === id)
  //
  //   list.splice(index + 1, 0, ...children)
  //   setList([...list])
  // }

  return<Sidebar className="">
    {
      loader && <SkeletonLoader></SkeletonLoader>
    }
    {/*<List style={{textAlign: 'left'}} click={handleClick} items={list}/>*/}
  </Sidebar>
}