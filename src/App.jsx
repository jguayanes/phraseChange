import phrases from './assets/phrases.json';
import { getRandomNumber } from './utils/getRandom';
import Phrase from './components/phrase/phrase';
import Button from './components/button/button';
import { useState } from 'react';

import space_1 from './assets/space_1.jpg';
import space_2 from './assets/space_2.jpg';
import space_3 from './assets/space_3.jpg';
import space_4 from './assets/space_4.jpg';


import './App.css'

const brackgroundImg = [space_1, space_2,space_3,space_4]

function App() { 
  const getRandomPhrase = () => phrases[getRandomNumber(phrases.length - 1)];
  const getRandomImg = () => brackgroundImg[getRandomNumber(brackgroundImg.length - 1)];

  
  const [background,setBackground]= useState(getRandomImg());
  const [phraseObject, setPhraseObjectt] = useState(getRandomPhrase());
  const changePhrase = () => {
    let newBackground = getRandomImg();
    setBackground (newBackground);

    while (newBackground === background){
      newBackground = getRandomImg();
    }

    let newPhrase = getRandomPhrase();
    setPhraseObjectt(newPhrase);
    setBackground(newBackground);
  };
  return(
  <div className='phrase__container' style={{backgroundImage: `url(${background})` }}>
    <h1>INFOGALAX</h1>
    <br />
    <Phrase phrase={phraseObject.phrase}/>
    <p className='autor'> <b>Autor:</b> {phraseObject.author} </p>

    <div className='button__container'>
    <Button handleClick={changePhrase} />
    </div>
    
  </div>

  )
}

export default App
