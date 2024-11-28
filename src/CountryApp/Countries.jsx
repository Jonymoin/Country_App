import React from 'react';
import {v4 as uuidv4} from "uuid";
import Country from './Country';

const Countries = (props) => {
  return (
    <section className='grid md:grid-cols-2 xl:grid-cols-4 p-[3rem]'>
        {props.countries.map((country)=> {
            const countryNew = {country, id: uuidv4()}

            return <Country {...countryNew} key={countryNew.id} onRemove={props.onRemove}/>
        })}
    </section>
  )
}

export default Countries