
Cu.import("resource://extname/common.js");
Cu.import("resource://extname/resourceService.js");

NamespaceChrome.Overlay = {
  init: function() {
    document.getElementById("extname-panel-label").value = NamespaceResources.ResourceService.test();
  },

  togglePanel: function() {
    let panel = document.getElementById("extname-panel");

    if (panel.state == "open" || panel.state == "showing") {
      this.closePanel()
    } else {
      this.openPanel();
    }
  },

  openPanel: function() {
    let panel = document.getElementById("extname-panel");
    let anchor = document.getElementById("extname-toolbarbutton");
    let position = "after_start";
    if (!anchor) {
      anchor = document.getElementById("browser-bottombox");
      position = "before_end";
    }
    panel.openPopup(anchor, position, 0, 0, false, false);
    alert(gBrowser.contentDocument)
  },

  closePanel: function() {
    document.getElementById("extname-panel").hidePopup();
  },

  toggleSidebar: function() {
    toggleSidebar("extname-sidebar-broadcaster");
  }
};

window.addEventListener("load", function() {
  NamespaceChrome.Overlay.init();
}, false);