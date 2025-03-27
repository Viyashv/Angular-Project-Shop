import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginrequiredGuard: CanActivateFn = (route, state) => {
  let router :Router = inject(Router)
  const status = localStorage.getItem('login');
  if (status){
    return true;
  }
  router.navigate(["/login"])
  alert('Please login before accessing this page');
  return false;
};
