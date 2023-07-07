import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  ngOnInit(): void {
    let acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        acc[i].classList.toggle("active");
        var panel: any = acc[i].nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.classList.add("collapsed")
        } else {
          panel.classList.remove("collapsed")
          panel.style.maxHeight = panel.scrollHeight + "px";
          panel.style.borderBottom = "1px solid #fff"
          panel.style.borderBottomRight = "8px";
          panel.style.borderBottomLeft = "8px";
        }
      });
    }
  }

  rotateCaret(num: number){
    let caret: any = document.getElementById("dropdown-caret-"+num);

    if (caret.style.transform != "rotate(90deg)"){
      caret.style.transform = "rotate(90deg)"
    } else {
      caret.style.transform = ""
    }


  }

}
