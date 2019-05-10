import React, { Component } from 'react'
import './style.css'
export default class PokemonURL extends Component {
  state = {
    isLoading: false
  }
  getURL = (url) => {
    const { getURL } = this.props
    getURL(url);
  }
  link = () => {
    const { url } = this.props
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.getURL(json)
        this.setState({
          isLoading: true
        })
      }).catch(e => { console.log(e) })
  }
  componentDidMount() {
    this.link()
  }
  render() {
    const { url, url2 } = this.props
    return (
      <div>
        <h3>Pokemon Information</h3>
        <div className="infor">
          <div>
            Name: {url2.name}
          </div>
          <div>
            Height: {url2.height}
          </div>
          <div>
            Weight: {url2.weight}
          </div>
        </div>
      </div>
    )
  }
}
