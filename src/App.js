import React, { Component } from 'react';
import ContactTile from './components/contact.js';
import SearchComponent from './components/searchComponent.js';
import contactsData from './data/contacts.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      searchInputValue: '',
      alphabeticOrder: true
    };
  }

  componentDidMount() {
    //change to fetch
    this.setState({
      contacts: contactsData
    });
  }

  updateInputValue = event => {
    const searchCondition = event.target.value;
    const filteredContacts = this.state.contacts.filter(contact => {
      return (
        contact.name.includes(searchCondition) ||
        contact.email.includes(searchCondition) ||
        contact.address.city.includes(searchCondition) ||
        contact.address.street.includes(searchCondition)
      );
    });
    this.setState({
      contacts: filteredContacts
    });
    if (event.target.value === '') {
      this.setState({
        contacts: contactsData
      });
    }
  };

  sortClick = () => {
    const contacts = this.state.contacts;
    const sortOrder = this.state.alphabeticOrder;
    if (sortOrder) {
      this.setState({
        contacts: contacts.sort((a, b) => a.name.localeCompare(b.name))
      });
    } else {
      this.setState({
        contacts: contacts.sort((a, b) => b.name.localeCompare(a.name))
      });
    }
    this.setState({ alphabeticOrder: !sortOrder });
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <button type="button" className="btn btn-primary" onClick={this.sortClick}>
              Sort alphabetically{' '}
              {this.state.alphabeticOrder ? (
                <i class="fas fa-arrow-up" />
              ) : (
                <i class="fas fa-arrow-down" />
              )}
            </button>
          </div>
          <div className="float-right">
            <SearchComponent
              updateInput={this.updateInputValue}
              inputValue={this.state.searchInputValue}
            />
          </div>
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
