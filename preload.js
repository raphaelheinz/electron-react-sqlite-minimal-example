const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  loadTableData: () => ipcRenderer.invoke('load-table-data'),
});
