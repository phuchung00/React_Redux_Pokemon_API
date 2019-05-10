import React, { Component } from 'react'
import './style.css'
import PokemonURL from './PokemonURL'

export default class pokemon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      isLoaded: false
    }
  }

  item = (item) => {
    const { getItem } = this.props
    getItem(item)
  }
  
  getUrl = (url) => {
    const { getURL } = this.props
    getURL(url)
  }
  
  pokemon = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.item(json)
        this.setState({
          isLoading: true,
        })
      }
      ).catch(e => { console.log(e) })
  }
  
  componentDidMount() {
    this.pokemon('https://pokeapi.co/api/v2/pokemon')
  }
  
  change = () => {
    const { change } = this.props
    change()
  }

  fetchNewData = () => {
    const { item } = this.props;
    this.pokemon(item.next);
  }
  // xong r 
  render() {
    const { isChange, item = [], url = [] } = this.props
    let nam = 'modal '
    isChange ? nam += 'hide' : nam += 'unhide'
    const { isLoading } = this.state
    if (!isLoading) {
      return <div>Loading .... </div>
    } else {
      return (
        <div>
          <h2>PokeApi</h2>
          {item.results.map((e, i) => {
            return (<div id="myBtn" onClick={this.change}>
              {e.name}
              <div className={nam}>
                <div className="modal-content">
                  <span  className="close">&times;</span>
                  <PokemonURL
                    url={e.url}
                    url2 = {url}
                    getURL= { this.getUrl }
                  />
                </div>
              </div>
            </div>
            )
          })}
          <button onClick={this.fetchNewData}>Next</button>
        </div>
      )
    }
  }
}
