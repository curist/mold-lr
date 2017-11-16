import React from 'react'
import parse, { composeFeature } from '../../parse';

import { LinearRegression } from 'shaman';

import css from './App.css'
import './general-style.css';

import data from 'raw-loader!../../assets/data.tsv';

class Part extends React.Component {
  constructor() {
    super();
    this.state = {
      L: 0,
      W: 0,
      H: 0,
      CC: 0,
      caveat: 0,
      area: 0,
      threePlates: false,
    }

    this.valueSetter = this.valueSetter.bind(this);
  }

  valueSetter(k) {
    return e => {
      this.setState({[k]: parseFloat(e.target.value)});
    }
  }

  getValues() {
    return this.state;
  }

  render() {
    const v = this.valueSetter;
    return <div className={css.part}>
      <input type='text' placeholder='L 長' onChange={v('L')} />
      <input type='text' placeholder='W 寬' onChange={v('W')} />
      <input type='text' placeholder='H 高' onChange={v('H')} />
      <input type='text' placeholder='CC' onChange={v('CC')} />
      <input type='text' placeholder='表面積mm²' onChange={v('area')} />
      <input type='number' min={0} placeholder='穴數' onChange={v('caveat')} />
      {
        // <label>
        //   <input type='checkbox' onChange={v('threePlates')} />
        //   <span>三板</span>
        // </label>
      }
    </div>
  }
}


let partsCounter = 1;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      estimateCost: 0,
      molder: '',
      parts: [0],
    };
    this.addPart = this.addPart.bind(this);
    this.setMolder = this.setMolder.bind(this);
  }
  componentDidMount() {
    const { X, Y } = parse(data);
    this.lr = new LinearRegression(X, Y, {
      algorithm: 'GradientDescent',
      numberOfIterations: 20000, // defaults to 8500
      learningRate: 0.3, // defaults to 0.1
    });
    this.lr.train((err) => {
      if(err) {
        return console.log(err);
      }
      this.setState({
        loaded: true,
      })
    });
  }

  setMolder(e) {
    this.setState({molder: e.target.value});
  }

  addPart() {
    this.setState({
      parts: this.state.parts.concat([partsCounter ++])
    });
  }

  delPart(id) {
    this.setState({
      parts: this.state.parts.filter(partId => partId !== id),
    });
  }

  render () {
    const { lr } = this;
    let partsRef = [];
    if(!this.state.loaded) {
      return <div>loading data...</div>;
    }
    return (
      <div className={css.app}>
        <div className={css.container}>
          <div className={css.header}>
            <span>Parts</span>
            <button onClick={this.addPart}>add part</button>
          </div>
          <div className={css.parts}>
          {
            this.state.parts.map(id => <div key={id}>
              <Part ref={r => partsRef.push(r)} />
              <button onClick={this.delPart.bind(this, id)}>del part</button>
            </div>)
          }
          </div>
          <div className={css.result}>
            <select onChange={this.setMolder}>
              <option>Molder</option>
              <option value='FSM'>FSM</option>
              <option value='SCM'>SCM</option>
            </select>
            <span>{' '}</span>
            <button onClick={() => {
              try {
                const partValues = partsRef.map(p => p.getValues());
                const features = composeFeature(this.state.molder, partValues);
                const cost = (lr.predict(features)).toFixed(2);
                this.setState({estimateCost: cost});
              } catch (err) {
                this.setState({estimateCost: 0});
              }
            }}>Estimate Cost</button>
            <br />
            <br />
            {this.state.estimateCost <= 0 ? null
              : <p><strong>Cost: </strong>{this.state.estimateCost}</p> }
          </div>
        </div>
      </div>
    )
  }
}
