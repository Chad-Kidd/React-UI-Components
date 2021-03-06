import React from 'react';
import './App.css';
import './components/HeaderComponents/HeaderContainer';
import './components/HeaderComponents/ImageThumbnail';
import HeaderContent from './components/HeaderComponents/HeaderContent';

const App = () => {
  return (
    <div>
      <HeaderContent />
      <p>
        Begin by exploring the `components` directory. You'll notice we have a
        few files that we've already included in there to get you started right
        away building components. You'll need to make sure you include your
        components that you build in this file to watch your app come to life
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
    </div>
  );
};

export default App;
