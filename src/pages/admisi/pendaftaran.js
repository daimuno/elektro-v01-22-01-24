import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import { Tab, Tabs, Image } from 'react-bootstrap';
import 'react-tabs/style/react-tabs.css';
import {
  programkami,
  container,
  homeinfo,
  center,
} from '../../components/page.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Penerimaan Mahasiswa Baru Program Sarjana (S-1)">
        <div className={container}>
        <br></br>
        <div className={center}>
          <StaticImage
            alt="Daftar"
            src="../../images/admisi/beswa5.png"
          />
        </div>
        <br></br>
        
        <Tabs defaultActiveKey="syarat" id="uncontrolled-tab" className="mb-3">
          <Tab eventKey="syarat" title="Syarat Pendaftaran">
            <h2>Syarat Pendaftaran</h2>
              
              <ol>
                <li>Warga Negara Indonesia atau Warga Negara Asing yang memperoleh ijin belajar dari
                  Kementerian Pendidikan dan Kebudayaan Republik Indonesia.</li>
                <li>Siswa kelas 12 atau sudah lulus SMA/SMK</li>
                <li>Bebas narkoba, bebas psikotropika, serta sehat jasmani dan rohani</li>
                <li>Pendaftaran yang telah dilakukan tidak dapat dipindah tangankan kepada orang lain</li>
                <li>Penerimaan mahasiswa ditetapkan atas dasar:</li>
              </ol>

              <h2>Penerimaan mahasiswa ditetapkan atas dasar:</h2>
              <ol>
                <li>Kelengkapan semua persyaratan administrasi;</li>
                <li>Pemenuhan semua persyaratan akademik;</li>
                <li>Pemenuhan semua persyaratan lainnya sesuai karakteristik Fakultas/Jurusan/Program Studi</li>
                <li>Jumlah tempat yang tersedia pada pilihan Fakultas/Jurusan/Program Studi​</li>
              </ol>

              <h2>Kelengkapan administrasi:</h2>
              <ol>
                <li>Formulir pendaftaran</li>
                <li>Rapor kelas X dan XI</li>
                <li>Sertifikat prestasi (jika ada)</li>
              </ol>
          </Tab>
          <Tab eventKey="biaya" title="Biaya Kuliah">
            <div className={center}>
              <h2>Tahun Akademik 2022-2023</h2>
              <br></br>
              <StaticImage
                  alt="Daftar"
                  src="../../images/admisi/USP 2022-2023.png"
                />
              </div>
          </Tab>
          <Tab eventKey="alur" title="Alur Pendaftaran">
          <div className={center}>
            <StaticImage
                alt="Daftar"
                src="../../images/admisi/alur pendaftaran.png"
              />
              <br></br>
              <Link to="https://drive.google.com/uc?export=download&id=1f-KIK918A7AYgAi6E0kKJo2cc9THl1yT">
              <div className="textbluebox">
                Download Formulir
              </div>
            </Link>
          </div>
            
          </Tab>
        </Tabs>
        </div>
    </Layout>
  )
}

export default IndexPage