import React from 'react';

function ContactTile({ item }) {
  return (
    <div className="card" key={item.id}>
      <div className="form-check float-right">
        <input className="form-check-input" type="checkbox" value="" id="favouriteCheckbox" />
        <label className="form-check-label" for="favouriteCheckbox">
          Favourite
        </label>
      </div>
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
