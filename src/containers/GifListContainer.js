import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


class GifListContainer extends React.Component {
    state = {
        allGifs: [],
        displayGifs: [],
        gifIndex: 0,
        value: ''
      }

      fetchGIFs = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
          .then(res => res.json())
          .then(({data}) => {
            this.setState({ allGifs: data})
          })
      }
      
      componentDidMount() {
         this.fetchGIFs()
      }    

      handleChange(event) {
        this.setState({value: event.target.value});
      }
      

    render() {
        return (
            <div>
                <GifSearch 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    value={this.state.value}
                    fetchGIFs={this.fetchGIFs}
                />
                <br></br>
                <GifList allGifs={this.state.allGifs}/>
            </div>
        )
    }
}

export default GifListContainer
