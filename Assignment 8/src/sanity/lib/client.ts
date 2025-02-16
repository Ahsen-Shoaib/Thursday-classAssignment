import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId,sanityToken } from '../env'

export const client = createClient({
  // projectId,
  // dataset,
  // apiVersion,
  // useCdn: false,
  // token:sanityToken // Set to false if statically generating pages, using ISR or tag-based revalidation
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Safe to expose
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Safe to expose
  useCdn: false, // Set to true if you don’t need fresh data
  token: process.env.SANITY_API_TOKEN,
})
