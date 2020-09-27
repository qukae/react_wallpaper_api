import React, { Component } from 'react';
import ApiService from '../../services/ApiService'
import './Gallery.css'


export default class Gallery extends Component {

  apiService = new ApiService();

  state = {
    data: []
  }
  componentDidMount(){
    this.getWp()
    console.log('mount');
  }
  componentDidUpdate(){
    console.log("gal_upd");
    // this.el = this.CreateEl()
  }

  el= []

  CreateEl = () =>  {

    return this.state.data.map((item) => {

      return (
      <div key={item}>
        <img src={item} className="gallery-img" alt={item}/>
      </div>
      )
    })
  }


  getWp() {
    this.apiService
      .searchWp(this.props.searchQuery)
      .then((d)=>{
        this.setState({
          data: d.map((item) =>{
            return item.thumbs.large
          })
        })
      })
      .then(() => {console.log('gallery_getWp', this.state, this.props.searchQuery)})
      }



  render() {

    const {data} = this.state
    return (
      <div className="gallery">
        {this.CreateEl()}
      </div>
    );
  }
}
