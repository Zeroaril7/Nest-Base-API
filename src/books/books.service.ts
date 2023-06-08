import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class BooksService {
  private books: any[] = [];

  getBooks(): any[] {
    return this.books;
  }

  createBooks(title: string, author: string, category: string) {
    this.books.push({
      id: randomUUID(),
      title,
      author,
      category,
    });
  }

  updateBook(id: string, title: string, author: string, category: string) {
    const bookIdx = this.findBookById(id);
    this.books[bookIdx].title = title;
    this.books[bookIdx].author = author;
    this.books[bookIdx].category = category;
  }

  findBookById(id: string) {
    const bookIdx = this.books.findIndex((book) => book.id === id);
    if (bookIdx === -1) {
      throw new NotFoundException(`id ${id} Not Found`);
    }
    return bookIdx;
  }

  getBook(id: string) {
    const bookIdx = this.findBookById(id);
    return this.books[bookIdx];
  }

  deleteBook(id: string) {
    const bookIdx = this.findBookById(id);
    this.books.splice(bookIdx, 1);
  }
}
