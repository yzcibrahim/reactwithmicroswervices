import logo from './logo.svg';
import userInfo from './UserStorage';
import './App.css';
import axios from 'axios';
import React, { Component, useState,useContext, useEffect } from 'react';
import { AddLng } from './AddLng';
import Languages from './Languages';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Word from './Word';
import WordUser from './WordUser';
import Login from './Login';

export default function App(){
  const[languages,setLanguages]=useState({ id: 1, code: 'tr', name: 'türkçe' });
  const[token,setToken]=useState('');
  
  const refreshData = () => {
    fetch("http://localhost:44238/api/langs")
      .then((res) => { return res.json() })
      .then((result) => {
        console.log(result);
        setLanguages(result);
      });
  }

  const setEkelencek = (event) => {
    let existingState = this.state.eklenecekLng;
    existingState[event.target.name] = event.target.value;
    this.setState({ eklenecekLng: existingState });
  }

  useEffect(
    refreshData,
    []
  )

 


  

    console.log("app");
  //  const[token,setToken]=useState('');
    return (
      <userInfo.Provider value={{token:token,setToken:setToken}}>
      <Router>
         <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/langs">Languages</Link>
            </li>
            <li>
              <Link to="/words">Words</Link>
            </li>
            <li>
              <Link to="/users">users</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <div className='container'>
        
        <Routes>
          <Route path="/langs" element={<Languages refreshData={refreshData} languages={languages} />} />
          <Route path="/words" element={<Word languages={languages}  />} />
          <Route path="/users" element={<WordUser />} />
          <Route path="/login" element={<Login />} />
        </Routes>
          
        </div>
      </Router>
      </userInfo.Provider>
    );
  
}


