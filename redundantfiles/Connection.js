import React, { useEffect, useState } from 'react';
import Posts from './components/Posts';
import Events from './components/Event/Event';
import PostLoadingComponent from './components/PostLoading';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
 

function Connection() {
	const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `http://127.0.0.1:8000/api/blog/`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setAppState({ loading: false, posts: posts });
			});
	}, [setAppState]);
	return (
		<div className="App">
			<Hero />
			<Services />
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
            <Testimonials />
			<Footer />
		</div>
	);
}
export default Connection;
