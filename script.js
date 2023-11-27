class Book {
  constructor(title, author, description, image) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.image = image; 
  }
}

const books = [
  new Book(
    "Si Putih",
    "Tere Liye",
    "Pembaca serial BUMI karya Tere Liye pasti sudah tidak asing lagi dengan Si Putih, kucing kesayangan Raib yang hadir di depan pintu rumahnya pada hari ulang tahun ke-9. Buku ini menceritakan tentang asal-usul kucing kesayangan Raib, masa lalunya yang tak kalah menarik untuk ditelurusuri. Bayangkanlah tentang makhluk lembut nan lucu yang menjadi peliharaan kesayangan Anda ternyata adalah hewan yang berkekuatan maha dahsyat di dunia paralel. Buku ini mengupas tuntas jati diri Si Putih, di luar hanya sebagai hewan yang menggemaskan tapi ternyata bisa menjadi salah satu petarung yang paling hebat. Ceritanya akan membawa imajinasi Anda membumbung tinggi hanyut oleh dunia yang penuh dengan kekuatan dan keajaiban.",
    "assets/siputih.png"
  ),
  new Book(
    "Malioboro At Midnight",
    "Skysphire",
    "Sebuah novel yang menawarkan petualangan magis dan misteri yang memikat di tengah suasana malam di Malioboro, sebuah tempat terkenal di Yogyakarta. Cerita ini mengikuti perjalanan seorang remaja bernama Rama, yang secara tak sengaja menemukan sebuah batu permata misterius yang dikenal sebagai Skysphire. Dalam “Malioboro At Midnight – Skysphire,” pembaca akan dibawa dalam petualangan seru yang menggabungkan mitos, sihir, dan elemen budaya lokal. Novel ini menawarkan campuran antara aksi, teka-teki, dan pesan tentang keberanian, persahabatan, dan kekuatan di tengah kegelapan.",
    "assets/midnight.png"
  ),
  new Book(
    "Laut Bercerita",
    "Leila S. Chudori",
    "Novel yang ditulis oleh Leila S. Chudori, seorang penulis Indonesia yang terkenal. Cerita ini membawa pembaca dalam perjalanan emosional dan sejarah yang memukau. Novel ini mengisahkan tentang keluarga Soeharto, salah satu keluarga terkuat dan paling berkuasa di Indonesia pada masa Orde Baru. Namun, fokus cerita bukan hanya pada tokoh-tokoh politik dan kekuasaan, melainkan juga pada keluarga kecil yang hidup di bawah bayang-bayang rezim tersebut.“Laut Bercerita” juga menyoroti tentang cinta, kehilangan, dan pencarian identitas di tengah krisis sosial dan politik yang melanda negara. Dalam prosesnya, novel ini menghadirkan suara-suara yang kuat dan menggambarkan dinamika hubungan manusia dalam suasana politik yang bergejolak. Dengan kepiawaiannya menggabungkan fakta sejarah dan fiksi, Leila S. Chudori menghadirkan narasi yang memikat dan mengungkap sisi manusiawi di balik peristiwa-peristiwa besar dalam sejarah Indonesia. “Laut Bercerita” menawarkan pemahaman yang lebih mendalam tentang masa lalu, serta membangkitkan pertanyaan tentang kebenaran, keadilan, dan harga diri dalam konteks sejarah yang rumit.",
    "assets/lautcerita.png"
  ),
  new Book(
    "Cantik Itu Luka",
    "Eka Kurniawan",
    "“Cantik Itu Luka” adalah sebuah novel yang ditulis oleh Eka Kurniawan, seorang penulis Indonesia yang diakui secara internasional. Novel ini mengisahkan kisah perempuan bernama Dewi Ayu dan keluarganya, yang hidup di sebuah desa kecil di Indonesia selama periode yang meliputi masa penjajahan Jepang hingga era reformasi. Dewi Ayu, seorang perempuan yang cantik dan penuh misteri, menjadi pusat cerita ini. Meskipun memiliki kecantikan fisik yang menakjubkan, Dewi Ayu mengalami perjalanan hidup yang penuh penderitaan dan kekerasan. Ia diperkosa oleh tentara Jepang pada masa pendudukan, dan dari peristiwa tragis tersebut, ia melahirkan empat anak perempuan dengan nasib yang tidak kalah sulit. Novel ini memberikan gambaran yang jujur dan kuat tentang kehidupan yang sering kali pahit namun tetap dipenuhi dengan harapan. Dengan bahasa yang tajam dan puitis, “Cantik Itu Luka” menghadirkan pengalaman membaca yang mendalam dan menggugah, menjadikannya sebagai salah satu karya sastra yang mengesankan dari penulis Indonesia, Eka Kurniawan.",
    "assets/cantik.png"
  ),
  new Book(
    "Orang-Orang Biasa",
    "Andrea Hirata",
    "Novel ini menggambarkan kehidupan sekelompok orang di sebuah kampung kecil yang bernama Belitong. Cerita ini berfokus pada kehidupan sehari-hari “orang-orang biasa” di kampung tersebut dan perjuangan mereka untuk mengatasi tantangan dan memperbaiki nasib mereka. Dalam novel ini, pembaca akan diperkenalkan pada sejumlah karakter yang unik dan beragam, masing-masing dengan latar belakang dan cerita hidup yang berbeda. Dari petani miskin hingga pedagang kaki lima, dari guru yang gigih hingga anak-anak yang bersemangat untuk belajar, setiap karakter memiliki cerita dan perjuangan mereka sendiri. Lebih dari sekadar menggambarkan kehidupan sekelompok orang, “Orang-Orang Biasa” juga menyentuh isu-isu sosial yang lebih luas, seperti kesenjangan ekonomi, pendidikan yang terbatas, dan perjuangan dalam mencari keadilan. Novel ini mengajak pembaca untuk merenungkan nilai-nilai kehidupan, kebaikan, dan pentingnya kebersamaan dalam menghadapi kesulitan. Dengan gaya penulisan yang lugas dan mengalir, Andrea Hirata mampu menghidupkan karakter-karakternya dengan penuh empati dan menghadirkan gambaran yang jelas tentang kehidupan masyarakat kecil yang sering terabaikan. “Orang-Orang Biasa” memberikan penghormatan kepada kekuatan dan ketahanan manusia dalam menghadapi keterbatasan dan menjalani kehidupan dengan martabat, sehingga menjadikannya sebagai kisah yang menginspirasi dan mengharukan.",
    "assets/orgbiasa.png"
  ),
];

function showDescription(book) {
  const popup = document.createElement("div");
  popup.classList.add("popup");

  const popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");

  const closeButton = document.createElement("span");
  closeButton.classList.add("close");
  closeButton.textContent = "×";
  closeButton.onclick = function () {
    document.body.removeChild(popup);
  };

  const title = document.createElement("h2");
  title.textContent = book.title;

  const author = document.createElement("p");
  author.textContent = `Penulis: ${book.author}`;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = `${book.description}`;

  popupContent.appendChild(closeButton);
  popupContent.appendChild(title);
  popupContent.appendChild(author);
  popupContent.appendChild(descriptionElement);

  popup.appendChild(popupContent);

  document.body.appendChild(popup);
}

window.onload = function () {
  const cardElement = document.getElementById("flex");

  books.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = book.title;
    card.appendChild(title);

    const image = document.createElement("img");
    image.src = book.image;
    image.alt = book.title;
    image.classList.add("book-image");
    card.appendChild(image);

    const button = document.createElement("button");
    button.textContent = "Selengkapnya";
    button.onclick = function () {
      showDescription(book);
    };
    card.appendChild(button);

    cardElement.appendChild(card);
  });
};
