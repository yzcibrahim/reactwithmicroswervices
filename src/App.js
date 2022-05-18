import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      languages: [
        { id: 1, code: 'tr', name: 'türkçe' }
      ],
      eklenecekLng:{id:0,code:'',name:''}
    }
  }
  componentDidMount() {
    this.refreshData();
  }

  refreshData=()=>{
    fetch("http://localhost:44238/api/langs")
    .then((res) => { return res.json() })
    .then((result) => {
      console.log(result);
      this.setState({ languages: result });
    });
  }

  postData=()=>{

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.eklenecekLng)
  };

    fetch("http://localhost:44238/api/langs",requestOptions)
    .then((res) => { return res.json() })
    .then((result) => {
      console.log(result);
     // this.setState({ languages: result });
    });
  }

  setEkelencek=(event)=>{
    let existingState=this.state.eklenecekLng;
    existingState[event.target.name]=event.target.value;
    this.setState({eklenecekLng:existingState});
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            {
              this.state.languages.map((lng) => {
                return <div key={lng.id}>{lng.id} | {lng.code} | {lng.name}</div>
              })
            }
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-group'>
              id:<input className='form-control' name='id' onChange={this.setEkelencek} type='text' value={this.state.eklenecekLng.id} />
            </div>
            <div className='form-group'>
              code:<input className='form-control' name='code' onChange={this.setEkelencek} type='text' value={this.state.eklenecekLng.code} />
            </div>
            <div className='form-group'>
              name:<input className='form-control' name='name' onChange={this.setEkelencek} type='text' value={this.state.eklenecekLng.name} />
            </div>
            <button onClick={this.refreshData}>Yenile</button>
            <button onClick={this.postData}>KAydet</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

