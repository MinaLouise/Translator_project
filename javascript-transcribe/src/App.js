import React from 'react';
import CountryList from './data';
import './App.css';

function App() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
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
              <option>choose a country</option>
              <CountryList />
            </select>
          
            <select>
              <option>choose a country</option>
              <CountryList />
            </select>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;