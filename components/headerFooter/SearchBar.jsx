'use client'
import React from 'react'
import { useState, useRef } from "react";
import {v4 as uuidv4} from 'uuid'; 
import { useRouter } from 'next/navigation';

const SearchBar = () => {
        const router = useRouter();
        const inputRef = useRef();

    const handleChange = (e) => {
        inputRef.current = e.target.value; 
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!inputRef.current)return;
        // names in the database are all hyphen sepratedlo
        const searchQuery = inputRef.current.trim().split(' ').join('-'); 
        if(!searchQuery)return;
        console.log("🚀 ~ file: SearchBar.jsx:19 ~ handleSubmit ~ searchQuery:", searchQuery)
        
        router.push(`/search/${searchQuery}`)
    }
  return (
    <form key={uuidv4()} className='w-72 h-10 bg-white flex-row-between shadow rounded-2xl p-1 ' onSubmit={e => handleSubmit(e)} >
    <button >
        <img src="/assets/icons/search.png" alt="search" className='w-5 h-5 m-1' />
    </button>
    <input type="text" className='w-5/6 focus:outline-none'
        onChange={ e => handleChange(e)} 
        placeholder='Search by Part NO. or Name'
    />
</form> 
  )
}

export default SearchBar