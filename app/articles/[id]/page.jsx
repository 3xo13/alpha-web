import React from 'react'
import articles from '@/components/staticArticles/articles/articles'

const Article = ({params}) => {
	const id = params.id
	const currentArticle = articles.filter(art => art.id == id)
	return (
		<div className='w-screen h-fit pt-[220px] mb-20 col'>
			{currentArticle[0].article}
		</div>
	)
}

export default Article