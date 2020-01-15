import React from 'react'
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'


class App extends React.Component {
  
  render() {

    return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainer />
    </div>
  )
  }
}

export default App
