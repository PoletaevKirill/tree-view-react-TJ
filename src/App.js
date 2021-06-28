import "./style/App.scss"
import API from "./utils/API";
import React, {useState, useEffect} from 'react'

import Header from "./components/Header";
import Sidebar from "./components/Sidebar/";
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
          setLoader(false)
        }
      })
  }, []);

  return (
    <div className="flex flex-column height-100">
        <Header />
      <main className="flex flex-row flex-grow">
        <Sidebar loader={loader} list={pages}/>
        <div className="flex-column flex-grow">
          <div style={{minHeight: 'calc(100vh - var(--header-height) - var(--footer-height))'}}>
          {/*  Пустой блок для симотичности*/}
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
