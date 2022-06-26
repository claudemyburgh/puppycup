import { createClient } from 'next-sanity'
import { config } from './config'

const sanityClient = createClient(config)

const previewClient = createClient({
  ...config,
  useCdn: false,
  token: '',
})

export const getClient = (usePreview) => (usePreview ? previewClient : sanityClient)
