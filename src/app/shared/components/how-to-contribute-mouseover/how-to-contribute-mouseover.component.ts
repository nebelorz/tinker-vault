import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-how-to-contribute-mouseover',
  standalone: true,
  imports: [NgClass],
  templateUrl: './how-to-contribute-mouseover.component.html',
  styleUrl: './how-to-contribute-mouseover.component.css',
})
export class HowToContributeMouseoverComponent {
  @Input() iconSize: number = 6;
}
