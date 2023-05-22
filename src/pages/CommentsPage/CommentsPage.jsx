import React from 'react'
import Footer from '../../components/Layout/Footer/Footer'
import Navigation from '../../components/Layout/Navigation/Navigation'
import {useGetCommentsQuery} from "../../store/bicycle.api.js";

const CommentsPage = () => {
	const {data= [], isLoading} = useGetCommentsQuery()
	
	return (
		<>
			<Navigation />
			{data?.map(comment => <div key={comment.id}>{comment.title}</div>)}
			<Footer />
		</>
	)
}

export default CommentsPage
