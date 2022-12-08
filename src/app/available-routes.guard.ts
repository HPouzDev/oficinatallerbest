import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseAuthService } from './services/firebase-auth.service';

@Injectable()
export class AvailableRoutesGuard implements CanActivate {
  urlTree: UrlTree;
  constructor(private firebaseAuth: FirebaseAuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
    this.firebaseAuth.user();
    const url = 'login';
    return this.urlTree;
  }
}
