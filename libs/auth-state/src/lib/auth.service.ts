import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";
import { AuthStore } from "./auth.store";

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private authStore: AuthStore) { }

    login(userName: string) {
        this.authStore.update((currentState) => ({ ...currentState, userName }))
    }

    logout() {
        this.authStore.update((currentState) => ({ ...currentState, userName: null }))
    }
}