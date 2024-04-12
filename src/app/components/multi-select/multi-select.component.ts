import { Component, EventEmitter, Output, input, output } from '@angular/core';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { Option } from '../../models/option.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [MultiSelectModule, FormsModule],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss',
})
export class MultiSelectComponent {
  options = input.required({
    transform: (val: Option[] | null) => {
      return val ?? [];
    },
  });

  @Output()
  selectionChange = new EventEmitter<Event>();

  fields = { text: 'text', value: 'value' };
}
