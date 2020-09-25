import React, { Component } from 'react';
import ApiService from '../../services/ApiService'
import './Gallery.css'


export default class Gallery extends Component {

  apiService = new ApiService();

  state = {
    data: new Array(24)
  }
  componentDidMount(){
    this.getWp()
    console.log('mount');
    // console.log(this.state);
  }

  el = () =>  {
    return this.state.data.map((item) => {

      return (
      <div>
        <img src={item} alt=""/>
      </div>
      )
    })
  }

  getWp() {
    this.apiService
      .searchWp()
      .then((d)=>{
        this.setState({
          data: d.map((item) =>{
            return item.thumbs.large
          })
        })
      })
      .then(() => {console.log('log', this.state)})
      }



  render() {
    const {data} = this.state
    return (
      <div>
        {this.el()}
      </div>
    );
  }
}
