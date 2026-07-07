const transactionsSatpam = {
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
const transactionsTeller = {
  perorangan: [
    {
      id: "setor-tunai",
      name: "Setor Tunai",
      description: "Simulasi arahan untuk nasabah individu yang ingin melakukan setoran tunai.",
      direction: "Arahkan nasabah ke Teller. Pastikan nasabah sudah menyiapkan uang tunai, nomor rekening tujuan, dan identitas bila diperlukan.",
      figmaUrl: "https://www.figma.com/proto/FVYM5jRaAo6Ya0XF6kQG0f/Transaksi-MSA?node-id=2879-39630&viewport=349%2C-2367%2C0.25&t=ifGWEpsw8hONGpNt-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2879%3A39630&page-id=2785%3A91151"
    },
    {
      id: "tarik-tunai",
      name: "Tarik Tunai",
      description: "Simulasi arahan untuk nasabah individu yang ingin melakukan penarikan tunai.",
      direction: "Arahkan nasabah ke Teller. Ingatkan nasabah untuk menyiapkan buku tabungan/kartu, identitas, dan memastikan nominal transaksi.",
      figmaUrl: "https://www.figma.com/proto/H2Ri6uyeWvLZxzV3qwGyvP/-Per--DHE-SDA---Tarik-Tunai-Valas?page-id=9523%3A14133&node-id=9523-36956&t=jwurdw8EQX2f4uqV-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9523%3A36956&show-proto-sidebar=1"
    },
    {
      id: "transfer-mandiri",
      name: "Transfer Sesama Mandiri",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/ubRbheRHWvMXBnNI4C9Dan/DHE-SDA---Overbooking?node-id=8621-250288&p=f&t=199u670TlvH014NK-9&scaling=min-zoom&content-scaling=fixed&page-id=8446%3A233444&starting-point-node-id=8621%3A250288&show-proto-sidebar=1"
    },
    {
      id: "transfer-bank-lain-sknbi",
      name: "Transfer Bank Lain - SKNBI",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/jDYgbeeZOfNrmIxztYWhZH/GB-Tablet---Transfer-Bank-Lain---Perorangan?node-id=8166-12094&t=Kjtyq5nzhBT3XbeH-1&scaling=min-zoom&content-scaling=fixed&page-id=6741%3A124497&starting-point-node-id=8166%3A12094&show-proto-sidebar=1"
    },
    {
      id: "pengembalian-dana",
      name: "Pengembalian Dana - SKNBI",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/M5hpkMQXurGIOzPZwrDi9u/Retur-Transaksi?node-id=9606-122771&t=GqmtUowxqrQ0wWmt-1&scaling=min-zoom&content-scaling=fixed&page-id=9516%3A96164&starting-point-node-id=9606%3A122771&show-proto-sidebar=1"
    },
    {
      id: "transfer-valas",
      name: "Transfer Valuta Asing/TT",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/wZYkszYUtWPWpAa4BkeTvf/E-form-GB-Tablet-WBA-TT-Perorangan-R5.0?node-id=5060-151752&t=Wn0167Qas2DE5LTo-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=5060%3A151752&show-proto-sidebar=1"
    },
    {
      id: "pembayaran",
      name: "Pembayaran",
      category: "Teller / CS",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/inG6VWTF5ODA5fU4NUh15J/DHE-SDA---Payment?page-id=4832%3A332&node-id=4915-16098&viewport=54%2C-834%2C0.11&t=XNh4cg44kJOq9aOB-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4915%3A16098&show-proto-sidebar=1"
    },
    {
      id: "pembelian-emoney",
      name: "Pembelian Emoney",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/dgXAksmj8E2bR3YJVapGPk/GB-Prepaid-Card?node-id=3294-32888&p=f&t=QNWVeqYB1Q0Ro3pg-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3319%3A119934&show-proto-sidebar=1"
    },
    {
      id: "reservasi-nasabah-tanpa-kehadiran",
      name: "Reservasi Nasabah Perorangan Tanpa Kehadiran",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/1bjqlN6jdS4eGDOIfXOxkz/E-form-Layanan-Mandiri-SDB?page-id=8711%3A92221&node-id=8726-72817&viewport=-12%2C-5157%2C0.11&t=64Z0Rx02THgoCUSG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8726%3A72817&show-proto-sidebar=1"
    },
    {
      id: "multiple-debet-kredit",
      name: "Multiple Debet Kredit",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/1bjqlN6jdS4eGDOIfXOxkz/E-form-Layanan-Mandiri-SDB?page-id=8711%3A92221&node-id=8736-40562&viewport=-12%2C-5157%2C0.11&t=64Z0Rx02THgoCUSG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8736%3A40562&show-proto-sidebar=1"
    }
  ],

  nonPerorangan: [
    {
      id: "setor-tunai",
      name: "Setor Tunai",
      description: "Simulasi arahan untuk kebutuhan payroll perusahaan atau inquiry terkait payroll.",
      direction: "Arahkan ke CS atau petugas corporate. Tanyakan apakah nasabah membawa daftar payroll/dokumen perusahaan sesuai kebutuhan.",
      figmaUrl: "https://www.figma.com/proto/FVYM5jRaAo6Ya0XF6kQG0f/Transaksi-MSA?node-id=2887-310056&viewport=349%2C-2367%2C0.25&t=ifGWEpsw8hONGpNt-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2887%3A310056&page-id=2785%3A91151"
    },
    {
      id: "tarik-tunai",
      name: "Tarik Tunai",
      description: "Simulasi arahan untuk nasabah perusahaan yang membutuhkan layanan bank garansi.",
      direction: "Arahkan ke CS/officer terkait. Pastikan nasabah membawa surat permohonan dan dokumen perusahaan secara umum.",
      figmaUrl: "https://www.figma.com/proto/f9KTRGQ416w6C5jT4aJzrm/Tarik-Tunai-IDR-Non-Perorangan?node-id=4976-91794&t=hpmqY9J3NJCrqyvn-1&scaling=min-zoom&content-scaling=fixed&page-id=4931%3A93913&starting-point-node-id=4976%3A91794&show-proto-sidebar=1"
    },
    {
      id: "kliring-inkaso",
      name: "Kliriing Inkaso",
      description: "Simulasi arahan untuk nasabah perusahaan yang membutuhkan layanan bank garansi.",
      direction: "Arahkan ke CS/officer terkait. Pastikan nasabah membawa surat permohonan dan dokumen perusahaan secara umum.",
      figmaUrl: "https://www.figma.com/proto/y1NzBvYZjdq1LpGhzjx3wA/Kliring-Inkaso---Non-Perorangan?page-id=12993%3A100690&node-id=13000-108575&viewport=-9%2C-388%2C0.05&t=OY0oOhfrc2B3HrVB-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=13000%3A108575&show-proto-sidebar=1"
    },
    {
      id: "transfer-mandiri",
      name: "Transfer Sesama Mandiri",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/ubRbheRHWvMXBnNI4C9Dan/DHE-SDA---Overbooking?node-id=8621-386910&p=f&t=199u670TlvH014NK-9&scaling=min-zoom&content-scaling=fixed&page-id=8446%3A233444&starting-point-node-id=8621%3A386910&show-proto-sidebar=1"
    },
    {
      id: "transfer-bank-lain",
      name: "Transfer Bank Lain - SKNBI",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/xqmXIIfe1oz7Ne3LpS06pT/SKNBI-Non-Perorangan--All-Method-?node-id=8048-27733&t=U3GsMH2TVlWDIhCF-1&scaling=min-zoom&content-scaling=fixed&page-id=8048%3A27732&starting-point-node-id=8048%3A27733&show-proto-sidebar=1"
    },
    {
      id: "pengembalian-dana",
      name: "Pengembalian Dana - SKNBI",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/M5hpkMQXurGIOzPZwrDi9u/Retur-Transaksi?node-id=9519-60067&t=Knj0thh9wKZO15mH-1&scaling=min-zoom&content-scaling=fixed&page-id=9516%3A96164&starting-point-node-id=9519%3A60067"
    },
    {
      id: "jual-beli-valas",
      name: "Jual Beli Valas",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/3f35kNaQPfVmMCSyMzeYTa/Jual-Beli-Valas---Non-Perorangan---Single-Screen?node-id=5056-75759&p=f&t=leAXmWZF8kPGBc9W-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=5056%3A75759&show-proto-sidebar=1"
    },
    {
      id: "transfer-valas",
      name: "Transfer Valuta Asing",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/cDFxC0LOlDIsiYIIYku7Hi/E-form--GB-Tablet--WBA---TT-Non-Perorangan-R5.0?node-id=8191-178994&t=qu2MdGeYFGUnVc1y-1&scaling=scale-down&content-scaling=fixed&page-id=8185%3A173629&starting-point-node-id=8191%3A178994&show-proto-sidebar=1"
    },
    {
      id: "pembayaran",
      name: "Pembayaran DHE",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/6HjeFwYtW9GEamyznSWrAv/GB-Payment-IDR-Non-Perorangan---Single-Screen?page-id=7463%3A224698&node-id=7470-240614&viewport=110%2C-1714%2C0.07&t=wHUvFDKctbT6ol1u-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=7470%3A240614&show-proto-sidebar=1"
    },
    {
      id: "reservasi-nasabah-tanpa-kehadiran",
      name: "Reservasi Nasabah Badan Tanpa Kehadiran",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/tqB0ywXdlRNVSLuh5Htsh8/Prototype-Nasabah-Tanpa-Kehadiran?node-id=47-39703&p=f&t=qNWxBa5E0Uogq2ne-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A1548&starting-point-node-id=47%3A39703&show-proto-sidebar=1"
    },
    {
      id: "multiple-debet-kredit",
      name: "Multiple Debet Kredit",
      category: "Digital Channel",
      description: "Simulasi arahan untuk kendala akses, token, user, transaksi, atau penggunaan Kopra.",
      direction: "Arahkan ke CS/petugas terkait digital channel. Tanyakan jenis kendala: akses, token, transaksi, atau user perusahaan.",
      figmaUrl: "https://www.figma.com/proto/iIkJNu949EQy2c2SWNM6I8/Financial-Single-Screen?node-id=29416-66334&viewport=45%2C238%2C0.24&t=3B1f2se634bpVyHf-1&scaling=min-zoom&content-scaling=fixed&page-id=29416%3A34934&starting-point-node-id=29416%3A66334"
    }
  ]
};
const transactionsCS = {
  perorangan: [
    {
      id: "pembukaan-tabungan",
      name: "Pembukaan Rekening : Tabungan",
      description: "Simulasi arahan untuk nasabah individu yang ingin melakukan setoran tunai.",
      direction: "Arahkan nasabah ke Teller. Pastikan nasabah sudah menyiapkan uang tunai, nomor rekening tujuan, dan identitas bila diperlukan.",
      figmaUrl: "https://www.figma.com/proto/W0AICVY60fk6oy1TOxK7Vc/Prototype-Onboarding-DHE-and-Pengambilan-Emas?node-id=10024-54153&p=f&t=kIdmkg61eOesGQ2w-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10024%3A64644&show-proto-sidebar=1"
    },
    {
      id: "pembukaan-giro",
      name: "Pembukaan Rekening : Giro",
      description: "Simulasi arahan untuk nasabah individu yang ingin melakukan penarikan tunai.",
      direction: "Arahkan nasabah ke Teller. Ingatkan nasabah untuk menyiapkan buku tabungan/kartu, identitas, dan memastikan nominal transaksi.",
      figmaUrl: "https://www.figma.com/proto/W0AICVY60fk6oy1TOxK7Vc/Prototype-Onboarding-DHE-and-Pengambilan-Emas?node-id=10024-54153&p=f&t=kIdmkg61eOesGQ2w-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10026%3A7546&show-proto-sidebar=1"
    },
    {
      id: "pembukaan-deposito",
      name: "Pembukaan Rekening : Deposito",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/W0AICVY60fk6oy1TOxK7Vc/Prototype-Onboarding-DHE?node-id=10031-29324&p=f&t=kIdmkg61eOesGQ2w-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10031%3A29324&show-proto-sidebar=1"
    },
    {
      id: "pemeliharaan-tanda-tangan",
      name: "Layanan Giro : Pemeliharaan Tanda Tangan",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/ecgAPi6fRmRXwd4SPxP4VC/GB-Account-Maintenance-Sprint-3?page-id=6965%3A18521&node-id=9857-52005&viewport=231%2C292%2C0.43&t=yjseTA4PQdf7L0r0-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=9857%3A52005"
    },
    {
      id: "pemeliharaan-tabungan",
      name: "Layanan Tabungan : Pemeliharaan Tabungan Rencana",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/8eQAVaetQA3TxF0ooeqPFl/Layanan-Mandiri-Tabungan?node-id=4369-169921&p=f&t=LjaqmLxOqEyvrWwk-9&scaling=min-zoom&content-scaling=fixed&page-id=4367%3A134758&starting-point-node-id=4369%3A169921&show-proto-sidebar=1"
    },
    {
      id: "pengaturan-rekening-terhubung",
      name: "Layanan Mandiri Debit : Pengaturan Rekening Terhubung",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/nnZhkqiIiJ1M5mzTb8W8KK/DCM-Enh-4.1--Perorangan-?node-id=13188-90010&t=IoZoCLqx65xznmiN-1&scaling=min-zoom&content-scaling=fixed&page-id=517%3A39667&starting-point-node-id=13188%3A90010"
    },
    {
      id: "perpanjangan-deposito",
      name: "Layanan Deposito : Penghentian Perpanjangan Otomatis Deposito",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/X5cNj7fkQVqzIpgsoa1cjj/Layanan-Deposito-Perorangan---Non-Perorangan-5.0?node-id=31490-171470&p=f&t=1DRAbOqHLmeSZpEP-9&scaling=scale-down&content-scaling=fixed&page-id=31142%3A45591&starting-point-node-id=31490%3A171470&show-proto-sidebar=1"
    },
    {
      id: "layanan-deposito-cetak-perpanjangan",
      name: "Layanan Deposito : Layanan Cetak Perpanjangan Otomatis Deposito ",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/X5cNj7fkQVqzIpgsoa1cjj/Layanan-Deposito-Perorangan---Non-Perorangan-5.0?node-id=31490-171457&p=f&t=1DRAbOqHLmeSZpEP-9&scaling=scale-down&content-scaling=fixed&page-id=31142%3A45591&starting-point-node-id=31490%3A171457&show-proto-sidebar=1"
    },
    {
      id: "pengaduan-rekening-nasabah",
      name: "Layanan Pengaduan : Pengaduan Rekening Nasabah",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/TJlQB6czzsDHLVp6meQrFs/-5.0--Rekening-Koran?node-id=6482-2113517&t=3OvE8mSa6wWRqm6p-0&scaling=scale-down&content-scaling=fixed&page-id=6482%3A2108913&starting-point-node-id=6482%3A2113517&show-proto-sidebar=1"
    },
    {
      id: "rekening-koran",
      name: "Rekening Koran",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/1bjqlN6jdS4eGDOIfXOxkz/E-form-Layanan-Mandiri-SDB?page-id=8711%3A92221&node-id=8736-40562&viewport=-12%2C-5157%2C0.11&t=64Z0Rx02THgoCUSG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8736%3A40562&show-proto-sidebar=1"
    },
    {
      id: "penutupan-tabungan",
      name: "Penutupan Rekening : Tabungan",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/PMbJV8X5kMhHnChdshdKVR/GB-Tablet-Penutupan-Rekening-DHE-Perorangan?node-id=26205-327&p=f&t=HMTLgnD51VhP0sIi-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=26206%3A15045&show-proto-sidebar=1"
    },
    {
      id: "penutupan-giro",
      name: "Penutupan Rekening : Giro ",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/PMbJV8X5kMhHnChdshdKVR/GB-Tablet-Penutupan-Rekening-DHE-Perorangan?node-id=26205-327&p=f&t=HMTLgnD51VhP0sIi-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=26206%3A118109&show-proto-sidebar=1"
    },
    {
      id: "penutupan-deposito",
      name: "Penutupan Rekening : Deposito",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/PMbJV8X5kMhHnChdshdKVR/GB-Tablet-Penutupan-Rekening-DHE-Perorangan?node-id=26205-327&p=f&t=HMTLgnD51VhP0sIi-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=26214%3A15407&show-proto-sidebar=1"
    },
    {
      id: "tagihan-terjadwal",
      name: "Pembayaran Tagihan Terjadwal",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/blo3OMdJqzznQznOKRmMO1/GB-Payment-Point?page-id=2712%3A39737&node-id=2712-43678&viewport=313%2C360%2C0.13&t=uNe3oc3UNCDutBT5-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2712%3A43055"
    },
    {
      id: "online-sweep",
      name: "Pemindahan Saldo Otomatis : Online Sweep",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/OkeI0gKOwCjKVJVGsyNVZq/GB-and-WBA-Sweep-Perorangan-and-Non-Perorangan?node-id=4177-35487&t=z1KNJbUlD050c8c7-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4177%3A35487&show-proto-sidebar=1"
    },
    {
      id: "batch-sweep",
      name: "Pemindahan Saldo Otomatis : Batch Sweep",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/OkeI0gKOwCjKVJVGsyNVZq/GB-and-WBA-Sweep-Perorangan-and-Non-Perorangan?node-id=4271-17258&t=z1KNJbUlD050c8c7-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4271%3A17258&show-proto-sidebar=1"
    },
    {
      id: "pembukaan-msdb",
      name: "Pembukaan MSDB",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/1bjqlN6jdS4eGDOIfXOxkz/E-form-Layanan-Mandiri-SDB?page-id=8711%3A92221&node-id=8718-16703&viewport=49%2C-406%2C0.09&t=7Ukage4kGQmWQTTY-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=8718%3A16703&show-proto-sidebar=1"
    },
    {
      id: "layanan-kunjungan",
      name: "Layanan Kunjungan",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/1bjqlN6jdS4eGDOIfXOxkz/E-form-Layanan-Mandiri-SDB?page-id=8711%3A92221&node-id=8726-65932&viewport=49%2C-406%2C0.09&t=7Ukage4kGQmWQTTY-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=8726%3A65932&show-proto-sidebar=1"
    },
    {
      id: "pemeliharaan-penerima-kuasa",
      name: "Pemeliharaan Penerima Kuasa",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/1bjqlN6jdS4eGDOIfXOxkz/E-form-Layanan-Mandiri-SDB?page-id=8711%3A92221&node-id=8729-48698&viewport=49%2C-406%2C0.09&t=7Ukage4kGQmWQTTY-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=8729%3A48698&show-proto-sidebar=1"
    },
    {
      id: "penutupan-msdb",
      name: "Penutupan MSDB",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/1bjqlN6jdS4eGDOIfXOxkz/E-form-Layanan-Mandiri-SDB?page-id=8711%3A92221&node-id=8729-48698&viewport=49%2C-406%2C0.09&t=7Ukage4kGQmWQTTY-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=8729%3A48698&show-proto-sidebar=1"
    },
    {
      id: "pencairan-emoney",
      name: "Pencairan e-money",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/1bjqlN6jdS4eGDOIfXOxkz/E-form-Layanan-Mandiri-SDB?page-id=8711%3A92221&node-id=8729-48698&viewport=49%2C-406%2C0.09&t=7Ukage4kGQmWQTTY-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=8729%3A48698&show-proto-sidebar=1"
    },
    {
      id: "customer-profil",
      name: "Customer Profil",
      description: "Simulasi untuk membantu satpam mengarahkan nasabah yang ingin transfer sesama Mandiri atau bank lain.",
      direction: "Tanyakan apakah transfer ke sesama Mandiri atau bank lain. Untuk kebutuhan khusus, arahkan sesuai ketentuan cabang.",
      figmaUrl: "https://www.figma.com/proto/7kiA5NXIlSCJPDQp58TTpx/GB-Customer-360---Product-Offering?node-id=298009-491040&t=w8WWtdOMKo5iyd9C-1&scaling=min-zoom&content-scaling=fixed&page-id=6101%3A524281&starting-point-node-id=298009%3A491040&show-proto-sidebar=1"
    }
  ],

  nonPerorangan: [
    {
      id: "pembukaan-deposito",
      name: "Pembukaan Rekening : Deposito",
      description: "Simulasi layanan pembukaan rekening deposito untuk nasabah badan.",
      direction: "Arahkan ke CS/petugas terkait dan pastikan nasabah membawa dokumen perusahaan yang diperlukan.",
      figmaUrl: "https://www.figma.com/proto/W0AICVY60fk6oy1TOxK7Vc/Prototype-Onboarding-DHE-and-Pengambilan-Emas?node-id=10024-54153&p=f&t=kIdmkg61eOesGQ2w-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10039%3A36382&show-proto-sidebar=1"
    },
    {
      id: "pemeliharaan-ttd-stempel",
      name: "Layanan Giro : Pemeliharaan Tanda Tangan/Stempel",
      description: "Simulasi layanan pemeliharaan tanda tangan atau stempel rekening giro.",
      direction: "Arahkan ke CS dan pastikan dokumen perubahan telah dibawa.",
      figmaUrl: "https://www.figma.com/proto/NiuviR29C7nc8lBAA71rhE/GB-Tablet-SVS-Non-Perorangan?page-id=2195%3A27988&node-id=2196-35063&viewport=664%2C64%2C0.44&t=gLqHijNwwF2ZMhPV-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2196%3A35063"
    },
    {
      id: "pengambilan-warkat",
      name: "Layanan Giro : Pengambilan Warkat",
      description: "Simulasi layanan pengambilan warkat giro.",
      direction: "Arahkan ke petugas layanan giro dan lakukan verifikasi identitas nasabah.",
      figmaUrl: "https://www.figma.com/proto/fMnXRD4wGPtHm9o62ebY1n/-5.0--Layanan-Giro-Non-Perorangan?node-id=6920-112087&t=ifDPlBDbXejh8A4E-1&scaling=min-zoom&content-scaling=fixed&page-id=6867%3A128039&starting-point-node-id=6920%3A112087&show-proto-sidebar=1"
    },
    {
      id: "aktivasi-warkat",
      name: "Layanan Giro : Aktivasi Warkat",
      description: "Simulasi layanan aktivasi warkat giro.",
      direction: "Arahkan ke petugas layanan giro untuk proses aktivasi.",
      figmaUrl: "https://www.figma.com/proto/fMnXRD4wGPtHm9o62ebY1n/-5.0--Layanan-Giro-Non-Perorangan?node-id=6920-112056&t=8dnJOkmt5eXJiGqR-1&scaling=contain&content-scaling=fixed&page-id=6867%3A128039&starting-point-node-id=6920%3A112056"
    },
    {
      id: "pemblokiran-warkat",
      name: "Layanan Giro : Pemblokiran Warkat (Non DHN)",
      description: "Simulasi layanan pemblokiran warkat.",
      direction: "Arahkan ke petugas layanan giro untuk proses pemblokiran.",
      figmaUrl: "https://www.figma.com/proto/fMnXRD4wGPtHm9o62ebY1n/-5.0--Layanan-Giro-Non-Perorangan?node-id=6879-132761&t=8dnJOkmt5eXJiGqR-1&scaling=contain&content-scaling=fixed&page-id=6867%3A128039&starting-point-node-id=6879%3A132761"
    },
    {
      id: "sp-dhn",
      name: "Layanan Giro : SP/DHN",
      description: "Simulasi layanan SP/DHN pada rekening giro.",
      direction: "Arahkan ke petugas layanan giro untuk verifikasi dan proses lebih lanjut.",
      figmaUrl: "https://www.figma.com/proto/DPvlkNSzt9rFYskmTEmV4s/-5.0--SP-DHN---Giro-Khusus?node-id=11080-130300&t=cQV0QD5DK21BzvTe-1&scaling=contain&content-scaling=fixed&page-id=11080%3A44112&starting-point-node-id=11080%3A130300&show-proto-sidebar=1"
    },
    {
      id: "pembuatan-debit-baru",
      name: "Layanan Mandiri Debit : Pembuatan Debit Baru",
      description: "Simulasi pembuatan kartu Mandiri Debit baru.",
      direction: "Arahkan ke CS untuk proses penerbitan kartu baru.",
      figmaUrl: "https://www.figma.com/proto/KXc2YAlwKuzBJ7VQcf9l4Y/DCM-Enh-4.1--Non-Perorangan-?node-id=7878-137304&t=VDp4anT3jNwkvszA-1&scaling=min-zoom&content-scaling=fixed&page-id=7869%3A84008&starting-point-node-id=7878%3A137304&show-proto-sidebar=1"
    },
    {
      id: "pengaturan-rekening-terhubung",
      name: "Layanan Mandiri Debit : Pengaturan Rekening Terhubung",
      description: "Simulasi pengaturan rekening yang terhubung dengan kartu debit.",
      direction: "Arahkan ke CS untuk melakukan perubahan rekening terhubung.",
      figmaUrl: "https://www.figma.com/proto/KXc2YAlwKuzBJ7VQcf9l4Y/DCM-Enh-4.1--Non-Perorangan-?node-id=7881-51416&t=VDp4anT3jNwkvszA-1&scaling=contain&content-scaling=fixed&page-id=7869%3A84008&starting-point-node-id=7881%3A51416"
    },
    {
      id: "penggantian-mandiri-debit",
      name: "Layanan Mandiri Debit : Penggantian Mandiri Debit",
      description: "Simulasi penggantian kartu Mandiri Debit.",
      direction: "Arahkan ke CS untuk proses penggantian kartu.",
      figmaUrl: "https://www.figma.com/proto/KXc2YAlwKuzBJ7VQcf9l4Y/DCM-Enh-4.1--Non-Perorangan-?node-id=7889-84179&t=VDp4anT3jNwkvszA-1&scaling=contain&content-scaling=fixed&page-id=7869%3A84008&starting-point-node-id=7889%3A84179"
    },
    {
      id: "pemblokiran-mandiri-debit",
      name: "Layanan Mandiri Debit : Pemblokiran Mandiri Debit",
      description: "Simulasi pemblokiran kartu Mandiri Debit.",
      direction: "Arahkan ke CS untuk melakukan pemblokiran kartu.",
      figmaUrl: "https://www.figma.com/proto/KXc2YAlwKuzBJ7VQcf9l4Y/DCM-Enh-4.1--Non-Perorangan-?node-id=7891-146529&t=VDp4anT3jNwkvszA-1&scaling=contain&content-scaling=fixed&page-id=7869%3A84008&starting-point-node-id=7891%3A146529"
    },
    {
      id: "pembukaan-blokir-mandiri-debit",
      name: "Layanan Mandiri Debit : Pembukaan Blokir Mandiri Debit",
      description: "Simulasi pembukaan blokir kartu Mandiri Debit.",
      direction: "Arahkan ke CS untuk membuka blokir kartu.",
      figmaUrl: "https://www.figma.com/proto/KXc2YAlwKuzBJ7VQcf9l4Y/DCM-Enh-4.1--Non-Perorangan-?node-id=7906-180190&t=VDp4anT3jNwkvszA-1&scaling=contain&content-scaling=fixed&page-id=7869%3A84008&starting-point-node-id=7906%3A180190"
    },
    {
      id: "pembuatan-pin-mandiri-debit",
      name: "Layanan Mandiri Debit : Pembuatan PIN Mandiri Debit Baru",
      description: "Simulasi pembuatan PIN baru kartu Mandiri Debit.",
      direction: "Arahkan ke CS untuk melakukan reset atau pembuatan PIN baru.",
      figmaUrl: "https://www.figma.com/proto/KXc2YAlwKuzBJ7VQcf9l4Y/DCM-Enh-4.1--Non-Perorangan-?node-id=7910-215073&t=VDp4anT3jNwkvszA-1&scaling=contain&content-scaling=fixed&page-id=7869%3A84008&starting-point-node-id=7910%3A215073"
    },
    {
      id: "pengambilan-mandiri-debit",
      name: "Layanan Mandiri Debit : Pengambilan Mandiri Debit",
      description: "Simulasi pengambilan kartu Mandiri Debit.",
      direction: "Arahkan ke CS untuk proses pengambilan kartu.",
      figmaUrl: "https://www.figma.com/proto/KXc2YAlwKuzBJ7VQcf9l4Y/DCM-Enh-4.1--Non-Perorangan-?node-id=7910-267172&t=VDp4anT3jNwkvszA-1&scaling=contain&content-scaling=fixed&page-id=7869%3A84008&starting-point-node-id=7910%3A267172"
    },
    {
      id: "penghentian-perpanjangan-otomatis-deposito",
      name: "Layanan Deposito : Penghentian Perpanjangan Otomatis Deposito",
      description: "Simulasi penghentian ARO deposito.",
      direction: "Arahkan ke CS untuk memproses penghentian perpanjangan otomatis.",
      figmaUrl: "https://www.figma.com/proto/X5cNj7fkQVqzIpgsoa1cjj/Layanan-Deposito-Perorangan---Non-Perorangan-5.0?node-id=31205-248892&p=f&t=RFRmj9BAmeqAsWpo-9&scaling=min-zoom&content-scaling=fixed&page-id=31142%3A45591&starting-point-node-id=31205%3A248892&show-proto-sidebar=1"
    },
    {
      id: "pengubahan-rekening-pencairan-deposito",
      name: "Layanan Deposito : Pengubahan Rekening Pencairan Deposito",
      description: "Simulasi perubahan rekening pencairan deposito.",
      direction: "Arahkan ke CS untuk memproses perubahan rekening pencairan.",
      figmaUrl: "https://www.figma.com/proto/X5cNj7fkQVqzIpgsoa1cjj/Layanan-Deposito-Perorangan---Non-Perorangan-5.0?node-id=31148-197951&p=f&t=RFRmj9BAmeqAsWpo-9&scaling=min-zoom&content-scaling=fixed&page-id=31142%3A45591&starting-point-node-id=31148%3A197951"
    },
    {
      id: "pengubahan-rekening-penampungan-bunga",
      name: "Layanan Deposito : Pengubahan Rekening Penampungan Bunga Deposito",
      description: "Simulasi perubahan rekening penampungan bunga deposito.",
      direction: "Arahkan ke CS untuk memproses perubahan rekening bunga.",
      figmaUrl: "https://www.figma.com/proto/X5cNj7fkQVqzIpgsoa1cjj/Layanan-Deposito-Perorangan---Non-Perorangan-5.0?node-id=31202-187105&p=f&t=RFRmj9BAmeqAsWpo-9&scaling=min-zoom&content-scaling=fixed&page-id=31142%3A45591&starting-point-node-id=31202%3A187105"
    },
    {
      id: "cetak-perpanjangan-otomatis-deposito",
      name: "Layanan Deposito : Layanan Cetak Perpanjangan Otomatis Deposito",
      description: "Simulasi pencetakan dokumen perpanjangan otomatis deposito.",
      direction: "Arahkan ke CS untuk pencetakan dokumen.",
      figmaUrl: "https://www.figma.com/proto/X5cNj7fkQVqzIpgsoa1cjj/Layanan-Deposito-Perorangan---Non-Perorangan-5.0?node-id=31202-196144&p=f&t=RFRmj9BAmeqAsWpo-9&scaling=min-zoom&content-scaling=fixed&page-id=31142%3A45591&starting-point-node-id=31202%3A196144"
    },
    {
      id: "pencetakan-ulang-bilyet-deposito",
      name: "Layanan Deposito : Pencetakan Ulang Bilyet Deposito",
      description: "Simulasi pencetakan ulang bilyet deposito.",
      direction: "Arahkan ke CS untuk proses pencetakan ulang bilyet.",
      figmaUrl: "https://www.figma.com/proto/X5cNj7fkQVqzIpgsoa1cjj/Layanan-Deposito-Perorangan---Non-Perorangan-5.0?node-id=31202-196144&p=f&t=RFRmj9BAmeqAsWpo-9&scaling=min-zoom&content-scaling=fixed&page-id=31142%3A45591&starting-point-node-id=31202%3A196144"
    },
    {
      id: "pengaduan-rekening",
      name: "Layanan Pengaduan : Pengaduan Rekening Nasabah",
      description: "Simulasi penyampaian pengaduan rekening nasabah.",
      direction: "Arahkan ke CS untuk pencatatan dan penanganan pengaduan.",
      figmaUrl: "https://www.figma.com/proto/oMJKG1uyAYL0yybVaqgkgP/-R5.0--Complaint-Handling-CIS?node-id=17008-42295&p=f&t=TyAbBnAjwKCfeqy3-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=17134%3A109225&show-proto-sidebar=1"
    },
    {
      id: "blokir-rekening",
      name: "Blokir Rekening",
      description: "Simulasi pemblokiran rekening.",
      direction: "Arahkan ke CS untuk proses pemblokiran rekening.",
      figmaUrl: "https://www.figma.com/proto/ajhIXYqwHAtgkDAgpUHsoK/-5.0--AM-Non-Perorangan?node-id=6124-50778&t=MWDUJAFzBVT1C55j-1&scaling=contain&content-scaling=fixed&page-id=6109%3A17532&starting-point-node-id=6124%3A50778"
    },
    {
      id: "aktivasi-rekening",
      name: "Aktivasi Rekening",
      description: "Simulasi aktivasi rekening.",
      direction: "Arahkan ke CS untuk proses aktivasi rekening.",
      figmaUrl: "https://www.figma.com/proto/ajhIXYqwHAtgkDAgpUHsoK/-5.0--AM-Non-Perorangan?node-id=6124-50836&t=MWDUJAFzBVT1C55j-1&scaling=contain&content-scaling=fixed&page-id=6109%3A17532&starting-point-node-id=6124%3A50836"
    },
    {
      id: "rekening-koran",
      name: "Rekening Koran",
      description: "Simulasi permintaan rekening koran.",
      direction: "Arahkan ke CS untuk pencetakan rekening koran.",
      figmaUrl: "https://www.figma.com/proto/TJlQB6czzsDHLVp6meQrFs/-5.0--Rekening-Koran?node-id=6564-80206&t=3OvE8mSa6wWRqm6p-0&scaling=scale-down&content-scaling=fixed&page-id=6482%3A2108913&starting-point-node-id=6564%3A80206&show-proto-sidebar=1"
    },
    {
      id: "penutupan-tabungan",
      name: "Penutupan Rekening : Tabungan",
      description: "Simulasi penutupan rekening tabungan.",
      direction: "Arahkan ke CS untuk proses penutupan rekening.",
      figmaUrl: "https://www.figma.com/proto/6MkUZaTmTxyqH6eRfMrWRW/GB-Tablet-Penutupan-Rekening-DHE-Non-Perorangan-4.1?node-id=27004-90431&p=f&t=WB0CMYizCR9JGi4F-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=27020%3A94526"
    },
    {
      id: "penutupan-giro",
      name: "Penutupan Rekening : Giro",
      description: "Simulasi penutupan rekening giro.",
      direction: "Arahkan ke CS untuk proses penutupan rekening.",
      figmaUrl: "https://www.figma.com/proto/6MkUZaTmTxyqH6eRfMrWRW/GB-Tablet-Penutupan-Rekening-DHE-Non-Perorangan-4.1?node-id=27004-90431&p=f&t=WB0CMYizCR9JGi4F-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=27008%3A210446"
    },
    {
      id: "penutupan-deposito",
      name: "Penutupan Rekening : Deposito",
      description: "Simulasi penutupan rekening deposito.",
      direction: "Arahkan ke CS untuk proses penutupan deposito.",
      figmaUrl: "https://www.figma.com/proto/6MkUZaTmTxyqH6eRfMrWRW/GB-Tablet-Penutupan-Rekening-DHE-Non-Perorangan-4.1?node-id=27004-90431&p=f&t=WB0CMYizCR9JGi4F-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=27008%3A215480"
    },
    {
      id: "pembayaran-tagihan-terjadwal",
      name: "Pembayaran Tagihan Terjadwal",
      description: "Simulasi pembayaran tagihan terjadwal.",
      direction: "Arahkan ke CS untuk pengaturan pembayaran terjadwal.",
      figmaUrl: "https://www.figma.com/proto/blo3OMdJqzznQznOKRmMO1/GB-Payment-Point?page-id=2718%3A70447&node-id=2718-70964&viewport=311%2C335%2C0.19&t=3pDpb9KCZ3dvvWOV-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2718%3A70964"
    },
    {
      id: "online-sweep",
      name: "Pemindahan Saldo Otomatis : Online Sweep",
      description: "Simulasi layanan Online Sweep.",
      direction: "Arahkan ke CS untuk pengaturan Online Sweep.",
      figmaUrl: "https://www.figma.com/proto/OkeI0gKOwCjKVJVGsyNVZq/GB-and-WBA-Sweep-Perorangan-and-Non-Perorangan?node-id=4188-43711&t=z1KNJbUlD050c8c7-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4188%3A43711&show-proto-sidebar=1"
    },
    {
      id: "batch-sweep",
      name: "Pemindahan Saldo Otomatis : Batch Sweep",
      description: "Simulasi layanan Batch Sweep.",
      direction: "Arahkan ke CS untuk pengaturan Batch Sweep.",
      figmaUrl: "https://www.figma.com/proto/OkeI0gKOwCjKVJVGsyNVZq/GB-and-WBA-Sweep-Perorangan-and-Non-Perorangan?node-id=4316-142252&t=z1KNJbUlD050c8c7-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4316%3A142252&show-proto-sidebar=1"
    },
    {
      id: "pembukaan-msdb",
      name: "Pembukaan MSDB",
      description: "Simulasi pembukaan Mandiri Safe Deposit Box.",
      direction: "Arahkan ke CS untuk proses pembukaan MSDB.",
      figmaUrl: "https://www.figma.com/proto/1bjqlN6jdS4eGDOIfXOxkz/E-form-Layanan-Mandiri-SDB?page-id=8711%3A92221&node-id=8718-16703&viewport=49%2C-406%2C0.09&t=7Ukage4kGQmWQTTY-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=8718%3A16703&show-proto-sidebar=1"
    },
    {
      id: "layanan-kunjungan-msdb",
      name: "Layanan Kunjungan MSDB",
      description: "Simulasi layanan kunjungan MSDB.",
      direction: "Arahkan ke petugas Safe Deposit Box.",
      figmaUrl: "https://www.figma.com/proto/1bjqlN6jdS4eGDOIfXOxkz/E-form-Layanan-Mandiri-SDB?page-id=8711%3A92221&node-id=8718-16703&viewport=49%2C-406%2C0.09&t=7Ukage4kGQmWQTTY-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=8718%3A16703&show-proto-sidebar=1"
    },
    {
      id: "pemeliharaan-penerima-kuasa",
      name: "Pemeliharaan Penerima Kuasa",
      description: "Simulasi pemeliharaan data penerima kuasa MSDB.",
      direction: "Arahkan ke CS untuk proses perubahan data.",
      figmaUrl: "https://www.figma.com/proto/1bjqlN6jdS4eGDOIfXOxkz/E-form-Layanan-Mandiri-SDB?page-id=8711%3A92221&node-id=8718-16703&viewport=49%2C-406%2C0.09&t=7Ukage4kGQmWQTTY-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=8718%3A16703&show-proto-sidebar=1"
    },
    {
      id: "penutupan-msdb",
      name: "Penutupan MSDB",
      description: "Simulasi penutupan layanan MSDB.",
      direction: "Arahkan ke CS untuk proses penutupan.",
      figmaUrl: "https://www.figma.com/proto/1bjqlN6jdS4eGDOIfXOxkz/E-form-Layanan-Mandiri-SDB?page-id=8711%3A92221&node-id=8718-16703&viewport=49%2C-406%2C0.09&t=7Ukage4kGQmWQTTY-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=8718%3A16703&show-proto-sidebar=1"
    },
    {
      id: "whitelist-nasabah-badan",
      name: "Whitelist Nasabah Badan Tanpa Kehadiran",
      description: "Simulasi whitelist nasabah badan tanpa kehadiran.",
      direction: "Arahkan ke CS untuk proses whitelist.",
      figmaUrl: "https://www.figma.com/proto/tqB0ywXdlRNVSLuh5Htsh8/Prototype-Nasabah-Tanpa-Kehadiran?node-id=19-20440&p=f&t=qNWxBa5E0Uogq2ne-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A1548&starting-point-node-id=19%3A20440&show-proto-sidebar=1"
    },
    {
      id: "customer-profile-nasabah-badan",
      name: "Customer Profile - Nasabah Badan",
      description: "Simulasi melihat profil nasabah badan.",
      direction: "Arahkan ke petugas layanan untuk melihat informasi profil nasabah.",
      figmaUrl: "https://www.figma.com/proto/7kiA5NXIlSCJPDQp58TTpx/GB-Customer-360---Product-Offering?node-id=298009-491114&t=w8WWtdOMKo5iyd9C-1&scaling=min-zoom&content-scaling=fixed&page-id=6101%3A524281&starting-point-node-id=298009%3A491114"
    }
  ]
};

const transactionsByRole = {
  satpam: transactionsSatpam,
  teller: transactionsTeller,
  cs: transactionsCS
};

let selectedRole = "";
let selectedType = "";
let selectedTransaction = null;

const roleLabel = {
  satpam: "Satpam",
  cs: "Customer Service",
  teller: "Teller"
};

const roleCategory = {
  satpam: "Satpam",
  cs: "Customer Service",
  teller: "Teller"
};

function getActiveTransactions() {
  if (!selectedRole || !selectedType) return [];
  const roleData = transactionsByRole[selectedRole] || {};
  return roleData[selectedType] || [];
}

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => screen.classList.remove("active"));
  const target = document.getElementById(screenId);
  if (target) target.classList.add("active");
}

function updateProgress(activeStep) {
  for (let i = 1; i <= 4; i++) {
    const step = document.getElementById(`step-${i}`);
    if (step) step.classList.toggle("active", i <= activeStep);
  }
}

function selectRole(role) {
  selectedRole = role;
  selectedType = "";
  selectedTransaction = null;
  showScreen("screen-customer-type");
  updateProgress(2);
}

function selectCustomerType(type) {
  selectedType = type;
  const isPersonal = type === "perorangan";

  document.getElementById("transaction-title").textContent = isPersonal
    ? `List Transaksi Nasabah Perorangan - ${roleLabel[selectedRole]}`
    : `List Transaksi Nasabah Non Perorangan - ${roleLabel[selectedRole]}`;

  document.getElementById("transaction-subtitle").textContent = isPersonal
    ? "Pilih transaksi individu yang ingin disimulasikan."
    : "Pilih transaksi perusahaan/wholesale yang ingin disimulasikan.";

  renderTransactions();
  showScreen("screen-transaction-list");
  updateProgress(3);
}

function renderTransactions() {
  const container = document.getElementById("transaction-list");
  container.innerHTML = "";

  const list = getActiveTransactions();

  if (list.length === 0) {
    container.innerHTML = `<div class="section-header"><h2>Data belum tersedia</h2><p>Belum ada transaksi untuk role dan jenis nasabah ini.</p></div>`;
    return;
  }

  list.forEach((transaction, index) => {
    const card = document.createElement("button");
    card.className = "transaction-card";
    card.type = "button";
    card.onclick = () => openSimulation(index);

    const category = transaction.category || roleCategory[selectedRole] || "Transaksi";

    card.innerHTML = `
      <span class="tag">${category}</span>
      <h3>${transaction.name}</h3>
      <p>${transaction.description || "Klik untuk membuka simulasi transaksi."}</p>
      <span>Mulai simulasi →</span>
    `;

    container.appendChild(card);
  });
}

function openSimulation(transactionIndex) {
  selectedTransaction = getActiveTransactions()[transactionIndex];
  if (!selectedTransaction) return;

  document.getElementById("simulation-name").textContent = `${selectedTransaction.name} - ${roleLabel[selectedRole]}`;
  document.getElementById("simulation-description").textContent = selectedTransaction.description || "Simulasi transaksi dipilih.";
  document.getElementById("direction-title").textContent = `Arahan untuk ${roleLabel[selectedRole]}`;
  document.getElementById("simulation-direction").textContent = selectedTransaction.direction || "Ikuti alur simulasi pada Figma.";

  const figmaLink = document.getElementById("figma-link");
  figmaLink.href = selectedTransaction.figmaUrl || "#";

  showScreen("screen-simulation");
  updateProgress(4);
}

function finishSimulation() {
  showScreen("screen-transaction-list");
  updateProgress(3);
}

function backToTransactions() {
  showScreen("screen-transaction-list");
  updateProgress(3);
}

function backToCustomerType() {
  selectedType = "";
  selectedTransaction = null;
  showScreen("screen-customer-type");
  updateProgress(2);
}

function goHome() {
  selectedRole = "";
  selectedType = "";
  selectedTransaction = null;
  showScreen("screen-role");
  updateProgress(1);
}
