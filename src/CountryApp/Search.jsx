import React, { useEffect, useState } from 'react'

const Search = (props) => {
    const [searchText , setSearchText] = useState("")

    const handleChange = (e) =>{
        setSearchText(e.target.value);
        
    }

    useEffect(()=>{
       props.onSearch(searchText)
    },[searchText])
  return (
    <div>
        <input type="text" placeholder='search country' value={searchText} 
        onChange={handleChange}
        className='border-2 border-black bg-cyan-200 rounded-lg px-2 focus:bg-transparent' />
    </div>
  )
}

export default Search