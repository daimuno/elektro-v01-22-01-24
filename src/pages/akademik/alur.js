import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-grid-system';
import Layout from '../../components/layout'
import"../../components/page.module.css"
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  contentLinkText,
  navstyle,
  allpage,
  relaxfont,
  handwrite,
  centerbox
} from '../../components/page.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Akademik">
      <h2 className={relaxfont}> </h2>

      <div className={centerbox}>
      <StaticImage
        alt="Daftar"
        src="../../images/akademik/Peta Kurikulum JTE 2018-2019_Page_1.png"
      />
      <StaticImage
        alt="Daftar"
        src="../../images/akademik/Peta Kurikulum JTE 2018-2019_Page_2.png"
      />
      </div>
    </Layout>
  )
}

export default IndexPage