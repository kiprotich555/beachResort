

import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
//import Hero from '../component/Hero';
import {Link} from 'react-router-dom';
import Banner from '../component/Banner';
 import {RoomContext} from '../context';
 import StyledHero from '../component/StyledHero';
export default class SingleRoom extends Component {
  constructor(props){
    super(props);
   this.state ={
     slug:this.props.match.params.slug,
     defaultBcg
   }
  }
  static contextType = RoomContext;

  render() {
    const {getRoom} = this.context;
    const room =getRoom(this.state.slug);
    if(!room){
      return (<div className="error">
        no such room could be found...
        <Link to ='/rooms' className="btn-primary" >
          back to rooms
        </Link>
      </div>
      );
    }
    const {name,description,capacity,size,price,pets,extras,breakfast,images} = room;
    const[mainImage,...defaultImg] = images;
    return <>
     <StyledHero img ={mainImage  || this.state.defaultBcg}>
      <Banner title ={`${name} room`}>
        <Link to ='/rooms' className="btn-primary">
          back to rooms
        </Link>
      </Banner>
    </StyledHero>
    <section className="single-room">
      <div className="single-room-images">
        {defaultImg.map((item,index)=>{
         return <img key={index} src={item} alt={name}/>
        })}
      </div>
      <div className ="single-room-info">
        <article className="desc">
          <h3>details</h3>
          <p>{description}</p>
        </article>
        <article className="info">
          <h3>info</h3>
        <h6>price :${price}</h6>
        <h6>size :{size} SQFT</h6>
        <h6>
          max capacity :{" "}
          {capacity >1 ? `${capacity} people` :
          `${capacity} person`}
        </h6>
        <h6>{pets ?"pets allowed" : "pets not allowed"}</h6>
        <h6>{breakfast && " free breakfast included"}</h6>
        </article>
      </div>
      <section className="room-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
  

    </section>
    </>
  }
}
