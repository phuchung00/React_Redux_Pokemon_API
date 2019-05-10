import React, { Component } from 'react'

export default class PokemonURL extends Component {
  state = {
    isLoading :false
  }
  getURL = (url) => {
    const { getUrl } = this.props
    getUrl(url)
  }
  link = () => {
    const { url } = this.props
    fetch(url)
    .then(res => res.json())
    .then(json => {
      this.getURL(json)
      this.setState({
        isLoading:true
      })
    }).catch(e => { console.log(e) })
  }
  
  render() {
    const { url ,url2} = this.props
    return (
      <div>
        {/* {url2.map((e,i)=>{
            return e.url
        })} */}
        {console.log(url2)}
      </div>
    )
  }
}
