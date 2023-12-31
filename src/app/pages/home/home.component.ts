import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit():void {
    this.scrollTrigger("#sponsors", {animatedClass: "slide", rootMargin: "-100px"})
    this.scrollTrigger("#partners", {animatedClass: "slide", rootMargin: "-150px"})
    this.scrollTrigger("#about", {animatedClass: "slide", rootMargin: "-150px"})
    this.scrollTrigger("#stats", {animatedClass: "slide", rootMargin: "-150px"})
    this.scrollTrigger(".speaker", {animatedClass: "reveal", rootMargin: "-150px"})
    this.scrollTrigger("#register", {animatedClass: "shadeBackground", rootMargin: "-100px"})
  }

  scrollTrigger(selector: string, options = {}){
    let els: any = document.querySelectorAll(selector);
    els = Array.from(els)
    els.forEach((el: Element) => {
      this.addObserver(el, options)
    })
  }

  addObserver(el: Element, options: any){
    // We are creating a new IntersectionObserver instance
    let observer = new IntersectionObserver((entries, observer) => { // This takes a callback function that receives two arguments: the elements list and the observer instance.
      entries.forEach(entry => {
      // `entry.isIntersecting` will be true if the element is visible
        if(entry.isIntersecting) {
          entry.target.classList.add(options.animatedClass || 'active')
          // We are removing the observer from the element after adding the active class
          observer.unobserve(entry.target)
        }
      })
    }, options)
    // Adding the observer to the element
    observer.observe(el)
  }


  register(){
    this.router.navigate(['/attendee'])
  }

  // Example usage
  // scrollTrigger('.scroll-reveal')

}
