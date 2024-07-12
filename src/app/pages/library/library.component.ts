import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Book {
  title: string;
  author: string;
  year: number;
  coverImage: string;
  downloads: number;
}

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export default class LibraryComponent {
  books: Book[] = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, coverImage: "assets/book_example.jpg", downloads: 0 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, coverImage: "assets/book_example.jpg", downloads: 0 },
    { title: "1984", author: "George Orwell", year: 1949, coverImage: "assets/book_example.jpg", downloads: 0 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, coverImage: "assets/book_example.jpg", downloads: 0 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, coverImage: "assets/book_example.jpg", downloads: 0 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, coverImage: "assets/book_example.jpg", downloads: 0 },
    { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953, coverImage: "assets/book_example.jpg", downloads: 0 },
    { title: "The Da Vinci Code", author: "Dan Brown", year: 2003, coverImage: "assets/book_example.jpg", downloads: 0 },
  ];

  totalDownloads: number = 0;

  downloadBook(book: Book): void {
    book.downloads++;
    this.totalDownloads++;
    console.log(`Downloading ${book.title}. Total downloads: ${this.totalDownloads}`);
  }
}
