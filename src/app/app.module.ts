import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { BirthdayComponent } from "./birthday.component";
import { PowerBoosterComponent } from "./power-booster.component";
import { ExponentialStrengthPipe } from "./exponential-strength.pipe";
import { UnlessDirective } from "./unless.directive";
import { MessageComponent } from "./message.component";

@NgModule({
  declarations: [
    AppComponent,
    PowerBoosterComponent,
    ExponentialStrengthPipe,
    BirthdayComponent,
    UnlessDirective,
    MessageComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
