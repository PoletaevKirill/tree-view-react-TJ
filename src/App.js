import './App.css';
import API from "./utils/API";
import {useState, useEffect} from 'react'

import List from "./components/List";


// Идея: Не использовать сторонний плагин хранилища, т.к. их несколько и выбирать долго и дорого.
// Создадим пременную содержащую строку аналогичную адресной строке(адресная строка как стейт)
let Active = ''

function App() {
  const [pages, setPages] = useState({});
  const [list, setList] = useState([])

  useEffect((e) => {
    API.get('/entities')
      .then(response => {
        if (response.status === 200) {
          const pages = response.data.pages || {}
          setPages(pages)
          setList(Object.values(pages).filter(item => !item.parentId))
        }
      })
  }, []);

  function getLengthPages() {
    return Object.keys(pages).length
  }

  function Loader() {
    return (
      <div>Loading...</div>
    )
  }

  function handleClick(id) {
    const children = Object.values(pages).filter(item => item.parentId === id)
    if (children.length === 0) return

    const index = list.findIndex(o => o.id === id)

    if (Active && Active.split('/').includes(id)) {
      Active = Active.replace(`/${id}`, '')
      list.splice(index + 1, children.length)
    } else {
      Active += `/${id}`
      list.splice(index + 1, 0, ...children)
    }

    setList([...list])
  }

  return (
    <div className="App">
      <header>
        header
        {Active}
      </header>
      <hr/>
      <main className="wrapper">
        <nav className="sidebar">
          {getLengthPages() === 0 && Loader()}
          <List style={{textAlign: 'left'}} click={handleClick} items={list}/>
        </nav>
        <div className="">
          Content
        </div>
        </main>
      <hr/>
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
