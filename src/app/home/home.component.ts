import { ArrayType } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PostService } from '../post.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cityy: any;
  faSearch = faSearch;
  iserror: number;
  mesage: string = '';
  error: any;
  @ViewChild('city') city:ElementRef;
  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  public send( e: Event) {
    e.preventDefault();
    
    this.postService.url += this.city.nativeElement.value;
    this.postService.url +=
      '&appid=df3b6b891dfb924236ba05709ad9b202&cnt=17&units=metric';
      
    this.postService.getPosts().subscribe(
      (res) => {
        this.cityy = Array.of(res);

        this.mesage = '';
        
      },
      (err) => {
        this.error = Array.of(err);

        this.iserror = this.error[0].status;
        if (this.iserror === 404) {
          this.mesage = 'Sorry, the city was not found. ';
          this.cityy = [];
        }
        this.city.nativeElement.value = ' please try again';
        
        setTimeout(() => {
          this.city.nativeElement.value = '';
          this.mesage = '';

        }, 2000);
      }
    );
    
    this.postService.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  }
}
