import { templateJitUrl } from "@angular/compiler";
import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component, Input, OnChanges } from "@angular/core";
import { __importDefault } from "tslib";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponents implements OnChanges {

    @Input()
    rating: number = 0;

    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = (this.rating * 74) / 5;
    }
}