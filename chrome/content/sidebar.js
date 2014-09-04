const Cc = Components.classes;
const Ci = Components.interfaces;
const Cu = Components.utils;

Cu.import("resource://extname/common.js");
Cu.import("resource://extname/resourceService.js");

NamespaceChrome.Sidebar = {
  init: function() {
    document.getElementById("extname-sidebar-jsm").value = NamespaceResources.ResourceService.test();
  }
};

window.addEventListener("load", function() {
  NamespaceChrome.Sidebar.init();
}, false);