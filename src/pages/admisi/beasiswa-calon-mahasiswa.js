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
        <Tabs defaultActiveKey="prestasi" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="prestasi" title="Beasiswa Prestasi Program Studi">
            <div className={grid2col}>
              <div><StaticImage
                alt="Daftar"
                src="../../images/admisi/beswa2.png"
              />
              </div>
              <div>
            <div className={homeinfo}><h2>Beasiswa Prestasi Program Studi</h2></div>
            
            <h4>Bentuk beasiswa:</h4>
              <ul>
                <li>Pemberian potongan pembayaran atau pembebasan Uang Sumbangan Pendidikan dan
                  Uang Kuliah selama masa studi sesuai dengan kurikulum masing-masing program studi.</li>
                <li>Persentase potongan bervariasi berdasar hasil verifikasi
                  prestasi akademik dan non akademik serta kemampuan ekonomi</li>
              </ul>
            <br></br>

            <h4>Syarat umum:</h4>
              <ul>
                <li>Nilai rata-rata raport SMA/SMK semester gasal kelas X dan kelas XI ≥ 8,00;</li>
                <li>Kemampuan ekonomi kurang/lemah.</li>
              </ul>
            <br></br>

            <h4>Syarat administrasi (diajukan pada saat pendaftaran):</h4>
            Mengajukan permohonan tertulis kepada Rektor dengan melampirkan:
              <ul>
                <li>Rekomendasi dari Kepala SMA/SMK dan dokumen bukti prestasi
                  selama masa studi siswa/i di SMA/SMK;</li>
                <li>Surat keterangan penghasilan orang tua dari tempat kerja orang tua atau
                  Surat Keterangan Tidak Mampu dari Ketua RT/RW tempat tinggal orang tua;</li>
                <li>Fotokopi Kartu Susunan Keluarga (KSK).</li>
              </ul>
            <br></br>
            </div>
            </div>
          </Tab>
          <Tab eventKey="keuskupan" title="Beasiswa Keuskupan">
          <div className="homeinfo"><h2>Beasiswa Keuskupan</h2></div>
            
            <h4>Bentuk beasiswa:</h4>
              <ul>
                <li>Pembebasan Uang Sumbangan Pendidikan dan Uang Kuliah
                  selama masa studi sesuai dengan kurikulum masing-masing Program Studi.</li>
              </ul>
            <br></br>

            <h4>Syarat umum:</h4>
              <ul>
                <li>Kemampuan ekonomi kurang/lemah.</li>
              </ul>
            <br></br>

            <h4>Syarat administrasi (diajukan pada saat pendaftaran):</h4>
            Mengajukan permohonan tertulis kepada Rektor dengan melampirkan:
              <ul>
                <li>Rekomendasi dari dari Uskup setempat;</li>
                <li>Surat Kontrak Perjanjian dengan Uskup setempat yang berisikan kesanggupan
                  yang bersangkutan untuk berkarya di daerah Keuskupan setempat setelah selesai studi.</li>
              </ul>
            <br></br>
          </Tab>
          <Tab eventKey="bidik-misi" title="Beasiswa Bidik Misi">
          <div className="homeinfo"><h2>Beasiswa Bidik Misi</h2></div>
          Penerimaan beasiswa Bidikmisi mengikuti ketentuan beasiswa Bidikmisi dari Kemenristek RI.
          Informasi tentang bidikmisidapat dilihat di http://www.bidikmisi.go.id atau melalui telepon
          (031) 5678478 ext. 115 (Bagian Kemahasiswaan Bp. Carolus Suharto); dan 0800-1404-120 (bebas pulsa).
          <br></br>
          <br></br>
          <h4>Bentuk beasiswa:</h4>
              <ul>
                <li>Pembebasan Uang Sumbangan Pendidikan dan Uang Kuliah selama masa studi sesuai
                  dengan kurikulum masing-masing Program Studi dan Uang Wisuda;</li>
                <li>Subsidi biaya hidup sesuai ketentuan pemerintah selama masa
                  studi sesuai dengan kurikulum masing-masing Program Studi.</li>
              </ul>
            <br></br>

            <h4>Syarat umum:</h4>
              <ul>
                <li>Harus didaftarkan oleh sekolah asal (SMA/SMK/MA/MAK) sehingga siswa
                  tersebut memiliki nomor pendaftaran dank ode akses Beasiswa Bidik Misi;</li>
                <li>Berlaku untuk pilihan studi pada Program Studi yang dibuka pendaftarannya
                  oleh Dikti (lihat http://www.bidikmisi.go.id);</li>
                <li>Usia maksimum 21 tahun;</li>
                <li>Kurang mampu secara ekonomi dengan indikator: Pendapatan kotor gabungan orang tua/wali
                  sebesar-besarnya Rp 3.000.000,00 setiap bulan, dan/atau; Pendapatan kotor gabungan orang
                  tua/wali dibagi jumlah anggota sebesar-besarnya Rp 750.000,00 setiap bulan.</li>
                <li>Pendidikan orang tua/wali setinggi-tingginya S1 (Strata 1) atau Diploma 4.</li>
                <li>Pertimbangan khusus diberikan kepada pendaftar yang mempunyai prestasi akademik
                  maupun non akademik paling rendah peringkat ke-3 di tingkat kabupaten/kota atau
                  prestasi non kompetitif lain yang tidak adapemeringkatan (minimum ketua organisasi
                  siswa intra sekolah/OSIS).</li>
              </ul>
            <br></br>

            <h4>Syarat administrasi (diajukan pada saat pendaftaran):</h4>
              <ul>
                <li>Mengajukan permohonan pendaftaran dengan mengisi formulir bidikmisi secara on-line
                  http://www.bidikmisi.go.id (user ID dan password wajib disampaikan ke Bagian Kemahasiswaan
                  Bp. Carolus Suharto melalui telpon 031-5678478 ext. 115);</li>
                <li>Penyerahan berkas pendukung dikirimkan dengan mencantumkan tulisan:
                  Calon Pendaftar Bidikmisi pada amplop di bagian kiri atas.</li>
              </ul>
            <br></br>
          </Tab>
          <Tab eventKey="lustrum" title="Beasiswa Lustrum XII">
          <div className="homeinfo"><h2>Beasiswa Lustrum XII</h2></div>
            
            <b>Terdapat 4 skema beasiswa pada Beasiswa Lustrum XII kali ini, khususnya untuk
              calon mahasiswa Fakultas Teknik, yaitu Beasiswa Keluarga Alumni (skema 1),
              Beasiswa ASN/TNI POLRI (skema 2), Beasiswa Prestasi (skema 3),
              Beasiswa Essay Competition (skema 4). </b>
              <br></br>
              <br></br>
              <b>Bentuk beasiswa dan persyaratan dapat dilihat pada gambar di bawah ini.</b>
              <br></br>
              <br></br>
              <StaticImage
                alt="Daftar"
                src="../../images/admisi/lus1.png"
              />
              <br></br>
              <br></br>
              <StaticImage
                alt="Daftar"
                src="../../images/admisi/lus2.png"
              />
              <br></br>
              <br></br>
              <StaticImage
                alt="Daftar"
                src="../../images/admisi/lus3.png"
              />
          </Tab>
        </Tabs>
        </div>
    </Layout>
  )
}

export default IndexPage