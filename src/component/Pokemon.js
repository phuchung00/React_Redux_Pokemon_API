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
  pokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
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
    this.pokemon()
  }
  change = () => {
    const { change } = this.props
    change()
  }
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
          {item.results.map((e, i) => {
            return (<div id="myBtn" onClick={this.change}>
              {e.name}
              <div className={nam}>
                <div className="modal-content">
                  <span onClick={this.change} className="close">&times;</span>
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

        </div>
      )
    }
  }
}
