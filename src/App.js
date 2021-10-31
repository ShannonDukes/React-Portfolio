import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';




function App() {

  const [currentPage, handlePageChange] = useState('About Me');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    const page = currentPage;
    switch (page) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  }

  return (
    <main>


      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage(currentPage)
        }
      </div>
      <Footer></Footer>
    </main>
  );

}

export default App;
