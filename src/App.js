import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

class App extends Component {
 
  constructor(){
    super();
    this.state={languages:[
      {id:1,code:'tr',name:'türkçe'}
    ]
  }
  }
  componentDidMount(){
    fetch("http://localhost:44238/api/langs")
    .then((res)=>{return res.json()})
    .then((result)=>{
      console.log(result);
      this.setState({languages:result});
    });
  }
  render() {
    return (
      <div>
        {
           this.state.languages.map((lng)=>{
              return <div key={lng.id}>{lng.id} | {lng.code} | {lng.name}</div>
          })
        }
        
      </div>
    );
  }
}

export default App;

