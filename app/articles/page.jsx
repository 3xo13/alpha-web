'use client'
import React from 'react'
import {v4 as uuidv4} from 'uuid';
import Link from 'next/link';
import Image from 'next/image';
import articles from '@/components/staticArticles/articles/articles';

const Articles = () => {
  const articleList = articles.map(art => {
    return(
      <Link href={`/articles/${art.id}`}>
      <div className='articleBtn max-w-64 lg:w-[40dvw] w-[80dvw] border-2 border-black rounded-lg flex flex-row p-3 gap-5 ml-10 hover:bg-gray-100'>
        <Image
          width={50}
          height={50}
          src={art.image} />
        <p>{art.title}</p>
      </div>
    </Link>)
  })
    return (
        <div key={uuidv4()} className='w-screen h-fit pt-[220px] mb-20 col'>
            {articleList}
        </div>
    )
}

export default Articles
