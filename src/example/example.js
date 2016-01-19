import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactTextCollapse from '..';


const OPTIONS = {
	Collapse: false,
  collapseText: '... show more',
  expandText: 'show less'
}

class App extends Component {

  render() {

    return (
      <div>
        <ReactTextCollapse
        	options={OPTIONS}
        > 
        <p>
           React text collapse is awesome. React text collapse is awesome.<br />
           React text collapse is awesome. React text collapse is awesome.<br />
           React text collapse is awesome. React text collapse is awesome.<br />
           React text collapse is awesome. React text collapse is awesome.<br />
           React text collapse is awesome. React text collapse is awesome.<br />
           React text collapse is awesome. React text collapse is awesome.<br />
           React text collapse is awesome. React text collapse is awesome.<br />
           React text collapse is awesome. React text collapse is awesome.<br />
        </p>
        </ReactTextCollapse> 
      </div>
    );
  }
}

const appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

render(<App />, appRoot);
