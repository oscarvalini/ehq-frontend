import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BotaoComponent } from "./botao/botao.component";

@NgModule({
    declarations: [
        BotaoComponent
    ],
    imports: [
        BrowserModule,
        CommonModule
    ],
    exports: [
        BotaoComponent
    ]
})
export class SharedModule {}