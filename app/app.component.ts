import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <header>
      <img src="img/angular.svg" alt="">
      <h1>{{ title }}</h1>
    </header>

    <main>
      <todos></todos>
    </main>
  `,
  styles: [`
      header {
          display: flex;
          justify-content: center;
          align-items: center;
          background: #1976D2;
          height: 56px;
          min-height: 56px;
          padding: 0;
          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.24);
          color: white;
      }

      header img {
          width: 50px;
      }

      header h1 {
          font-weight: 400;
          margin: 0 0 0 10px;
      }

      main {
          width: 600px;
          margin: auto;
          padding: 2rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
      }

      todos {
          width: 100%;
      }
  `]
})
export default class AppComponent {
  title = 'Angular 2Do';
}