import React from 'react';
import MarkFavourite from './markFavourite.js';

function ContactTile({ item, favouriteList }) {
  return (
    <div className="card text-center" key={item.id}>
      <MarkFavourite favourite={item.favourite} favouriteList={favouriteList} />
      <span className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>Phone: +{item.phoneNumber}</p>
        <p>
          Address: {item.address.city}, {item.address.street}
        </p>
      </span>
    </div>
  );
}

export default ContactTile;
