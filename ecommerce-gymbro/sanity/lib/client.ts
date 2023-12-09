import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion: '2023-08-12',
  dataset: 'production',
  projectId: 'tne1grog',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})
