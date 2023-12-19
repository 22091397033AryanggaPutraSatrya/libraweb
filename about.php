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
<html>
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>LibraWeb</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Beranda</a></li>
                <li><a href="daftar.html">Daftar Buku</a></li>
                <li><a href="about.php">About Us</a></li>
            </ul>
        </nav>
        <h1>LibraWeb</h1>
    </header>
<body>

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

    <footer>
        &copy; 2023 LibraWeb
    </footer>
</body>
</html>
