import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {Helmet} from "react-helmet";
import Header from './header';
import Footer from './footer';
import {
  container,
  navstyle,
  allpage,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const pageTitleB = pageTitle + " | Electrical Engineering WMSCU";
  return (
    <div className={allpage}>
          <Helmet>
              <meta charSet="utf-8" />
              <title>{pageTitleB}</title>
              <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>

      <div className={navstyle}>
        <nav><Header /></nav>
      </div>

      <div className={container}>
        <main>
          {children}
        </main>
      </div>
      <p> </p>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout