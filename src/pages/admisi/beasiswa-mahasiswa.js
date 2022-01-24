import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import { Tab, Tabs } from 'react-bootstrap';
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  programkami,
  container,
  homeinfo,
  center,
  grid2col
} from '../../components/page.module.css'
const IndexPage = () => {
  return (
    <Layout pageTitle="Penerimaan Mahasiswa Baru Program Sarjana (S-1)">
        <div className={container}>
        <div className={center}>
        <StaticImage
                alt="Daftar"
                src="../../images/admisi/scholarships-1.png"
              /></div>
        <Tabs defaultActiveKey="yayasan" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="yayasan" title="Beasiswa Yayasan">
            <div className="homeinfo"><h2>Beasiswa Yayasan</h2></div>
            
            <h4>Persyaratan umum bagi calon penerima beasiswa:</h4>
            <ol>
              <li>Yang bersangkutan tidak sedang menerima beasiswa lain
                pada semester aktif yang proses seleksinya melalui UKWMS.</li>
              <li>Memiliki IPS terakhir ≥ 2,50</li>
              <li>Mengisi formulir permohonan dengan melampirkan:
              <ul>
                <li>Fotokopi KHS semester sebelumnya.</li>
                <li>Fotokopi KTM.</li>
                <li>Fotokopi Kartu Susunan Keluarga (KK).</li>
                <li>Fotokopi rekening air dan listrik rumah orang tua.</li>
                <li>Slip gaji orang tua/wali dari tempat kerja.</li>
              </ul>
              </li>
            </ol>
            <br></br>
            Informasi lebih lanjut dan formulir pendaftaran dapat diperoleh serta dikumpulkan
            (dilengkapi berkas persyaratan yang diperlukan) di Tata Usaha Fakultas Teknik
            (Kampus Kalijudan, tel: +6231 389 3933).
            <br></br>
            <br></br>
            <h4>Penawaran beasiswa ini tidak berlaku bagi penerima beasiswa sebagai Berikut:</h4>
            <ol>
              <li>Bantuan UKT dan YPKAAR</li>
              <li>APTIK MENTAWAI</li>
              <li>Keuskupan dan YOGA</li>
              <li>Potongan Uang Kuliah dan sejenisnya</li>
            </ol>
          </Tab>
          <Tab eventKey="aktivis" title="Beasiswa Aktivis Organisasi Kemahasiswaan">
          <div className="homeinfo"><h2>Beasiswa Aktivis Organisasi Kemahasiswaan</h2></div>
            
            <h4>Persyaratan umum bagi calon penerima beasiswa:</h4>
            <ol>
              <li>Yang bersangkutan tidak sedang menerima beasiswa lain
                pada semester aktif yang proses seleksinya melalui UKWMS.</li>
              <li>Mengisi formulir permohonan dengan melampirkan:
              <ul>
                <li>Fotokopi KHS semester sebelumnya.</li>
                <li>Fotokopi KTM.</li>
                <li>Fotokopi Kartu Susunan Keluarga (KK).</li>
                <li>Fotokopi rekening air dan listrik rumah orang tua.</li>
                <li>Slip gaji orang tua/wali dari tempat kerja.</li>
              </ul>
              </li>
            </ol>
            <h4>Persyaratan Khusus:</h4>
            <ol>
              <li>Khusus pengurus organisasi kemahasiswaan masa bakti aktif.</li>
              <li>Memiliki IPS terakhir ≥ 2,25.</li>
              <li>Mengisi formulir permohonan dengan melampirkan Surat Keputusan/Keterangan sebagai
                Pengurus Organisasi Kemahasiswaan Masa Bakti yang sedang berlangsung.</li>
            </ol>
            <br></br>
            Khusus beasiswa aktivis, pengusulan calon penerima beasiswa dilakukan oleh
            Ketua Organisasi Kemahasiswaan (UKM, BPM Fakultas, LPMU/F, BEM Fakultas dan HMJ),
            sehingga formulir beasiswa langsung disediakan di Ketua Organisasi Kemahasiswaan.
            Pengiriman formulir wajib dilakukan melalui Fakultas dengan surat pengantar Dekan.
            <br></br>
            Informasi lebih lanjut dan formulir pendaftaran dapat diperoleh serta dikumpulkan
            (dilengkapi berkas persyaratan yang diperlukan) di Tata Usaha Fakultas Teknik
            (Kampus Kalijudan, tel: +6231 389 3933).
            <br></br>
            <br></br>
            <h4>Penawaran beasiswa ini tidak berlaku bagi penerima beasiswa sebagai Berikut:</h4>
            <ol>
              <li>Bantuan UKT dan YPKAAR</li>
              <li>APTIK MENTAWAI</li>
              <li>Keuskupan dan YOGA</li>
              <li>Potongan Uang Kuliah dan sejenisnya</li>
            </ol>
          </Tab>
          <Tab eventKey="wisudawan" title="Beasiswa Wisudawan">
          <div className="homeinfo"><h2>Beasiswa Wisudawan</h2></div>
            
            <h4>Persyaratan umum bagi calon penerima beasiswa:</h4>
            <ol>
              <li>Yang bersangkutan tidak sedang menerima beasiswa lain
                pada semester aktif yang proses seleksinya melalui UKWMS.</li>
              <li>Memiliki IPS terakhir ≥ 2,50</li>
              <li>Mengisi formulir permohonan dengan melampirkan:
              <ul>
                <li>Fotokopi KHS semester sebelumnya.</li>
                <li>Fotokopi KTM.</li>
                <li>Fotokopi Kartu Susunan Keluarga (KK).</li>
                <li>Fotokopi rekening air dan listrik rumah orang tua.</li>
                <li>Slip gaji orang tua/wali dari tempat kerja.</li>
              </ul>
              </li>
            </ol>
            <br></br>
            Informasi lebih lanjut dan formulir pendaftaran dapat diperoleh serta dikumpulkan
            (dilengkapi berkas persyaratan yang diperlukan) di Tata Usaha Fakultas Teknik
            (Kampus Kalijudan, tel: +6231 389 3933).
            <br></br>
            <br></br>
            <h4>Penawaran beasiswa ini tidak berlaku bagi penerima beasiswa sebagai Berikut:</h4>
            <ol>
              <li>Bantuan UKT dan YPKAAR</li>
              <li>APTIK MENTAWAI</li>
              <li>Keuskupan dan YOGA</li>
              <li>Potongan Uang Kuliah dan sejenisnya</li>
            </ol>
          </Tab>
          <Tab eventKey="alumni" title="Beasiswa Alumni">
          <div className="homeinfo"><h2>Beasiswa Alumni</h2></div>
            
            <h4>Persyaratan umum bagi calon penerima beasiswa:</h4>
            <ol>
              <li>Yang bersangkutan tidak sedang menerima beasiswa lain
                pada semester aktif yang proses seleksinya melalui UKWMS.</li>
              <li>Memiliki IPS terakhir ≥ 2,50</li>
              <li>Mengisi formulir permohonan dengan melampirkan:
              <ul>
                <li>Fotokopi KHS semester sebelumnya.</li>
                <li>Fotokopi KTM.</li>
                <li>Fotokopi Kartu Susunan Keluarga (KK).</li>
                <li>Fotokopi rekening air dan listrik rumah orang tua.</li>
                <li>Slip gaji orang tua/wali dari tempat kerja.</li>
              </ul>
              </li>
            </ol>
            <br></br>
            Informasi lebih lanjut dan formulir pendaftaran dapat diperoleh serta dikumpulkan
            (dilengkapi berkas persyaratan yang diperlukan) di Tata Usaha Fakultas Teknik
            (Kampus Kalijudan, tel: +6231 389 3933).
            <br></br>
            <br></br>
            <h4>Penawaran beasiswa ini tidak berlaku bagi penerima beasiswa sebagai Berikut:</h4>
            <ol>
              <li>Bantuan UKT dan YPKAAR</li>
              <li>APTIK MENTAWAI</li>
              <li>Keuskupan dan YOGA</li>
              <li>Potongan Uang Kuliah dan sejenisnya</li>
            </ol>
          </Tab>
          <Tab eventKey="prestasi" title="Beasiswa Prestasi Akademik">
          <div className="homeinfo"><h2>Beasiswa Penghargaan Prestasi Akademik</h2></div>
            
            <h4>Persyaratan umum bagi calon penerima beasiswa:</h4>
            <ol>
              <li>Yang bersangkutan tidak sedang menerima beasiswa lain
                pada semester aktif yang proses seleksinya melalui UKWMS.</li>
              <li>Memiliki IPS terakhir ≥ 2,50</li>
              <li>Mengisi formulir permohonan dengan melampirkan:
              <ul>
                <li>Fotokopi KHS semester sebelumnya.</li>
                <li>Fotokopi KTM.</li>
                <li>Fotokopi Kartu Susunan Keluarga (KK).</li>
                <li>Fotokopi rekening air dan listrik rumah orang tua.</li>
                <li>Slip gaji orang tua/wali dari tempat kerja.</li>
              </ul>
              </li>
            </ol>
            <br></br>
            Informasi lebih lanjut dan formulir pendaftaran dapat diperoleh serta dikumpulkan
            (dilengkapi berkas persyaratan yang diperlukan) di Tata Usaha Fakultas Teknik
            (Kampus Kalijudan, tel: +6231 389 3933).
            <br></br>
            <br></br>
            <h4>Penawaran beasiswa ini tidak berlaku bagi penerima beasiswa sebagai Berikut:</h4>
            <ol>
              <li>Bantuan UKT dan YPKAAR</li>
              <li>APTIK MENTAWAI</li>
              <li>Keuskupan dan YOGA</li>
              <li>Potongan Uang Kuliah dan sejenisnya</li>
            </ol>
          </Tab>
        </Tabs>
        </div>
    </Layout>
  )
}

export default IndexPage