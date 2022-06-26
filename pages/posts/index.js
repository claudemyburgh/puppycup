import React from 'react'
import { getClient } from '../../libs/sanity.server'
import groq from 'groq'
import Head from 'next/head'
import Link from 'next/link'
import Card from '../../components/blog/Card'

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>PuppyCup | Blog Posts</title>
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
      </Head>
      <div className="wrapper my-10 space-y-10">
        <h1 className="text-5xl font-black tracking-tight">Posts</h1>
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts && posts.map((post) => <Card key={post._id} post={post} />)}
        </section>
      </div>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const posts = await getClient(preview).fetch(groq`
    *[_type == 'post' && publishedAt < now() ] | order(publishedAt, desc){
      _id,
      title,
      "username": author->name,
      "avatar": author->image,
      "categories": categories[]->{_id, title},
      slug,
      mainImage,
      publishedAt
      
    }
  `)

  return {
    props: {
      posts,
    },
  }
}

export default Posts
