"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const [sadGifIndex, setSadGifIndex] = useState(0);
  const [initialGifVisible, setInitialGifVisible] = useState(true);

  const handleNoClick = () => {
    setNoCount(noCount + 1);

    if (noCount === 0) {
      setInitialGifVisible(false);
    }

    // Change the sad gif on each subsequent "No" click
    setSadGifIndex((prevIndex) => (prevIndex + 1) % 9);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "With a Kitkat and ferrero Chocolate?",
      "What about Loaded Fries?",
      "PLEASE Mera Chand",
      "What about White FLowers?",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "I will make you happy I promise",
      "please meri jaan",
      ":((((",
      "You my PRETTY BABY",
      "ILOVEYOU?",
      "No :(",
      "Aren't you my white Flower?",
      "No second thoughts?",
      "Any reconsideration?",
      "No chance? :((",
      "Still a no? :((",
      "No possibility? :((",
      "Absolutely final? :((",
      "No :(((("
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div  className={`flex h-screen flex-col items-center justify-center mx-2 my-3 px-3 border border-gray-200`}>
     
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold text-center">Yayyyyy!!! I love you my Moon!! </div>
          <h5 className="font-bold text-center">Please Come back, I will make everything right I promise, I will take care of you.</h5>
          <a href="https://maheera-card.netlify.app/" className="text-blue-500 underline block text-center mt-2">
        Card for my lovey Maheera
      </a>
        </>
      ) : (
        <>
          <p className="text-center">I am Sorry for everything</p>
          {/* Conditionally render the initial gif or sad gif based on noCount */}
          {initialGifVisible ? (
            <img
              className="h-[150px] mt-6 mb-4" // Adjusted margin for smaller devices
              src="propose.gif"
              alt="Initial Gif"
            />
          ) : (
            <img
              className="h-[200px] mt-6 mb-4" // Adjusted margin for smaller devices
              src={`/sad/sad${sadGifIndex}.gif`}
              alt={`Sad Gif ${sadGifIndex}`}
            />
          )}
          <h1 className="my-4 text-4xl text-center">Will you be my Valentine Maheera?</h1>
          <div className="flex flex-col items-center">
            <button
              className={`mb-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 ${yesPressed && 'hidden'}`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    
    </div>
  );
}