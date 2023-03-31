import React, { useEffect, useState } from 'react';
import Posts from './components/Posts';
// import Events from './components/Event/Event';
import PostLoadingComponent from './components/PostLoading';
import Hero from './components/Hero';
import Category from './components/Category';
import Footer from './components/Footer';
import { useParams } from 'react-router-dom';


function Connection() {
	const { id } = useParams();


	const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});

    const [currentCategory, setCurrentCategory] = useState('');

	useEffect(() => {
        setCurrentCategory(capitalizeFirstLetter(id));

		setAppState({ loading: true });
		const apiUrl = `http://127.0.0.1:8000/api/blog/id`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setAppState({ loading: false, posts: posts });
			});
	}, [setAppState]);
	return (
		<div className="App">
			{/* <Hero /> */}
			{/* <Services /> */}
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
			<Footer />
		</div>
	);
}
export default Connection;
