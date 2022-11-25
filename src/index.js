import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className="game_window">
      <div className='hangwordzone'>
        <div className='hangarea' title='hangarea'>
          <img className="hangman" title='hangman' src="./assets/forca0.png" alt="1 out of 6" />
        </div>
        <div className='wordarea'>
          <button className='button'>Escolher Palavra</button>
        </div>
      </div>
    </div>
    <footer className='footer'>
      <div className='words'>
        <div className='letters'>a</div>
        <div className='guess'>guess</div>
      </div>

    </footer>
  </>
);
