import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'

import './index.css'

const initialSuggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
    suggestionsList: initialSuggestionsList,
  }

  updateSearchInput = value => {
    const {searchInput} = this.state
    this.setState((searchInput: value))
  }

  onChangeSearchInput = event => {
    const {suggestionsList} = this.state
    const searchValue = event.target.value

    const filteredSuggestions = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchValue.toLowerCase()),
    )
    this.setState({suggestionsList: filteredSuggestions})
  }

  render() {
    const {suggestionsList, searchInput} = this.state
    // const {suggestionsList} = this.props
    // const searchResults = suggestionsList.filter(eachSuggestion =>
    //   eachSuggestion.suggestion
    //     .toLowerCase()
    //     .includes(searchInput.toLowerCase()),
    // )

    return (
      <div className="app-container">
        <div className="google-suggestions-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-input-suggestions-container">
            <div className="search-input-container">
              <img
                alt="search icon"
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search Google"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="suggestions-list">
              {suggestionsList.map(eachSuggestion => (
                <SuggestionItem
                  key={eachSuggestion.id}
                  suggestionDetails={eachSuggestion}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
