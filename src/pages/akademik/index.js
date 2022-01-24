import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-grid-system';
import Layout from '../../components/layout'
import {
  container,
  contentLinkText,
  relaxfont,
  handwrite,
  centerbox,
} from '../../components/page.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Akademik">
      <h2 className={relaxfont}> </h2>

      <div className={centerbox}>
      <Container>
        <Row>
          <Col sm={3}>
          </Col>
          <Col sm={3}>
              <Link to="./alur"  className={contentLinkText}>
              <div className={centerbox}>
              <StaticImage
                alt="Alur"
                src="../../images/admisi/alur.png"
              />
              </div>
              <h2>Alur Kuliah</h2>
              </Link>
          </Col>

          <Col sm={3}>
              <Link to="./kalender"  className={contentLinkText}>
              <div className={centerbox}>
              <StaticImage
                alt="Kalender"
                src="../../images/admisi/kalender.png"
              /></div>
              <h2>Kalender Akademik</h2>
              </Link>
          </Col>

          <Col sm={3}>
          </Col>
        </Row>
      </Container>
      </div>
    </Layout>
  )
}

export default IndexPage