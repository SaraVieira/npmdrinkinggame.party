import React from 'react'
import Layout from '../components/layout'
import box from '../images/box.png'
import info from '../utils.js'
import Footer from '../components/footer'
import Header from '../components/header'
import OhNo from '../components/ohno'
import Lucky from '../components/lucky'
import './style.css'

class IndexPage extends React.Component {
  state = { loading: false, typingDone: false, result: {} }

  submitForm = async e => {
    this.setState({
      loading: true
    })
    const { p } = this.state
    e.preventDefault()

    const data = await info(p)

    this.setState({
      result: data,
      loading: false
    })
  }

  render() {
    const { typingDone, loading, result, p } = this.state
    return (
      <Layout>
        <div className="container is-dark">
          <main>
            <Header
              afterComplete={() => {
                this.setState({ typingDone: true })
              }}
            />
            {typingDone ? (
              <form
                onSubmit={this.submitForm}
                className="animated fadeInUp input-form"
              >
                <input
                  type="text"
                  className="input"
                  required
                  minLength="3"
                  pattern="[a-zA-Z0-9-]+"
                  onChange={e => {
                    this.setState({
                      p: e.target.value
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
            {result.code && !loading ? <Lucky /> : null}
            {result.collected && !loading ? (
              <OhNo value={p} data={result.collected.metadata} />
            ) : null}
          </main>
          {typingDone ? <Footer /> : null}
        </div>
      </Layout>
    )
  }
}

export default IndexPage
