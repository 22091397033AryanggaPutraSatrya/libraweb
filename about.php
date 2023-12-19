<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $pesan = $_POST['pesan'];

    $servername = "127.0.0.1";
    $username = "root";
    $password = "";
    $dbname = "perpustakaan";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Koneksi ke database gagal: " . $conn->connect_error);
    }

    $sql = "INSERT INTO pesan (nama, email, pesan) VALUES ('$nama', '$email', '$pesan')";

    if ($conn->query($sql) === TRUE) {
        echo '<script>alert("Pesan berhasil dikirim.");</script>';
    } else {
        echo '<script>alert("Error: ' . $sql . '\n' . $conn->error . '");</script>';
    }

    $conn->close();
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LibraWeb</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,700&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="about.css">
</head>

<body>
    <!-- Bagian Header -->
    <header>
        <a href="" class="logo">LibraWeb</a>   
        <div class="icons">
            <a href="beranda.html" class="fas fa-home"></a>
            <a href="about.php" class="fas fa-bars"></a>
            <a href="book.html" class="fas fa-book"></a>
        </div>
    </header>
    <!-- Akhir Bagian Header -->

    <div class="main-content">
        <div class="about-content">
            <h2>Tentang Kami</h2>
            <p>Selamat datang di LibraWeb. Kami adalah sumber bacaan online yang berdedikasi untuk menyediakan akses ke berbagai jenis buku dan pengetahuan. Tim kami berkomitmen untuk memberikan pengalaman membaca yang berkualitas.</p>
        </div>

        <div class="contact-content">
            <h2>Hubungi Kami</h2>
            <p>Jika Anda memiliki pertanyaan, masukan, atau permintaan, jangan ragu untuk menghubungi kami. Isi formulir di bawah ini, dan kami akan merespons secepat mungkin.</p>
            
            <form class="contact-form" method="post">
                <input type="text" name="nama" placeholder="Nama" required>
                <input type="email" name="email" placeholder="Email" required>
                <textarea name="pesan" placeholder="Pesan" required></textarea>
                <button type="submit">Kirim Pesan</button>
            </form>
        </div>
    </div>

    <!-- Bagian Footer -->
    <section class="footer">
        <div class="footer-container">
            <div class="box">
                <h3>Dapatkan Bantuan</h3>
                <a href="">FAQ</a>
                <a href="">Kebijakan Privasi</a>
            </div>

            <div class="box">
                <h3>Tautan Cepat</h3>
                <a href="beranda.html">Beranda</a>
                <a href="book.html">Daftar Buku</a>
                <a href="about.php">Tentang Kami</a>
            </div>

            <div class="box" id="contact">
                <h3>Info Kontak</h3>
                <a href="">+62-812-1723-4228</a>
                <a href="" class="lower">libraweb@gmail.com</a>
                <a href="">Surabaya, Indonesia - 60230</a>
            </div>

            <div class="social-media" id="follow">
                <h3>Ikuti Kami</h3>
                <a href="https://web.facebook.com/" target="_blank"><img src="assets/fb.png"
                        alt="Facebook"></a>
                <a href="https://www.instagram.com/" target="_blank"><img src="assets/ig.png"
                        alt="Instagram"></a>
                <a href="https://tiktok.com/" target="_blank"><img src="assets/tiktok.png" alt="Tiktok"></a>
            </div>
        </div>
        <div class="copyright">Seluruh Hak Cipta &copy; hak cipta 2023 oleh <span>LibraWeb</span></div>
    </section>
    <!-- Akhir Bagian Footer -->
</body>
</html>
