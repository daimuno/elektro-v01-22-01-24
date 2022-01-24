import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from 'react-bootstrap';
import Layout from '../../components/layout'
import"../../components/page.module.css"
import {
  relaxfont,
  centerbox,
  center
} from '../../components/page.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Akademik">
      <h2 className={relaxfont}>Download Kalender Akademik 2021-2022</h2>
      <div className={center}>
        <Link to="https://drive.google.com/uc?export=download&id=1q8cmQsuYzfXl7BeWPXxt23zG3l0wOsta">
          <Button variant="primary">Download Kalender</Button>{' '}
        </Link>
        </div>
      <div className={centerbox}>
      <StaticImage
        alt="Daftar"
        src="../../images/akademik/kalender_Page_1.jpg"
      />
      <StaticImage
        alt="Daftar"
        src="../../images/akademik/kalender_Page_2.jpg"
      />
      <StaticImage
        alt="Daftar"
        src="../../images/akademik/kalender_Page_3.jpg"
      />
      <StaticImage
        alt="Daftar"
        src="../../images/akademik/kalender_Page_4.jpg"
      />
      <StaticImage
        alt="Daftar"
        src="../../images/akademik/kalender_Page_5.jpg"
      />
      
      </div>
    </Layout>
  )
}

export default IndexPage