import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getAllBooks() {
    return this.booksService.getBooks();
  }

  @Get('/:id')
  getBookById(@Param('id') id: string) {
    return this.booksService.getBook(id);
  }

  @Post()
  createBooks(
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('category') category: string,
  ) {
    return this.booksService.createBooks(title, author, category);
  }

  @Put('/:id')
  updateBook(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('category') category: string,
  ) {
    return this.booksService.updateBook(id, title, author, category);
  }

  @Delete(':/id')
  deleteBook(@Param('id') id: string) {
    return this.booksService.deleteBook(id);
  }
}
