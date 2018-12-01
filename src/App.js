import React, { Component } from 'react';
import ContactTile from './components/contact.js';
import contactsData from './data/contacts.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      searchInputValue: ''
    };
  }

  componentDidMount() {
    //change to fetch
    this.setState({
      contacts: contactsData
    });
  }

  updateInputValue = event => {
    this.setState({
      searchInputValue: event.target.value
    });
  };

  handleSearchClick = () => {
    if (this.state.searchInputValue) {
      const filteredContacts = this.state.contacts.filter(contact => {
        return contact.name.includes(this.state.searchInputValue);
      });
      this.setState({ contacts: filteredContacts });
    } else {
      this.setState({ contacts: contactsData });
    }
  };

  render() {
    return (
      <div>
        <div className="float-right">
          <input value={this.state.searchInputValue} onChange={this.updateInputValue} />
          <button type="button" className="btn btn-primary" onClick={this.handleSearchClick}>
            Search
          </button>
        </div>
        <section className="row">
          <div className="column">
            <h1>Contacts</h1>
            {this.state.contacts.map(contact => (
              <ContactTile key={contact.id} item={contact} favouriteList={false} />
            ))}
          </div>
          <div className="column">
            <h1>Favourite contacts</h1>
            {this.state.contacts
              .filter(contact => contact.favourite)
              .map(contact => (
                <ContactTile key={contact.id} item={contact} favouriteList={true} />
              ))}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
