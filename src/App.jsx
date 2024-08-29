import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'
import SideBar from './SideBar'
import SearchBar from './SearchBar'
import Content from './Content'
import About from './About'

function App() {
  const API_URL = "http://localhost:3000/cards";
  const [showContent, setShowContent] = useState(true);
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState('')


  const showContentView = () => setShowContent(true);
  const showSettingsView = () => setShowContent(false);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) { throw Error("Did not recieve expected data!") };
        const listCards = await response.json();
        setCards(listCards);
        console.log(listCards);
      } catch (error) {
        console.log(error.message)
      }

    }

    fetchCards();
  }, [])



  return (
    <>
      <MyContext.Provider value={{ showContentView, showSettingsView, cards, setCards, search, setSearch }}>
        <SearchBar />
        {showContent ? (<Content />) : (<About />)}
        <SideBar />

      </MyContext.Provider>
    </>
  )
}

export default App
