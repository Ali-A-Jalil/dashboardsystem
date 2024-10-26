import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className='searchBox position-relative d-flex align-items-center'>

        <IoSearchSharp className="mr-2"/>

        <input type="text" placeholder="Search..." />
        {/* <i className="fa fa-search position-absolute" aria-hidden="true"></i> */}
    </div>
  )
}

export default Search