import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Select from 'react-select';


const jurisdictionOptions = [
  { value: 'federal', label: 'Federal' },
  { value: 'provincial', label: 'Provincial' },
];

const firstDayOptions = [
  { value: 'today', label: 'Today' },
  { value: 'select', label: 'Select Date' },
];

const wordingOptions = [
  { value: 'atleast', label: 'At least/not less than' },
  { value: 'before', label: 'Before/After' },
  { value: 'within', label: 'Within' },
  { value: 'anyother', label: 'Any other wording' },
];

const timeOptions = [
  { value: 'day', label: 'Day' },
  { value: 'b-day', label: 'Business Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'year', label: 'Year' },
];

class App extends Component {
  state = {
    jurisdictionOption: null,
    firstDayOption: null,
    wordingOption: null,
    timeOption: null,
    date: ''
  }
  handleJurisdictionChange = (jurisdictionOption) => {
    this.setState({ jurisdictionOption });
    console.log(`Option selected:`, jurisdictionOption);
  }

  handlefirstDayChange = (firstDayOption) => {
    this.setState({ firstDayOption });
    console.log(`Option selected:`, firstDayOption);
  }

  handleWordingChange = (wordingOption) => {
    this.setState({ wordingOption });
    console.log(`Option selected:`, wordingOption);
  }

  handleTimeChange = (timeOption) => {
    this.setState({ timeOption });
    console.log(`Option selected:`, timeOption);
  }

  _handleKeyPress = () => {
    this.setState({ date: 'Calculated Date' });
  }

  render() {
    const { jurisdictionOption, firstDayOption, wordingOption, timeOption, date } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Law Calendar
          </p>
          <p>

            Jurisdiction
          </p>

          <Select
            className="App-select"
            value={jurisdictionOption}
            onChange={this.handleJurisdictionChange}
            options={jurisdictionOptions}
          />

          <p>

            First Day
          </p>
          <Select
            className="App-select"
            value={firstDayOption}
            onChange={this.handlefirstDayChange}
            options={firstDayOptions}
          />

          <p>

             Wording
          </p>
          <Select
            className="App-select"
            value={wordingOption}
            onChange={this.handleWordingChange}
            options={wordingOptions}
          />

          <p>

             Time
          </p>
          <Select
            className="App-select"
            value={timeOption}
            onChange={this.handleTimeChange}
            options={timeOptions}
          />
          <input type="submit" value="Submit" onClick={this._handleKeyPress}/>
          <p>
            {date}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
