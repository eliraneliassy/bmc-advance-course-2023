import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Book } from './book.interface';

@Injectable({ providedIn: 'root' })
export class BooksService {

    BASE_URL = `https://www.googleapis.com/books/v1/volumes`;
    constructor(private httpClient: HttpClient) { }
    getBooks(query: string): Observable<Book[]> {
        let params = new HttpParams();
        params = params.append('q', query);
        return this.httpClient.get<any>(this.BASE_URL, { params })
            .pipe(
                map((res: any) => res.items),
                map((items: any[]) => items.map((item: any) => ({
                    title: item.volumeInfo.title,
                    price: item.volumeInfo.pageCount,
                    description: item.volumeInfo.description,
                    imageLink: item.volumeInfo.imageLinks?.thumbnail,

                })))
            )

    }
}