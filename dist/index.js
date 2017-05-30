import { NgModule } from '@angular/core';
import { AngularDragonDirective } from './directive/angular-dragon.directive';
export * from './directive/angular-dragon.directive';
export var AngularDraggableModule = (function () {
    function AngularDragonModule() {
    }
    AngularDragonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AngularDragonDirective
                    ],
                    exports: [
                        AngularDragonDirective
                    ]
                },] },
    ];
    AngularDragonModule.ctorParameters = function () { return []; };
    return AngularDragonModule;
}());
//# sourceMappingURL=index.js.map