<template>
  <div>
    <h3>Add a new book to your list</h3>
    <div class="input">
      <input v-model="title" placeholder="Title">
      <input v-model="author" placeholder="Author">
      <input type="checkbox" v-model="beenRead">Have you read this book?
      <button @click="submit">Submit</button>
    </div>
    <h3>Your Current List</h3>

    <div class="controls">
      <button v-on:click="showAll()">Show All</button>
      <button v-on:click="showUnread()">Show Unread</button>
      <button v-on:click="showRead()">Show Read</button>
    </div>

    <div class="element">
      <p id="label">Read</p>
      <p>Title</p>
      <p id="author">Author</p>
      <p id="delete">Delete</p>
    </div>

    <div class="display" v-for="book in filteredBooks" :key="book._id">
      <div class="element">
        <input type="checkbox" v-model="book.beenRead" @click="editBook(book)">
        <p>{{book.title}}</p>
        <p>{{book.author}}</p>
        <button @click="deleteBook(book)">X</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "display",
  data() {
    return {
      title: "",
      author: "",
      beenRead: false,
      books: [],
      show: "all"
    };
  },
  async created() {
    this.getBooks();
  },
  computed: {
    filteredBooks() {
      if (this.show === "unread")
        return this.books.filter(book => {
          return !book.beenRead;
        });
      if (this.show === "read")
        return this.books.filter(book => {
          console.log(book.title);
          return book.beenRead;
        });
      return this.books;
    }
  },
  methods: {
    showRead() {
      this.show = "read";
    },
    showUnread() {
      this.show = "unread";
    },
    showAll() {
      this.show = "all";
    },
    async getBooks() {
      try {
        let response = await axios.get("/api/books");
        this.books = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async submit() {
      try {
        let r1 = await axios.post("/api/books", {
          title: this.title,
          author: this.author,
          beenRead: this.beenRead
        });
        this.getBooks();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteBook(book) {
      try {
        let response = axios.delete("/api/books/" + book._id);
        this.getBooks();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editBook(book) {
      try {
        if (book.beenRead) {
          book.beenRead = false;
        } else {
          book.beenRead = true;
        }
        let response = await axios.put("/api/books/" + book._id, {
          beenRead: book.beenRead
        });
        this.getBooks();
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>