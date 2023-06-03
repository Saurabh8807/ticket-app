import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/Homescreen/homescreen';
import SummaryScreen from './screens/Summeryscreen/summeryScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/summary/:showId" element={<SummaryScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
