import { Component, inject } from '@angular/core';
import { MultiSelectComponent } from '../../components/multi-select/multi-select.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { map } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  imports: [MultiSelectComponent, AsyncPipe, JsonPipe],
})
export class UserComponent {
  http = inject(HttpClient);
  users$ = this.http.get<User[]>(`${environment.API_BASE_URL}/users`).pipe(
    map((users) =>
      users.map((u) => ({
        text: u.name,
        value: u.id,
        icon: u.avatar,
      }))
    )
  );
  users404$ = this.http
    .get<User[]>(`${environment.API_BASE_URL}/users404`)
    .pipe(
      map((users) =>
        users.map((u) => ({
          text: u.name,
          value: u.id,
          icon: u.avatar,
        }))
      )
    );
}
