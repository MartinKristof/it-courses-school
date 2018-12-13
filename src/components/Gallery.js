import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'static/images/classroom-2093743_1920.jpg',
    thumbnail: 'static/images/thumbs/classroom-2093743_1920.jpg',
    originalAlt: 'Course',
    thumbnailAlt: 'Course',
  },
  {
    original: 'static/images/classroom-2093744_1920.jpg',
    thumbnail: 'static/images/thumbs/classroom-2093744_1920.jpg',
    originalAlt: 'Course',
    thumbnailAlt: 'Course',
  },
  {
    original: 'static/images/coding-924920_1920.jpg',
    thumbnail: 'static/images/thumbs/coding-924920_1920.jpg',
    originalAlt: 'Course',
    thumbnailAlt: 'Course',
  },
  {
    original: 'static/images/artificial-intelligence-2167835_1920.jpg',
    thumbnail: 'static/images/thumbs/artificial-intelligence-2167835_1920.jpg',
    originalAlt: 'Course',
    thumbnailAlt: 'Course',
  },
  {
    original: 'static/images/office-1209640_1920.jpg',
    thumbnail: 'static/images/thumbs/office-1209640_1920.jpg',
    originalAlt: 'Course',
    thumbnailAlt: 'Course',
  },
  {
    original: 'static/images/programming-593312_1920.jpg',
    thumbnail: 'static/images/thumbs/programming-593312_1920.jpg',
    originalAlt: 'Course',
    thumbnailAlt: 'Course',
  },
];

const Gallery = () => <ImageGallery items={images} />;

export default Gallery;
