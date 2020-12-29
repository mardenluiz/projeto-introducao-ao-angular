import { NgModule } from "@angular/core";
import { StarComponents } from "./star.component";

@NgModule({
    declarations: [
        StarComponents
    ],
    exports: [
        StarComponents
    ]
})
export class StarModule {

}