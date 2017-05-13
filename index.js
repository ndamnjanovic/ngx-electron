import { NgModule } from '@angular/core';
import { ElectronService } from './src/electronService';
import { ElectronServiceRef } from './src/electronServiceRef';
export * from './src/electronService';
export * from './src/electronServiceRef';
export var NgxElectronModule = (function () {
    function NgxElectronModule() {
    }
    NgxElectronModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    exports: [],
                    providers: [{ provide: ElectronService, useClass: ElectronServiceRef }]
                },] },
    ];
    /** @nocollapse */
    NgxElectronModule.ctorParameters = function () { return []; };
    return NgxElectronModule;
}());
