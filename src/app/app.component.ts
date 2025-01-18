import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeroComponent } from "./hero/hero.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactComponent } from "./contact/contact.component";
import { ExtraComponent } from "./extra/extra.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, ContentComponent, FooterComponent,  ExtraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
