import { Component } from '@angular/core';
import { DataService } from '../service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  paragraph!: string ;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.paragraph = data.paragraph;
    });
  }

}
