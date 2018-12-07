import React from 'react'

export default ({ show }) =>
  show ? (
    <footer className="white animated fadeInUp">
      <span>Not affiliated with NPM</span>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.npmjs.com/package/sipit"
      >
        CLI Version
      </a>
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
  ) : null
