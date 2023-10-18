import React, { useEffect, useState } from 'react';
import CountryList from './data';
// import fetch from 'node-fetch';

import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState(''); // Store detected language

  // const handleOpen = () => {
  //   setOpen(!open);
  // };

  const fetchData = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('from', 'auto');
    encodedParams.set('to', 'en');
    encodedParams.set('text', 'xin chào');

    const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'e6f81be7d3msh63881845538d5b7p16f3f9jsn3f8b406cce77',
        'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
      },
      body: encodedParams
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };


  return (

    <main>
      <section className='container'>
        <div className='title'>
          <h2>Translate</h2>
          <div className='underline'></div>
        </div>
        <div>
          <div>
            <textarea></textarea>
            <textarea></textarea>
          </div>
          <div>
            <select>
              <option>Detected Language: {detectedLanguage}</option>
              <CountryList />
            </select>
            
            <select>
              <option>choose a language</option>
              <CountryList />
            </select>
          </div>
          <div>
            <button>ENTER</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
