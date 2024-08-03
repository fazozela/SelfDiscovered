import {Component, ElementRef, inject, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {CommonModule, DatePipe} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {BlogService} from "../../../services/blog.service";
import {BlogResponse} from "../../../interfaces/blog.interface";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-blog-by-id',
  standalone: true,
  imports: [
    DatePipe,
    CommonModule,
    RouterLink
  ],
  templateUrl: './blog-by-id.component.html',
  styleUrl: './blog-by-id.component.css',
  encapsulation: ViewEncapsulation.None
})
export default class BlogByIdComponent implements OnInit{
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  private sanitizer = inject(DomSanitizer);

  blog: BlogResponse | null = null;
  safeContent: SafeHtml | null = null;

  ngOnInit() {
    this.getBlog();
  }

  getBlog() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.blogService.getBlogById(id).subscribe({
        next: (blog) => {
          this.blog = blog;
          this.safeContent = this.sanitizer.bypassSecurityTrustHtml(blog.content);
        },
        error: (error) => {
          console.error('Error fetching blog post:', error);
        }
      });
    }
  }


}
