import "./styles.css";
import BookList from "./components/bookList";

export default function App() {
  // This mock a small list of books
  const mockDBBooks = [
    {
      author: "RaeAnne Thayne",
      coverImage: "https://via.placeholder.com/150",
      bookId: 101,
      price: 9.99,
      subtitle: "A Christmas Romance",
      title: "Sleigh Bells Ring",
      isLiked: false
    },
    {
      author: "Nnedi Okorafor",
      coverImage: "https://via.placeholder.com/150",
      bookId: 102,
      price: 23.99,
      subtitle: "Africanfuturist",
      title: "Noor",
      isLiked: false
    },
    {
      author: "Ann Patchett",
      coverImage: "https://via.placeholder.com/150",
      bookId: 103,
      price: 22.99,
      subtitle: "",
      title: "These Precious Days",
      isLiked: false
    }
  ];

  return (
    <div className="App">
      <h1>Select your favorite books</h1>
      <BookList dbBooks={mockDBBooks} />
    </div>
  );
}
