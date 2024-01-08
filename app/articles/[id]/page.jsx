'use client'
import React from 'react'
import articles from '@/components/staticArticles/articles/articles'
import EarlyStreamer from '@/components/staticArticles/EarlyStreamer'

const Article = ({params}) => {
	const id = params.id
	
	return (
		<div className='w-screen h-fit pt-[220px] mb-20 col'>
			{id == 1 ? <EarlyStreamer /> : <></>}
		</div>
	)
}

export default Article