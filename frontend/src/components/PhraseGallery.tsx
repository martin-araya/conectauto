import { useState, useEffect, useMemo } from 'react';

function PhraseGallery() {
    const phrases = useMemo(() => [
      "Do you need a technical check-up for your vehicle?",
      "Is your car ready for the road?",
      "Schedule your car's maintenance today!",
      "Trust us to care for your car."
    ], []);
  
    const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const nextPhrase = () => {
        const nextIndex = (index + 1) % phrases.length;
        setCurrentPhrase(phrases[nextIndex]);
        setIndex(nextIndex);
      };
  
      const phraseInterval = setInterval(nextPhrase, 3000);
  
      return () => clearInterval(phraseInterval);
    }, [index, phrases]);
  
    return (
      <div className="flex flex-col items-center mt-4 mb-1" >
        <h1 className="text-4xl mb-4">{currentPhrase}</h1>
      </div>
    );
  }

export default PhraseGallery;
