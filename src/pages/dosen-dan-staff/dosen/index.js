import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../../../components/layout'
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
} from '../../../components/page.module.css'

function spacer(){
  return (
    <Row>
      <Col sm={12}><p>asd</p></Col>
    </Row>
  )
}

const IndexPage = () => {
  return (
    <Layout pageTitle="Admisi">
      <h2 className={relaxfont}>Dosen Program Studi Teknik Elektro</h2>

      <div className={centerbox}>
      <Container fluid = "sm">
        <Row>
          <Col sm={2}></Col>
          <Col sm={4}>
            <Link to="./albert"  className={contentLinkText}>
              <StaticImage
                alt="Alur"
                src="../../../images/staf/albert1.jpeg"
              />
              <h3>Ir. Albert Gunadhi ST., MT., IPM.</h3>
              Dosen, Ketua Program Studi Teknik Elektro (PSTE)
            </Link>
          </Col>
          <Col sm={4}>
            <Link to="./alur"  className={contentLinkText}>
              <StaticImage
                alt="Alur"
                src="../../../images/staf/peter1.jpg"
              />
              <h3>Ir. Hartono Pranjoto M.Sc., Ph.D., IPU.</h3>
              Dosen, Ketua Lembaga Penelitian dan Pengabdian Masyarakat (LPPM)
            </Link>
          </Col>
          <Col sm={2}></Col>
        </Row>

        <Row>
          <Col sm={2}></Col>
          <Col sm={4}>
            <Link to="./alur"  className={contentLinkText}>
              <StaticImage
                alt="Alur"
                src="../../../images/staf/sitepu1.jpg"
              />
              <h3>Ir. Rasional Sitepu M.Eng., IPM., ASEAN Eng.</h3>
              Dosen, Ketua Program Studi Program Profesi Insinyur (PSPPI)
            </Link>
          </Col>
          <Col sm={4}>
            <Link to="./alur"  className={contentLinkText}>
              <StaticImage
                alt="Alur"
                src="../../../images/staf/peter1.jpg"
              />
              <h3>Ir. Drs. Peter Rhatodirdjo Angka MKom.</h3>
              Dosen
            </Link>
          </Col>
          <Col sm={2}></Col>
        </Row>

        <Row>
          <Col sm={2}></Col>
          <Col sm={4}>
            <Link to="./alur"  className={contentLinkText}>
              <StaticImage
                alt="Alur"
                src="../../../images/staf/lanny1.jpg"
              />
              <h3>Ir. Lanny Agustine ST., MT., IPM.</h3>
              Dosen
            </Link>
          </Col>
          <Col sm={4}>
            <Link to="./alur"  className={contentLinkText}>
              <StaticImage
                alt="Alur"
                src="../../../images/staf/lanny1.jpg"
              />
              <h3>Ir. Diana Lestariningsih Antonina ST., MT.</h3>
              Dosen
            </Link>
          </Col>
          <Col sm={2}></Col>
        </Row>

        <Row>
          <Col sm={2}></Col>
          <Col sm={4}>
            <Link to="./alur"  className={contentLinkText}>
              <StaticImage
                alt="Alur"
                src="../../../images/staf/yuli1.jpg"
              />
              <h3>Ir. Yuliati S.Si., MT., IPM.</h3>
              Dosen
            </Link>
          </Col>
          <Col sm={4}>
            <Link to="./alur"  className={contentLinkText}>
              <StaticImage
                alt="Alur"
                src="../../../images/staf/peter1.jpg"
              />
              <h3>Ir. Andrew Joewono ST., MT., IPM., ASEAN.Eng.</h3>
              Dosen
            </Link>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
      <p> </p>
      </div>
    </Layout>
  )
}

export default IndexPage