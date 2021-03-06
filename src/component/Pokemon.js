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

  getValue = (value) => {
    const { getValue } = this.props
    getValue(value)
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

  search = () => {
    const { getValue } = this.props
    const value = this.refs.txt.value
    getValue(value)

  }
  type = () => {
    const { item = [], values, lavue  } = this.props
    let newArr = []
    let arr = []
    item.results.map((e, i) => {
      let n = e.name
      let m = n.includes(values)
      if (m === true) {
        newArr.push(e.name)
        lavue.unshift(e.name)
      }
    })
    arr = newArr.map(e => {
      return <div>
        |{e}|
        </div>
    })
    console.log(lavue)
    return <div>{arr}</div>

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
          <div>
            <p>Search Pokemon</p>
            <input onChange={this.search} ref="txt" placeholder="type pokemon name" />
            <button onClick={this.type} >Search</button>
            {this.type()}
          </div>
          {item.results.map((e, i) => {
            return (<div id="myBtn" onClick={this.change}>
              <div className={nam}>
                <div className="modal-content">
                  <span className="close">&times;</span>
                  <PokemonURL
                    url={e.url}
                    url2={url}
                    getURL={this.getUrl} z
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
