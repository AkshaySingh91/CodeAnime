import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AlgorithmPage } from './Component/algorithmPage/AlgorithmPage';
import Card from './Component/Card';
import { algorithmCard } from './Datastore/algoritmInfo';
import AlgorithmVisualization from './Component/visualizationPage';
import css from "./App.module.css"

const ThemeContext = createContext('dark');
const App = () => {
  const [theme, setTheme] = useState('dark');
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact path='/'
            element={<HomePage algorithmCard={algorithmCard} />}
          ></Route>
          <Route
            exact path='/BinaryTree'
            element={<AlgorithmPage dataStructureName={'BinaryTree'} algorithmCard={algorithmCard} />}
          ></Route>
          <Route
            exact path='/Array'
            element={<AlgorithmPage dataStructureName={'Array'} algorithmCard={algorithmCard} />}
          ></Route>
          <Route
            exact path='/LinkedList'
            element={<AlgorithmPage dataStructureName={'LinkedList'} algorithmCard={algorithmCard} />}
          ></Route>
          <Route
            exact path='/:dataStructure/:algoName/algorithm'
            element={<AlgorithmVisualization />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

const HomePage = ({ algorithmCard }) => {
  return (
    <>
      <canvas className={css[`${"backgroundCanvas"}`]}></canvas>
      <div className={css[`${"algorithmList"}`]}>
        <div className={css[`${"algorithm-grid"}`]}>
          {algorithmCard.map((algo) => (
            <Card
              key={algo.path}
              path={algo.path}
              name={algo.name}
              previewSvg={algo.previewSvg}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
