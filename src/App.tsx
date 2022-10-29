import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { MainPage, RegistrationPage} from '@pages';
import { Layout } from "modules/Layout";
import './static/css/icon-fonts.css'
import styles from './App.module.scss'

// TODO: Implement Auth

const MainRoutes = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route path='/main' element={<MainPage />} />
      <Route path='*' element={<Navigate to='/main' />} />
      <Route index element={<Navigate to='/registration' />} />
    </Route>
    <Route path='/registration' element={<RegistrationPage />} ></Route>
  </Routes>
);

function App() {
  return <div className={styles.App}><BrowserRouter><MainRoutes /></BrowserRouter></div>;
}

export default App;
