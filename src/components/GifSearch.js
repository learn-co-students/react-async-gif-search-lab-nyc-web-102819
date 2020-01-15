import React from 'react'


class GifSearch extends React.Component {
    
    state = {
        query: ""
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.fetchGIFs(this.state.query)
    }

    render() {
        return (
        <div>
            <h3>Enter a Search Term:</h3>
            <form action="search" onSubmit={this.handleSubmit}>
                    <input  value={this.state.query} onChange={ event => this.setState({query: event.target.value})} type="text" />
                <button>Find</button>
            </form>
        </div>    
        )
    }
}

export default GifSearch



