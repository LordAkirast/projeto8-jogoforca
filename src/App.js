import { useState } from 'react';

export default function App() {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const [clicked, setclicked] = useState(false);
    const alphaClicked = [];

    function clickedLetter(a) {
        alphaClicked.push(a)
        // setclicked(current => !current);
        console.log(alphaClicked)

    }


    return (
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
                    {/* <div className='letters'></div> */}
                    {alphabet.map((a) => (<p key={a} onClick={clickedLetter} className={clicked ? 'letterClicked' : 'letter'}>{a.toUpperCase()}</p>))}
                </div>
                <div className='guess'>guess</div>


            </footer>
        </>

    )


}