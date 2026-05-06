import PageLayout from '../components/PageLayout';

export default function Privacy() {
  return (
    <PageLayout 
      title="Kebijakan Privasi" 
      subtitle="Kami menghargai privasi Anda. Pelajari bagaimana kami mengelola data Anda."
    >
      <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-[#1e1b4b] mb-4">Informasi yang Kami Kumpulkan</h2>
          <p>
            Kami mengumpulkan informasi yang Anda berikan saat melakukan konsultasi atau pemesanan layanan, termasuk nama, alamat email, nomor telepon, dan detail bisnis Anda.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1e1b4b] mb-4">Penggunaan Informasi</h2>
          <p>
            Informasi yang dikumpulkan digunakan semata-mata untuk penyediaan layanan, komunikasi proyek, dan peningkatan kualitas pelayanan kami. Kami tidak akan menjual informasi Anda kepada pihak ketiga.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1e1b4b] mb-4">Keamanan Data</h2>
          <p>
            Kami mengambil langkah-langkah teknis dan administratif yang wajar untuk melindungi data Anda dari akses yang tidak sah, kehilangan, atau penyalahgunaan.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
