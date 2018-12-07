import React, { useState } from 'react'
import Layout from '../components/layout'
import info from '../utils.js'
import Footer from '../components/footer'
import Form from '../components/form'
import Header from '../components/header'
import Main from '../components/main'
import './style.css'

const IndexPage = () => {
  const [loading, setLoading] = useState(false)
  const [typingDone, setTyping] = useState(true)
  const [result, setResult] = useState({})
  const [p, setPackage] = useState('')

  const submitForm = async e => {
    e.preventDefault()
    setLoading(true)

    const data = await info(p)

    setResult(data)
    setLoading(false)
  }

  return (
    <Layout>
      <div className="container is-dark">
        <main role="main">
          <Header afterComplete={() => setTyping(true)} />
          <Form
            show={typingDone}
            onChange={e => setPackage(e.target.value)}
            submitForm={submitForm}
          />
          <Main loading={loading} result={result} p={p} />
        </main>
        <Footer show={typingDone} />
      </div>
    </Layout>
  )
}

export default IndexPage
