import React from 'react'
import { urlFor } from '../../libs/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import { config } from '../../libs/config'
import Image from 'next/image'

const Avatar = ({ username, link = null, avatar }) => {
  const imageProps = useNextSanityImage(config, avatar)
  const showProfileLink = false
  return (
    <>
      <a href="#" className="group block flex-shrink-0">
        <div className="flex items-center">
          <div className={`inline-block h-12 w-12 overflow-hidden rounded-full border border-white object-cover shadow shadow-black/40`}>
            <Image {...imageProps} layout={'responsive'} height={50} width={50} />
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
