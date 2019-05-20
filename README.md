# Angular JWT Base
A simple JWT Authentication base for Angular project

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and deployment purposes.
Please note that this is not a module. The repository itself is a source code.

### Prerequisites
- This component depends on @angular/core, @angular/common/http, @angular/router and rxjs.

```
import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
```

### Installing

* Simply download and copy the component to your Angular project.

## Usage
### Import the service

- Import to the app.module

```
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [EventHandlerService],
  bootstrap: [AppComponent]
})
```
### Use the service
- The source code contains four folders:
+ service: provide needed services.
+ guard: provide guard for routing.
+ interceptor: provide interception to request and response.
+ model: provide defined models.

- To configure the API url, navigate to service/api.service.ts

```
  private baseURL = 'http://localhost:12345/api';
```

- To protect a route, navigate to module routes config

```
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }
```

- Inject the interceptors to app.module

```
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
```

- To configure how the token can be saved, mofidy the auth-result.model.ts and update server API

```
export class AuthResult {
  username: string;
  timestamp: number;
  token: string;
  role: string;
}
```

## Built With

* [Angular](https://angular.io/) - The Angular framework used

## Contributing

* **Galvin Nguyen** - *Initial work* - [silencieuxle](https://github.com/silencieuxle)

## Authors

* **Galvin Nguyen** - *Initial work* - [silencieuxle](https://github.com/silencieuxle)

## License

This project is licensed under the GNU General Public License.
