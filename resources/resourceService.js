var EXPORTED_SYMBOLS = [];

const Cu = Components.utils;

Cu.import("resource://extname/common.js");
Cu.import("resource://gre/modules/Services.jsm");

NamespaceResources.ResourceService = {
  init: function() {

  },

  test: function() {
    return "test";
  }
};

(function() { this.init(); }).apply(NamespaceResources.ResourceService);