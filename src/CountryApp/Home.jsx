import React, { useEffect, useState } from 'react'
import Countries from './Countries';
import Search from './Search';

const url = "https://restcountries.com/v3.1/all"


const Home = () => {

    const [isLoading , setISLoading] = useState(true);
    const [error , setError] = useState(null);
    const [countries , setCountries] = useState([]);
    const [filtered , setFiltered] = useState(countries);

    const fetchData = async (url) => {
        setISLoading(true);

        try{
            const response = await fetch(url);
        const data = await response.json();
        setCountries(data);
        setFiltered(data);
        setISLoading(false);
        setError(null);
        console.log(countries);
        }catch(error){
            setISLoading(false);
            setError(error);
        }
    }


    useEffect(() => {
         fetchData(url)
    },[]);

    const HandleRemoveCountry = (name) =>{
        const filter = filtered.filter((country)=> country.name.common !== name);
        setFiltered(filter)
    }

    const handleSearch = (searchValue) =>{
       let value = searchValue.toLowerCase();
       const newCountries = countries.filter((country) => {
        const countryName = country.name.common.toLowerCase();
        return countryName.startsWith(value)
       });
       setFiltered(newCountries)
    }

  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-center font-bold text-4xl p-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-transparent bg-clip-text'>Country App</h1>
        <Search onSearch={handleSearch}/>
        {isLoading && <h2>Loading Country Data ....</h2>}
        {error && <h2> {error.message}</h2>}
        {countries && <Countries countries={filtered}onRemove={HandleRemoveCountry}/>}
    </div>
  )
}

export default Home