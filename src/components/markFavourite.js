import React from 'react';

function MarkFavourite({ favourite, favouriteList }) {
  if (favouriteList === true) {
    return null;
  }
  if (favourite === true) {
    return <i className="fas fa-star" />;
  } else {
    return <i className="far fa-star" />;
  }
}

export default MarkFavourite;
