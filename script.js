// GANTI LINK FIGMA DI BAGIAN figmaUrl SESUAI PROTOTYPE KAMU
const transactions = {
  perorangan: [
    {
      id: "setor-tunai",
      name: "Setor Tunai",
      category: "Teller",
      description: "Simulasi arahan untuk nasabah individu yang ingin melakukan setoran tunai.",
      direction: "Arahkan nasabah ke Teller. Pastikan nasabah sudah menyiapkan uang tunai, nomor rekening tujuan, dan identitas bila diperlukan.",
      figmaUrl: "https://www.figma.com/proto/FVYM5jRaAo6Ya0XF6kQG0f/Transaksi-MSA?node-id=2786-119303&viewport=186%2C374%2C0.04&t=UyprfRRWNSccZYxj-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2786%3A119303&page-id=2785%3A91151"
    },
    {
      id: "tarik-tunai",
      name: "Tarik Tunai",
      category: "Teller",
      description: "Simulasi arahan untuk nasabah individu yang ingin melakukan penarikan tunai.",
      direction: "Arahkan nasabah ke Teller. Ingatkan nasabah untuk menyiapkan buku tabungan/kartu, identitas, dan memastikan nominal transaksi.",
      figmaUrl: "https://www.figma.com/proto/H2Ri6uyeWvLZxzV3qwGyvP/-Per--DHE-SDA---Tarik-Tunai-Valas?page-id=9523%3A14133&node-id=9529-24998&t=jwurdw8EQX2f4uqV-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9529%3A24998&show-proto-sidebar=1"
    },
    {
      id: "transfer-mandiri",
      name: "Transfer Sesama Mandiri",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/ubRbheRHWvMXBnNI4C9Dan/DHE-SDA---Overbooking?node-id=8621-240206&p=f&t=ATckoJNWFlyu1UH0-9&scaling=min-zoom&content-scaling=fixed&page-id=8446%3A233444&starting-point-node-id=8621%3A240206&show-proto-sidebar=1"
    },
    {
      id: "transfer-bank-lain-sknbi",
      name: "Transfer Bank Lain - SKNBI",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/EGJWvbB12qDEzXvBe1s1RU/E-form---Transfer-Bank-Lain---Perorangan?node-id=2721-9970&t=daGH3kHYWFq8otf9-1&scaling=min-zoom&content-scaling=fixed&page-id=2660%3A9835&starting-point-node-id=2721%3A9970"
    },
    {
      id: "pengembalian-dana",
      name: "Pengembalian Dana - SKNBI",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/M5hpkMQXurGIOzPZwrDi9u/Retur-Transaksi?node-id=9604-59819&t=DLlhbAeKtx5llcAd-1&scaling=scale-down&content-scaling=fixed&page-id=9516%3A96164&starting-point-node-id=9519%3A60067"
    },
    {
      id: "transfer-valas",
      name: "Transfer Valuta Asing/TT",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/wZYkszYUtWPWpAa4BkeTvf/E-form-GB-Tablet-WBA-TT-Perorangan-R5.0?node-id=5060-150918&t=Wn0167Qas2DE5LTo-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=5060%3A150918&show-proto-sidebar=1"
    },
    {
      id: "pembayaran",
      name: "Pembayaran",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/inG6VWTF5ODA5fU4NUh15J/DHE-SDA---Payment?page-id=4832%3A332&node-id=4912-134874&viewport=-76%2C-75%2C0.19&t=1UQwt2oV2r90dSIZ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4912%3A134874"
    },
    {
      id: "pembelian-emoney",
      name: "Pembelian Emoney",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/cjPTBsXnkX8gDiH0k4HZXl/E-form-Prepaid-Card?node-id=4028-56068&p=f&t=vX0uNzxnsbJJ5uww-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4028%3A56549&show-proto-sidebar=1"
    },
    {
      id: "pembukaan-tabungan",
      name: "Pembukaan Rekening Tabungan",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/W0AICVY60fk6oy1TOxK7Vc/Prototype-Onboarding-DHE-and-Pengambilan-Emas?node-id=10014-33071&p=f&t=kIdmkg61eOesGQ2w-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10014%3A33076&show-proto-sidebar=1"
    },
    {
      id: "pembukaan-giro",
      name: "Pembukaan Rekening Giro",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/W0AICVY60fk6oy1TOxK7Vc/Prototype-Onboarding-DHE-and-Pengambilan-Emas?node-id=10014-33071&p=f&t=kIdmkg61eOesGQ2w-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10017%3A2378&show-proto-sidebar=1"
    },
    {
      id: "pembukaan-deposito",
      name: "Pembukaan Rekening Deposito",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/W0AICVY60fk6oy1TOxK7Vc/Prototype-Onboarding-DHE-and-Pengambilan-Emas?node-id=10014-33071&p=f&t=kIdmkg61eOesGQ2w-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10035%3A36422&show-proto-sidebar=1"
    },
    {
      id: "pemeliharaan-ttd-giro",
      name: "Pemeliharaan TTD Giro",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/AuOmRHJAUPtzGu9sCEJn1b/E-form-Account-Maintenance-Sprint-3?page-id=8418%3A46920&node-id=8418-49422&viewport=341%2C340%2C0.3&t=nNxinjn6bVIkhVdR-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8418%3A49422"
    },
    {
      id: "pemeliharaan-tabungan-rencana",
      name: "Pemeliharaan Tabungan Rencana - Tabungan",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/8eQAVaetQA3TxF0ooeqPFl/Layanan-Mandiri-Tabungan?node-id=4369-135356&p=f&t=Dc3jG0QHSTeuKIFD-9&scaling=min-zoom&content-scaling=fixed&page-id=4367%3A134758&starting-point-node-id=4369%3A135356&show-proto-sidebar=1"
    },
    {
      id: "pengiriman-ulang-sertifikat",
      name: "Pengiriman Ulang E-Sertifikat Polis - Tabungan",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/8eQAVaetQA3TxF0ooeqPFl/Layanan-Mandiri-Tabungan?node-id=4433-61304&p=f&t=Dc3jG0QHSTeuKIFD-9&scaling=min-zoom&content-scaling=fixed&page-id=4367%3A134758&starting-point-node-id=4433%3A61304&show-proto-sidebar=1"
    },
    {
      id: "pembuatan-debit-baru",
      name: "Pembuatan Mandiri Debit Baru - Mandiri Debit",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/nnZhkqiIiJ1M5mzTb8W8KK/DCM-Enh-4.1--Perorangan-?node-id=12931-242149&t=qvMjPiNCKOh2ngZ4-1&scaling=contain&content-scaling=fixed&page-id=2%3A1055&starting-point-node-id=12931%3A242149&show-proto-sidebar=1"
    },
    {
      id: "rekening-terhubung",
      name: "Pembuatan Mandiri Debit Baru - Mandiri Debit",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/nnZhkqiIiJ1M5mzTb8W8KK/DCM-Enh-4.1--Perorangan-?node-id=12941-131489&t=ja18tmlW6i3gfwZY-1&scaling=contain&content-scaling=fixed&page-id=2%3A1056&starting-point-node-id=12941%3A131489"
    },
    {
      id: "penghentian-perpanjangan-deposito",
      name: "Penghentian Perpanjangan Otomatis Deposito",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/X5cNj7fkQVqzIpgsoa1cjj/Layanan-Deposito-Perorangan---Non-Perorangan-5.0?node-id=31490-141314&p=f&t=X2zgKcV1hjFai24x-9&scaling=scale-down&content-scaling=fixed&page-id=31142%3A45591&starting-point-node-id=31490%3A141314&show-proto-sidebar=1"
    },
    {
      id: "layanan-cetak-deposito",
      name: "Layanan Cetak Perpanjang Otomatis Deposito",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/X5cNj7fkQVqzIpgsoa1cjj/Layanan-Deposito-Perorangan---Non-Perorangan-5.0?node-id=31490-146498&p=f&t=w6quH1KpVUXrqFi3-9&scaling=scale-down&content-scaling=fixed&page-id=31142%3A45591&starting-point-node-id=31490%3A146498&show-proto-sidebar=1"
    },
    {
      id: "layanan-pengaduan",
      name: "Layanan Pengaduan",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/oMJKG1uyAYL0yybVaqgkgP/R5.0-Complaint-Handling-CIS?node-id=17008-42295&p=f&t=QurJTYuTJXsCGAd1-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=17031%3A50606"
    },
    {
      id: "cetak-rekening-koran",
      name: "Cetak Rekening Koran",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/TJlQB6czzsDHLVp6meQrFs/-5.0--Rekening-Koran?node-id=6482-2113517&p=f&t=3OvE8mSa6wWRqm6p-0&scaling=scale-down&content-scaling=fixed&page-id=6482%3A2108913&starting-point-node-id=6482%3A2113517&show-proto-sidebar=1"
    },
    {
      id: "kirim-rekening-koran",
      name: "Kirim Via Email Rekening Koran",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/TJlQB6czzsDHLVp6meQrFs/-5.0--Rekening-Koran?node-id=6524-84281&t=3OvE8mSa6wWRqm6p-0&scaling=scale-down&content-scaling=fixed&page-id=6482%3A2108913&starting-point-node-id=6524%3A84281&show-proto-sidebar=1"
    },
    {
      id: "penutupan-tabungan",
      name: "Penutupan Rekening Tabungan",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/PMbJV8X5kMhHnChdshdKVR/GB-Tablet-Penutupan-Rekening-DHE-Perorangan?node-id=26205-327&p=f&t=HMTLgnD51VhP0sIi-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=26205%3A9750&show-proto-sidebar=1"
    },
    {
      id: "penutupan-giro",
      name: "Penutupan Rekening Giro",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/PMbJV8X5kMhHnChdshdKVR/GB-Tablet-Penutupan-Rekening-DHE-Perorangan?node-id=26205-327&p=f&t=HMTLgnD51VhP0sIi-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=26206%3A114434&show-proto-sidebar=1"
    },
    {
      id: "penutupan-deposito",
      name: "Penutupan Rekening Deposito",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/PMbJV8X5kMhHnChdshdKVR/GB-Tablet-Penutupan-Rekening-DHE-Perorangan?node-id=26205-327&p=f&t=HMTLgnD51VhP0sIi-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=26206%3A114434&show-proto-sidebar=1"
    },
    {
      id: "pembayaran-penambahan",
      name: "Pembayaran Tagihan Terjadwal Penambahan",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/QforFdRHd8hb0a3kttWgVm/E-form-Payment-Point?page-id=4711%3A39266&node-id=4711-42682&viewport=770%2C279%2C0.27&t=N5upIasRLl6WcHGF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4711%3A42682"
    },
    {
      id: "pembayaran-pengubahan",
      name: "Pembayaran Tagihan Terjadwal Pengubahan",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/QforFdRHd8hb0a3kttWgVm/E-form-Payment-Point?page-id=4711%3A39266&node-id=4756-46770&viewport=4298%2C-565%2C0.21&t=g0O71IySYKQTOMJD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4711%3A42682"
    },
    {
      id: "pembayaran-penghapusan",
      name: "Pembayaran Tagihan Terjadwal Pengubahan",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/QforFdRHd8hb0a3kttWgVm/E-form-Payment-Point?page-id=4711%3A39266&node-id=4760-50871&viewport=2420%2C-137%2C0.1&t=RAJFkYCF3ElbfbY9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4760%3A50871&show-proto-sidebar=1"
    },
    {
      id: "pemindahan-saldo-online",
      name: "Pemindahan Saldo Otomatis (Sweep) Online Sweep",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/JZwiPxi9FsM5AgnhnClwJa/E-form-Sweep-Perorangan---Non-Perorangan?node-id=5482-96461&t=xtgkmpTkvjMEEEE8-1&scaling=scale-down&content-scaling=fixed&page-id=5479%3A40243&starting-point-node-id=5482%3A96461&show-proto-sidebar=1"
    },
    {
      id: "pembukaan-msdb",
      name: "Pembukaan MSDB",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/1bjqlN6jdS4eGDOIfXOxkz/E-form-Layanan-Mandiri-SDB?page-id=8711%3A92221&node-id=8711-98575&viewport=-34%2C242%2C0.09&t=olGkwSNcwwtnxmlL-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8711%3A98575"
    },
    {
      id: "kunjungan",
      name: "Kunjungan",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/1bjqlN6jdS4eGDOIfXOxkz/E-form-Layanan-Mandiri-SDB?page-id=8711%3A92221&node-id=8726-24068&viewport=89%2C-898%2C0.06&t=To4kdSTIKgXAuQ6V-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8726%3A24068&show-proto-sidebar=1"
    },
    {
      id: "pemeliharan-penerima-kuasa",
      name: "Pemeliharan Penerima Kuasa",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/1bjqlN6jdS4eGDOIfXOxkz/E-form-Layanan-Mandiri-SDB?page-id=8711%3A92221&node-id=8726-72817&viewport=-12%2C-5157%2C0.11&t=64Z0Rx02THgoCUSG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8726%3A72817&show-proto-sidebar=1"
    },
    {
      id: "penutupan-msdb",
      name: "Penutupan MSDB",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/1bjqlN6jdS4eGDOIfXOxkz/E-form-Layanan-Mandiri-SDB?page-id=8711%3A92221&node-id=8736-40562&viewport=-12%2C-5157%2C0.11&t=64Z0Rx02THgoCUSG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8736%3A40562&show-proto-sidebar=1"
    },
    {
      id: "pencairan-emoney",
      name: "Pencairan E-Money",
      category: "CS",
      description: "Simulasi arahan untuk kendala kartu, kartu hilang, kartu tertelan, atau penggantian kartu.",
      direction: "Arahkan nasabah ke CS. Ingatkan untuk menyiapkan identitas dan buku tabungan bila diperlukan.",
      figmaUrl: "https://www.figma.com/proto/cjPTBsXnkX8gDiH0k4HZXl/E-form-Prepaid-Card?node-id=4028-56068&p=f&t=vX0uNzxnsbJJ5uww-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4028%3A56549&show-proto-sidebar=1"
    }
  ],

  nonPerorangan: [
    {
      id: "transaksi-tanpa-data",
      name: "Transaksi Tanpa Pengisian Data Premiliminary",
      category: "Wholesale",
      description: "Simulasi arahan untuk transaksi transfer perusahaan ke bank lain, termasuk kebutuhan urgent atau nominal besar.",
      direction: "Arahkan nasabah ke Teller/CS sesuai flow cabang. Tanyakan apakah transaksi perusahaan, bank tujuan, dan dokumen pendukung sudah disiapkan.",
      figmaUrl: "https://www.figma.com/proto/yPSkf0wMC95A1nQxznFLO5/Identifikasi-Non-Perorangan-Enhancement?page-id=19615%3A251158&node-id=19642-264122&viewport=366%2C360%2C0.13&t=1e8QSO9yuPopcC25-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=19642%3A264122&show-proto-sidebar=1"
    },
    {
      id: "setor-tunai",
      name: "Setor Tunai",
      category: "Corporate",
      description: "Simulasi arahan untuk kebutuhan payroll perusahaan atau inquiry terkait payroll.",
      direction: "Arahkan ke CS atau petugas corporate. Tanyakan apakah nasabah membawa daftar payroll/dokumen perusahaan sesuai kebutuhan.",
      figmaUrl: "https://www.figma.com/proto/FVYM5jRaAo6Ya0XF6kQG0f/Transaksi-MSA?node-id=2786-119303&viewport=249%2C94%2C0.1&t=ldiyCSnxXDAVQX2n-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2786%3A119303&show-proto-sidebar=1&page-id=2785%3A91151"
    },
    {
      id: "tarik-tunai",
      name: "Tarik Tunai",
      category: "Dokumen",
      description: "Simulasi arahan untuk nasabah perusahaan yang membutuhkan layanan bank garansi.",
      direction: "Arahkan ke CS/officer terkait. Pastikan nasabah membawa surat permohonan dan dokumen perusahaan secara umum.",
      figmaUrl: "https://www.figma.com/proto/f9KTRGQ416w6C5jT4aJzrm/Tarik-Tunai-IDR-Non-Perorangan?node-id=4931-98541&t=qgz1g9z7Wkp7K2Tf-1&scaling=scale-down&content-scaling=fixed&page-id=4931%3A93913&starting-point-node-id=4931%3A98541"
    },
    {
      id: "kliring-inkaso",
      name: "Kliriing Inkaso",
      category: "Dokumen",
      description: "Simulasi arahan untuk nasabah perusahaan yang membutuhkan layanan bank garansi.",
      direction: "Arahkan ke CS/officer terkait. Pastikan nasabah membawa surat permohonan dan dokumen perusahaan secara umum.",
      figmaUrl: "https://www.figma.com/proto/y1NzBvYZjdq1LpGhzjx3wA/Kliring-Inkaso---Non-Perorangan?page-id=12993%3A100690&node-id=12993-285896&viewport=70%2C216%2C0.06&t=H6LtgO5RwJE0aPqD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=12993%3A285896&show-proto-sidebar=1"
    },
    {
      id: "transfer-mandiri",
      name: "Transfer Sesama Mandiri",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/ubRbheRHWvMXBnNI4C9Dan/DHE-SDA---Overbooking?node-id=8621-374489&p=f&t=9KNbtWSilPEi7cyn-9&scaling=min-zoom&content-scaling=fixed&page-id=8446%3A233444&starting-point-node-id=8621%3A374489&show-proto-sidebar=1"
    },
    {
      id: "transfer-bank-lain",
      name: "Transfer Bank Lain",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/xqmXIIfe1oz7Ne3LpS06pT/SKNBI-Non-Perorangan--All-Method-?node-id=8059-31198&t=U3GsMH2TVlWDIhCF-1&scaling=min-zoom&content-scaling=fixed&page-id=8048%3A27732&starting-point-node-id=8059%3A31198&show-proto-sidebar=1"
    },
    {
      id: "jual-beli-valas",
      name: "Jual Beli Valas",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/3f35kNaQPfVmMCSyMzeYTa/Jual-Beli-Valas-Non-Perorangan-Single-Screen?node-id=4976-66978&p=f&t=leAXmWZF8kPGBc9W-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=5056%3A76777&show-proto-sidebar=1"
    },
    {
      id: "transfer-valas",
      name: "Transfer Valuta Asing",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/cDFxC0LOlDIsiYIIYku7Hi/E-form-GB-Tablet-WBA-TT-Non-Perorangan-R5.0?node-id=8185-174083&t=yJmYxbjzFKd1hAJj-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=8185%3A174083&show-proto-sidebar=1"
    },
    {
      id: "pembayaran",
      name: "Pembayaran",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/6HjeFwYtW9GEamyznSWrAv/GB-Payment-IDR-Non-Perorangan---Single-Screen?page-id=7463%3A224698&node-id=7465-102083&viewport=110%2C-1714%2C0.07&t=wHUvFDKctbT6ol1u-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=7465%3A102083&show-proto-sidebar=1"
    },
    {
      id: "pembukaan-tabungan",
      name: "Pembukaan Rekening Tabungan",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/W0AICVY60fk6oy1TOxK7Vc/Prototype-Onboarding-DHE-and-Pengambilan-Emas?node-id=10014-33071&p=f&t=kIdmkg61eOesGQ2w-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10035%3A44505&show-proto-sidebar=1"
    },
    {
      id: "pembukaan-giro",
      name: "Pembukaan Rekening Giro",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/W0AICVY60fk6oy1TOxK7Vc/Prototype-Onboarding-DHE-and-Pengambilan-Emas?node-id=10014-33071&p=f&t=kIdmkg61eOesGQ2w-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10036%3A13737&show-proto-sidebar=1"
    },
    {
      id: "pembukaan-deposito",
      name: "Pembukaan Rekening Deposito",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/W0AICVY60fk6oy1TOxK7Vc/Prototype-Onboarding-DHE-and-Pengambilan-Emas?node-id=10014-33071&p=f&t=kIdmkg61eOesGQ2w-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10036%3A14715&show-proto-sidebar=1"
    },
    {
      id: "pemeliharaan-stampel-giro",
      name: "Pemeliharaan TTD/Stampel Giro",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/H2Ri6uyeWvLZxzV3qwGyvP/-Per--DHE-SDA---Tarik-Tunai-Valas?page-id=9523%3A14133&node-id=9523-36956&t=zOc84mDU4Q5ECcA3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9523%3A36956&show-proto-sidebar=1"
    },
    {
      id: "pengambilan-warkat",
      name: "Pengambilan Warkat - Giro",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/fMnXRD4wGPtHm9o62ebY1n/-5.0--Layanan-Giro-Non-Perorangan?node-id=6878-36424&t=B0WOM0fd5TUQW5dE-1&scaling=contain&content-scaling=fixed&page-id=6867%3A128039&starting-point-node-id=6878%3A36424&show-proto-sidebar=1"
    },
    {
      id: "aktivasi-warkat",
      name: "Aktivasi Warkat - Giro",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/fMnXRD4wGPtHm9o62ebY1n/-5.0--Layanan-Giro-Non-Perorangan?node-id=6878-38129&t=XL8bEgy45b9p5fJr-1&scaling=contain&content-scaling=fixed&page-id=6867%3A128039&starting-point-node-id=6878%3A38129&show-proto-sidebar=1"
    },
    {
      id: "pemblokiran-warkat-non-dhn",
      name: "Pemblokiran Warkat Non DHN - Giro",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/fMnXRD4wGPtHm9o62ebY1n/-5.0--Layanan-Giro-Non-Perorangan?node-id=6876-130623&t=gblA8sE2tOfg0Lvd-1&scaling=contain&content-scaling=fixed&page-id=6867%3A128039&starting-point-node-id=6876%3A130623&show-proto-sidebar=1"
    },
    {
      id: "pembatalan-dhn",
      name: "Permohonan Pembatalan SP/DHN",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/DPvlkNSzt9rFYskmTEmV4s/-5.0--SP-DHN---Giro-Khusus?node-id=11080-50421&t=HX1oIhMk3i9mM8gp-1&scaling=contain&content-scaling=fixed&page-id=11080%3A44112&starting-point-node-id=11080%3A50421&show-proto-sidebar=1"
    },
    {
      id: "pembuatan-debit-baru",
      name: "Pembuatan Mandiri Debit Baru",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/KXc2YAlwKuzBJ7VQcf9l4Y/DCM-Enh-4.1--Non-Perorangan-?node-id=7872-5015&t=eFFA9Kg5dSCYngoy-1&scaling=contain&content-scaling=fixed&page-id=7869%3A84008&starting-point-node-id=7872%3A5015&show-proto-sidebar=1"
    },
    {
      id: "rekening-terhubung",
      name: "Pengaturan Rekening Terhubung Debit",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/KXc2YAlwKuzBJ7VQcf9l4Y/DCM-Enh-4.1--Non-Perorangan-?node-id=7872-74126&t=eFFA9Kg5dSCYngoy-1&scaling=contain&content-scaling=fixed&page-id=7869%3A84008&starting-point-node-id=7872%3A74126&show-proto-sidebar=1"
    },
    {
      id: "penggantian-debit",
      name: "Penggantian Mandiri Debit",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/KXc2YAlwKuzBJ7VQcf9l4Y/DCM-Enh-4.1--Non-Perorangan-?node-id=7872-131854&t=eFFA9Kg5dSCYngoy-1&scaling=contain&content-scaling=fixed&page-id=7869%3A84008&starting-point-node-id=7872%3A131854&show-proto-sidebar=1"
    },
    {
      id: "pemblokiran-debit",
      name: "Pemblokiran Mandiri Debit",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/KXc2YAlwKuzBJ7VQcf9l4Y/DCM-Enh-4.1--Non-Perorangan-?node-id=7872-205063&t=eFFA9Kg5dSCYngoy-1&scaling=contain&content-scaling=fixed&page-id=7869%3A84008&starting-point-node-id=7872%3A205063&show-proto-sidebar=1"
    },
    {
      id: "pembukaan-blokir",
      name: "Kopra / Corporate Channel",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/KXc2YAlwKuzBJ7VQcf9l4Y/DCM-Enh-4.1--Non-Perorangan-?node-id=7875-25033&t=eFFA9Kg5dSCYngoy-1&scaling=contain&content-scaling=fixed&page-id=7869%3A84008&starting-point-node-id=7875%3A25033&show-proto-sidebar=1"
    },
    {
      id: "pembuatan-pin-baru",
      name: "Pembuatan Pin Mandiri Debit Baru",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/KXc2YAlwKuzBJ7VQcf9l4Y/DCM-Enh-4.1--Non-Perorangan-?node-id=7875-69857&t=eFFA9Kg5dSCYngoy-1&scaling=contain&content-scaling=fixed&page-id=7869%3A84008&starting-point-node-id=7875%3A69857&show-proto-sidebar=1"
    },
    {
      id: "pengambilan-debit",
      name: "Kopra / Corporate Channel",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/KXc2YAlwKuzBJ7VQcf9l4Y/DCM-Enh-4.1--Non-Perorangan-?node-id=7878-129707&t=eFFA9Kg5dSCYngoy-1&scaling=contain&content-scaling=fixed&page-id=7869%3A84008&starting-point-node-id=7878%3A129707&show-proto-sidebar=1"
    },
    {
      id: "penghentian-deposito",
      name: "Penghentian Perpanjangan Otomatis Deposito",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/X5cNj7fkQVqzIpgsoa1cjj/Layanan-Deposito-Perorangan---Non-Perorangan-5.0?node-id=31205-202464&p=f&t=RFRmj9BAmeqAsWpo-9&scaling=min-zoom&content-scaling=fixed&page-id=31142%3A45591&starting-point-node-id=31205%3A202464&show-proto-sidebar=1"
    },
    {
      id: "layanan-cetak-deposito",
      name: "Layanan Cetak Perpanjangan Otomatis Deposito",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/X5cNj7fkQVqzIpgsoa1cjj/Layanan-Deposito-Perorangan---Non-Perorangan-5.0?node-id=31490-146498&p=f&t=w6quH1KpVUXrqFi3-9&scaling=scale-down&content-scaling=fixed&page-id=31142%3A45591&starting-point-node-id=31490%3A146498&show-proto-sidebar=1"
    },
    {
      id: "pencetakan-ulang-bilyet",
      name: "Pencetakan Ulang Bilyet Deposito",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/X5cNj7fkQVqzIpgsoa1cjj/Layanan-Deposito-Perorangan---Non-Perorangan-5.0?node-id=31202-192076&p=f&t=RFRmj9BAmeqAsWpo-9&scaling=min-zoom&content-scaling=fixed&page-id=31142%3A45591&starting-point-node-id=31202%3A192076&show-proto-sidebar=1"
    },
    {
      id: "pengaduan-rekening",
      name: "Pengaduan Rekening Nasabah",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/oMJKG1uyAYL0yybVaqgkgP/R5.0-Complaint-Handling-CIS?node-id=17008-42295&p=f&t=ymPtQ1uHsIgHi5h4-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=17134%3A110239&show-proto-sidebar=1"
    },
    {
      id: "blokir-rekening",
      name: "Blokir/Aktivasi Rekening",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/ajhIXYqwHAtgkDAgpUHsoK/-5.0--AM-Non-Perorangan?node-id=6124-50766&t=wqXPGhR846Uy4sso-1&scaling=contain&content-scaling=fixed&page-id=6109%3A17532&starting-point-node-id=6124%3A50766&show-proto-sidebar=1"
    },
    {
      id: "aktivasi-rekening",
      name: "Aktivasi Rekening",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/ajhIXYqwHAtgkDAgpUHsoK/-5.0--AM-Non-Perorangan?node-id=6124-50824&t=wqXPGhR846Uy4sso-1&scaling=contain&content-scaling=fixed&page-id=6109%3A17532&starting-point-node-id=6124%3A50824&show-proto-sidebar=1"
    },
    {
      id: "rekening-koran",
      name: "Rekening Koran",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/TJlQB6czzsDHLVp6meQrFs/-5.0--Rekening-Koran?node-id=6564-80206&p=f&t=3OvE8mSa6wWRqm6p-0&scaling=scale-down&content-scaling=fixed&page-id=6482%3A2108913&starting-point-node-id=6564%3A80206&show-proto-sidebar=1"
    },
    {
      id: "penutupan-tabungan",
      name: "Penutupan Rekening Tabungan",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/6MkUZaTmTxyqH6eRfMrWRW/GB-Tablet-Penutupan-Rekening-DHE-Non-Perorangan-4.1?node-id=27004-90431&p=f&t=WB0CMYizCR9JGi4F-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=27020%3A93905&show-proto-sidebar=1"
    },
    {
      id: "penutupan-giro",
      name: "Penutupan Rekening Giro",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/6MkUZaTmTxyqH6eRfMrWRW/GB-Tablet-Penutupan-Rekening-DHE-Non-Perorangan-4.1?node-id=27004-90431&p=f&t=WB0CMYizCR9JGi4F-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=27005%3A52740&show-proto-sidebar=1"
    },
    {
      id: "penutupan-deposito",
      name: "Pengubahan Tagihan Terjadwal Pengubahan",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/6MkUZaTmTxyqH6eRfMrWRW/GB-Tablet-Penutupan-Rekening-DHE-Non-Perorangan-4.1?node-id=27004-90431&p=f&t=WB0CMYizCR9JGi4F-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=27008%3A211267&show-proto-sidebar=1"
    },
    {
      id: "pembayaran-tagihan-penambahan",
      name: "Pembayaran Tagihan Terjadwal Penambahan",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/QforFdRHd8hb0a3kttWgVm/E-form-Payment-Point?page-id=4710%3A23435&node-id=4731-70981&viewport=2697%2C242%2C0.12&t=hsGZbCyBBTMXrmiZ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4731%3A70981"
    },
    {
      id: "pembayaran-tagihan-pengubahan",
      name: "Pembayaran Tagihan Terjadwal Pengubahan",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/QforFdRHd8hb0a3kttWgVm/E-form-Payment-Point?page-id=4710%3A23435&node-id=4784-80279&viewport=1808%2C176%2C0.07&t=vw1DExVJ7M16FT4m-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4784%3A80279&show-proto-sidebar=1"
    },
    {
      id: "pembayaran-tagihan-penghapusan",
      name: "Pembayaran Tagihan Terjadwal Penghapusan",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/QforFdRHd8hb0a3kttWgVm/E-form-Payment-Point?page-id=4710%3A23435&node-id=4787-87850&viewport=2542%2C-575%2C0.1&t=GcTsARfM7vo4aTzW-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4787%3A87850&show-proto-sidebar=1"
    },
    {
      id: "online-sweep",
      name: "Pemindahan Saldo Otomatis (Sweep) Online Sweep",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/JZwiPxi9FsM5AgnhnClwJa/E-form-Sweep-Perorangan---Non-Perorangan?node-id=5580-96726&t=2D3GqIdePyfvX4C4-1&scaling=scale-down&content-scaling=fixed&page-id=5479%3A40243&starting-point-node-id=5580%3A96726&show-proto-sidebar=1"
    },
    {
      id: "batch-sweep",
      name: "Pemindahan Saldo Otomatis (Sweep) Batch Sweep",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/JZwiPxi9FsM5AgnhnClwJa/E-form-Sweep-Perorangan---Non-Perorangan?node-id=5610-51232&t=2D3GqIdePyfvX4C4-1&scaling=scale-down&content-scaling=fixed&page-id=5479%3A40243&starting-point-node-id=5610%3A51232&show-proto-sidebar=1"
    },
    {
      id: "pembukaan-msdb",
      name: "Pembukaan MSDB",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/sbWaxQTa8t0IrZFjzqQf3y/GB-Layanan-SDB?page-id=10911%3A90709&node-id=10912-105900&viewport=16%2C211%2C0.09&t=LrLTrKWsnnOTElob-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10912%3A105900&show-proto-sidebar=1"
    },
    {
      id: "kunjungan",
      name: "Kunjungan",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/sbWaxQTa8t0IrZFjzqQf3y/GB-Layanan-SDB?page-id=10911%3A90709&node-id=10917-154494&viewport=16%2C211%2C0.09&t=LrLTrKWsnnOTElob-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10917%3A154494&show-proto-sidebar=1"
    },
    {
      id: "pemeliharaan-penerima-kuasa",
      name: "Pemeliharaan Penerima Kuasa",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/sbWaxQTa8t0IrZFjzqQf3y/GB-Layanan-SDB?page-id=10911%3A90709&node-id=10917-190592&viewport=16%2C211%2C0.09&t=LrLTrKWsnnOTElob-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10917%3A190592&show-proto-sidebar=1"
    },
    {
      id: "penutupan-msdb",
      name: "Penutupan MSDB",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/sbWaxQTa8t0IrZFjzqQf3y/GB-Layanan-SDB?page-id=10911%3A90709&node-id=10917-200131&viewport=16%2C211%2C0.09&t=LrLTrKWsnnOTElob-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10917%3A200131&show-proto-sidebar=1"
    }
  ]
};

let selectedType = "";
let selectedTransaction = null;

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(screenId).classList.add("active");
}

function updateProgress(activeStep) {
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`step-${i}`).classList.toggle("active", i <= activeStep);
  }
}

function selectCustomerType(type) {
  selectedType = type;
  const isPersonal = type === "perorangan";

  document.getElementById("transaction-title").textContent = isPersonal
    ? "List Transaksi Nasabah Perorangan"
    : "List Transaksi Nasabah Non Perorangan";

  document.getElementById("transaction-subtitle").textContent = isPersonal
    ? "Pilih transaksi individu yang ingin disimulasikan."
    : "Pilih transaksi perusahaan/wholesale yang ingin disimulasikan.";

  renderTransactions();
  showScreen("screen-transaction-list");
  updateProgress(2);
}

function renderTransactions() {
  const container = document.getElementById("transaction-list");
  container.innerHTML = "";

  transactions[selectedType].forEach(transaction => {
    const card = document.createElement("button");
    card.className = "transaction-card";
    card.onclick = () => openSimulation(transaction.id);

    card.innerHTML = `
      <span class="tag">${transaction.category}</span>
      <h3>${transaction.name}</h3>
      <span>Mulai simulasi →</span>
    `;

    container.appendChild(card);
  });
}

function openSimulation(transactionId) {
  selectedTransaction = transactions[selectedType].find(item => item.id === transactionId);

  if (!selectedTransaction) return;

  document.getElementById("simulation-name").textContent = selectedTransaction.name;
  document.getElementById("simulation-direction").textContent = selectedTransaction.direction;

  const figmaLink = document.getElementById("figma-link");
  figmaLink.href = selectedTransaction.figmaUrl;

  showScreen("screen-simulation");
  updateProgress(3);
}

function finishSimulation() {
  // Setelah simulasi selesai, user diarahkan kembali ke list transaksi kategori yang sama
  showScreen("screen-transaction-list");
  updateProgress(2);
}

function backToTransactions() {
  showScreen("screen-transaction-list");
  updateProgress(2);
}

function goHome() {
  selectedType = "";
  selectedTransaction = null;
  showScreen("screen-customer-type");
  updateProgress(1);
}
