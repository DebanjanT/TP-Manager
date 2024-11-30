import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./utils.js";
import { getPreloadPath } from "./pathResolver.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    height: 800,
    width: 800,
    title: "TPM Setup",
    resizable: true,
    center: true,
    webPreferences: {
      preload: getPreloadPath(),
    },
  });
  if (isDev()) {
    mainWindow.loadURL("http://localhost:6851");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }

  // // Register global shortcuts to disable refresh
  // globalShortcut.register("CommandOrControl+R", () => {
  //   console.log("Refresh disabled!");
  // });
  // globalShortcut.register("F5", () => {
  //   console.log("Refresh disabled!");
  // });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
