import React from 'react'

const Country = (props) => {
    const {country} = props;
    const {name, flags ,population,capital,area} = country;

    const handleRemove = (name) =>{
       props.onRemove(name) 
    }
  return (
    <article className='bg-[#34495e] text-white flex justify-center p-[1rem] m-[1rem] items-center rounded-md transition-all duration-300 hover:scale-110'>
        <div>
            <img src={flags.png} alt={name.common} className='w-[10rem] h-[7rem]' />
            <h2>Name : {name.common}</h2>
            <h2>Population : {population}</h2>
            <h3>Capital : {capital}</h3>
            <h3>Area : {area}</h3>
            <button className='bg-red-700 px-6 py-1 rounded-lg hover:bg-black' onClick={()=> {
              handleRemove(name.common)
            }}>Romove Country</button>
        </div>
    </article>
  )
}

export default Country