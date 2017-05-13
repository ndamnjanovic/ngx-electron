/// <reference types="electron" />
/// <reference types="node" />
export declare class ElectronService {
    static readonly runningInElectron: boolean;
    private _electron;
    private readonly electron;
    readonly desktopCapturer: Electron.DesktopCapturer;
    readonly ipcRenderer: Electron.IpcRenderer;
    readonly remote: Electron.Remote;
    readonly webFrame: Electron.WebFrame;
    readonly clipboard: Electron.Clipboard;
    readonly crashReporter: Electron.CrashReporter;
    readonly process: NodeJS.Process;
    readonly nativeImage: typeof Electron.NativeImage;
    readonly screen: Electron.Screen;
    readonly shell: Electron.Shell;
}
