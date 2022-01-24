import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-grid-system';
import Layout from '../../components/layout'
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
      <h2 className={relaxfont}>Beasiswa</h2>

      <div className={centerbox}>
      <Container>
        <Row>
          <Col sm={3}>
          </Col>
          <Col sm={3}>
              <Link to="../beasiswa-calon-mahasiswa"  className={contentLinkText}>
              <StaticImage
                alt="Alur"
                src="../../images/admisi/mahasiswa baru.png"
              />
              <h2>Calon Mahasiswa</h2>
              </Link>
          </Col>

          <Col sm={3}>
              <Link to="../beasiswa-mahasiswa"  className={contentLinkText}>
              <StaticImage
                alt="Kalender"
                src="../../images/admisi/mahasiswa lama.png"
              />
              <h2>Mahasiswa Lama</h2>
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