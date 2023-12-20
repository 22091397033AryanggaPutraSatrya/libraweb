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
            <p>Selamat datang di LibraWeb! Kami adalah teman setia Anda dalam petualangan membaca online. Kami berkomitmen untuk membuat dunia buku dan pengetahuan lebih mudah diakses oleh semua orang. Di LibraWeb, kami ingin membuat pengalaman membaca Anda menyenangkan dan tak terlupakan dengan menyajikan beragam konten berkualitas.</p>
            <P>Anda bisa menghubungi kami melalui:</p>    
            <p>Telepon/WhatsApp: +62 812-1723-4228
            <p>Instagram: @libraweb
            <p>Email: libraweb@gmail.com
            <p>Alamat: Surabaya, Indonesia - 60230</P>
        </div>

        <div class="contact-content">
            <h2>Hubungi Kami</h2>
            <p>Jika Anda memiliki pertanyaan, masukan, atau permintaan, jangan ragu untuk menghubungi kami. Isi formulir di bawah ini, dan kami akan merespons secepat mungkin.</p>
            

            <form class="contact-form" method="post">
                <input type="text" name="nama" placeholder="Nama" required>
                <input type="email" name="email" placeholder="Email" required>
                <textarea name="pesan" placeholder="Pesan" required></textarea>
                <button type="submit">send</button>
            </form>
        </div>
    </div>

    <!-- Bagian Footer -->
    <section class="footer">
        <div class="copyright">Seluruh Hak Cipta &copy; hak cipta 2023 oleh <span>LibraWeb</span></div>
    </section>
    <!-- Akhir Bagian Footer -->
</body>
</html>
