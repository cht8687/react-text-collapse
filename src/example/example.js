import React, { Component } from 'react'
import { render } from 'react-dom'
import { CopyBlock, nord } from 'react-code-blocks'
import { customComponentSnippet } from './codeblocks'
import ReactTextCollapse from '..'
import './styles.css'
import './component.css'

const TEXT_COLLAPSE_OPTIONS = {
  collapse: false,
  collapseText: '... show more',
  expandText: 'show less',
  minHeight: 100,
  maxHeight: 200,
  textStyle: {
    color: 'blue',
    fontSize: '20px',
  },
}
class App extends Component {
  render() {
    return (
      <div className={'container'}>
        <div className={'title'}>
          {' '}
          React-text-collapse
          <div className={'description'}>
            <a href="https://github.com/cht8687/react-text-collapse">Github</a>
          </div>
        </div>
        <div className={'main'}>
          <h2 className={'subtitle'}>Make your collapsable texts easily</h2>
          <div className={'subcontainer'}>
            <div className={'subleft'}>
              <CopyBlock
                language="jsx"
                text={customComponentSnippet}
                startingLineNumber={1}
                showLineNumbers={10}
                theme={nord}
                wrapLines={true}
              />
            </div>
            <div className={'subright'}>
              <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                <p>
                  React text collapse is awesome. React text collapse is
                  awesome.
                  <br />
                  React text collapse is awesome. React text collapse is
                  awesome.
                  <br />
                  React text collapse is awesome. React text collapse is
                  awesome.
                  <br />
                  React text collapse is awesome. React text collapse is
                  awesome.
                  <br />
                  React text collapse is awesome. React text collapse is
                  awesome.
                  <br />
                  React text collapse is awesome. React text collapse is
                  awesome.
                  <br />
                  React text collapse is awesome. React text collapse is
                  awesome.
                  <br />
                  React text collapse is awesome. React text collapse is
                  awesome.
                  <br />
                </p>
              </ReactTextCollapse>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const appRoot = document.createElement('div')
appRoot.id = 'app'
document.body.appendChild(appRoot)

render(<App />, appRoot)
