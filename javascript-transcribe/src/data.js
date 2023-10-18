// data.js
import React from 'react';

function CountryList() {
  const countryCodes = [
    { name: 'English'},
    { name: 'Spanish'},
    { name: 'Mandarin Chinese'},
    { name: 'Hindi'},
    { name: 'Arabic'},
    { name: 'Portuguese'},
    { name: 'German'},
    { name: 'Japanese'},
    { name: 'French'},
    { name: 'Punjabi'},
    { name: 'Vietnamese'},
  ];

  return countryCodes.map((country, index) => (
    <option key={index} value={country.code}>
      {country.name}
    </option>
  ));
}

export default CountryList;
