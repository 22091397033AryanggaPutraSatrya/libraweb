// Buat kelas untuk buku
class Book {
  constructor(title, author, description, image) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.image = image; // Tambah properti gambar
  }
}

// Buat kumpulan buku
const books = [
  new Book(
    "The Catcher in the Rye",
    "J.D. Salinger",
    "A novel about teenage angst and alienation.",
    "assets/harrypotter.jpg" // Ganti dengan nama file gambar yang sesuai
  ),
  new Book(
    "To Kill a Mockingbird",
    "Harper Lee",
    "A story that addresses racial injustice and moral growth.",
    "assets/harrypotter.jpg" // Ganti dengan nama file gambar yang sesuai
  ),
  new Book(
    "1984",
    "George Orwell",
    "A dystopian novel depicting a totalitarian regime.",
    "assets/harrypotter.jpg" // Ganti dengan nama file gambar yang sesuai
  ),
];

// Function untuk menampilkan deskripsi dalam popup
function showDescription(book) {
  // Buat elemen popup
  const popup = document.createElement("div");
  popup.classList.add("popup");

  // Buat elemen content popup
  const popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");

  // Buat tombol untuk menutup popup
  const closeButton = document.createElement("span");
  closeButton.classList.add("close");
  closeButton.textContent = "×";
  closeButton.onclick = function () {
    document.body.removeChild(popup);
  };

  // Buat elemen judul, penulis, dan deskripsi
  const title = document.createElement("h2");
  title.textContent = book.title;

  const author = document.createElement("p");
  author.textContent = `Penulis: ${book.author}`;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = `${book.description}`;

  // Tambahkan elemen ke content popup
  popupContent.appendChild(closeButton);
  popupContent.appendChild(title);
  popupContent.appendChild(author);
  popupContent.appendChild(descriptionElement);

  // Tambahkan content popup ke popup
  popup.appendChild(popupContent);

  // Tambahkan popup ke body
  document.body.appendChild(popup);
}

// Gunakan kumpulan buku untuk menampilkan data
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
