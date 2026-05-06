import PageLayout from '../components/PageLayout';

export default function Terms() {
  return (
    <PageLayout 
      title="Syarat dan Ketentuan" 
      subtitle="Mohon baca syarat dan ketentuan layanan kami dengan seksama."
    >
      <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-[#1e1b4b] mb-4">1. Penerimaan Ketentuan</h2>
          <p>
            Dengan mengakses dan menggunakan layanan Webzels, Anda setuju untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak menyetujui bagian apa pun dari syarat ini, Anda tidak diperbolehkan menggunakan layanan kami.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1e1b4b] mb-4">2. Layanan Kami</h2>
          <p>
            Webzels menyediakan jasa konsultasi, desain, dan pengembangan website profesional. Rincian spesifik dari setiap proyek akan diatur dalam kontrak terpisah atau invoice yang disepakati.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1e1b4b] mb-4">3. Pembayaran</h2>
          <p>
            Pembayaran dilakukan sesuai dengan termin yang disepakati. Pekerjaan akan dimulai setelah pembayaran uang muka (DP) diterima. Semua biaya yang telah dibayarkan untuk pekerjaan yang sudah berjalan tidak dapat dikembalikan.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1e1b4b] mb-4">4. Hak Kekayaan Intelektual</h2>
          <p>
            Setelah pelunasan sisa pembayaran, hak milik atas desain dan kode sumber website akan diserahkan sepenuhnya kepada klien, kecuali untuk library atau framework pihak ketiga yang digunakan.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
