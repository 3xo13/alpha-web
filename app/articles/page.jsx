'use client'
import React from 'react'
import {v4 as uuidv4} from 'uuid';
import NewStramer from '@/components/staticArticles/NewStramer';
import Link from 'next/link';

const Articles = () => {
    return (
        <div key={uuidv4()} className='w-screen h-fit pt-[220px] mb-20'>
          <NewStramer />
        </div>
    )
}

export default Articles
