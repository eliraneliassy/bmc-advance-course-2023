import { Injectable } from "@angular/core";
import { Book } from "@bmc/books";
import { BehaviorSubject, Observable, map, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CartService {

    private books$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
    public numberOfItemsInCart$: Observable<number> = this.getCart().pipe(
        map((cart: Book[]) => cart.length)
    )

    getCart(): Observable<Book[]> {
        return this.books$.asObservable();
    }
    addToCart(book: Book): void {
        const currentCart: Book[] = this.books$.getValue();
        const newCart = [...currentCart, book];
        this.books$.next(newCart);
    }

    removeFromCart(book: Book): void {
        const currentCart: Book[] = this.books$.getValue();
        const newCart = currentCart.filter(b => b.id !== book.id)
        this.books$.next(newCart);

    }

    
}