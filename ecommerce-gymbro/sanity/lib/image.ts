import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image) => {
  try {
    // Check if source is defined
    if (!source) {
      throw new Error('Image source is undefined.');
    }

    // Check if imageBuilder is available
    if (!imageBuilder) {
      throw new Error('Image builder is not initialized.');
    }

    // Attempt to resolve the image URL
    const imageUrl = imageBuilder.image(source).auto('format').fit('max').url();

    // Check if imageUrl is defined
    if (!imageUrl) {
      throw new Error('Failed to resolve image URL.');
    }

    return imageUrl;
  } catch (error) {
    // Log the error or handle it appropriately
    console.error('Error in urlForImage:', error);

    // Return a fallback or default image URL
    return '/path/to/default-image.jpg';
  }
};


