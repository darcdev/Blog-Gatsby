import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import usePosts from '../hooks/usePosts';
import PostPreview from '../components/PostPreview';
import Hero from '../components/Hero';
import Insta from '../components/Insta';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Hero />
      <Layout>
        <h1>Home</h1>
        <p>Hello Minnesota!</p>
        <Link to={'/about'}>Learn about me &rarr;</Link>
        <h2>Read my blog </h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}

        <Insta />
      </Layout>
    </>
  );
};
