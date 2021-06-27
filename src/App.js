import "./style/App.scss"
import API from "./utils/API";
import React, {useState, useEffect} from 'react'

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const [pages, setPages] = useState([]);
  const [loader, setLoader] = useState(false)
  useEffect((e) => {
    setLoader(true)
    API.get('/entities')
      .then(response => {
        if (response.status === 200) {
          setPages(response.data.pages || {})
          // в этом нет необходимости, просто хочу показать лоадер
          setLoader(false)
        }
      })
  }, []);

  function buildTree(object, id) {
    let result = [];
    for (let prop in object) {
      const item = object[prop]

      if (!!item['parentId']) {
        const parent = object[item.parentId]
        parent.children = [...parent.children || [], item]
      }

      result = Object.values(object).filter(item => !item.parentId)
    }

    return result
  }

  return (
    <div className="flex flex-column height-100">
        <Header />
      <main className="flex flex-row flex-grow">
        <Sidebar loader={loader} list={buildTree(pages)}/>
        <div className="flex-column flex-grow">
          <div style={{minHeight: 'calc(100vh - 64px - 120px)'}}>
          {/*  Пустой блок для симотичности*/}
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
