(function() {
  require("spinal-env-drive-core");

  var SpinalDrive_App_FileExplorer_maintainer_viewer = require("./OpenSvf/SpinalDrive_App_maintainer_viewer.js")
    .FileExplorerMaintainerViewer;
  window.spinalDrive_Env.add_applications(
    "FileExplorer",
    new SpinalDrive_App_FileExplorer_maintainer_viewer()
  );
})();
