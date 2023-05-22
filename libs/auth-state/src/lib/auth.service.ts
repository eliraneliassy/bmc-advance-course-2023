import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {

    private userName$ = new BehaviorSubject<string | null>(null);

    isLoggedIn$: Observable<boolean> = this.getUserName().pipe(
        map((userName) => !!userName)
    )

    getUserName() {
        return this.userName$.asObservable();
    }

    login(userName: string) {
        this.userName$.next(userName);
    }

    logout() {
        this.userName$.next(null);
    }
}