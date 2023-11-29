import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      requestFileContent: () => void,
      fileContent: (callback: any) => Electron.IpcRenderer
    }
  }
}
