import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private array1 = [10, 25, 58, 62];
  private array2 = [
    {
      id: 1,
      name: 'name1',
    },
    {
      id: 10,
      name: 'name1',
    },
    {
      id: 13,
      name: 'name13',
    },
    {
      id: 25,
      name: 'name25',
    },
    {
      id: 58,
      name: 'name58',
    },
    {
      id: 70,
      name: 'name70',
    },
  ];
  ngOnInit() {
    const result = this.array2
      .filter((item1) => {
        return this.array1.some((item2) => {
          return (item1.id ? item1.id : item1) === item2;
        });
      })
      .map((item) => {
        return item.name;
      });
    console.log(`Result is:`, result);
  }
}
