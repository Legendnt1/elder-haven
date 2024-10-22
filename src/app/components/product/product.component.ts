import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';  // Importamos CommonModule

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  
}
