var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ElectronService } from './electronService';
import { Injectable } from '@angular/core';
export var ElectronServiceRef = (function (_super) {
    __extends(ElectronServiceRef, _super);
    function ElectronServiceRef() {
        _super.call(this);
    }
    ElectronServiceRef.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ElectronServiceRef.ctorParameters = function () { return []; };
    return ElectronServiceRef;
}(ElectronService));
