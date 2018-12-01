import React from 'react';
import ContactTile from './components/contact.js';
import contactsData from './data/contacts.json';

function App() {
  const contacts = contactsData;

  return (
    <section className="row">
      <div className="column">
        <h1>Contacts</h1>
        {contacts.map(contact => (
          <ContactTile key={contact.id} item={contact} favouriteList={false} />
        ))}
      </div>
      <div className="column">
        <h1>Favourite contacts</h1>
        {contacts
          .filter(contact => contact.favourite)
          .map(contact => (
            <ContactTile key={contact.id} item={contact} favouriteList={true} />
          ))}
      </div>
    </section>
  );
}

export default App;
