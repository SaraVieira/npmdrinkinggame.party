import React, { Fragment } from 'react'
import 'nes.css/css/nes.css'
import Layout from '../components/layout'
import logo from '../images/beer.png'
import box from '../images/box.png'
import info from '../utils.js'
import './style.css'
import 'animate.css'
let Type = Fragment

if (typeof window !== `undefined`) {
  Type = require('../components/typewriter').default
}

class IndexPage extends React.Component {
  state = { loading: false, typingDone: false, result: {} }

  submitForm = async e => {
    this.setState({
      loading: true,
    })
    const { p } = this.state
    e.preventDefault()

    const data = await info(p)

    this.setState({
      result: data,
      loading: false,
    })
  }

  render() {
    const { typingDone, loading, result, p } = this.state
    return (
      <Layout>
        <div class="container is-dark">
          <main
            style={{
              margin: '0 auto',
              maxWidth: 1100,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            <img src={logo} class="beer" alt="beer emoji" />
            <p class="title">Container.is-dark</p>
            <p style={{ color: 'white', textAlign: 'center' }}>
              <Type
                afterComplete={() => {
                  this.setState({ typingDone: true })
                }}
                speed={50}
                strings={[
                  'Welcome to the npm drinking game',
                  'The rules are simple.',
                  'Input an english word in the input and if it exists in npm you must drink',
                  'Good luck',
                ]}
              />
            </p>
            {typingDone ? (
              <form
                onSubmit={this.submitForm}
                className="animated fadeInUp input-form"
              >
                <input
                  type="text"
                  class="input"
                  required
                  minlength="3"
                  pattern="[a-zA-Z0-9-]+"
                  onChange={e => {
                    this.setState({
                      p: e.target.value,
                    })
                  }}
                />
                <button type="submit" className="btn is-primary">
                  Try your luck
                </button>
              </form>
            ) : null}
            {loading ? (
              <img
                src={box}
                width="100"
                className="animated infinite pulse loading"
                alt="beer emoji"
              />
            ) : null}
            {result.code && !loading ? (
              <Fragment>
                <p class="white lucky animated tada">
                  <span> You are in luck</span>{' '}
                  <i class="icon heart is-medium" />
                </p>
                <p class="white lucky animated tada">
                  <span> Wanna try again?</span>
                </p>
              </Fragment>
            ) : null}
            {result.collected && !loading ? (
              <div class="drink jackInTheBox animated">
                <p className="white">Oh no! It Exists</p>
                <p className="white">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.npmjs.com/package/${p}`}
                  >
                    "{result.collected.metadata.description}"
                  </a>
                </p>
                <p className="white bottom-beer">
                  Drink up
                  <img
                    src={logo}
                    width="40"
                    style={{ marginLeft: 10 }}
                    alt="beer emoji"
                  />
                </p>
              </div>
            ) : null}
          </main>
          {typingDone ? (
            <footer class="white animated fadeInUp">
              <span>Not affiliated with NPM</span>
              <span>
                Made by{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://twitter.com/NikkitaFTW`}
                >
                  @NikkitaFTW
                </a>
              </span>
            </footer>
          ) : null}
        </div>
      </Layout>
    )
  }
}

export default IndexPage
