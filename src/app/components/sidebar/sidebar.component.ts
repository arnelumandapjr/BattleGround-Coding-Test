import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MultiSelectComponent } from '../multi-select/multi-select.component';
import { Option } from '../../models/option.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [RouterModule, MultiSelectComponent],
})
export class SidebarComponent {
  navLinks: Option[] = [
    {
      text: 'home',
      value: '/home',
    },
    {
      text: 'users',
      value: '/users',
    },
  ];

  handleSelectionChange(event: Event) {
    console.log({ event });
  }
}
