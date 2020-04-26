import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component{
    state = {
        characterName : '',
        characterNickname : '',
        characterImg: '',
        characterOccupation: '',
        characterStatus: '',
        showButton: false
    }

    toggle = () => {
        this.state.showButton === false ? this.setState({showButton : true}) : this.setState({ showButton: false})
    }

    componentDidMount(){
        this.fetchCharacter()   
    }

    fetchCharacter = () => {
        axios.get("https://www.breakingbadapi.com/api/character/random").then((response) => {

            this.setState({ characterImg: response.data[0].img})
            this.setState({ characterName: response.data[0].name})
            this.setState({ characterNickname: response.data[0].nickname})
            this.setState({ characterOccupation: response.data[0].occupation[0]})
            this.setState({ characterStatus: response.data[0].status})

        }).catch((error) => {
            console.log(error)
        })
    }

    render(){
        
        return(
            <div className="card" >
                <div className="wrapper">
                    <div className="profile">
                        <img src={this.state.characterImg} className="thumbnail" alt={this.state.characterNickname} />
                        <h3 className="name">{ this.state.characterName }</h3>
                        <p className="title">{ this.state.characterNickname }</p>
                        <p className="description">{ this.state.characterOccupation }</p>
                        <button type="button" className="btn" onClick={ this.toggle } >Need Spoilers?</button>
                        { this.state.showButton === true && <p className="status">{ this.state.characterStatus }</p>}
                    </div>
                </div>
            </div>
        )
    }
}

export default App