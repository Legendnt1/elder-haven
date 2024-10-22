import { Component, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements AfterViewInit {

  // Se ejecuta después de que el componente y su vista hayan sido inicializados
  ngAfterViewInit() {
    this.initializeFaqCollapse();
  }

  // Función para manejar el colapsar/expandir del FAQ
  initializeFaqCollapse() {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
      button.addEventListener('click', (event: Event) => {
        const targetButton = event.target as HTMLElement;
        const targetSelector = targetButton.getAttribute('data-target');

        // Verificamos que el atributo data-target no sea null
        if (targetSelector) {
          const targetElement = document.querySelector(targetSelector) as HTMLElement;

          if (targetElement) {
            // Verificar si el contenido está visible o no
            if (targetElement.classList.contains('show')) {
              targetElement.classList.remove('show');
            } else {
              // Cerrar todos los demás contenidos
              document.querySelectorAll('.faq-content').forEach(content => content.classList.remove('show'));

              // Mostrar el contenido seleccionado
              targetElement.classList.add('show');
            }
          }
        }
      });
    });
  }
}