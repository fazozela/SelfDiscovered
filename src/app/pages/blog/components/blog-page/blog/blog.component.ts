import {Component, inject, OnInit} from '@angular/core';
import {BlogResponse} from "../../../interfaces/blog.interface";
import {BlogService} from "../../../services/blog.service";
import {CommonModule, DatePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    DatePipe,
    CommonModule
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export default class BlogComponent implements OnInit{

  private blogService = inject(BlogService);
  private router = inject(Router);

  blogs: BlogResponse[] = [];

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs(){
    this.blogService.getAllBlogs().subscribe({
      next: (response) => {
        console.log(response)
        this.blogs = response;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }

  navigateToBlogPost(id: string) {
    this.router.navigate(['/blog', id]);
  }

}
