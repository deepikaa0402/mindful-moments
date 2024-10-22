// src/components/Journaling.js
import React, { useState, useEffect } from 'react';

const Journaling = () => {
  const [feeling, setFeeling] = useState('');
  const [gratitude, setGratitude] = useState('');
  const [change, setChange] = useState('');
  const [kindness, setKindness] = useState('');
  const [entries, setEntries] = useState([]);

  // Load entries from localStorage when component mounts
  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    setEntries(storedEntries);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new journal entry
    const newEntry = {
      feeling,
      gratitude,
      change,
      kindness,
      date: new Date().toLocaleString() // Add a timestamp
    };

    // Update entries state
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);

    // Save entry to localStorage
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));

    // Clear the input fields
    setFeeling('');
    setGratitude('');
    setChange('');
    setKindness('');
  };

  return (
    <div className="container">

    <div className='journaling'>
      <h2 className='journaling-heading'>Journaling</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>How did you feel today?</label>
          <textarea 
            rows="4" 
            value={feeling} 
            onChange={(e) => setFeeling(e.target.value)} 
            placeholder="Describe your feelings..." 
            />
        </div>
        <div>
          <label>What are you grateful for?</label>
          <textarea 
            rows="4" 
            value={gratitude} 
            onChange={(e) => setGratitude(e.target.value)} 
            placeholder="Write down what you're grateful for..." 
          />
        </div>
        <div>
          <label>What do you want to change?</label>
          <textarea 
            rows="4" 
            value={change} 
            onChange={(e) => setChange(e.target.value)} 
            placeholder="What would you like to change in your life?" 
            />
        </div>
        <div>
          <label>How did you show kindness today?</label>
          <textarea 
            rows="4" 
            value={kindness} 
            onChange={(e) => setKindness(e.target.value)} 
            placeholder="Describe an act of kindness..." 
            />
        </div>
        <button type="submit">Save Journal Entry</button>
      </form>

      {/* Display Journal Entries */}
      <h3>Your Journal Entries:</h3>
      <div>
        {entries.length === 0 ? (
          <p>No journal entries yet.</p>
        ) : (
          entries.map((entry, index) => (
            <div key={index} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
              <p><strong>Date:</strong> {entry.date}</p>
              <p><strong>Feeling:</strong> {entry.feeling}</p>
              <p><strong>Gratitude:</strong> {entry.gratitude}</p>
              <p><strong>Change:</strong> {entry.change}</p>
              <p><strong>Kindness:</strong> {entry.kindness}</p>
            </div>
          ))
        )}
      </div>
    </div>
        </div>
  );
};

export default Journaling;
