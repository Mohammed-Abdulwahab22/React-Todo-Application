import React, { useContext } from 'react'
import './index.css'
import MyContext from './MyContext'

export default function SearchBar() {
  const { search, setSearch } = useContext(MyContext)
  return (
    <form className="search-nav" onSubmit={(e) => { e.preventDefault() }}>
      <div className="search-container">
        <header className="app-header">
          <h1>My To-Do App</h1>
        </header>
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={search}
          onChange={(e) => { setSearch(e.target.value) }}
        />
      </div>
    </form>
  )
}
