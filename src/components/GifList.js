import React from 'react'


class GifList extends React.Component {
    render() {
        let gifArray = this.props.allGifs.map((gif) => 
            <li key={gif.id}>
                <img gif={gif} src={gif.images.original.url}></img>
            </li>
        )
        console.log(this.props.allGifs)
        return (
            <ul>
                {gifArray}
            </ul>
        )
    }
}

export default GifList
