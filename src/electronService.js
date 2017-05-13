export var ElectronService = (function () {
    function ElectronService() {
    }
    Object.defineProperty(ElectronService, "runningInElectron", {
        get: function () {
            return !!window.navigator.userAgent.match(/Electron/);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "electron", {
        get: function () {
            if (!this._electron) {
                this._electron = window.require ? window.require('electron') : null;
            }
            return this._electron;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "desktopCapturer", {
        get: function () {
            return this.electron ? this.electron.desktopCapturer : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "ipcRenderer", {
        get: function () {
            return this.electron ? this.electron.ipcRenderer : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "remote", {
        get: function () {
            return this.electron ? this.electron.remote : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "webFrame", {
        get: function () {
            return this.electron ? this.electron.webFrame : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "clipboard", {
        get: function () {
            return this.electron ? this.electron.clipboard : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "crashReporter", {
        get: function () {
            return this.electron ? this.electron.crashReporter : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "process", {
        get: function () {
            return this.remote ? this.remote.process : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "nativeImage", {
        get: function () {
            return this.electron ? this.electron.nativeImage : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "screen", {
        get: function () {
            return this.electron ? this.electron.screen : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "shell", {
        get: function () {
            return this.electron ? this.electron.shell : null;
        },
        enumerable: true,
        configurable: true
    });
    return ElectronService;
}());
