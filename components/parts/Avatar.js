import React from 'react'
import { urlFor } from '../../libs/sanity'

const Avatar = ({ username, link = null, avatar }) => {
  const showProfileLink = false
  return (
    <>
      <a href="#" className="group block flex-shrink-0">
        <div className="flex items-center">
          <div>
            {
              <img
                className="inline-block h-12 w-12 rounded-full border border-white object-cover	 shadow shadow-black/40"
                src={urlFor(avatar)}
                alt=""
              />
            }
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{username}</p>
            {showProfileLink && <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>}
          </div>
        </div>
      </a>
    </>
  )
}

export default Avatar
