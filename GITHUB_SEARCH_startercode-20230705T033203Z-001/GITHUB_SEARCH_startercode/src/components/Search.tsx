import React, { useState } from 'react'
import axios from 'axios'
import './Search.css'
import logo from '../assests/github.webp'
import Navbar from './Navbar'

const Search: React.FC<{}> = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [url, setUrl] = useState<string>('')
  const [reposLink, setReposLink] = useState<string>('')
  const [userData, setUserData] = useState<any>(null)
  const [error, setError] = useState<string>('')
  const urlCreator = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const username = e.target.value
    setUrl('https://api.github.com/users/' + username)
    setReposLink('https://github.com/' + username + '?tab=repositories')
  }
  const getUserData = async (): Promise<void> => {
    setLoading(true)
    try {
      const response = await axios.get(url)
      setUserData(response.data)
      setError('')
    } catch (error: any) {
      setUserData(null)
      setError('User not found. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  const handleSearch = (): void => {
    getUserData().catch((error) => {
      // Handle any errors here
      console.error(error)
    })
  }
  if (loading) {
    return <div className="spinner"></div>
  } else {
    return (
      <div>
        <Navbar />
        <div className='searchBar'>
        <div className="searchlogo">
        <img src={logo} alt="Logo" />
        </div>
        <div className="search-input">
          <input type="text" onChange={urlCreator} />
          <button onClick={handleSearch}>Search</button>
        </div>
        {error !== '' && <div className="error">{error}</div>}
        {userData !== null && (
          <div>
            <h2>{userData.login}</h2>
            <p>Followers: {userData.followers}</p>
            <p>Following: {userData.following}</p>
            <a href={reposLink}>Repositories</a>
          </div>
        )}{' '}
      </div>
      </div>
    )
  }
}
export default Search
