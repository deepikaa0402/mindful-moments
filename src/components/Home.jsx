import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState('');
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');

  // Sample articles data
  const articles = [
    {
      title: "The Importance of Mindfulness",
      description: "Exploring how mindfulness can enhance your daily life.",
      image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluZGZ1bG5lc3N8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Journaling for Emotional Health",
      description: "How journaling can help improve mental health.",
      image: "https://plus.unsplash.com/premium_photo-1684444605542-93725082d214?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am91cm5hbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Finding Peace in Chaos",
      description: "Techniques to find tranquility during stressful times.",
      image: "https://images.unsplash.com/photo-1634980010378-ca5008770aa9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5JTIwc3Vuc2V0fGVufDB8fDB8fHww",
    },
    {
      title: "Quotes to Inspire Growth",
      description: "A collection of quotes that promote personal development.",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3Jvd3RofGVufDB8fDB8fHww",
    },
    {
      title: "Meditation for Beginners",
      description: "A beginner's guide to starting a meditation practice.",
      image: "https://plus.unsplash.com/premium_photo-1682091886381-862d800daed0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGliZXRhbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "The Power of Gratitude",
      description: "How gratitude can transform your mindset.",
      image: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGhhbmslMjB5b3UlMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D",
    },
  ];


  const handleSubmit = (e) => {
    e.pventDefault();
    const contactData = { name, issue, description };
    console.log('Contact Us Form Data:', contactData);
    setName('');
    setIssue('');
    setDescription('');
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav>
        <img src='./src/assets/harmony.png' className='harmony'></img><h1>Mindful Moments</h1>
        <ul>
          <li><img src="./src/assets/user.png" /><Link to="#about">About Us</Link></li>
          <li><img src="./src/assets/phone.png" /><Link to="#contact">Contact Us</Link></li>
          <li><img src="./src/assets/enter.png" /><Link to="/login">Login / Sign Up</Link></li>
        </ul>
      </nav>
      {/* About Us Section */}
      <section id="about">
        <h2>About Us</h2>
        <p>At Mindful Moments, we believe in the transformative power of reflection and spirituality.
          Our mission is to provide a serene space where individuals can explore their emotions, embrace their feelings, and find solace through quotes and journaling.
          We aim to inspire personal growth and inner peace by connecting you with wisdom from sacred texts and encouraging daily practices of gratitude and mindfulness.</p>
        <p>Our platform offers a gentle guiding hand to those navigating life’s ups and downs.
          Whether you seek motivation or simply a moment of calm, our thoughtfully curated quotes and journaling prompts are designed to uplift your spirit and foster a deeper connection with yourself.
          Join us on this journey of self-discovery and let your mindful moments unfold.</p>
      </section>

      {/* Blog Section */}
      <section id="blog">
        <h2>Blogs and Articles</h2>
        <div className="blog-container">
          {articles.map((article, index) => (
            <div className="blog-card" key={index}>
              <img src={article.image} alt={article.title} />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact">
        <h2>Contact Us</h2>
        <p>If you have any queries, please reach out to us!</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="issue">Issue:</label>
            <input type="text" id="issue" value={issue} onChange={(e) => setIssue(e.target.value)} required />          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>);
};
export default Home;
