import React, { useState } from 'react';

const App = () => {
  const [inputString, setInputString] = useState('');
  const [videoData, setVideoData] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setVideoData(inputString);
    console.log(videoData);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className='search-container'>
            <input
              type="text"
              name="search"
              placeholder="Search..."
              value={inputString}
              onChange={(e) => setInputString(e.target.value)}
              className="search-bar"
            />
            <br />
            <input type="submit" value="Search" className="search-button" />
          </div>
        </form>
      </div>
      <div className="container2">
        <div className="box" id="box1">
          <img src="https://c:\Users\mohit\Downloads\IMG20231013103440 (2) (1).jpg" alt="Image 1" />
        </div>
        <div className="box" id="box2">
          <img src="https://c:\Users\mohit\Downloads\IMG20231013103440 (2) (1).jpg" alt="Image 1" />
        </div>
        <div className="box" id="box3">
          <img src="https://c:\Users\mohit\Downloads\IMG20231013103440 (2) (1).jpg" alt="Image 1" />
        </div>
      </div>
    </>
  );
};

export default App;
