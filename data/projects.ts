import type { Project, InProgressProject, Experience } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "tensorlease",
    title: "TensorLease",
    eyebrow: "HPC Retainer Management Platform",
    description:
      "Full-stack HPC retainer platform dengan JWT auth, automated invoice scheduling, dan integrasi payment gateway Midtrans; deployed ke Railway.",
    stack: [
      "Spring Boot 3",
      "Spring Security (JWT)",
      "React (CRA)",
      "Supabase",
      "PostgreSQL",
      "Midtrans Snap",
      "Railway",
    ],
    color: "violet",
    images: [
      // Spasi di-encode manual (%20) — jangan andalkan browser auto-encode kalau path ini
      // dikonsumsi lewat next/image atau CSS url(), keduanya bisa gagal resolve di build/CDN tertentu.
      "/images/projects/tensorlease/Screenshot%202026-07-15%20193513.png",
      "/images/projects/tensorlease/Screenshot%202026-07-15%20193532.png",
      "/images/projects/tensorlease/Screenshot%202026-07-15%20193606.png",
      "/images/projects/tensorlease/Screenshot%202026-07-15%20193613.png",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/farhan-hamzah/tubes-impal-kelompok-3" },
      { label: "Live", url: "https://tensorlease.vercel.app/login" },
    ],
    details: [
      "Implementasi CRUD data penyewaan HPC dan manajemen retainer end-to-end pakai Spring Boot 3.",
      "Integrasi payment gateway Midtrans Snap, termasuk verifikasi signature callback webhook agar status transaksi gak bisa dipalsukan.",
      "Autentikasi & otorisasi user pakai Spring Security + JWT.",
      "Automated invoice scheduling yang sinkron dengan status pembayaran dari Midtrans.",
    ],
    overview:
      "TensorLease adalah platform manajemen retainer HPC yang dirancang untuk memudahkan alur operasional, pembayaran, dan administrasi antar tim dan pengguna.",
    challenge:
      "Root cause: Midtrans mengirim notifikasi status transaksi lewat callback webhook, tapi request itu bisa dipalsukan siapa saja kalau endpoint-nya tidak divalidasi — status \"paid\" bisa ter-trigger tanpa pembayaran asli. Fix: verifikasi signature key (order_id + status_code + gross_amount + server_key, di-hash SHA512) di setiap callback sebelum update status transaksi ke database, jadi hanya request yang benar-benar dari Midtrans yang bisa mengubah status pembayaran.",
    impact:
      "Dipakai tim TensorLease (kelompok mata kuliah Implementasi Perangkat Lunak) untuk tugas besar — sistem berjalan end-to-end dari alur pemesanan sampai pembayaran dan sudah live di-deploy.",
    repo: "https://github.com/farhan-hamzah/tubes-impal-kelompok-3",
    live: "https://tensorlease.vercel.app/login",
    meta: {
      role: "Backend Developer",
      team: ["Farhan Hamzah", "Muhammad Ihsan Abdurrasyid", "Tianisa Sianipar"],
      duration: "4 bulan",
      context: "Tugas besar mata kuliah Implementasi Perangkat Lunak (IPL)",
    },
  },
  {
    id: "tweet-classification",
    title: "Tweet Classification System",
    eyebrow: "Backend API · NLP",
    description:
      "Backend API untuk klasifikasi tweet secara real-time menggunakan model NLP; containerized dengan Docker dan deployed ke Vercel.",
    stack: ["FastAPI", "Supabase", "Docker", "Vercel"],
    color: "teal",
    images: [
      "/images/projects/tweet-classification/screenshots/1781792143805.jpg",
      "/images/projects/tweet-classification/screenshots/1781792144209.jpg",
      "/images/projects/tweet-classification/screenshots/1781792144467.jpg",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/farhan-hamzah/tubesComputingKelompok2-AIEng" },
      { label: "Live", url: "https://tubes-computing-kelompok2-ai-eng.vercel.app/" },
    ],
    details: [
      "Mendesain API backend untuk klasifikasi tweet secara real-time menggunakan pendekatan NLP yang siap dipakai pada skenario produk nyata.",
      "Menggunakan Docker dan deployment Vercel untuk memastikan sistem lebih mudah diakses serta siap dikembangkan lebih lanjut.",
    ],
    overview:
      "Sistem ini menyediakan backend API untuk klasifikasi tweet dengan pendekatan NLP yang dapat digunakan dalam skenario analitik media sosial.",
    challenge:
      "Tantangan utamanya adalah menghubungkan model NLP dengan arsitektur API yang ringan, cepat, dan mudah di-deploy untuk kebutuhan demonstrasi dan pengembangan lanjutan.",
    repo: "https://github.com/farhan-hamzah/tubesComputingKelompok2-AIEng",
    live: "https://tubes-computing-kelompok2-ai-eng.vercel.app/",
  },
  {
    id: "math-solver",
    title: "Hybrid AI Math Expression Solver",
    eyebrow: "Handwritten Recognition · LLM",
    description:
      "Sistem hybrid AI yang menggabungkan model CNN lokal untuk pengenalan karakter tulisan tangan dengan cloud LLM OpenRouter untuk menyelesaikan ekspresi matematika, termasuk kalkulus dan aljabar.",
    stack: ["Streamlit", "Python", "CNN", "OpenRouter API"],
    color: "peach",
    images: [
      "/images/projects/math-solver/Screenshot%202026-07-15%20192523.png",
      "/images/projects/math-solver/Screenshot%202026-07-15%20192628.png",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/farhan-hamzah/Tugas-Besar-AI-Lab" },
      { label: "Live", url: "https://tugas-besar-ai-lab-kelompok2.streamlit.app/" },
    ],
    details: [
      "Menggabungkan CNN lokal untuk mengenali tulisan tangan dengan LLM cloud agar ekspresi matematika bisa diselesaikan secara lebih cerdas.",
      "Proyek ini memperlihatkan pendekatan hybrid AI yang mengutamakan akurasi dan pengalaman interaktif pengguna.",
    ],
    overview:
      "Solvers ekspresi matematika hybrid AI yang memadukan pengenalan tulisan tangan dan pemrosesan bahasa alami untuk menyelesaikan soal secara interaktif.",
    challenge:
      "Tantangan utamanya adalah membuat sistem yang tidak hanya akurat, tetapi juga mampu menggabungkan dua pendekatan AI yang berbeda ke dalam satu alur yang nyaman bagi pengguna.",
    repo: "https://github.com/farhan-hamzah/Tugas-Besar-AI-Lab",
    live: "https://tugas-besar-ai-lab-kelompok2.streamlit.app/",
  },
  {
    id: "restaurant-ordering",
    title: "Restaurant Self-Ordering System",
    eyebrow: "Full-stack Platform",
    description:
      "Platform self-ordering restoran full-stack dengan interface customer dan admin terpisah, menghilangkan sistem antrean manual.",
    stack: ["Spring Boot", "Java", "Vercel"],
    color: "sky",
    images: [
      "/images/projects/restaurant-ordering/Screenshot%202026-07-15%20195044.png",
      "/images/projects/restaurant-ordering/Screenshot%202026-07-15%20195103.png",
      "/images/projects/restaurant-ordering/Screenshot%202026-07-15%20195442.png",
      "/images/projects/restaurant-ordering/Screenshot%202026-07-15%20195456.png",
      "/images/projects/restaurant-ordering/Screenshot%202026-07-15%20195513.png",
    ],
    links: [
      { label: "GitHub Backend", url: "https://github.com/Adisonsmn/be-web-ordering-system" },
      { label: "GitHub Frontend", url: "https://github.com/Adisonsmn/fe-web-ordering-system" },
      { label: "Customer", url: "https://webordering.vercel.app/customer" },
      { label: "Admin", url: "https://webordering.vercel.app/dashboard" },
    ],
    details: [
      "Menyederhanakan proses pemesanan restoran dengan memisahkan pengalaman customer dan admin untuk mengurangi ketergantungan pada antrean manual.",
      "Mewakili pendekatan full-stack yang menekankan alur kerja yang lebih rapih dan efisien untuk bisnis kecil maupun menengah.",
    ],
    overview:
      "Platform self-ordering restoran yang menghadirkan pengalaman customer dan admin dalam dua alur terpisah agar operasional restoran menjadi lebih terstruktur.",
    challenge:
      "Tantangan utamanya adalah merancang pengalaman yang nyaman untuk dua jenis pengguna sekaligus, sambil menjaga alur bisnis tetap konsisten dan mudah dikelola.",
    // FIX: repo dihapus. Tidak ada source code publik untuk proyek ini — field `repo`
    // seharusnya tidak diisi URL live app, karena consumer (mis. tombol/icon GitHub di UI)
    // akan salah mengarahkan user ke demo, bukan source code. `links[]` sudah cukup.
    repo: "https://github.com/Adisonsmn/be-web-ordering-system",
    live: "https://webordering.vercel.app/dashboard",
  },
  {
    id: "digitsketch-ai",
    title: "DigitSketch AI",
    eyebrow: "Web-Based Handwritten Digit Recognition",
    description:
      "Aplikasi web real-time untuk mengenali digit tulisan tangan (0-9) lewat kanvas gambar, menggabungkan backend Go dan model CNN TensorFlow.",
    stack: ["Go (Gin)", "TensorFlow", "Keras", "HTML5 Canvas API", "JavaScript", "Python"],
    color: "sage",
    images: ["/images/projects/digitsketch-ai/cover.svg"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/farhan-hamzah/-DigitSketch-AI-Web-Based-Handwritten-Digit-Recognition",
      },
    ],
    details: [
      "Kanvas gambar (Canvas API) untuk menggambar angka langsung dengan mouse/touch, dikonversi ke base64 PNG.",
      "Backend API pakai Go (Gin) yang menerima gambar, menyimpannya, lalu menjalankan model prediksi.",
      "Model CNN (TensorFlow/Keras) melakukan preprocessing dan klasifikasi angka 0-9 beserta confidence score.",
      "Arsitektur modular: frontend, backend, dan model dipisah jadi 3 lapisan independen.",
    ],
    overview:
      "DigitSketch AI adalah aplikasi web interaktif yang mengenali digit tulisan tangan (0-9) secara real-time lewat kanvas gambar, menggabungkan frontend modern, backend API Go (Gin), dan model deep learning CNN (TensorFlow).",
    challenge:
      "Tantangan utamanya menghubungkan 3 lapisan berbeda dalam satu alur real-time: canvas dikonversi ke base64 PNG di frontend, dikirim ke backend Go lewat endpoint /predict, lalu backend men-trigger script predict.py sebagai child process (exec.Command) untuk preprocessing dan load model .keras, dan hasil prediksi dikirim balik sebagai JSON — perlu penanganan I/O file sementara (testAngka/digit.png) yang tepat antar proses Go dan Python yang berjalan terpisah.",
    repo: "https://github.com/farhan-hamzah/-DigitSketch-AI-Web-Based-Handwritten-Digit-Recognition",
    meta: {
      role: "Solo developer (full-stack + model)",
      context: "Proyek eksplorasi pribadi (folder proyek: learnTensorflow)",
      duration: "4 minggu"
    },
  },
  {
    id: "skincheck",
    title: "SkinCheck",
    eyebrow: "AI-Based Skin Disease Detection",
    description:
      "Aplikasi web berbasis Streamlit untuk deteksi dini penyakit kulit (jinak/ganas) dari citra gambar memakai model ResNet50.",
    stack: ["Streamlit", "TensorFlow", "Keras", "ResNet50", "OpenCV", "Pillow", "Python", "Hugging Face Spaces"],
    color: "rose",
    images: ["/images/projects/skincheck/cover.svg"],
    links: [{ label: "GitHub", url: "https://github.com/farhan-hamzah/SkinCheck" }],
    details: [
      "Input gambar lewat kamera atau upload file, lalu diproses (resize 224x224, standarisasi, normalisasi) sebelum masuk model.",
      "Model ResNet50 (TensorFlow/Keras) mengklasifikasikan gambar ke 2 kelas: benign (jinak) atau malignant (ganas).",
      "Menampilkan confidence score dan interpretasi risiko, dilengkapi disclaimer medis yang jelas di UI.",
      "Dilatih memakai dataset Skin Cancer MNIST: HAM10000 dari Kaggle, deployed ke Hugging Face Spaces (non-Docker, via app.toml).",
    ],
    overview:
      "SkinCheck adalah aplikasi web yang memanfaatkan Computer Vision dan Deep Learning untuk deteksi dini penyakit kulit dari citra gambar, dibuat untuk lomba Digiwar dengan fokus pemanfaatan AI meningkatkan akses kesehatan.",
    challenge:
      "Tantangan utamanya menyeimbangkan akurasi model klasifikasi 2 kelas (benign/malignant) dengan komunikasi risiko yang bertanggung jawab — confidence score dan hasil prediksi tidak boleh terkesan sebagai diagnosis medis final, jadi ditambahkan interpretasi risiko dan disclaimer eksplisit bahwa aplikasi ini alat bantu skrining awal, bukan pengganti dokter.",
    impact:
      "Alat bantu skrining awal penyakit kulit yang bisa diakses lewat browser — memberi insight awal sebelum konsultasi ke dokter kulit profesional, dengan potensi dikembangkan untuk klasifikasi jenis penyakit kulit lain.",
    repo: "https://github.com/farhan-hamzah/SkinCheck",
    meta: {
      role: "Solo developer (AI & full-stack)",
      context: "Lomba Digiwar",
      duration: "1 bulan"
    },
  },
  {
    id: "fitbot",
    title: "FitBot",
    eyebrow: "Agentic AI Assistant",
    description:
      "AI assistant yang membantu pengguna dengan workflow berbasis instruksi dan interaksi conversational untuk kebutuhan produktivitas.",
    stack: ["Python", "LLM", "Agents", "FastAPI"],
    color: "violet",
    images: [
      "/images/projects/fitbot/Screenshot%202026-07-15%20200347.png",
      "/images/projects/fitbot/Screenshot%202026-07-15%20200429.png",
      "/images/projects/fitbot/Screenshot%202026-07-15%20200452.png",
      "/images/projects/fitbot/Screenshot%202026-07-15%20200529.png",
    ],
    links: [{ label: "GitHub", url: "https://github.com/EdselSpth/Fitbot-AI-Chatbot" }],
    details: [
      "FitBot menggabungkan konsep agentic AI dengan workflow percakapan untuk membantu pengguna menyelesaikan tugas produktivitas secara lebih natural.",
      "Proyek ini memperlihatkan arah minat saya pada sistem AI yang dapat berinteraksi, mengikuti instruksi, dan memberi hasil yang berguna.",
    ],
    overview:
      "FitBot adalah asisten AI yang dirancang untuk membantu pengguna dalam workflow berbasis instruksi dan interaksi percakapan yang lebih natural.",
    challenge:
      "Tantangan utamanya adalah menggabungkan kemampuan AI generatif dengan pengalaman interaksi yang stabil, terarah, dan berguna dalam aktivitas produktivitas sehari-hari.",
    repo: "https://github.com/EdselSpth/Fitbot-AI-Chatbot",
  },
];

// FIX: stack disamakan dengan arsitektur riset yang sedang berjalan saat ini
// (BiomedCLIP + linear projection + Gemma-2B/LoRA di CheXpert Plus), bukan
// arsitektur alternatif (RAD-DINO/CXR-BERT/BioGPT) yang sempat dieksplorasi tapi tidak dipakai final.
// Ganti balik kalau kamu memang sudah pivot ke kombinasi RAD-DINO/BioGPT.
export const inProgress: InProgressProject = {
  id: "vlm-cxr",
  title: "Multimodal VLM for Chest X-Ray Report Generation",
  eyebrow: "Medical Vision-Language Research",
  description:
    "Pipeline vision-language yang memasangkan encoder citra chest X-ray dengan language model medis untuk menyusun draf laporan radiologi secara otomatis — menggabungkan BiomedCLIP (frozen ViT encoder, 512-dim) sebagai image encoder, linear projection layer untuk menyelaraskan embedding, dan Gemma-2B yang di-fine-tune dengan LoRA untuk generasi laporan (Findings & Impression) di dataset CheXpert Plus (~223K samples).",
  stack: ["BiomedCLIP", "Linear Projection", "Gemma-2B", "LoRA", "PyTorch"],
};

// FIX KRITIS: placeholder/dummy data terhapus. Ini WAJIB diisi data asli sebelum deploy —
// sebelumnya berupa instruksi editor ("Ganti dengan...") yang ke-commit dan akan tampil live.
// Isi field di bawah dengan data sebenarnya (org, role, period, description), contoh struktur:
export const experience: Experience[] = [
  {
    hash: "f0a9c22",
    org: "TODO: nama organisasi/lab sebenarnya",
    role: "TODO: role sebenarnya",
    period: "TODO: mis. 2025 — Sekarang",
    description: "TODO: deskripsi tanggung jawab/pencapaian nyata, 1-2 kalimat.",
  },
];