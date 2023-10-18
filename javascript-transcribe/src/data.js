function CountryList() {
  n
  const countryCodes = [
    'English',
    'Spanish',
    'Mandarin Chinese',
    'Hindi',
    'Arabic',
    'Portuguese',
    'German',
    'Japanese',
    'French',
    'Punjabi',
    'Vietnamese',
  ];

  return countryCodes.map((country, index) => (
    <option key={index} value={country}>
      {country}
    </option>
  ));
}

export default CountryList;
