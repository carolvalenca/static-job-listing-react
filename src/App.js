import React, { useState, useEffect } from 'react';

import './global.css'
import api from './data.json'
import List from './Components/List'
import Filter from './Components/Filter'

function App() {
  const [arrayFilters, setArrayFilters] = useState([])
  const [data, setData] = useState(api)


  useEffect(() => {
    const cardsFiltered = api.filter(element => {
      const tools = [...element.languages, ...element.tools]
      const newTools = tools.filter(tool => arrayFilters.includes(tool))

      return (newTools.length === arrayFilters.length)
    })

    if (arrayFilters.length > 0) {
      setData(cardsFiltered)
    } else {
      setData(api)
    }

  }, [arrayFilters]) 

  function getButtonValue(buttonValue) {
    if(arrayFilters.indexOf(buttonValue) <= -1){
      setArrayFilters([...arrayFilters, buttonValue])
    }
  }

  function deleteButton(buttonValue) {
    const newArray = arrayFilters.filter(elem => elem !== buttonValue)
    setArrayFilters(newArray)
  }

  function deleteAllButtons() {
    setArrayFilters([])
  }

  return (
    <>
      <header>
        <img src="./images/bg-header-desktop.svg" alt="header"/>
      </header>
  
      <Filter name={arrayFilters} callback={(value) => deleteButton(value)} callbackAll={() => deleteAllButtons()}/>

      <List cardsData={data} callback={(value) => getButtonValue(value)}/>
    </>
  );
}

export default App;
