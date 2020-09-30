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
    // console.log('mount');
  }
  componentDidUpdate(prevQ){
    // console.log("gal_upd");
    if(prevQ !== this.props) {
      this.getWp()
    }
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
    const {searchQuery, categories, color} = this.props
    this.apiService
      .searchWp(searchQuery, categories, color)
      .then((d)=>{
        this.setState({
          data: d.map((item) =>{
            return item.thumbs.large
          })
        })
      })
      .then(() => {console.log('gallery_getWp', categories, 'q:', searchQuery, ' color: ', color)})
      }



  render() {


    return (
      <div className="gallery">
        {this.CreateEl()}
      </div>
    );
  }
}
