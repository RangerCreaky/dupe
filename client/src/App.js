import React, { useEffect } from 'react';
import Carousel from './components/Carousel';
import CardSmall from './components/CardSmall';
import CardRender from './components/CardRender';
import Alert from './components/Alert';
import { smallcards } from './utils/smallcards';
import { useDispatch } from 'react-redux';
import { loadUser } from './slices/authSlice';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('hello world');
    dispatch(loadUser('dummy'));
  }, [dispatch])

  const renderSmallCards = () => {
    return smallcards.map((card) => {
      return <CardSmall src={card.src} text={card.text} />;
    });
  };

  return (
    <div className="scroll-smooth bg-white">
      <Alert />
      <Carousel />
      <div className="flex mt-8 flex-col md:flex-row justify-center items-center">
        {renderSmallCards()}
      </div>

      <CardRender />
    </div>
  )
};

export default App;
