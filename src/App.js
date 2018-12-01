import React from 'react';

function App() {
  const contacts = [
    {
      id: 1,
      name: 'John Smith',
      phoneNumber: 48500600700,
      eMail: 'john@smith.org',
      address: {
        city: 'Gdansk',
        street: 'Ogarna 1'
      }
    },
    {
      id: 2,
      name: 'Jaś Fasola',
      phoneNumber: 4860125323,
      eMail: 'jas@fasol.com',
      address: {
        city: 'Gdansk',
        street: 'Dmowskiego 12'
      }
    },
    {
      id: 3,
      name: 'Anna Nowak',
      phoneNumber: 48702942134,
      eMail: 'nowaczka@gmail.com',
      address: {
        city: 'Gdynia',
        street: 'Władysława 4'
      }
    }
  ];
  return (
    <section>
      <h1>Contacts</h1>
      {contacts.map(contact => (
        <div className="card col-md-2" key={contact.id}>
          <span className="card-body">
            <h2 className="card-title">{contact.name}</h2>
            <p>Phone: +{contact.phoneNumber}</p>
            <p>
              Address: {contact.address.city}, {contact.address.street}
            </p>
          </span>
        </div>
      ))}
    </section>
  );
}

export default App;
