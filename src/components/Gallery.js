import React from 'react';
import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';

const Gallery = ({ images }) => <ImageGallery items={images} />;

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Gallery;
