import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../component/Title';

const getUnique =((item,value)=>{
    return [...new Set(item.map(item =>item[value]))];
});
 

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    //get unique
    let types = getUnique(rooms,"type");
    //add all
    types =['all',...types];
    //map to jsx
    types = types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
       });
    let people = getUnique(rooms,'capacity');
    people = people.map((item,index)=>{
    return <option key={index} value={item}>{item}</option>

    })
    return (
        <section className="filter-container">
           <Title title="search rooms"/>
           <form className="filter-form">
               {}
               <div className="form-group">
                   <label htmlFor="type">room type</label>
                   <select name="type" id ="type" value ={type}
                   className="form-control" onChange={handleChange}>
                       {types}
                   </select>
               </div>
               {}
               {/*guest*/}
               <div className="form-group">
                   <label htmlFor="capacity">Guests</label>
                   <select name="capacity" id ="capacity" value ={capacity}
                   className="form-control" onChange={handleChange}>
                       {people}
                   </select>
               </div>
               {/* end of guest*/}
               {/*rooom price*/}
                <div className="form-group">
                    <label htmlFor="price">
                        room price : ${price}
                    </label>
                    <input type="range" name="price" min={minPrice}
                     max={maxPrice} id ='price' value={price}
                     onChange= {handleChange} className="form-control"/>

                </div>
               {/* end of rooom price*/}
               {/*size*/}
               <div className="form-group">
                   <label htmlFor="size">Room Size</label>
                   <div className="size-inputs">
                       <input type="number" className="size-input" name="minSize" id="size"
                       value={minSize} onChange={handleChange}/>
                        <input type="number" className="size-input" name="maxSize" id="size"
                       value={maxSize} onChange={handleChange}/>
                   </div>
               </div>
               {/* end of size*/}
                {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div>
        {/* end of extras type */}
           </form>
        </section>
    )
}
