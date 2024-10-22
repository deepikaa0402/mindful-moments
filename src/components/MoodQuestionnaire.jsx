// import React, { useState } from 'react';
// import { quotes } from './src/quotes'; // Import your quotes

// const MoodQuestionnaire = () => {
//   const [mood, setMood] = useState('');
//   const [scripture, setScripture] = useState('');
//   const [quote, setQuote] = useState('');

//   const moods = ['Happy', 'Sad', 'Anxious', 'Dull', 'Lazy'];
//   const scriptures = ['Gita', 'Bible', 'Quran'];

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Check if mood is selected and generate a random quote from that mood
//     if (mood) {
//       const randomQuote = quotes[mood][Math.floor(Math.random() * quotes[mood].length)];
//       setQuote(randomQuote);
//     }
//   };

//   return (
//     <div>
//       <h2>How are you feeling today?</h2>
//       <form onSubmit={handleSubmit}>
//         {moods.map((moodOption) => (
//           <label key={moodOption}>
//             <input
//               type="radio"
//               value={moodOption}
//               checked={mood === moodOption}
//               onChange={(e) => setMood(e.target.value)}
//               required
//             />
//             {moodOption}
//           </label>
//         ))}
//         <h3>Select a scripture for a motivational quote:</h3>
//         {scriptures.map((scriptureOption) => (
//           <label key={scriptureOption}>
//             <input
//               type="radio"
//               value={scriptureOption}
//               checked={scripture === scriptureOption}
//               onChange={(e) => setScripture(e.target.value)}
//               required
//             />
//             {scriptureOption}
//           </label>
//         ))}
//         <button type="submit">Get Quote</button>
//       </form>

//       {/* Display the generated quote if available */}
//       {quote && (
//         <div>
//           <h3>Your Motivational Quote:</h3>
//           <p>{quote}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MoodQuestionnaire;

// src/components/MoodQuestionnaire.js
// src/components/MoodQuestionnaire.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { quotes } from '../quotes'; // Adjust the path based on your project structure

const MoodQuestionnaire = () => {
  const [mood, setMood] = useState('');
  const [scripture, setScripture] = useState('');
  const [quote, setQuote] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  const handleScriptureChange = (event) => {
    setScripture(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mood) {
      const randomQuote = quotes[mood][Math.floor(Math.random() * quotes[mood].length)];
      setQuote(randomQuote);
    } else {
      setQuote('Please select a mood.');
    }
  };

  const handleJournalingClick = () => {
    navigate('/journaling'); // Navigate to journaling page
  };

  return (
    <div className="mood-questionnaire">
      <h2 className='mood-heading'>How Are You Feeling Today?</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="radio"
              value="Happy"
              checked={mood === 'Happy'}
              onChange={handleMoodChange}
            />
            Happy
          </label>
          <label>
            <input
              type="radio"
              value="Sad"
              checked={mood === 'Sad'}
              onChange={handleMoodChange}
            />
            Sad
          </label>
          <label>
            <input
              type="radio"
              value="Anxious"
              checked={mood === 'Anxious'}
              onChange={handleMoodChange}
            />
            Anxious
          </label>
          <label>
            <input
              type="radio"
              value="Dull"
              checked={mood === 'Dull'}
              onChange={handleMoodChange}
            />
            Dull
          </label>
          <label>
            <input
              type="radio"
              value="Lazy"
              checked={mood === 'Lazy'}
              onChange={handleMoodChange}
            />
            Lazy
          </label>
        </div>
        
        <div>
          <label>
            Select a Holy Scripture:
            <select value={scripture} onChange={handleScriptureChange}>
              <option value="">--Choose an option--</option>
              <option value="Gita">Bhagavad Gita</option>
              <option value="Bible">Bible</option>
              <option value="Quran">Quran</option>
            </select>
          </label>
        </div>
        
        <button type="submit">Get Quote</button>
      </form>
      
      {quote && (
        <div>
          <p className="quote">{quote}</p>
          <button onClick={handleJournalingClick}>Go to Journaling</button> {/* Link to Journaling */}
        </div>
      )}
    </div>
  );
};

export default MoodQuestionnaire;
