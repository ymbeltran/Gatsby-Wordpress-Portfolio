import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import GithubButtons from '../GithubButtons/GithubButtons';
import { useFooterQuery } from '../../hooks/useFooterQuery';

import { githubButtons } from '../../mock/data';

const Footer = () => {
  const networks = useFooterQuery();
  
  const { isEnabled } = githubButtons;


  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, label, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={label.toLowerCase()}
                >
                  <i className={`fa fa-${label.toLowerCase() || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Based on {' '}
          <a href="https://github.com/cobidev/gatsby-simplefolio" target="_blank" rel="noopener noreferrer">
          Gatsby Simplefolio Template
          </a>
        </p>

        {isEnabled && <GithubButtons />}
      </Container>
    </footer>
  );
};

export default Footer;
