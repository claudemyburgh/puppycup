import React from 'react'
import Link from 'next/link'
import { urlFor } from '../../libs/sanity'
import Avatar from '../parts/Avatar'

const Card = ({ post }) => {
  return (
    <>
      <div className="overflow-hidden rounded-md border border-primary-100 bg-white shadow shadow-primary/10">
        <img className="w-full object-cover object-center md:h-36 lg:h-48" src={urlFor(post.mainImage)} alt={post.title} />
        <div className="relative p-5">
          <div className="mb-2.5 flex">
            <Avatar username={post.username} avatar={post.avatar} />
          </div>
          <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-500">CATEGORY</h2>
          <h1 className="mb-3 text-lg font-medium text-gray-900">The Catalyzer</h1>
          <time className="bold mb-1 text-xs italic tracking-widest text-primary-400">
            Published on: {new Date(post.publishedAt).toDateString()}
          </time>
          <p className="mb-3 leading-relaxed">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
          </p>
          <div className="flex flex-wrap items-center">
            <Link href={`/`}>
              <a className="inline-flex items-center text-primary-600 md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </Link>
            <span className="mr-3 ml-auto inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
              <svg
                className="mr-1 h-4 w-4"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
            <span className="inline-flex items-center text-sm leading-none text-gray-400">
              <svg
                className="mr-1 h-4 w-4"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
