import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AuthState, AuthStore } from './auth.store';
import { Observable, map } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {

    selectUserName$: Observable<string | null> = this.select('userName')
    selectIsLoggedIn$: Observable<boolean> = this.selectUserName$
        .pipe(map((userName: string | null) => !!userName))
    constructor(protected override store: AuthStore) {
        super(store);
    }
}