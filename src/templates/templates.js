define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("part_editorCommon", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button class=\"editor-common-sidebar-export action-secondary\">\n    <span class=\"editor-common-sidebar-export-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.export",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":28,"column":53},"end":{"line":28,"column":72}}}))
    + "</span>\n    <span class=\"editor-common-sidebar-exporting display-none\">\n      <i class=\"fa fa-circle-o-notch fa-spin\"></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.exporting",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":30,"column":50},"end":{"line":30,"column":72}}}))
    + "\n    </span>\n  </button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"sidebar-item-inner\">\n  <div class=\"editor-common-sidebar-preview-wrapper\">\n    <button class=\"editor-common-sidebar-preview action-primary\">\n      <span class=\"editor-common-sidebar-preview-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.preview",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":4,"column":56},"end":{"line":4,"column":76}}}))
    + "</span>\n      <span class=\"editor-common-sidebar-previewing display-none\">\n        <i class=\"fa fa-circle-o-notch fa-spin\"></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.previewing",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":6,"column":52},"end":{"line":6,"column":75}}}))
    + "\n      </span>\n    </button>\n    <div class=\"dropdown\">\n      <button class=\"\"><i class=\"fa fa-caret-down\"></i></button>\n      <ul>\n        <li>\n          <button class=\"editor-common-sidebar-preview-force\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.forcerebuild",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":13,"column":62},"end":{"line":13,"column":87}}}))
    + "</button>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <button class=\"editor-common-sidebar-download action-secondary\">\n    <span class=\"editor-common-sidebar-download-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.download",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":20,"column":55},"end":{"line":20,"column":76}}}))
    + "</span>\n    <span class=\"editor-common-sidebar-downloading display-none\">\n      <i class=\"fa fa-circle-o-notch fa-spin\"></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.downloading",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":22,"column":50},"end":{"line":22,"column":74}}}))
    + "\n    </span>\n  </button>\n\n"
    + ((stack1 = (lookupProperty(helpers,"ifHasPermissions")||(depth0 && lookupProperty(depth0,"ifHasPermissions"))||alias2).call(alias1,"*/*:create,*/*:read,*/*:update,*/*:delete",{"name":"ifHasPermissions","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":2},"end":{"line":33,"column":23}}})) != null ? stack1 : "")
    + "\n  <div class=\"separator\" />\n\n  <div class=\"sidebar-row\">\n    <button class=\"editor-common-sidebar-project\">\n      <span class=\"editor-common-sidebar-project-inner\">\n        <i class=\"fa fa-chevron-right primary-color\"/>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.editorsettings",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":40,"column":54},"end":{"line":40,"column":81}}}))
    + "\n      </span>\n    </button>\n  </div>\n\n  <div class=\"sidebar-row\">\n    <button class=\"editor-common-sidebar-config\">\n      <span class=\"editor-common-sidebar-config-inner\">\n        <i class=\"fa fa-chevron-right primary-color\"/>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.editorconfig",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":48,"column":54},"end":{"line":48,"column":79}}}))
    + "\n      </span>\n    </button>\n  </div>\n\n  <div class=\"sidebar-row\">\n    <button class=\"editor-common-sidebar-select-theme\">\n      <span class=\"editor-common-sidebar-select-theme-inner\">\n        <i class=\"fa fa-chevron-right primary-color\"/></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.editorselecttheme",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":56,"column":58},"end":{"line":56,"column":88}}}))
    + "\n      </span>\n    </button>\n  </div>\n\n  <div class=\"sidebar-row\">\n    <button class=\"editor-common-sidebar-menusettings\">\n      <span class=\"editor-common-sidebar-menusettings-inner\">\n        <i class=\"fa fa-chevron-right primary-color\"/></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.editormenusettings",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":64,"column":58},"end":{"line":64,"column":89}}}))
    + "\n      </span>\n    </button>\n  </div>\n\n  <div class=\"sidebar-row\">\n    <button class=\"editor-common-sidebar-extensions\">\n      <span class=\"editor-common-sidebar-extensions-inner\">\n        <i class=\"fa fa-chevron-right primary-color\"/></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.editorextensions",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":72,"column":58},"end":{"line":72,"column":87}}}))
    + "\n      </span>\n    </button>\n  </div>\n\n  <form id=\"downloadForm\" method=\"get\" action=\"\"></form>\n</div>\n";
},"useData":true}));

Handlebars.registerPartial("part_editorItemSidebar", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_movePositions") : depth0)) != null ? lookupProperty(stack1,"left") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":16,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_movePositions") : depth0)) != null ? lookupProperty(stack1,"right") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":6},"end":{"line":21,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_movePositions") : depth0)) != null ? lookupProperty(stack1,"full") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":6},"end":{"line":26,"column":13}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <button class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":13,"column":23},"end":{"line":13,"column":32}}}) : helper)))
    + "-move "
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":13,"column":38},"end":{"line":13,"column":47}}}) : helper)))
    + "-move-left editor-move-page-element\" title=\""
    + alias4((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.layoutleft",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":13,"column":91},"end":{"line":13,"column":114}}}))
    + "\">\n          <i class=\"fa fa-long-arrow-left\"></i>\n        </button>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <button class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":18,"column":23},"end":{"line":18,"column":32}}}) : helper)))
    + "-move "
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":18,"column":38},"end":{"line":18,"column":47}}}) : helper)))
    + "-move-right editor-move-page-element\" title=\""
    + alias4((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.layoutright",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":18,"column":92},"end":{"line":18,"column":116}}}))
    + "\">\n          <i class=\"fa fa-long-arrow-right\"></i>\n        </button>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <button class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":23,"column":23},"end":{"line":23,"column":32}}}) : helper)))
    + "-move "
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":23,"column":38},"end":{"line":23,"column":47}}}) : helper)))
    + "-move-full editor-move-page-element\" title=\""
    + alias4((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.layoutfull",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":23,"column":91},"end":{"line":23,"column":114}}}))
    + "\">\n          <i class=\"fa fa-arrows-h\"></i>\n        </button>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = ((helper = (helper = lookupProperty(helpers,"displayTitle") || (depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayTitle","hash":{},"data":data,"loc":{"start":{"line":30,"column":60},"end":{"line":30,"column":78}}}) : helper))) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":30,"column":86},"end":{"line":30,"column":95}}}) : helper)));
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"editor-collapse-"
    + alias3(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":34,"column":35},"end":{"line":34,"column":44}}}) : helper)))
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isCollapsed") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":45},"end":{"line":34,"column":83}}})) != null ? stack1 : "")
    + "\" title=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.collapsearticle",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":34,"column":92},"end":{"line":34,"column":120}}}))
    + "\">\n      <i class=\"fa fa-minus\"></i>\n    </button>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "iscollapsed";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"editor-item-settings handle\">\n  <div class=\"editor-item-settings-inner\">\n\n    <button class=\"open-context-icon open-context-"
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":4,"column":50},"end":{"line":4,"column":59}}}) : helper)))
    + "\" title=\""
    + alias4((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.clicktoedit",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":4,"column":68},"end":{"line":4,"column":91}}}))
    + "\">\n      <i class=\"fa fa-cog fa-fw\"></i>\n    </button>\n    <button class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":7,"column":19},"end":{"line":7,"column":28}}}) : helper)))
    + "-delete editor-delete-page-element\" title=\""
    + alias4((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.clicktodelete",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":7,"column":71},"end":{"line":7,"column":97}}}))
    + "\">\n      <i class=\"fa fa-trash-o\"></i>\n    </button>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_movePositions") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":27,"column":11}}})) != null ? stack1 : "")
    + "\n    <div class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":29,"column":16},"end":{"line":29,"column":25}}}) : helper)))
    + "-detail-inner editor-page-element-detail-inner\">\n      <h4 class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":30,"column":17},"end":{"line":30,"column":26}}}) : helper)))
    + "-title title\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":30,"column":40},"end":{"line":30,"column":102}}})) != null ? stack1 : "")
    + "</h4>\n    </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isCollapsible") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":4},"end":{"line":37,"column":11}}})) != null ? stack1 : "")
    + "\n  </div>\n</div>\n";
},"useData":true}));

Handlebars.registerPartial("part_editorMenu", Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"editor-menu-options\">\n  <a class=\"page-add-link\" href=\"#\">Add new page</a>\n</div>\n<div class=\"editor-page-list\"></div>\n";
},"useData":true}));

Handlebars.registerPartial("part_settingsGeneral", Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"editing-overlay-panel-content\">\n  <div class=\"editing-overlay-panel-content-inner\">\n\n    <form role=\"form\">\n      <div class=\"form-group\">\n        <label for=\"setting-title\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.title",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":6,"column":35},"end":{"line":6,"column":52}}}))
    + "</label>\n        <input type=\"text\" class=\"form-control setting-title\" placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.title",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":7,"column":75},"end":{"line":7,"column":92}}}))
    + "\" value=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":101},"end":{"line":7,"column":110}}}) : helper)))
    + "\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"setting-displaytitle\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.displaytitle",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":11,"column":42},"end":{"line":11,"column":66}}}))
    + "</label>\n        <input type=\"text\" class=\"form-control setting-displaytitle\" placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.displaytitle",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":12,"column":82},"end":{"line":12,"column":106}}}))
    + "\" value=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"displayTitle") || (depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"displayTitle","hash":{},"data":data,"loc":{"start":{"line":12,"column":115},"end":{"line":12,"column":131}}}) : helper)))
    + "\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"setting-class\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.class",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":16,"column":35},"end":{"line":16,"column":52}}}))
    + "</label>\n        <input type=\"text\" class=\"form-control setting-class\" placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.class",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":17,"column":75},"end":{"line":17,"column":92}}}))
    + "\" value=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":17,"column":101},"end":{"line":17,"column":113}}}) : helper)))
    + "\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"setting-body\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.bodytext",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":21,"column":34},"end":{"line":21,"column":54}}}))
    + "</label>\n        <textarea class=\"text-editor form-control setting-body\" id=\"setting-body\" placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.bodytext",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":22,"column":95},"end":{"line":22,"column":115}}}))
    + "\">"
    + alias3(((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":22,"column":117},"end":{"line":22,"column":125}}}) : helper)))
    + "</textarea>\n      </div>\n    </form>\n\n  </div>\n</div>\n";
},"useData":true}));

this["Handlebars"]["templates"]["actions"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <option value=\"\" selected>\n        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"placeholderText") || (depth0 != null ? lookupProperty(depth0,"placeholderText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"placeholderText","hash":{},"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":5,"column":27}}}) : helper)))
    + "\n        </option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":9,"column":23},"end":{"line":9,"column":32}}}) : helper)))
    + "\" data-apply=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"applyButtonText") || (depth0 != null ? lookupProperty(depth0,"applyButtonText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"applyButtonText","hash":{},"data":data,"loc":{"start":{"line":9,"column":46},"end":{"line":9,"column":65}}}) : helper)))
    + "\">\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":10,"column":16}}}) : helper)))
    + "\n        </option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"actions-inner\">\n    <select class=\"actions-select\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"placeholderText") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":7,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":12,"column":17}}})) != null ? stack1 : "")
    + "    </select>\n\n    <button class=\"btn actions-apply-button\">\n        <span class=\"actions-apply-button-original\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"buttonText") || (depth0 != null ? lookupProperty(depth0,"buttonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"buttonText","hash":{},"data":data,"loc":{"start":{"line":16,"column":52},"end":{"line":16,"column":66}}}) : helper)))
    + "</span>\n        <span class=\"actions-apply-button-apply display-none\"></span>\n    </button>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["assetManagement"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"asset-management-inner clearfix\">\n    <div class=\"asset-management-assets-container\">\n        <div class=\"asset-management-no-assets display-none\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.noassetsfound",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":3,"column":61},"end":{"line":3,"column":86}}}))
    + "</div>\n        <div class=\"asset-management-assets-container-inner\">\n        </div>\n    </div>\n    <div class=\"asset-management-preview-container\">\n        <div class=\"asset-management-no-preview\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.assetpreviewinstruction",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":8,"column":49},"end":{"line":8,"column":84}}}))
    + "</div>\n        <div class=\"asset-management-preview-container-inner\">\n        </div>\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["assetManagementCollection"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"asset-management-collection-inner clearfix\">\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["assetManagementListItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"asset-management-list-item-deleted\">\n    <i class=\"fa fa-ban\"></i>\n</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <i class=\"fa fa-file-image-o\"></i>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "            <i class=\"fa fa-file-audio-o\"></i>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "            <i class=\"fa fa-file-video-o\"></i>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "            <i class=\"fa fa-file-o\"></i>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"metadata") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":30,"column":8},"end":{"line":36,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"asset-management-list-item-image\" data-style=\"background-image:url(api/asset/thumb/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":31,"column":103},"end":{"line":31,"column":110}}}) : helper)))
    + ")\">\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"asset-management-list-item-image\">\n            <i class=\"fa fa-file-image-o\"></i>\n        </div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"metadata") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":41,"column":8},"end":{"line":47,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"asset-management-list-item-image\" data-style=\"background-image:url(api/asset/thumb/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":42,"column":103},"end":{"line":42,"column":110}}}) : helper)))
    + ")\"}>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"asset-management-list-item-image\">\n            <i class=\"fa fa-file-video-o\"></i>\n        </div>\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"asset-management-list-item-image\">\n        <i class=\"fa fa-file-audio-o\"></i>\n    </div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"asset-management-list-item-image\">\n        <i class=\"fa fa-file-o\"></i>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isDeleted") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":5,"column":7}}})) != null ? stack1 : "")
    + "\n<div class=\"asset-management-list-item-inner\">\n\n    <div class=\"asset-management-list-item-icon\">\n        <div class=\"asset-management-list-item-icon-inner\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"assetType") : depth0),"image",{"name":"ifValueEquals","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":13,"column":30}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"assetType") : depth0),"audio",{"name":"ifValueEquals","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":12},"end":{"line":17,"column":30}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"assetType") : depth0),"video",{"name":"ifValueEquals","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":21,"column":30}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"assetType") : depth0),"other",{"name":"ifValueEquals","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":12},"end":{"line":25,"column":30}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n\n"
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"assetType") : depth0),"image",{"name":"ifValueEquals","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":4},"end":{"line":38,"column":22}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"assetType") : depth0),"video",{"name":"ifValueEquals","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":4},"end":{"line":49,"column":22}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"assetType") : depth0),"audio",{"name":"ifValueEquals","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":4},"end":{"line":55,"column":22}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"assetType") : depth0),"other",{"name":"ifValueEquals","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":4},"end":{"line":61,"column":22}}})) != null ? stack1 : "")
    + "\n    <div class=\"asset-management-list-item-details\">\n\n        <div class=\"asset-management-list-item-details-inner\">\n\n        <div class=\"asset-management-list-item-title\">\n            <h4 class=\"asset-management-list-item-title-inner\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":68,"column":63},"end":{"line":68,"column":72}}}) : helper)))
    + "</h4>\n        </div>\n\n        </div>\n\n\n\n    </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["assetManagementModalAutofill"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<i class=\"fa fa-magic\"></i>"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.autofill",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":1,"column":27},"end":{"line":1,"column":47}}}));
},"useData":true});

this["Handlebars"]["templates"]["assetManagementModalFilters"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button class=\"asset-management-modal-add-asset\">\n    <span class=\"asset-management-modal-add-asset-inner\">\n        <i class=\"fa-upload fa\"></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.uploadnewasset",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":3,"column":36},"end":{"line":3,"column":62}}}))
    + "\n    </span>\n</button>\n\n<input type=\"text\" class=\"asset-management-modal-filter-search\" placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.search",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":7,"column":77},"end":{"line":7,"column":95}}}))
    + "\"/>\n<button class=\"sidebar-inline-input-button asset-management-modal-filter-clear-search\">\n    <i class=\"fa fa-times\"></i>\n</button>\n\n<button class=\"asset-management-modal-add-tag\">\n    <span class=\"asset-management-modal-add-tag-inner\">\n        <i class=\"fa-plus fa\"></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.addtag",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":14,"column":34},"end":{"line":14,"column":52}}}))
    + "\n    </span>\n</button>";
},"useData":true});

this["Handlebars"]["templates"]["assetManagementModalNewAsset"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"asset-management-new-asset-file\">\n                "
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.fileuploaded",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":14,"column":16},"end":{"line":14,"column":40}}}))
    + "\n            </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <input type=\"file\" class=\"asset-file\" name=\"file\">\n            <div class=\"progress-container\">\n                <div class=\"progress-bar\">\n                    <div class=\"progress-percent\">0%</div>\n                </div>\n            </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button class=\"asset-management-modal-new-asset-close\">\n    <i class=\"fa fa-times\"></i>\n</button>\n<div class=\"asset-management-modal-new-asset-inner\">\n    <!-- Begin upload form -->\n    <form class=\"asset-form forms asset-form\" action=\"api/asset\" method=\"post\">\n        <div class=\"form-group\">\n            <label for=\"file\">\n                "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.assetfile",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":9,"column":16},"end":{"line":9,"column":37}}}))
    + " <span class=\"req\">*</span>\n                <span class=\"error\"></span>\n            </label>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"path") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":12,"column":12},"end":{"line":23,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"form-group\">\n            <label for=\"title\">\n                "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.assettitle",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":27,"column":16},"end":{"line":27,"column":38}}}))
    + " <span class=\"req\">*</span>\n                <span class=\"error\"></span>\n            </label>\n            <input type=\"text\" class=\"asset-title required\" name=\"title\" placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.assettitle",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":30,"column":86},"end":{"line":30,"column":108}}}))
    + "\" value=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":30,"column":117},"end":{"line":30,"column":128}}}) : helper)))
    + "\" autocomplete=\"off\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"description\">\n                "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.assetdescription",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":35,"column":16},"end":{"line":35,"column":44}}}))
    + " <span class=\"req\">*</span>\n                <span class=\"error\"></span>\n            </label>\n            <textarea class=\"asset-description required\" name=\"description\" placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.assetdescription",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":38,"column":89},"end":{"line":38,"column":117}}}))
    + "\">"
    + alias3(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":38,"column":119},"end":{"line":38,"column":136}}}) : helper)))
    + "</textarea>\n        </div>\n\n        <div class=\"form-group tags\">\n            <label for=\"tags_control\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.tags",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":42,"column":38},"end":{"line":42,"column":54}}}))
    + "</label>\n            <input type=\"text\" autocomplete=\"off\" class=\"width-30\" id=\"tags_control\" name=\"tags_control\" value=\""
    + alias3((lookupProperty(helpers,"pickCSV")||(depth0 && lookupProperty(depth0,"pickCSV"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"tags") : depth0),"title",{"name":"pickCSV","hash":{},"data":data,"loc":{"start":{"line":43,"column":112},"end":{"line":43,"column":136}}}))
    + "\" />\n        </div>\n\n        <div class=\"\">\n            <button class=\"asset-management-modal-new-asset-upload btn secondary\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.upload",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":47,"column":82},"end":{"line":47,"column":100}}}))
    + "</button>\n        </div>\n        <input type=\"hidden\" name=\"tags\" id=\"tags\" />\n    </form>\n    <!-- end upload form -->\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["assetManagementModalTags"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <button class=\"asset-management-modal-tags-item sidebar-filter-item\" data-title=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":18,"column":93},"end":{"line":18,"column":102}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":18,"column":113},"end":{"line":18,"column":120}}}) : helper)))
    + "\">\n                <div class=\"asset-management-modal-tags-item-inner\">\n                    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isUsed") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":69}}})) != null ? stack1 : "")
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":20,"column":69},"end":{"line":20,"column":78}}}) : helper)))
    + "\n                </div>\n            </button>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "<i class=\"fa fa-check\"></i>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"asset-management-modal-tags-inner\">\n    <div class=\"asset-management-modal-tags-toolbar\">\n        <div class=\"asset-management-modal-tags-toolbar-inner clearfix\">\n            <div class=\"asset-management-modal-tags-toolbar-title sidebar-filter-toolbar-title\">\n                "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":16},"end":{"line":5,"column":25}}}) : helper)))
    + "\n            </div>\n            <div class=\"asset-management-modal-tags-toolbar-close sidebar-filter-toolbar-close\">\n                <button class=\"fa fa-times\"></button>\n            </div>\n        </div>\n    </div>\n    <div class=\"asset-management-modal-tags-search sidebar-filter-search\">\n        <input type=\"text\" class=\"asset-management-modal-tags-search-input sidebar-filter-search-input\" />\n    </div>\n    <div class=\"asset-management-modal-tags-items sidebar-filter-items\">\n        <div class=\"asset-management-modal-tags-items-inner\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":23,"column":21}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["assetManagementNewAsset"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"asset-management-new-asset-file\">\n                "
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.fileuploaded",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":11,"column":16},"end":{"line":11,"column":40}}}))
    + "\n            </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <input type=\"file\" class=\"asset-file\" name=\"file\">\n            "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"maxUploadSize") || (depth0 != null ? lookupProperty(depth0,"maxUploadSize") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"maxUploadSize","hash":{},"data":data,"loc":{"start":{"line":15,"column":12},"end":{"line":15,"column":29}}}) : helper)))
    + "\n            <div class=\"progress-container\">\n                <div class=\"progress-bar\">\n                    <div class=\"progress-percent\">0%</div>\n                </div>\n            </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"asset-management-new-asset-inner inner\">\n    <!-- Begin upload form -->\n    <form class=\"asset-form forms asset-form\" action=\"api/asset\" method=\"post\">\n        <div class=\"form-group\">\n            <label for=\"file\">\n                "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.assetfile",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":6,"column":16},"end":{"line":6,"column":37}}}))
    + " <span class=\"req\">*</span>\n                <span class=\"error\"></span>\n            </label>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"path") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":21,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"form-group\">\n            <label for=\"title\">\n                "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.assettitle",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":25,"column":16},"end":{"line":25,"column":38}}}))
    + " <span class=\"req\">*</span>\n                <span class=\"error\"></span>\n            </label>\n            <input type=\"text\" class=\"asset-title required\" name=\"title\" placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.assettitle",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":28,"column":86},"end":{"line":28,"column":108}}}))
    + "\" value=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":28,"column":117},"end":{"line":28,"column":128}}}) : helper)))
    + "\" autocomplete=\"off\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"description\">\n                "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.assetdescription",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":33,"column":16},"end":{"line":33,"column":44}}}))
    + " <span class=\"req\">*</span>\n                <span class=\"error\"></span>\n            </label>\n            <textarea class=\"asset-description required\" name=\"description\" placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.assetdescription",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":36,"column":89},"end":{"line":36,"column":117}}}))
    + "\">"
    + alias3(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":36,"column":119},"end":{"line":36,"column":136}}}) : helper)))
    + "</textarea>\n        </div>\n\n        <div class=\"form-group tags\">\n            <label for=\"tags\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.tags",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":40,"column":30},"end":{"line":40,"column":46}}}))
    + "</label>\n            <input type=\"text\" autocomplete=\"off\" class=\"width-30\" id=\"tags_control\" name=\"tags_control\" value=\""
    + alias3((lookupProperty(helpers,"pickCSV")||(depth0 && lookupProperty(depth0,"pickCSV"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"tags") : depth0),"title",{"name":"pickCSV","hash":{},"data":data,"loc":{"start":{"line":41,"column":112},"end":{"line":41,"column":136}}}))
    + "\" />\n        </div>\n        <input type=\"hidden\" name=\"tags\" id=\"tags\" />\n    </form>\n    <!-- end upload form -->\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["assetManagementNewAssetSidebar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"sidebar-item-inner\">\n    <div class=\"separator\"></div>\n\n    <button type=\"submit\" class=\"primary-color asset-management-new-sidebar-save-button action-primary\">\n        <span>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":5,"column":14},"end":{"line":5,"column":30}}}))
    + "</span>\n    </button>\n    <button type=\"button\" class=\"asset-management-new-sidebar-cancel-button action-secondary\">\n        <span>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":8,"column":14},"end":{"line":8,"column":32}}}))
    + "</span>\n    </button>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["assetManagementPreview"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <img src=\"api/asset/serve/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":4,"column":32},"end":{"line":4,"column":39}}}) : helper)))
    + "\"/>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <video preload=\"auto\" controls width=\"640px\" height=\"360px\" poster=\"\" style=\"width:100%; height:100%;\">\n        <source src=\"api/asset/serve/"
    + alias4(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":9,"column":37},"end":{"line":9,"column":44}}}) : helper)))
    + "\" type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"mimeType") || (depth0 != null ? lookupProperty(depth0,"mimeType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mimeType","hash":{},"data":data,"loc":{"start":{"line":9,"column":52},"end":{"line":9,"column":64}}}) : helper)))
    + "\"/>\n      </video>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <i class=\"fa fa-file-audio-o\"></i>\n      <audio src=\"api/asset/serve/"
    + alias4(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":15,"column":34},"end":{"line":15,"column":41}}}) : helper)))
    + "\" type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"mimeType") || (depth0 != null ? lookupProperty(depth0,"mimeType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mimeType","hash":{},"data":data,"loc":{"start":{"line":15,"column":49},"end":{"line":15,"column":61}}}) : helper)))
    + "\" controls=\"controls\" style=\"width:100%;\"></audio>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "      <i class=\"fa fa-file-o\"></i>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"asset-duration break\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.assetduration",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":28,"column":38},"end":{"line":28,"column":63}}}))
    + ": "
    + ((stack1 = (lookupProperty(helpers,"formatDuration")||(depth0 && lookupProperty(depth0,"formatDuration"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"duration") : stack1),{"name":"formatDuration","hash":{},"data":data,"loc":{"start":{"line":28,"column":65},"end":{"line":28,"column":103}}})) != null ? stack1 : "")
    + "</div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"asset-height\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.assetdimensions",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":32,"column":30},"end":{"line":32,"column":57}}}))
    + ": "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0)) != null ? stack1 : "")
    + " x "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"height") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"asset-tags\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.tags",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":36,"column":28},"end":{"line":36,"column":44}}}))
    + ": "
    + alias3((lookupProperty(helpers,"renderTags")||(depth0 && lookupProperty(depth0,"renderTags"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"tags") : depth0),"title",{"name":"renderTags","hash":{},"data":data,"loc":{"start":{"line":36,"column":46},"end":{"line":36,"column":73}}}))
    + "</div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "  <div class=\"assset-select\">\n   <a href=\"#\" class=\"btn primary confirm-select-asset\">Select</a>\n  </div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"asset-preview-restore-button btn alert\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.restore",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":46,"column":59},"end":{"line":46,"column":78}}}))
    + "</button>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"asset-preview-edit-button btn primary\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.edit",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":48,"column":58},"end":{"line":48,"column":74}}}))
    + "</button>\n    <button class=\"asset-preview-delete-button btn alert\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.delete",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":49,"column":58},"end":{"line":49,"column":76}}}))
    + "</button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"asset-preview-details text-centered\">\n  <div class=\"asset-preview-details-preview\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"assetType") : depth0),"image",{"name":"ifValueEquals","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":5,"column":22}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"assetType") : depth0),"video",{"name":"ifValueEquals","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":11,"column":22}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"assetType") : depth0),"audio",{"name":"ifValueEquals","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":16,"column":22}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"assetType") : depth0),"other",{"name":"ifValueEquals","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":20,"column":22}}})) != null ? stack1 : "")
    + "  </div>\n\n  <h1 class=\"asset-preview-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":23,"column":34},"end":{"line":23,"column":43}}}) : helper)))
    + "</h1>\n  <div class=\"asset-preview-description\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":24,"column":41},"end":{"line":24,"column":56}}}) : helper)))
    + "</div>\n  <div class=\"asset-size\">"
    + alias4((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.assetsize",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":25,"column":26},"end":{"line":25,"column":47}}}))
    + ": "
    + ((stack1 = (lookupProperty(helpers,"bytesToSize")||(depth0 && lookupProperty(depth0,"bytesToSize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"size") : depth0),{"name":"bytesToSize","hash":{},"data":data,"loc":{"start":{"line":25,"column":49},"end":{"line":25,"column":71}}})) != null ? stack1 : "")
    + "</div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"duration") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":2},"end":{"line":29,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"height") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":2},"end":{"line":33,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"tags") : depth0)) != null ? lookupProperty(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":2},"end":{"line":37,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isSelectable") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":2},"end":{"line":43,"column":9}}})) != null ? stack1 : "")
    + "  <div class=\"asset-preview-edit\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isDeleted") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":45,"column":4},"end":{"line":50,"column":11}}})) != null ? stack1 : "")
    + "  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["assetManagementSidebar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"sidebar-item-inner\">\n\n\n    <div class=\"separator\"></div>\n\n    <button class=\"asset-management-sidebar-new action-primary\">\n        <span class=\"asset-management-sidebar-new-inner\">\n            "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.uploadnewasset",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":13,"column":38}}}))
    + "\n        </span>\n    </button>\n\n    <div class=\"separator\"></div>\n\n\n    <div class=\"sidebar-row sidebar-divide\">\n        <h3 class=\"sidebar-divide-inner\">\n            <i class=\"fa fa-filter\"></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.assetfilters",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":23,"column":40},"end":{"line":23,"column":64}}}))
    + "\n        </h3>\n    </div>\n\n    <div class=\"sidebar-row\">\n        <div class=\"sidebar-row-input\">\n            <input type=\"text\" class=\"asset-management-sidebar-filter-search\" placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.searchbyname",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":30,"column":91},"end":{"line":30,"column":115}}}))
    + "\"/>\n            <button class=\"sidebar-filter-clear\">\n                <i class=\"fa fa-times\"></i>\n            </button>\n        </div>\n    </div>\n\n    <div class=\"sidebar-row\">\n        <button class=\"asset-management-sidebar-filter-image sidebar-tag asset-management-sidebar-filter-button\" data-filter-type=\"image\">\n            <span class=\"asset-management-sidebar-filter-image-inner\">\n                <i class=\"fa fa-toggle-off\"></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.filetypeimage",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":40,"column":48},"end":{"line":40,"column":74}}}))
    + "\n            </span>\n            <span class=\"asset-management-sidebar-filter-image-icon\">\n                <i class=\"fa fa-image\"></i>\n            </span>\n        </button>\n    </div>\n\n    <div class=\"sidebar-row\">\n        <button class=\"asset-management-sidebar-filter-audio sidebar-tag asset-management-sidebar-filter-button\" data-filter-type=\"audio\">\n            <span class=\"asset-management-sidebar-filter-audio-inner\">\n                <i class=\"fa fa-toggle-off\"></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.filetypeaudio",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":51,"column":48},"end":{"line":51,"column":74}}}))
    + "\n            </span>\n            <span class=\"asset-management-sidebar-filter-image-icon\">\n                <i class=\"fa fa-file-audio-o\"></i>\n            </span>\n        </button>\n    </div>\n\n    <div class=\"sidebar-row\">\n        <button class=\"asset-management-sidebar-filter-video sidebar-tag asset-management-sidebar-filter-button\" data-filter-type=\"video\">\n            <span class=\"asset-management-sidebar-filter-video-inner\">\n                <i class=\"fa fa-toggle-off\"></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.filetypevideo",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":62,"column":48},"end":{"line":62,"column":74}}}))
    + "\n            </span>\n            <span class=\"asset-management-sidebar-filter-image-icon\">\n                <i class=\"fa fa-file-video-o\"></i>\n            </span>\n        </button>\n    </div>\n\n    <div class=\"sidebar-row\">\n        <button class=\"asset-management-sidebar-filter-other sidebar-tag asset-management-sidebar-filter-button\" data-filter-type=\"other\">\n            <span class=\"asset-management-sidebar-filter-other-inner\">\n                <i class=\"fa fa-toggle-off\"></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.filetypeother",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":73,"column":48},"end":{"line":73,"column":74}}}))
    + "\n            </span>\n            <span class=\"asset-management-sidebar-filter-image-icon\">\n                <i class=\"fa fa-file-o\"></i>\n            </span>\n        </button>\n    </div>\n\n    <div class=\"sidebar-row sidebar-divide\">\n        <h3 class=\"sidebar-divide-inner\">\n            <i class=\"fa fa-tags\"></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.tags",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":83,"column":38},"end":{"line":83,"column":54}}}))
    + "\n        </h3>\n    </div>\n\n        <button class=\"asset-management-sidebar-add-tag sidebar-filter-button sidebar-tag action-secondary\">\n            <span class=\"dashboard-sidebar-add-tag-inner\">\n                "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.searchbytag",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":89,"column":16},"end":{"line":89,"column":40}}}))
    + "\n            </span>\n        </button>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["assetPicker"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"asset-picker-filters\">\n    <label for=\"asset-picker-filter-search\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.filter",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":3,"column":44},"end":{"line":3,"column":62}}}))
    + "</label>\n    <input type=\"text\" name=\"asset-picker-filter-search\" class=\"asset-management-sidebar-filter-search\" placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.searchtitleordescription",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":4,"column":117},"end":{"line":4,"column":153}}}))
    + "\"/>\n    <button class=\"sidebar-inline-input-button asset-picker-sidebar-filter-clear-search\">\n        <i class=\"fa fa-times\"></i>\n    </button>\n    <button class=\"asset-picker-sidebar-filter-image asset-picker-sidebar-filter-button\" data-filter-type=\"image\">\n        <span class=\"asset-picker-sidebar-filter-image-inner\">\n            "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.filetypeimage",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":38}}}))
    + "\n        </span>\n    </button>\n\n    <button class=\"asset-picker-sidebar-filter-audio asset-picker-sidebar-filter-button\" data-filter-type=\"audio\">\n        <span class=\"asset-picker-sidebar-filter-audio-inner\">\n            "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.filetypeaudio",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":16,"column":12},"end":{"line":16,"column":38}}}))
    + "\n        </span>\n    </button>\n\n    <button class=\"asset-picker-sidebar-filter-video asset-picker-sidebar-filter-button\" data-filter-type=\"video\">\n        <span class=\"asset-picker-sidebar-filter-video-inner\">\n            "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.filetypevideo",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":22,"column":38}}}))
    + "\n        </span>\n    </button>\n\n    <button class=\"asset-picker-sidebar-filter-other asset-picker-sidebar-filter-button\" data-filter-type=\"other\">\n        <span class=\"asset-picker-sidebar-filter-other-inner\">\n            "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.filetypeother",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":38}}}))
    + "\n        </span>\n    </button>\n</div>\n\n\n<div class=\"asset-management-inner\">\n    <div class=\"asset-management-assets-container\">\n        <div class=\"asset-management-no-assets\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.noassetsfound",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":36,"column":48},"end":{"line":36,"column":73}}}))
    + "</div>\n        <div class=\"asset-management-assets-container-inner\">\n        </div>\n    </div>\n    <div class=\"asset-management-preview-container\">\n        <div class=\"asset-management-no-preview\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.assetpreviewinstruction",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":41,"column":49},"end":{"line":41,"column":84}}}))
    + "</div>\n        <div class=\"asset-management-preview-container-inner\">\n        </div>\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["colorLabelPopUpView"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"color-item\" data-colorlabel="
    + container.escapeExpression(container.lambda(depth0, depth0))
    + ">\n                </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"colorlabel-inner\">\n    <div class=\"colorlabel-header\">\n        <div class=\"title\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.colourLabelTitle",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":3,"column":27},"end":{"line":3,"column":55}}}))
    + "</div>\n        <div class=\"intro\">"
    + ((stack1 = (lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.colourLabelIntro",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":4,"column":27},"end":{"line":4,"column":57}}})) != null ? stack1 : "")
    + "</div>\n    </div>\n    <div class=\"colors\">\n        <div class=\"colors-inner clearfix\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"colors") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":11,"column":21}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n    <div class=\"footer\">\n        <div class=\"footer-inner\">\n            <button class=\"btn warning reset\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.reset",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":16,"column":46},"end":{"line":16,"column":63}}}))
    + "</button>\n            <button class=\"btn primary apply\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.apply",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":17,"column":46},"end":{"line":17,"column":63}}}))
    + "</button>\n            <button class=\"btn secondary cancel\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":18,"column":49},"end":{"line":18,"column":67}}}))
    + "</button>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["contentPane"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"contentPane-inner\">\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["contextMenu"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"context-menu-pin\">\n</div>\n<div class=\"context-menu-inner\">\n    <div class=\"context-menu-holder\">\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["contextMenuItem"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a class=\"context-menu-item-open\" href=\"#\">\n    <div class=\"context-menu-item-title\">\n        <div class=\"context-menu-item-title-inner\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":51},"end":{"line":3,"column":60}}}) : helper)))
    + "</div>\n    </div>\n    <div class=\"context-menu-item-description\">\n        <div class=\"context-menu-item-description-inner\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":6,"column":57},"end":{"line":6,"column":72}}}) : helper)))
    + "</div>\n    </div>\n</a>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorArticleEdit"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"article-edit-inner form-container\">\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["editorArticleEditSidebar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"sidebar-item-inner\">\n    <div class=\"separator\"></div>\n    <button class=\"editor-article-edit-sidebar-save action-primary\">\n        <span class=\"editor-article-edit-sidebar-save-inner\">\n            "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":10,"column":49},"end":{"line":10,"column":65}}}))
    + "\n        </span>\n    </button>\n    <button class=\"editor-article-edit-sidebar-cancel action-secondary\">\n        <span class=\"editor-article-edit-sidebar-cancel-inner\">\n            "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":15,"column":50},"end":{"line":15,"column":68}}}))
    + "\n        </span>\n    </button>\n    <div class=\"separator\"></div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorBlockEdit"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"block-edit-inner form-container\">\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["editorBlockEditSidebar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"sidebar-item-inner\">\n    <div class=\"separator\"></div>\n    <button class=\"editor-block-edit-sidebar-save action-primary\">\n        <span class=\"editor-block-edit-sidebar-save-inner\">\n            "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":10,"column":49},"end":{"line":10,"column":65}}}))
    + "\n        </span>\n    </button>\n    <button class=\"editor-block-edit-sidebar-cancel action-secondary\">\n        <span class=\"editor-block-edit-sidebar-cancel-inner\">\n            "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":15,"column":50},"end":{"line":15,"column":68}}}))
    + "\n        </span>\n    </button>\n    <div class=\"separator\"></div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorComponentEdit"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"component-edit-inner form-container\">\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["editorComponentEditSidebar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"sidebar-item-inner\">\n        <div class=\"separator\"></div>\n        <button class=\"editor-component-edit-sidebar-save action-primary\">\n            <span class=\"editor-component-edit-sidebar-save-inner\">\n                "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":10,"column":32}}}))
    + "\n            </span>\n        </button>\n        <button class=\"editor-component-edit-sidebar-cancel action-secondary\">\n            <span class=\"editor-component-edit-sidebar-cancel-inner\">\n                "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":15,"column":16},"end":{"line":15,"column":34}}}))
    + "\n            </span>\n        </button>\n        <div class=\"separator\"></div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorConfigEdit"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"config-edit-inner form-container\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorConfigEditSidebar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"sidebar-item-inner\">\n  <div class=\"separator\"></div>\n  <button class=\"editor-config-edit-sidebar-save action-primary\">\n    <span class=\"editor-config-edit-sidebar-save-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":4,"column":56},"end":{"line":4,"column":72}}}))
    + "</span>\n  </button>\n  <button class=\"editor-config-edit-sidebar-cancel action-secondary\">\n    <span class=\"editor-config-edit-sidebar-cancel-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":7,"column":58},"end":{"line":7,"column":76}}}))
    + "</span>\n  </button>\n  <div class=\"separator\"></div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorMenu"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"editor-menu-inner clearfix\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorMenuItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <i class=\"fa fa-folder-o\"></i>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <i class=\"fa fa-file-o\"></i>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":21}}}) : helper)))
    + "\" data-parentId=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_parentId") || (depth0 != null ? lookupProperty(depth0,"_parentId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_parentId","hash":{},"data":data,"loc":{"start":{"line":1,"column":38},"end":{"line":1,"column":51}}}) : helper)))
    + "\" class=\"editor-menu-item-inner clearfix no-select\">\n  <div class=\"editor-menu-item-settings handle\">\n    <div class=\"editor-menu-item-settings-inner\">\n      <button class=\"open-context-contentObject\"><i class=\"fa fa-cog fa-fw\"></i></button>\n      <button class=\"contentObject-delete editor-delete-contentobject-element\" title=\""
    + alias4((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.clicktodelete",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":5,"column":86},"end":{"line":5,"column":112}}}))
    + "\"><i class=\"fa fa-trash-o\"></i></button>\n    </div>\n  </div>\n  <div class=\"editor-menu-item-content\">\n    <div class=\"editor-menu-item-icon "
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":9,"column":38},"end":{"line":9,"column":47}}}) : helper)))
    + "\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"menu",{"name":"ifValueEquals","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":12,"column":24}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"page",{"name":"ifValueEquals","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":15,"column":24}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"editor-menu-item-title\">\n      <h3 class=\"editor-menu-item-title-text\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":18,"column":46},"end":{"line":18,"column":57}}}) : helper))) != null ? stack1 : "")
    + "</h3>\n    </div>\n  </div>\n</div>\n\n<div class=\"editor-menu-item-pin\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorMenuLayer"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"editor-menu-layer-controls clearfix\">\n  <div class=\"editor-menu-layer-actions add-control\">\n    <button class=\"editor-menu-layer-add-page btn primary\"><i class=\"fa fa-file\"></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.addpage",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":3,"column":85},"end":{"line":3,"column":104}}}))
    + "</button>\n    <button class=\"editor-menu-layer-add-menu btn primary-hollow\"><i class=\"fa fa-folder\"></i> "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.addsubmenu",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":4,"column":95},"end":{"line":4,"column":117}}}))
    + "</button>\n  </div>\n  <div class=\"editor-menu-layer-actions paste-zone paste-zone-page\">\n    <button class=\"editor-menu-layer-paste btn secondary\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.paste",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":7,"column":58},"end":{"line":7,"column":75}}}))
    + "</button>\n    <button class=\"editor-menu-layer-paste-cancel btn secondary-hollow\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":8,"column":72},"end":{"line":8,"column":90}}}))
    + "</button>\n  </div>\n</div>\n\n<div class=\"editor-menu-layer-inner\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorMenuSidebar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"part_editorCommon"),depth0,{"name":"part_editorCommon","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["editorPage"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"displayTitle") || (depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayTitle","hash":{},"data":data,"loc":{"start":{"line":5,"column":26},"end":{"line":5,"column":42}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":50},"end":{"line":5,"column":59}}}) : helper)));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"page-inner\">\n  <div class=\"page-detail\">\n    <h4 class=\"page-name title\">\n      <button class=\"page-edit-button\" title=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.clicktoedit",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":4,"column":46},"end":{"line":4,"column":69}}}))
    + "\"><i class=\"fa fa-cog fa-fw\"></i></button>\n      "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":66}}})) != null ? stack1 : "")
    + "\n    </h4>\n    <div class=\"page-body\">"
    + alias3(((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":7,"column":27},"end":{"line":7,"column":35}}}) : helper)))
    + "</div>\n  </div>\n\n  <div class=\"page-articles\"></div>\n\n  <div class=\"add-control\">\n    <button class=\"btn add-article\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.addarticle",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":13,"column":36},"end":{"line":13,"column":58}}}))
    + "</button>\n  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorPageArticle"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":7,"column":18},"end":{"line":7,"column":27}}}) : helper)))
    + "-body\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":7,"column":34},"end":{"line":7,"column":44}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"article-inner\">\n  <div class=\"article-detail no-select\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"part_editorItemSidebar"),depth0,{"name":"part_editorItemSidebar","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"article-content\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":8,"column":11}}})) != null ? stack1 : "")
    + "\n    <div class=\"article-blocks\"></div>\n    <div class=\"add-control\">\n      <button class=\"btn add-block\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(alias1,"app.addblock",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":12,"column":36},"end":{"line":12,"column":56}}}))
    + "</button>\n    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["editorPageBlock"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":5,"column":16},"end":{"line":5,"column":25}}}) : helper)))
    + "-body\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":5,"column":32},"end":{"line":5,"column":42}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"add-control\">\n      <button class=\"btn add-component\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.addcomponent",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":11,"column":40},"end":{"line":11,"column":64}}}))
    + "</button>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"part_editorItemSidebar"),depth0,{"name":"part_editorItemSidebar","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<div class=\"block-inner\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":6,"column":9}}})) != null ? stack1 : "")
    + "  <div class=\"page-components clearfix\"></div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"layoutOptions") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":13,"column":9}}})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["editorPageComponent"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"component-type\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_componentTypeDisplayName") || (depth0 != null ? lookupProperty(depth0,"_componentTypeDisplayName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_componentTypeDisplayName","hash":{},"data":data,"loc":{"start":{"line":6,"column":34},"end":{"line":6,"column":63}}}) : helper)))
    + "</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"displayTitle") || (depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayTitle","hash":{},"data":data,"loc":{"start":{"line":8,"column":52},"end":{"line":8,"column":68}}}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":8,"column":76},"end":{"line":8,"column":85}}}) : helper)));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"part_editorItemSidebar"),depth0,{"name":"part_editorItemSidebar","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<div class=\"component-inner\">\n  <div class=\"component-detail no-select\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_componentTypeDisplayName") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":7,"column":11}}})) != null ? stack1 : "")
    + "    <h4 class=\"component-title\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":8,"column":32},"end":{"line":8,"column":92}}})) != null ? stack1 : "")
    + "</h4>\n    <div class=\"component-body\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":9,"column":32},"end":{"line":9,"column":42}}}) : helper))) != null ? stack1 : "")
    + "</div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["editorPageComponentList"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"editor-component-list-sidebar\">\n    <div class=\"editor-component-list-sidebar-inner\">\n\n        <div class=\"editor-component-list-sidebar-exit\">\n          <i class=\"fa fa-times\"></i>\n        </div>\n\n        <div class=\"editor-component-list-sidebar-header\">\n          <div class=\"editor-component-list-sidebar-title\">\n            <h2 class=\"editor-component-list-sidebar-title-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.addcomponent",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":10,"column":66},"end":{"line":10,"column":90}}}))
    + "</h2>\n          </div>\n          <div class=\"editor-component-list-sidebar-body\">\n              <div class=\"editor-component-list-sidebar-body-inner\">\n                "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.pleaseselectcomponent",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":14,"column":16},"end":{"line":14,"column":49}}}))
    + "\n              </div>\n          </div>\n\n          <div class=\"editor-component-list-sidebar-search\">\n            <div class=\"editor-component-list-sidebar-search-icon\">\n              <i class=\"fa fa-search\"></i>\n            </div>\n            <div class=\"editor-component-list-sidebar-search-field\">\n              <input type=\"search\" placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.typetofiltercomponents",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":23,"column":48},"end":{"line":23,"column":82}}}))
    + "\"/>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"editor-component-list-sidebar-list\"></div>\n    </div>\n</div>\n\n<div class=\"click-capture\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorPageComponentListItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":58},"end":{"line":2,"column":66}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"editor-component-list-item-details\">\n      <span class=\"editor-component-list-item-display-name\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":60},"end":{"line":5,"column":109}}})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"displayName") || (depth0 != null ? lookupProperty(depth0,"displayName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"displayName","hash":{},"data":data,"loc":{"start":{"line":5,"column":110},"end":{"line":5,"column":125}}}) : helper)))
    + "</span>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":8,"column":13}}})) != null ? stack1 : "")
    + "    </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "title=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":5,"column":86},"end":{"line":5,"column":101}}}) : helper)))
    + "\"";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <br/><span class=\"editor-component-list-item-description\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":7,"column":66},"end":{"line":7,"column":81}}}) : helper)))
    + "</span>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <a class=\"btn primary editor-component-list-item-overlay-button editor-component-list-item-overlay-left\" data-position=\"left\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.addtoleft",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":15,"column":132},"end":{"line":15,"column":153}}}))
    + "</a>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <a class=\"btn primary editor-component-list-item-overlay-button editor-component-list-item-overlay-add\" data-position=\"full\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.addfullwidth",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":18,"column":131},"end":{"line":18,"column":155}}}))
    + "</a>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <a class=\"btn primary editor-component-list-item-overlay-button editor-component-list-item-overlay-right\" data-position=\"right\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.addtoright",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":21,"column":134},"end":{"line":21,"column":156}}}))
    + "</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"editor-component-list-item-inner\">\n  <div class=\"editor-component-list-item-icon "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":46},"end":{"line":2,"column":73}}})) != null ? stack1 : "")
    + "\"></div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayName") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":10,"column":9}}})) != null ? stack1 : "")
    + "</div>\n<div class=\"editor-component-list-item-overlay display-none\">\n  <div class=\"editor-component-list-item-overlay-inner clearfix\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"availablePositions") : depth0)) != null ? lookupProperty(stack1,"left") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":16,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"availablePositions") : depth0)) != null ? lookupProperty(stack1,"full") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":4},"end":{"line":19,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"availablePositions") : depth0)) != null ? lookupProperty(stack1,"right") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":22,"column":11}}})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorPageComponentPasteZone"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"paste-zone-inner\">\n  <a href=\"#\" class=\"editor-paste-zone-paste paste-component btn secondary\" data-paste-layout=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"_pasteZoneLayout") || (depth0 != null ? lookupProperty(depth0,"_pasteZoneLayout") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"_pasteZoneLayout","hash":{},"data":data,"loc":{"start":{"line":2,"column":95},"end":{"line":2,"column":115}}}) : helper)))
    + "\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.paste",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":2,"column":117},"end":{"line":2,"column":134}}}))
    + "</a>\n  <a href=\"#\" class=\"editor-paste-zone-cancel paste-cancel btn secondary-hollow\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":3,"column":81},"end":{"line":3,"column":99}}}))
    + "</a>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorPageEdit"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"page-edit-inner form-container\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorPageEditSidebar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"sidebar-item-inner\">\n  <div class=\"separator\"></div>\n  <button class=\"editor-page-edit-sidebar-save action-primary\">\n    <span class=\"editor-page-edit-sidebar-save-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":4,"column":54},"end":{"line":4,"column":70}}}))
    + "</span>\n  </button>\n  <button class=\"editor-page-edit-sidebar-cancel action-secondary\">\n    <span class=\"editor-page-edit-sidebar-cancel-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":7,"column":56},"end":{"line":7,"column":74}}}))
    + "</span>\n  </button>\n  <div class=\"separator\"></div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorPageSidebar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"part_editorCommon"),depth0,{"name":"part_editorCommon","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["editorCourseEdit"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"course-edit-inner form-container\">\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["editorCourseEditSidebar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"sidebar-item-inner\">\n        <div class=\"separator\"></div>\n        <button class=\"editor-project-edit-sidebar-save action-primary\">\n            <span class=\"editor-project-edit-sidebar-save-inner\">\n                "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":10,"column":32}}}))
    + "\n            </span>\n        </button>\n        <button class=\"editor-project-edit-sidebar-cancel action-secondary\">\n            <span class=\"editor-project-edit-sidebar-cancel-inner\">\n                "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":15,"column":16},"end":{"line":15,"column":34}}}))
    + "\n            </span>\n        </button>\n        <div class=\"separator\" />\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorExtensionsEdit"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"enabledExtensions") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":6},"end":{"line":37,"column":15}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"extension-management-plugin tb-row tb-row-"
    + alias3((lookupProperty(helpers,"odd")||(depth0 && lookupProperty(depth0,"odd"))||alias2).call(alias1,(data && lookupProperty(data,"index")),{"name":"odd","hash":{},"data":data,"loc":{"start":{"line":22,"column":62},"end":{"line":22,"column":76}}}))
    + "\">\n          <div class=\"extension-management-plugin-inner col-row\">\n            <div class=\"extension-management-plugin-title col-20\">\n              <h4 class=\"extension-management-plugin-title-inner tb-col-inner\">"
    + alias3(((helper = (helper = lookupProperty(helpers,"displayName") || (depth0 != null ? lookupProperty(depth0,"displayName") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data,"loc":{"start":{"line":25,"column":79},"end":{"line":25,"column":94}}}) : helper)))
    + "</h4>\n            </div>\n            <div class=\"extension-management-plugin-description col-60\">\n              <div class=\"extension-management-plugin-description-inner tb-col-inner\">"
    + alias3(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":28,"column":86},"end":{"line":28,"column":101}}}) : helper)))
    + "</div>\n            </div>\n            <div class=\"extension-management-plugin-remove col-20 col-centered\">\n              <div class=\"extension-management-plugin-remove-inner tb-col-inner\">\n                <button class=\"btn alert remove-extension\" data-displayName=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"displayName") || (depth0 != null ? lookupProperty(depth0,"displayName") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data,"loc":{"start":{"line":32,"column":77},"end":{"line":32,"column":92}}}) : helper)))
    + "\" data-id=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":32,"column":103},"end":{"line":32,"column":110}}}) : helper)))
    + "\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.remove",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":32,"column":112},"end":{"line":32,"column":130}}}))
    + "</button>\n              </div>\n            </div>\n          </div>\n        </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"tb-row\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.noextensionsenabled",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":39,"column":26},"end":{"line":39,"column":57}}}))
    + "</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"availableExtensions") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":6},"end":{"line":80,"column":15}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"extension-management-plugin tb-row tb-row-"
    + alias3((lookupProperty(helpers,"odd")||(depth0 && lookupProperty(depth0,"odd"))||alias2).call(alias1,(data && lookupProperty(data,"index")),{"name":"odd","hash":{},"data":data,"loc":{"start":{"line":62,"column":62},"end":{"line":62,"column":76}}}))
    + "\">\n            <div class=\"extension-management-plugin-inner col-row\">\n                <div class=\"extension-management-plugin-title col-20\">\n                    <h4 class=\"extension-management-plugin-title-inner tb-col-inner\">"
    + alias3(((helper = (helper = lookupProperty(helpers,"displayName") || (depth0 != null ? lookupProperty(depth0,"displayName") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data,"loc":{"start":{"line":65,"column":85},"end":{"line":65,"column":100}}}) : helper)))
    + "</h4>\n                </div>\n\n                <div class=\"extension-management-plugin-description col-60\">\n                    <div class=\"extension-management-plugin-description-inner tb-col-inner\">"
    + alias3(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":69,"column":92},"end":{"line":69,"column":107}}}) : helper)))
    + "</div>\n                </div>\n\n                <div class=\"extension-management-plugin-remove col-20 col-centered\">\n                    <div class=\"extension-management-plugin-remove-inner tb-col-inner\">\n                        <button class=\"btn secondary add-extension\" data-displayName=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"displayName") || (depth0 != null ? lookupProperty(depth0,"displayName") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data,"loc":{"start":{"line":74,"column":86},"end":{"line":74,"column":101}}}) : helper)))
    + "\" data-id=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":74,"column":112},"end":{"line":74,"column":119}}}) : helper)))
    + "\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.add",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":74,"column":121},"end":{"line":74,"column":136}}}))
    + "</button>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"tb-row\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.noextensionsavailable",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":82,"column":24},"end":{"line":82,"column":57}}}))
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"extension-management-inner\">\n  <div class=\"extension-management-enabled-extensions-title tb-row tb-title\">\n    <h2>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.enabledextensions",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":38}}}))
    + "</h2>\n  </div>\n\n  <div class=\"extension-management-heading col-row tb-row tb-heading\">\n    <div class=\"extension-management-heading extension-management-heading-title col-20\">\n      <h4 class=\"extension-management-heading-title-inner tb-col-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.extension",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":8,"column":72},"end":{"line":8,"column":93}}}))
    + "</h4>\n    </div>\n    <div class=\"extension-management-heading extension-management-heading-description col-60\">\n      <h4 class=\"extension-management-heading-description-inner tb-col-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.description",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":11,"column":78},"end":{"line":11,"column":101}}}))
    + "</h4>\n    </div>\n    <div class=\"extension-management-heading extension-management-heading-options col-20 col-centered\">\n      <h4 class=\"pluginType-heading-version-inner tb-col-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.options",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":14,"column":64},"end":{"line":14,"column":83}}}))
    + "</h4>\n    </div>\n  </div>\n\n  <div class=\"extension-management-plugins clearfix grid-layout\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"enabledExtensions") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":40,"column":11}}})) != null ? stack1 : "")
    + "  </div>\n\n  <div class=\"extension-management-enabled-extensions-title tb-row tb-title\">\n    <h2>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.availableextensions",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":44,"column":8},"end":{"line":44,"column":40}}}))
    + "</h2>\n  </div>\n  <div class=\"extension-management-heading tb-row col-row tb-heading\">\n    <div class=\"extension-management-heading extension-management-heading-title col-20\">\n      <h4 class=\"extension-management-heading-title-inner tb-col-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.extension",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":48,"column":72},"end":{"line":48,"column":93}}}))
    + "</h4>\n    </div>\n    <div class=\"extension-management-heading extension-management-heading-description col-60\">\n      <h4 class=\"extension-management-heading-description-inner tb-col-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.description",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":51,"column":78},"end":{"line":51,"column":101}}}))
    + "</h4>\n    </div>\n    <div class=\"extension-management-heading extension-management-heading-options col-20 col-centered\">\n      <h4 class=\"pluginType-heading-version-inner tb-col-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.options",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":54,"column":64},"end":{"line":54,"column":83}}}))
    + "</h4>\n    </div>\n  </div>\n\n  <div class=\"extension-management-plugins clearfix grid-layout\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"availableExtensions") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":59,"column":4},"end":{"line":83,"column":11}}})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorExtensionsEditSidebar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"sidebar-item-inner\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editor"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"editor-inner clearfix\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorPasteZone"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"paste-zone-inner\">\n  <a href=\"#\" class=\"editor-paste-zone-paste paste-"
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":2,"column":51},"end":{"line":2,"column":60}}}) : helper)))
    + " btn action-primary\" data-sort-order=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_pasteZoneSortOrder") || (depth0 != null ? lookupProperty(depth0,"_pasteZoneSortOrder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_pasteZoneSortOrder","hash":{},"data":data,"loc":{"start":{"line":2,"column":98},"end":{"line":2,"column":121}}}) : helper)))
    + "\">"
    + alias4((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.paste",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":2,"column":123},"end":{"line":2,"column":140}}}))
    + "</a>\n  <a href=\"#\" class=\"editor-paste-zone-cancel paste-cancel btn action-secondary\">"
    + alias4((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":3,"column":81},"end":{"line":3,"column":99}}}))
    + "</a>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorMenuSettingsEdit"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"menu-settings-list clearfix\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorMenuSettingsEditSidebar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"sidebar-item-inner\">\n  <button class=\"editor-menusettings-edit-sidebar-save action-primary\">\n    <span class=\"editor-menusettings-edit-sidebar-save-inner\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.save",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":3,"column":62},"end":{"line":3,"column":78}}}))
    + "</span>\n  </button>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorMenuSettingsItem"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"menu-settings-list-item-inner\">\n  <div class=\"display-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"displayName") || (depth0 != null ? lookupProperty(depth0,"displayName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data,"loc":{"start":{"line":2,"column":28},"end":{"line":2,"column":43}}}) : helper)))
    + "</div>\n  <div class=\"description\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":3,"column":27},"end":{"line":3,"column":42}}}) : helper)))
    + "</div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorPresetEdit"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"preset\" data-name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"displayName") : stack1), depth0))
    + "\">\n        <div class=\"name\">\n          <div class=\"label\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"displayName") : stack1), depth0))
    + "</div>\n          <button class=\"button edit btn secondary\">\n            "
    + alias2((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias4).call(alias3,"app.themepresetedit",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":11,"column":39}}}))
    + "\n          </button>\n          <button class=\"button delete btn alert\">\n            "
    + alias2((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias4).call(alias3,"app.themepresetdelete",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":14,"column":41}}}))
    + "\n          </button>\n        </div>\n        <div class=\"nameEdit\">\n          <div class=\"preset-error display-none\"></div>\n          <input type=\"text\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"displayName") : stack1), depth0))
    + "\">\n          <button class=\"button save btn secondary\">\n            "
    + alias2((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias4).call(alias3,"app.themepresetsave",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":21,"column":12},"end":{"line":21,"column":39}}}))
    + "\n          </button>\n          <button class=\"button cancel btn primary-hollow\">\n            "
    + alias2((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias4).call(alias3,"app.themepresetcancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":24,"column":12},"end":{"line":24,"column":41}}}))
    + "\n          </button>\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"presetEdit-inner\">\n  <button class=\"button close\"><i class=\"fa fa-times\"></i></button>\n  <div class=\"title\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.presetedittitle",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":3,"column":21},"end":{"line":3,"column":48}}}))
    + "</div>\n  <div class=\"description\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.preseteditdesc",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":4,"column":27},"end":{"line":4,"column":53}}}))
    + "</div>\n  <div class=\"presets\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"presets") : depth0)) != null ? lookupProperty(stack1,"models") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":28,"column":13}}})) != null ? stack1 : "")
    + "  </div>\n</div>\n<div class=\"screenlock\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorTheming"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"theming-inner\">\n  <div class=\"error display-none\">\n  </div>\n  <div class=\"header\">\n    <div class=\"inner\">\n      <div class=\"title\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.choosethemetitle",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":7,"column":25},"end":{"line":7,"column":53}}}))
    + "</div>\n      <div class=\"description editable-theme\">"
    + ((stack1 = (lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.choosethemedesc",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":8,"column":46},"end":{"line":8,"column":75}}})) != null ? stack1 : "")
    + "</div>\n      <div class=\"empty-message description\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.themenoteditablebody",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":9,"column":45},"end":{"line":9,"column":77}}}))
    + "</div>\n      <div class=\"theme-selector\">\n        <div class=\"theme tile\">\n          <label>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.themeselectlabel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":12,"column":17},"end":{"line":12,"column":45}}}))
    + "</label>\n          <select id=\"theme\" disabled=\"true\">\n            <option value=\"\" disabled selected>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.themeselectinstr",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":14,"column":47},"end":{"line":14,"column":75}}}))
    + "</option>\n          </select>\n        </div>\n        <div class=\"preset tile editable-theme\">\n          <label>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.presetselectlabel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":18,"column":17},"end":{"line":18,"column":46}}}))
    + "</label>\n          <select id=\"preset\" disabled=\"true\">\n            <option value=\"\" disabled selected>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.presetselectinstr",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":20,"column":47},"end":{"line":20,"column":76}}}))
    + "</option>\n          </select>\n        </div>\n        <button class=\"edit btn secondary editable-theme\">\n          "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.presetedit",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":24,"column":10},"end":{"line":24,"column":32}}}))
    + "\n        </button>\n      </div>\n      <div class=\"tip editable-theme\">"
    + ((stack1 = (lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.themepresettip",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":27,"column":38},"end":{"line":27,"column":66}}})) != null ? stack1 : "")
    + "</div>\n    </div>\n  </div>\n  <div class=\"theme-customiser\">\n    <div class=\"form-container\">\n    </div>\n  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["editorThemingSidebar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"separator\"></div>\n<div class=\"sidebar-item-inner\">\n  <button class=\"editor-theming-sidebar-save action-primary\">\n    <span>\n      "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":22}}}))
    + "\n    </span>\n  </button>\n  <button class=\"editor-theming-sidebar-savePreset short secondary-hollow action-btn\">\n    <span>\n      "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.savepreset",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":28}}}))
    + "\n    </span>\n  </button>\n  <button class=\"editor-theming-sidebar-reset short action-secondary\">\n    <span>\n      "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.restorepreset",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":15,"column":31}}}))
    + "\n    </span>\n  </button>\n  <button class=\"editor-theming-sidebar-cancel action-secondary\">\n    <span>\n      "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":20,"column":6},"end":{"line":20,"column":24}}}))
    + "\n    </span>\n  </button>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["typeAhead"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"typeahead-filter\">\n  	<input id=\"typeahead-input\" class=\"typeahead\" type=\"text\" placeholder=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"placeholderText") || (depth0 != null ? lookupProperty(depth0,"placeholderText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"placeholderText","hash":{},"data":data,"loc":{"start":{"line":2,"column":74},"end":{"line":2,"column":93}}}) : helper)))
    + "\">\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["frameworkImport"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"asset-management-new-asset-file\">\n          "
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.importframeworkfileuploaded",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":14,"column":10},"end":{"line":14,"column":49}}}))
    + "\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <input type=\"file\" class=\"asset-file\" name=\"file\">\n        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"maxUploadSize") || (depth0 != null ? lookupProperty(depth0,"maxUploadSize") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"maxUploadSize","hash":{},"data":data,"loc":{"start":{"line":18,"column":8},"end":{"line":18,"column":25}}}) : helper)))
    + "\n        <div class=\"progress-container\">\n          <div class=\"progress-bar\">\n            <div class=\"progress-percent\">0%</div>\n          </div>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"import_upload\" class=\"inner\">\n  <form class=\"frameworkImport forms\" action=\"importsourcecheck\" method=\"post\" autocomplete=\"off\">\n    <div class=\"form-group\">\n      <div class=\"field field-file\">\n        <label for=\"file\">\n          "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.assetfile",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":6,"column":10},"end":{"line":6,"column":31}}}))
    + " <span class=\"req\">*</span>\n          <span class=\"error\"></span>\n        </label>\n        <div class=\"field-help\">\n          "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.importframeworkinstruction",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":10,"column":10},"end":{"line":10,"column":48}}}))
    + "\n        </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"path") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":24,"column":15}}})) != null ? stack1 : "")
    + "      </div>\n      <div class=\"field field-assets\">\n        <label for=\"tags\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.importassetfolderstitle",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":27,"column":26},"end":{"line":27,"column":61}}}))
    + "</label>\n        <div class=\"field-help\">\n          "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.importassetfoldersinstruction",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":29,"column":10},"end":{"line":29,"column":51}}}))
    + "\n        </div>\n        <div>\n          <input type=\"text\" autocomplete=\"off\" class=\"width-30\" id=\"formAssetFolders\" name=\"formAssetFolders\" placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.importassetfoldersplaceholder",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":32,"column":124},"end":{"line":32,"column":165}}}))
    + "\" value=\"\" />\n        </div>\n      </div>\n      <div class=\"field field-tags\">\n        <label for=\"tags\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.tags",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":36,"column":26},"end":{"line":36,"column":42}}}))
    + "</label>\n        <input type=\"text\" autocomplete=\"off\" class=\"width-30\" id=\"tags_control\" name=\"tags_control\" value=\""
    + alias3((lookupProperty(helpers,"pickCSV")||(depth0 && lookupProperty(depth0,"pickCSV"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"tags") : depth0),"title",{"name":"pickCSV","hash":{},"data":data,"loc":{"start":{"line":37,"column":108},"end":{"line":37,"column":132}}}))
    + "\" />\n      </div>\n      <input type=\"hidden\" name=\"tags\" id=\"tags\" />\n    </div>\n  </form>\n</div>\n\n<div id=\"import_details\" class=\"display-none\">\n  <form class=\"frameworkImportDetails forms\" action=\"importsource\" method=\"post\" autocomplete=\"off\">\n    <div class=\"inner framework-versions display-none\"></div>\n    <div class=\"inner import-summary\">\n      <div class=\"title\"></div>\n      <div class=\"description\"></div>\n    </div>\n    <div class=\"inner plugin-list display-none\">\n      <div class=\"red key-field display-none\"><span class=\"key\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.pluginredlabel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":52,"column":64},"end":{"line":52,"column":90}}}))
    + "</span> - "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.pluginredkey",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":52,"column":100},"end":{"line":52,"column":124}}}))
    + "</div>\n      <div class=\"amber key-field display-none\"><span class=\"key\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.pluginamberlabel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":53,"column":66},"end":{"line":53,"column":94}}}))
    + "</span> - "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.pluginamberkey",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":53,"column":104},"end":{"line":53,"column":130}}}))
    + "</div>\n      <div class=\"green-update key-field display-none\"><span class=\"key\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.plugingreenupdatelabel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":54,"column":73},"end":{"line":54,"column":107}}}))
    + "</span> - "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.plugingreenupdatekey",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":54,"column":117},"end":{"line":54,"column":149}}}))
    + "</div>\n      <div class=\"green-install key-field display-none\"><span class=\"key\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.plugingreeninstalllabel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":55,"column":74},"end":{"line":55,"column":109}}}))
    + "</span> - "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.plugingreeninstallkey",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":55,"column":119},"end":{"line":55,"column":152}}}))
    + "</div>\n    </div>\n  </form>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["frameworkImportPluginHeadingView"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"frameworkImportPlugin-headings tb-heading col-row tb-row\">\n\n  <div class=\"frameworkImportPlugin-heading col-40\">\n    <h4 class=\"tb-col-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.name",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":4,"column":29},"end":{"line":4,"column":45}}}))
    + "</h4>\n  </div>\n\n  <div class=\"frameworkImportPlugin-heading col-20 col-centered\">\n    <h4 class=\"tb-col-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.importversion",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":8,"column":29},"end":{"line":8,"column":54}}}))
    + "</h4>\n  </div>\n\n  <div class=\"frameworkImportPlugin-heading col-20 col-centered\">\n    <h4 class=\"tb-col-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.atversion",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":12,"column":29},"end":{"line":12,"column":50}}}))
    + "</h4>\n  </div>\n\n  <div class=\"frameworkImportPlugin-heading col-20 col-centered\">\n    <h4 class=\"tb-col-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.action",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":16,"column":29},"end":{"line":16,"column":47}}}))
    + "</h4>\n  </div>\n\n</div>\n<ul class=\"frameworkImportPlugin-plugins clearfix grid-layout\"></ul>";
},"useData":true});

this["Handlebars"]["templates"]["frameworkImportPluginView"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"frameworkImport-inner\">\n  <div class=\"frameworkImport-description col-row tb-row "
    + alias4(((helper = (helper = lookupProperty(helpers,"category") || (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data,"loc":{"start":{"line":2,"column":57},"end":{"line":2,"column":69}}}) : helper)))
    + "\">\n    <div class=\"col-40\">\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"displayName") || (depth0 != null ? lookupProperty(depth0,"displayName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":21}}}) : helper)))
    + "\n    </div>\n    <div class=\"col-20 col-centered import-version\">\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"importVersion") || (depth0 != null ? lookupProperty(depth0,"importVersion") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"importVersion","hash":{},"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":23}}}) : helper)))
    + "\n    </div>\n    <div class=\"col-20 col-centered at-version\">\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"authoringToolVersion") || (depth0 != null ? lookupProperty(depth0,"authoringToolVersion") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"authoringToolVersion","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":30}}}) : helper)))
    + "\n    </div>\n    <div class=\"col-20 col-centered status\">\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":13,"column":16}}}) : helper)))
    + "\n    </div>\n  </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["frameworkImportSidebar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"separator\"></div>\n<div class=\"sidebar-item-inner\">\n  <button type=\"submit\" class=\"action-primary framework-import-sidebar-save-button show-details\">\n    <span>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.importcourse",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":4,"column":10},"end":{"line":4,"column":34}}}))
    + "</span>\n  </button>\n  <button type=\"button\" class=\"cancel action-secondary\">\n    <span>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":7,"column":10},"end":{"line":7,"column":28}}}))
    + "</span>\n  </button>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["globalMenu"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"global-menu-inner\">\n</div>\n<div class=\"global-menu-submenu\">\n    <div class=\"global-menu-submenu-inner\">\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["globalMenuItem"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\"#\" class=\"global-menu-item-inner\">\n    <div class=\"global-menu-item-icon\">\n        <span class=\"icon\"></span>\n    </div>\n    <div class=\"global-menu-item-text\">\n        <div class=\"global-menu-item-text-inner\"><i class=\"fa "
    + alias4(((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":6,"column":62},"end":{"line":6,"column":70}}}) : helper)))
    + " fa-fw\"></i>&nbsp;\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":7,"column":20}}}) : helper)))
    + "\n        </div>\n    </div>\n</a>\n";
},"useData":true});

this["Handlebars"]["templates"]["locationTitle"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"breadcrumbs\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"breadcrumbs") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":19,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"item\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(data && lookupProperty(data,"last")),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":6,"column":10},"end":{"line":14,"column":17}}})) != null ? stack1 : "")
    + "        </div>\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(data && lookupProperty(data,"last")),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":18,"column":19}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":7,"column":21}}}) : helper)))
    + "\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"url") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":13,"column":19}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":10,"column":23},"end":{"line":10,"column":30}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":10,"column":32},"end":{"line":10,"column":41}}}) : helper)))
    + "</a>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":14},"end":{"line":12,"column":23}}}) : helper)))
    + "\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "          <div class=\"separator unselectable\">&gt;</div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"titles\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"course") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":26,"column":13}}})) != null ? stack1 : "")
    + "      <div class=\"title\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":27,"column":25},"end":{"line":27,"column":34}}}) : helper)))
    + "</div>\n    </div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"course\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"course") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"location-title-inner\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"breadcrumbs") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":21,"column":9}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":2},"end":{"line":29,"column":9}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["modal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"modal-popup-title\">\n      <h2 class=\"modal-popup-title-inner\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":42},"end":{"line":5,"column":51}}}) : helper)))
    + "</h2>\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <button href=\"#\" class=\"modal-popup-done\">\n        <i class=\"fa fa-check\"></i>"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.done",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":11,"column":35},"end":{"line":11,"column":51}}}))
    + "\n      </button>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <button href=\"#\" class=\"modal-popup-close\">\n        <i class=\"fa fa-times\"></i>"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":16,"column":35},"end":{"line":16,"column":53}}}))
    + "\n      </button>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"modal-popup-body\">\n      <div class=\"modal-popup-body-inner\">\n        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data,"loc":{"start":{"line":25,"column":8},"end":{"line":25,"column":16}}}) : helper)))
    + "\n      </div>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"modal-popup\">\n  <div class=\"modal-popup-toolbar clearfix\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":7,"column":11}}})) != null ? stack1 : "")
    + "    <div class=\"model-popup-toolbar-buttons\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_shouldShowDoneButton") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":13,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_shouldShowCancelButton") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":18,"column":13}}})) != null ? stack1 : "")
    + "    </div>\n  </div>\n  <div class=\"modal-popup-inner\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":4},"end":{"line":28,"column":11}}})) != null ? stack1 : "")
    + "    <div class=\"modal-popup-content\">\n      <div class=\"modal-popup-content-inner\">\n      </div>\n    </div>\n  </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["navigation"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <a href=\"#\" class=\"navigation-item navigation-global-menu\" data-event=\"globalMenu:toggle\">\n      <div id=\"global-menu-icon\">\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n    </a>\n    <div href=\"#\" class=\"navigation-item navigation-product-name\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.productname",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":13,"column":66},"end":{"line":13,"column":89}}}))
    + "</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <a href=\"#\" class=\"navigation-item navigation-help\" data-event=\"help\">\n      <span>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.help",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":19,"column":28}}}))
    + "</span>\n    </a>\n    <a href=\"#\" class=\"navigation-item navigation-profile\" data-event=\"user:profile\">\n      "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.loggedinas",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":22,"column":6},"end":{"line":22,"column":28}}}))
    + ": <span>"
    + alias3(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":22,"column":36},"end":{"line":22,"column":45}}}) : helper)))
    + "</span>\n    </a>\n    <a href=\"#\" class=\"navigation-item navigation-user-logout btn white-hollow\" data-event=\"user:logout\">\n      <span>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.logout",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":25,"column":12},"end":{"line":25,"column":30}}}))
    + "</span>\n    </a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"navigation-bg\"></div>\n<div class=\"navigation-inner clearfix\">\n  <div class=\"navigation-left\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isAuthenticated") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":14,"column":11}}})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"navigation-right\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isAuthenticated") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":4},"end":{"line":27,"column":11}}})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["options"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"options-inner\">\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["optionsGroup"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"options-group options-group-"
    + alias4(((helper = (helper = lookupProperty(helpers,"group") || (depth0 != null ? lookupProperty(depth0,"group") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"group","hash":{},"data":data,"loc":{"start":{"line":1,"column":40},"end":{"line":1,"column":49}}}) : helper)))
    + "\" data-group=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"group") || (depth0 != null ? lookupProperty(depth0,"group") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"group","hash":{},"data":data,"loc":{"start":{"line":1,"column":63},"end":{"line":1,"column":72}}}) : helper)))
    + "\">\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["optionsItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<i class=\"fa fa-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":4,"column":17},"end":{"line":4,"column":25}}}) : helper)))
    + "\"></i>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"option-value-item\">\n<button data-callback=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"callbackEvent") || (depth0 != null ? lookupProperty(depth0,"callbackEvent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"callbackEvent","hash":{},"data":data,"loc":{"start":{"line":2,"column":23},"end":{"line":2,"column":40}}}) : helper)))
    + "\" data-group=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"group") || (depth0 != null ? lookupProperty(depth0,"group") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"group","hash":{},"data":data,"loc":{"start":{"line":2,"column":54},"end":{"line":2,"column":63}}}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":2,"column":72},"end":{"line":2,"column":81}}}) : helper)))
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"icon") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":5,"column":8}}})) != null ? stack1 : "")
    + "	<div class=\"option-value-title\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":6,"column":33},"end":{"line":6,"column":44}}}) : helper))) != null ? stack1 : "")
    + "</div>\n</button>\n</div\n";
},"useData":true});

this["Handlebars"]["templates"]["pluginManagement"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"pluginType-heading pluginType-heading-addedDefault col-10 col-centered\">\n        <h4 class=\"pluginType-heading-addedDefault tb-col-inner\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.addedDefault",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":22,"column":65},"end":{"line":22,"column":89}}}))
    + "</h4>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"pluginManagement-inner inner\">\n  <div class=\"pluginType-headings tb-heading col-row tb-row\">\n\n    <div class=\"pluginType-heading pluginType-heading-title col-20\">\n      <h4 class=\"pluginType-heading-title-inner tb-col-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.name",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":5,"column":62},"end":{"line":5,"column":78}}}))
    + "</h4>\n    </div>\n\n    <div class=\"pluginType-heading pluginType-heading-description col-40\">\n      <h4 class=\"pluginType-heading-description-inner tb-col-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.description",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":9,"column":68},"end":{"line":9,"column":91}}}))
    + "</h4>\n    </div>\n\n    <div class=\"pluginType-heading pluginType-heading-version col-10 col-centered\">\n      <h4 class=\"pluginType-heading-version-inner tb-col-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.version",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":13,"column":64},"end":{"line":13,"column":83}}}))
    + "</h4>\n    </div>\n\n    <div class=\"pluginType-heading pluginType-heading-enabled col-10 col-centered\">\n      <h4 class=\"pluginType-heading-enabled-inner tb-col-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.enabled",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":17,"column":64},"end":{"line":17,"column":83}}}))
    + "</h4>\n    </div>\n\n"
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"extension",{"name":"ifValueEquals","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":24,"column":22}}})) != null ? stack1 : "")
    + "\n    <div class=\"pluginType-heading pluginType-heading-action col-10 col-centered\">\n      <h4 class=\"pluginType-heading-action-inner tb-col-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.action",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":27,"column":63},"end":{"line":27,"column":81}}}))
    + "</h4>\n    </div>\n\n  </div>\n  <ul class=\"pluginManagement-plugins clearfix grid-layout\">\n    <div class=\"pluginManagement-loading\">\n      "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.loading",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":34,"column":6},"end":{"line":34,"column":25}}}))
    + "\n    </div>\n  </ul>\n\n  <div class=\"pluginType-bulk-actions tb-row\">\n    <div class=\"pluginType-action-buttons\">\n      <button class=\"btn tertiary-hollow refresh-all-plugins\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.refresh",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":40,"column":62},"end":{"line":40,"column":81}}}))
    + "</button>\n    </div>\n  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pluginManagementSidebar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"sidebar-item-inner\">\n    <div class=\"separator\"></div>\n    <button class=\"pluginManagement-sidebar-upload action-primary\">\n      <span class=\"plugin-management-sidebar-view-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.uploadplugin",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":4,"column":57},"end":{"line":4,"column":81}}}))
    + "</span>\n    </button>\n    <div class=\"separator\"></div>\n  <div class=\"sidebar-row\">\n    <button class=\"pluginManagement-sidebar-extensions\">\n      <span class=\"pluginManagement-sidebar-extensions\">\n        <i class=\"fa fa-plug\"></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.extensions",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":10,"column":34},"end":{"line":10,"column":56}}}))
    + "\n      </span>\n    </button>\n  </div>\n  <div class=\"sidebar-row\">\n    <button class=\"pluginManagement-sidebar-components\">\n      <span class=\"pluginManagement-sidebar-components\">\n        <i class=\"fa fa-cubes\"></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.components",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":17,"column":35},"end":{"line":17,"column":57}}}))
    + "\n      </span>\n    </button>\n  </div>\n  <div class=\"sidebar-row\">\n    <button class=\"pluginManagement-sidebar-themes\">\n      <span class=\"pluginManagement-sidebar-themes\">\n        <i class=\"fa fa-image\"></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.themes",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":24,"column":35},"end":{"line":24,"column":53}}}))
    + "\n      </span>\n    </button>\n  </div>\n  <div class=\"sidebar-row\">\n    <button class=\"pluginManagement-sidebar-menus\">\n      <span class=\"pluginManagement-sidebar-menus\">\n        <i class=\"fa fa-sitemap\"></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.menus",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":31,"column":37},"end":{"line":31,"column":54}}}))
    + "\n      </span>\n    </button>\n  <div class=\"separator\"></div>\n  <div class=\"sidebar-row\">\n    <button class=\"pluginManagement-sidebar-getPlugins\">\n      <i class=\"fa fa-external-link\"></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.getnewplugins",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":37,"column":41},"end":{"line":37,"column":66}}}))
    + "\n    </button>\n  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pluginManagementUpload"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"inner\">\n  <form class=\"plugin-form forms plugin-form\" action=\"api/upload/contentplugin\" method=\"post\">\n    <div class=\"form-group\">\n      <label for=\"file\">\n        "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.pluginfile",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":5,"column":30}}}))
    + " <span class=\"req\">*</span>\n        <span class=\"field-error display-none\" data-error=\"\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.required",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":6,"column":61},"end":{"line":6,"column":81}}}))
    + "</span>\n      </label>\n      <input type=\"file\" class=\"plugin-file\" name=\"file\">\n      "
    + alias3(((helper = (helper = lookupProperty(helpers,"maxUploadSize") || (depth0 != null ? lookupProperty(depth0,"maxUploadSize") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"maxUploadSize","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":23}}}) : helper)))
    + "\n    </div>\n  </form>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pluginManagementUploadSidebar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"sidebar-item-inner\">\n\n  <div class=\"separator\"> </div>\n\n  <button type=\"submit\" class=\"pluginManagement-upload-sidebar-save-button action-primary\">\n    <span>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.upload",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":6,"column":10},"end":{"line":6,"column":28}}}))
    + "</span>\n  </button>\n\n  <button type=\"button\" class=\"pluginManagement-upload-sidebar-cancel-button action-secondary\">\n    <span>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":10,"column":10},"end":{"line":10,"column":28}}}))
    + "</span>\n  </button>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pluginType"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    return "row-disabled";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <a href=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"homepage") || (depth0 != null ? lookupProperty(depth0,"homepage") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"homepage","hash":{},"data":data,"loc":{"start":{"line":11,"column":17},"end":{"line":11,"column":29}}}) : helper)))
    + "\" class=\"pluginType-homepage tb-col-inner\" target=\"_blank\">\n          <span>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.visitpluginhomepage",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":12,"column":47}}}))
    + "</span>\n        </a>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"pluginType-addedDefault col-10 col-centered\">\n        <input class=\"pluginType-addedDefault\" type=\"checkbox\" "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isAddedByDefault") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":63},"end":{"line":24,"column":102}}})) != null ? stack1 : "")
    + "/>\n      </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "checked";
},"12":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <i title=\""
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.uploadedbyuser",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":30,"column":20},"end":{"line":30,"column":46}}}))
    + "\" class=\"user-uploaded fa fa-user\"></i>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <button title=\""
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.checkforupdates",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":32,"column":25},"end":{"line":32,"column":52}}}))
    + "\" class=\"plugin-update-check btn\"><i class=\"fa fa-refresh\"></i></button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"pluginType-inner "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isAvailableInEditor") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":29},"end":{"line":1,"column":84}}})) != null ? stack1 : "")
    + "\">\n  <div class=\"pluginType-description col-row\">\n    <div class=\"pluginType-title col-20\">\n      <h4 class=\"pluginType-title-inner tb-col-inner\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"displayName") || (depth0 != null ? lookupProperty(depth0,"displayName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data,"loc":{"start":{"line":4,"column":54},"end":{"line":4,"column":69}}}) : helper)))
    + "</h4>\n    </div>\n    <div class=\"pluginType-description col-40\">\n      <div class=\"pluginType-description-inner tb-col-inner\">\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":8,"column":23}}}) : helper)))
    + "\n      </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"homepage") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":14,"column":13}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"pluginType-version col-10 col-centered\">\n      <span class=\"pluginType-version-number tb-col-inner\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"version") || (depth0 != null ? lookupProperty(depth0,"version") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"version","hash":{},"data":data,"loc":{"start":{"line":17,"column":59},"end":{"line":17,"column":70}}}) : helper)))
    + "</span>\n    </div>\n    <div class=\"pluginType-active col-10 col-centered\">\n      <input class=\"pluginType-enabled\" type=\"checkbox\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isAvailableInEditor") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":56},"end":{"line":20,"column":100}}})) != null ? stack1 : "")
    + "/>\n    </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"extension") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":4},"end":{"line":26,"column":11}}})) != null ? stack1 : "")
    + "    <div class=\"pluginType-update col-10 col-centered\">\n      <div class=\"pluginType-update-inner tb-col-inner\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isLocalPackage") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":29,"column":8},"end":{"line":33,"column":15}}})) != null ? stack1 : "")
    + "          <button title=\""
    + alias4((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.remove",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":34,"column":25},"end":{"line":34,"column":43}}}))
    + "\" class=\"plugin-remove btn alert\"><i class=\"fa fa-trash-o\"></i></button>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["project"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"project-image\" style=\"background-image: url("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"heroImageURI") || (depth0 != null ? lookupProperty(depth0,"heroImageURI") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"heroImageURI","hash":{},"data":data,"loc":{"start":{"line":17,"column":60},"end":{"line":17,"column":76}}}) : helper)))
    + ");\">\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"project-image\">\n    </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"project-details-createdBy project-details-row\">\n          <div class=\"projects-details-label\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.createdBy",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":37,"column":46},"end":{"line":37,"column":67}}}))
    + "</div>\n          <div class=\"projects-details-value\">"
    + alias3(((helper = (helper = lookupProperty(helpers,"creatorName") || (depth0 != null ? lookupProperty(depth0,"creatorName") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"creatorName","hash":{},"data":data,"loc":{"start":{"line":38,"column":46},"end":{"line":38,"column":61}}}) : helper)))
    + "</div>\n        </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"project-details-tags project-details-row tags\">\n          <div class=\"projects-details-tags-button\">\n            <button class=\"btn secondary-hollow projects-details-tags-button-show\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.viewtags",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":45,"column":83},"end":{"line":45,"column":103}}}))
    + "</button>\n          </div>\n          <div class=\"projects-details-value tag-container\">\n            <ul class=\"items tags\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"tags") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":12},"end":{"line":53,"column":21}}})) != null ? stack1 : "")
    + "            </ul>\n            <button class=\"btn secondary-hollow projects-details-tags-button-hide\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.hidetags",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":55,"column":83},"end":{"line":55,"column":103}}}))
    + "</button>\n          </div>\n        </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <li class=\"item-row tag\" title=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":50,"column":46},"end":{"line":50,"column":57}}}) : helper))) != null ? stack1 : "")
    + "\">\n                <span class=\"value-text\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":51,"column":41},"end":{"line":51,"column":52}}}) : helper))) != null ? stack1 : "")
    + "</span>\n              </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"project-inner clearfix no-select\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":55},"end":{"line":1,"column":62}}}) : helper)))
    + "\">\n    <div class=\"project-header\">\n      <div class=\"project-header-inner\">\n\n        <div class=\"project-settings\">\n          <div class=\"project-settings-inner\">\n            <a href=\"#\" class=\"open-context-icon open-context-course\"><i class=\"fa fa-cog fa-fw\"></i></a>\n            <a href=\"#\" class=\"course-delete editor-delete-course-element\" title=\""
    + alias4((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.clicktodelete",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":8,"column":82},"end":{"line":8,"column":108}}}))
    + "\">\n                <i class=\"fa fa-trash-o\"></i>\n            </a>\n          </div>\n        </div>\n\n      </div>\n    </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"heroImage") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":22,"column":11}}})) != null ? stack1 : "")
    + "\n    <div class=\"project-details\">\n      <div class=\"project-details-inner\">\n        <div class=\"project-detail-title\">\n          <h1 class=\"project-detail-title-inner\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":27,"column":49},"end":{"line":27,"column":60}}}) : helper))) != null ? stack1 : "")
    + "</h1>\n        </div>\n\n        <div class=\"project-details-last-updated project-details-row\">\n          <div class=\"projects-details-label\">"
    + alias4((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.lastupdated",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":31,"column":46},"end":{"line":31,"column":69}}}))
    + "</div>\n          <div class=\"projects-details-value\">"
    + alias4((lookupProperty(helpers,"momentFormat")||(depth0 && lookupProperty(depth0,"momentFormat"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"updatedAt") : depth0),"Do MMMM YYYY",{"name":"momentFormat","hash":{},"data":data,"loc":{"start":{"line":32,"column":46},"end":{"line":32,"column":87}}}))
    + "</div>\n        </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"creatorName") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":8},"end":{"line":40,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"tags") : depth0)) != null ? lookupProperty(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":8},"end":{"line":58,"column":15}}})) != null ? stack1 : "")
    + "      </div>\n    </div>\n\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["projects"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"projects-inner\">\n	<div class=\"no-projects display-none\">\n		"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.noprojectstodisplay",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":3,"column":33}}}))
    + "\n	</div>\n  <ul class=\"projects-list clearfix grid-layout\"></ul>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["projectsSidebar"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"projects-sidebar-import-course action-secondary\">\n      <span class=\"projects-sidebar-import-course-inner\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.importcourse",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":11,"column":57},"end":{"line":11,"column":81}}}))
    + "</span>\n    </button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"sidebar-item-inner\">\n\n  <div class=\"separator\"></div>\n\n  <button class=\"projects-sidebar-add-course action-primary\">\n    <span class=\"projects-sidebar-add-course-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.addnewproject",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":6,"column":52},"end":{"line":6,"column":77}}}))
    + "</span>\n  </button>\n\n"
    + ((stack1 = (lookupProperty(helpers,"ifHasPermissions")||(depth0 && lookupProperty(depth0,"ifHasPermissions"))||alias2).call(alias1,"*/*:create,*/*:read,*/*:update,*/*:delete",{"name":"ifHasPermissions","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":13,"column":23}}})) != null ? stack1 : "")
    + "\n  <div class=\"separator\"></div>\n\n    <div class=\"sidebar-row\">\n      <button class=\"projects-sidebar-my-courses\">\n        <span class=\"projects-sidebar-my-courses-inner\">\n          <i class=\"fa fa-chevron-right primary-color\"/>\n          "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.myprojects",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":32}}}))
    + "\n        </span>\n      </button>\n    </div>\n    <div class=\"sidebar-row\">\n      <button class=\"projects-sidebar-shared-courses\">\n        <span class=\"projects-sidebar-shared-courses-inner\">\n          <i class=\"fa fa-chevron-right primary-color\"/>\n          "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.sharedprojects",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":29,"column":10},"end":{"line":29,"column":36}}}))
    + "\n        </span>\n      </button>\n    </div>\n\n    <div class=\"sidebar-search-tag\">\n      <div class=\"sidebar-row\">\n        <div class=\"sidebar-row-input\">\n          <input type=\"text\" class=\"projects-sidebar-filter-input projects-sidebar-filter-search-input\" placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.searchbyname",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":37,"column":117},"end":{"line":37,"column":141}}}))
    + "\"/>\n          <button class=\"sidebar-filter-clear\"><i class=\"fa fa-times\"></i></button>\n        </div>\n      </div>\n\n      <button class=\"projects-sidebar-add-tag sidebar-filter-button action-secondary\">\n        <span class=\"projects-sidebar-add-tag-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.searchbytag",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":43,"column":53},"end":{"line":43,"column":76}}}))
    + "</span>\n      </button>\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["field"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " field-"
    + container.escapeExpression((lookupProperty(helpers,"stringToClassName")||(depth0 && lookupProperty(depth0,"stringToClassName"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"stringToClassName","hash":{},"data":data,"loc":{"start":{"line":1,"column":37},"end":{"line":1,"column":64}}}));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"legend") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":72},"end":{"line":1,"column":148}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " field-object field-object-"
    + container.escapeExpression((lookupProperty(helpers,"stringToClassName")||(depth0 && lookupProperty(depth0,"stringToClassName"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"legend") : depth0),{"name":"stringToClassName","hash":{},"data":data,"loc":{"start":{"line":1,"column":113},"end":{"line":1,"column":141}}}));
},"6":function(container,depth0,helpers,partials,data) {
    return " is-default-value";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"inputType") : depth0)) != null ? lookupProperty(stack1,"type") : stack1), depth0));
},"10":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"inputType") || (depth0 != null ? lookupProperty(depth0,"inputType") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"inputType","hash":{},"data":data,"loc":{"start":{"line":1,"column":292},"end":{"line":1,"column":305}}}) : helper)));
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <label for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"editorId") || (depth0 != null ? lookupProperty(depth0,"editorId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"editorId","hash":{},"data":data,"loc":{"start":{"line":3,"column":14},"end":{"line":3,"column":26}}}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"key") || (depth0 != null ? lookupProperty(depth0,"key") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":3,"column":35},"end":{"line":3,"column":42}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":44},"end":{"line":3,"column":53}}}) : helper)))
    + "</label>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"help") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + "  <button class=\"field-default\" data-action=\"default\" title=\""
    + alias4((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.reset",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":10,"column":61},"end":{"line":10,"column":78}}}))
    + "\">\n    <i class=\"fa fa-undo\"></i>\n  </button>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"field-help\">\n    <i class=\"fa fa-info-circle\"></i>\n    <div class=\"tooltip\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"help") || (depth0 != null ? lookupProperty(depth0,"help") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"help","hash":{},"data":data,"loc":{"start":{"line":7,"column":25},"end":{"line":7,"column":33}}}) : helper)))
    + "</div>\n  </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"legend") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":18,"column":9}}})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"legend\">\n    <legend>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"legend") || (depth0 != null ? lookupProperty(depth0,"legend") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"legend","hash":{},"data":data,"loc":{"start":{"line":16,"column":12},"end":{"line":16,"column":22}}}) : helper)))
    + "</legend>\n  </div>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"legend") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":43},"end":{"line":20,"column":74}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    return " collapsed";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"field"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":17},"end":{"line":1,"column":155}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isDefaultValue") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":155},"end":{"line":1,"column":201}}})) != null ? stack1 : "")
    + "\" data-editor-id=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"editorId") || (depth0 != null ? lookupProperty(depth0,"editorId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"editorId","hash":{},"data":data,"loc":{"start":{"line":1,"column":219},"end":{"line":1,"column":231}}}) : helper)))
    + "\" data-type=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"inputType") : depth0)) != null ? lookupProperty(stack1,"type") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":1,"column":244},"end":{"line":1,"column":312}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":19,"column":9}}})) != null ? stack1 : "")
    + "  <div class=\"field-editor"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"unless","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":26},"end":{"line":20,"column":85}}})) != null ? stack1 : "")
    + "\">\n    <div class=\"field-error\" data-error></div>\n    <span data-editor></span>\n  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["fieldset"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression((lookupProperty(helpers,"stringToClassName")||(depth0 && lookupProperty(depth0,"stringToClassName"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"legend") : depth0),{"name":"stringToClassName","hash":{},"data":data,"loc":{"start":{"line":1,"column":40},"end":{"line":1,"column":68}}}));
},"3":function(container,depth0,helpers,partials,data) {
    return "object";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"legend\">\n    <legend>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"legend") || (depth0 != null ? lookupProperty(depth0,"legend") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"legend","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":22}}}) : helper)))
    + "</legend>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<fieldset class=\"fieldset-"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"legend") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":26},"end":{"line":1,"column":89}}})) != null ? stack1 : "")
    + "\" data-key=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"key") || (depth0 != null ? lookupProperty(depth0,"key") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":1,"column":101},"end":{"line":1,"column":108}}}) : helper)))
    + "\" data-fields>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"legend") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":6,"column":9}}})) != null ? stack1 : "")
    + "</fieldset>\n";
},"useData":true});

this["Handlebars"]["templates"]["form"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button class=\"btn primary\" type=\"submit\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"submitButton") || (depth0 != null ? lookupProperty(depth0,"submitButton") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"submitButton","hash":{},"data":data,"loc":{"start":{"line":4,"column":44},"end":{"line":4,"column":60}}}) : helper)))
    + "</button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<form>\n  <div data-fieldsets></div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"submitButton") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":5,"column":9}}})) != null ? stack1 : "")
    + "</form>\n";
},"useData":true});

this["Handlebars"]["templates"]["list"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"list-items\">\n  <div data-items></div>\n  <button class=\"btn primary\" type=\"button\" data-action=\"add\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.add",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":3,"column":62},"end":{"line":3,"column":77}}}))
    + "</button>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["listItem"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"list-item\">\n  <span data-editor></span>\n  <button class=\"btn secondary fa fa-clone\" type=\"button\" data-action=\"clone\"></button>\n  <button class=\"btn warning fa fa-close\" type=\"button\" data-action=\"remove\"></button>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["scaffoldAsset"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"image",{"name":"ifValueEquals","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":12,"column":20}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"other",{"name":"ifValueEquals","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":19,"column":20}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"video",{"name":"ifValueEquals","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":2},"end":{"line":30,"column":20}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"audio",{"name":"ifValueEquals","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":2},"end":{"line":37,"column":20}}})) != null ? stack1 : "")
    + "\n  <div class=\"scaffold-asset-buttons\">\n    <button class=\"btn scaffold-asset-clear\">\n      <i class=\"fa fa-times-circle\"></i>\n"
    + ((stack1 = (lookupProperty(helpers,"ifAssetIsExternal")||(depth0 && lookupProperty(depth0,"ifAssetIsExternal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"value") : depth0),{"name":"ifAssetIsExternal","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":42,"column":6},"end":{"line":46,"column":28}}})) != null ? stack1 : "")
    + "    </button>\n  </div>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"thumbUrl") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":11,"column":11}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <img class=\"scaffold-asset-preview\" src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"thumbUrl") || (depth0 != null ? lookupProperty(depth0,"thumbUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"thumbUrl","hash":{},"data":data,"loc":{"start":{"line":6,"column":47},"end":{"line":6,"column":59}}}) : helper)))
    + "\"/>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <a class=\"scaffold-asset-preview\" title=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.nothumbnailforimage",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":8,"column":47},"end":{"line":8,"column":78}}}))
    + "\" href=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":8,"column":86},"end":{"line":8,"column":93}}}) : helper)))
    + "\" target=\"_blank\">\n        <i class=\"fa fa-file-image-o fa-large\"></i>\n      </a>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <a class=\"scaffold-asset-preview\" href=\""
    + ((stack1 = (lookupProperty(helpers,"ifAssetIsExternal")||(depth0 && lookupProperty(depth0,"ifAssetIsExternal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"value") : depth0),{"name":"ifAssetIsExternal","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":15,"column":44},"end":{"line":15,"column":118}}})) != null ? stack1 : "")
    + "\" target=\"_blank\">\n      <i class=\"fa fa-file-o fa-large\"></i>\n      <div>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":17,"column":11},"end":{"line":17,"column":20}}}) : helper)))
    + "</div>\n    </a>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"value","hash":{},"data":data,"loc":{"start":{"line":15,"column":72},"end":{"line":15,"column":81}}}) : helper)));
},"10":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data,"loc":{"start":{"line":15,"column":89},"end":{"line":15,"column":96}}}) : helper)));
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifAssetIsExternal")||(depth0 && lookupProperty(depth0,"ifAssetIsExternal"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"value") : depth0),{"name":"ifAssetIsExternal","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":22,"column":4},"end":{"line":29,"column":26}}})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <a class=\"scaffold-asset-preview\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":23,"column":46},"end":{"line":23,"column":55}}}) : helper)))
    + "\" target=\"_blank\">\n        <i class=\"fa fa-file-movie-o fa-large\"></i>\n        <div>"
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":25,"column":13},"end":{"line":25,"column":22}}}) : helper)))
    + "</div>\n      </a>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <a class=\"scaffold-asset-preview\" href=\""
    + ((stack1 = (lookupProperty(helpers,"ifAssetIsExternal")||(depth0 && lookupProperty(depth0,"ifAssetIsExternal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"value") : depth0),{"name":"ifAssetIsExternal","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":33,"column":44},"end":{"line":33,"column":118}}})) != null ? stack1 : "")
    + "\" target=\"_blank\">\n      <i class=\"fa fa-file-audio-o fa-large\"></i>\n      <div>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":35,"column":11},"end":{"line":35,"column":20}}}) : helper)))
    + "</div>\n    </a>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.removeexternalasset",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":43,"column":8},"end":{"line":43,"column":39}}}))
    + "\n";
},"19":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.removeasset",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":45,"column":8},"end":{"line":45,"column":31}}}))
    + "\n";
},"21":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n  <div class=\"scaffold-asset-external-input display-none\">\n    <input type=\"text\" class=\"scaffold-asset-external-input-field\" />\n    <div class=\"scaffold-asset-external-input-buttons\">\n      <button class=\"btn primary scaffold-asset-external-input-save\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":55,"column":69},"end":{"line":55,"column":85}}}))
    + "</button>\n      <button class=\"btn primary-hollow scaffold-asset-external-input-cancel\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":56,"column":78},"end":{"line":56,"column":96}}}))
    + "</button>\n    </div>\n  </div>\n\n  <div class=\"scaffold-asset-buttons\">\n    <button class=\"btn secondary scaffold-asset-picker\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.selectasset",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":61,"column":56},"end":{"line":61,"column":79}}}))
    + "</button>\n    <button class=\"btn secondary-hollow scaffold-asset-external\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.selectexternalasset",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":62,"column":65},"end":{"line":62,"column":96}}}))
    + "</button>\n  </div>\n\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"value") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(21, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":65,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["scaffoldAssetItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n  <div class=\"scaffold-asset-item-img-holder\">\n    <img class=\"scaffold-asset-item-preview\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":5,"column":50},"end":{"line":5,"column":57}}}) : helper)))
    + "\"/>\n  </div>\n\n  <div class=\"scaffold-asset-buttons\">\n    <button class=\"btn scaffold-asset-clear\">\n      <i class=\"fa fa-times-circle\"></i>\n"
    + ((stack1 = (lookupProperty(helpers,"ifAssetIsExternal")||(depth0 && lookupProperty(depth0,"ifAssetIsExternal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"value") : depth0),{"name":"ifAssetIsExternal","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":15,"column":28}}})) != null ? stack1 : "")
    + "    </button>\n    <button class=\"btn add-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"addLabel") || (depth0 != null ? lookupProperty(depth0,"addLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addLabel","hash":{},"data":data,"loc":{"start":{"line":17,"column":33},"end":{"line":17,"column":45}}}) : helper)))
    + "</button>\n  </div>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.removeexternalasset",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":12,"column":39}}}))
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.removeasset",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":14,"column":31}}}))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n  <div class=\"scaffold-asset-external-input display-none\">\n    <input type=\"text\" class=\"scaffold-asset-external-input-field\" />\n    <div class=\"scaffold-asset-external-input-buttons\">\n      <button class=\"btn primary scaffold-asset-external-input-save\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":25,"column":69},"end":{"line":25,"column":85}}}))
    + "</button>\n      <button class=\"btn primary-hollow scaffold-asset-external-input-cancel\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":26,"column":78},"end":{"line":26,"column":96}}}))
    + "</button>\n    </div>\n  </div>\n\n  <div class=\"scaffold-asset-buttons\">\n    <button class=\"btn secondary scaffold-asset-picker\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.selectasset",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":31,"column":56},"end":{"line":31,"column":79}}}))
    + "</button>\n    <button class=\"btn secondary-hollow scaffold-asset-external\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.selectexternalasset",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":32,"column":65},"end":{"line":32,"column":96}}}))
    + "</button>\n  </div>\n\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"value") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":35,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["scaffoldDisplayTitle"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<input type=\"text\" autocomplete=\"off\">\n<button class=\"scaffold-display-title-lock\">\n  <i class=\"fa fa-lock\" title=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.titlelock",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":3,"column":31},"end":{"line":3,"column":52}}}))
    + "\"></i>\n  <i class=\"fa fa-unlink\" title=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.titleunlock",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":4,"column":33},"end":{"line":4,"column":56}}}))
    + "\"></i>\n</button>\n<button class=\"scaffold-display-title-clear\">\n  <i class=\"fa fa-times-circle\" title=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.delete",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":7,"column":39},"end":{"line":7,"column":57}}}))
    + "\"></i>\n</button>\n";
},"useData":true});

this["Handlebars"]["templates"]["scaffoldEditHtml"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"ql-edit-html-overlay-inner\" contenteditable=true></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["scaffoldItemsModal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"scaffold-items-modal-header\">\n      <h4>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":10},"end":{"line":5,"column":19}}}) : helper)))
    + "</h4>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"scaffold-items-modal-sidebar\">\n  <div class=\"scaffold-items-modal-sidebar-inner\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":7,"column":11}}})) != null ? stack1 : "")
    + "    <div class=\"scaffold-items-modal-body\">"
    + alias3(((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":8,"column":43},"end":{"line":8,"column":54}}}) : helper)))
    + "</div>\n    <div class=\"scaffold-items-modal-footer\">\n      <a href=\"#\" class=\"btn primary scaffold-items-modal-ok\" data-action=\"ok\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.ok",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":10,"column":79},"end":{"line":10,"column":93}}}))
    + "</a>\n      <a href=\"#\" class=\"btn primary-hollow scaffold-items-modal-cancel\" data-action=\"cancel\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":11,"column":94},"end":{"line":11,"column":112}}}))
    + "</a>\n    </div>\n  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["scaffoldModalOverlay"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"scaffold-modal-overlay\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["scaffoldUsersOption"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <span class=\"name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":23},"end":{"line":3,"column":31}}}) : helper)))
    + "</span>\n    <span class=\"email\">&lt;"
    + alias4(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":4,"column":28},"end":{"line":4,"column":37}}}) : helper)))
    + "&gt;</span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <span class=\"name\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"email","hash":{},"data":data,"loc":{"start":{"line":6,"column":23},"end":{"line":6,"column":32}}}) : helper)))
    + "</span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"option\" data-disabled="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"disabled") || (depth0 != null ? lookupProperty(depth0,"disabled") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"disabled","hash":{},"data":data,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":46}}}) : helper)))
    + ">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":7,"column":9}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["sidebar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"sidebar-inner\">\n	<div class=\"sidebar-breadcrumb\">\n	</div>\n	<div class=\"sidebar-item-container\">\n	</div>\n	<div class=\"sidebar-fieldset-container\">\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["sidebarBreadcrumb"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"backButtonRoute") || (depth0 != null ? lookupProperty(depth0,"backButtonRoute") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"backButtonRoute","hash":{},"data":data,"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":28}}}) : helper)))
    + "\" class=\"sidebar-breadcrumb-inner\">\n    <i class=\"fa fa-chevron-left\"></i>"
    + alias4(((helper = (helper = lookupProperty(helpers,"backButtonText") || (depth0 != null ? lookupProperty(depth0,"backButtonText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"backButtonText","hash":{},"data":data,"loc":{"start":{"line":2,"column":38},"end":{"line":2,"column":56}}}) : helper)))
    + "\n</a>";
},"useData":true});

this["Handlebars"]["templates"]["sidebarDivide"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});

this["Handlebars"]["templates"]["sidebarFieldsetFilter"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button class=\"sidebar-fieldset-filter sidebar-fieldset-filter-"
    + alias3((lookupProperty(helpers,"stringToClassName")||(depth0 && lookupProperty(depth0,"stringToClassName"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"legend") : depth0),{"name":"stringToClassName","hash":{},"data":data,"loc":{"start":{"line":1,"column":63},"end":{"line":1,"column":91}}}))
    + "\">\n	<span class=\"sidebar-fieldset-filter-inner\">\n		<i class=\"fa fa-toggle-off\"></i>\n		"
    + alias3(((helper = (helper = lookupProperty(helpers,"legend") || (depth0 != null ? lookupProperty(depth0,"legend") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"legend","hash":{},"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":4,"column":12}}}) : helper)))
    + "\n	</span>\n</button>";
},"useData":true});

this["Handlebars"]["templates"]["sidebarFilter"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <button class=\"sidebar-filter-item\" data-title=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":22,"column":60},"end":{"line":22,"column":69}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":22,"column":80},"end":{"line":22,"column":87}}}) : helper)))
    + "\">\n                <div class=\"sidebar-filter-item-inner\">\n                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":24,"column":29}}}) : helper)))
    + "\n                </div>\n            </button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"sidebar-filter-inner\">\n    <div class=\"sidebar-filter-toolbar\">\n        <div class=\"sidebar-filter-toolbar-inner clearfix\">\n            <div class=\"sidebar-filter-toolbar-title\">\n                "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.filterbytags",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":5,"column":16},"end":{"line":5,"column":40}}}))
    + "\n            </div>\n            <div class=\"sidebar-filter-toolbar-subtitle\">\n                "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.pleaseselectcomponent",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":8,"column":16},"end":{"line":8,"column":49}}}))
    + ":\n            </div>\n            <div class=\"sidebar-filter-toolbar-close\">\n                <button class=\"fa fa-times\"></button>\n            </div>\n        </div>\n    </div>\n    <div class=\"sidebar-filter-search\">\n        <input type=\"text\" placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.filterbytags",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":16,"column":40},"end":{"line":16,"column":64}}}))
    + "\" class=\"sidebar-filter-search-input\" />\n        <i class=\"fa fa-search\"></i>\n    </div>\n    <div class=\"sidebar-filter-items\">\n        <div class=\"sidebar-filter-items-inner\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":12},"end":{"line":27,"column":21}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["sidebarRowFilter"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"sidebar-row clearfix "
    + alias4(((helper = (helper = lookupProperty(helpers,"rowClasses") || (depth0 != null ? lookupProperty(depth0,"rowClasses") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rowClasses","hash":{},"data":data,"loc":{"start":{"line":1,"column":33},"end":{"line":1,"column":47}}}) : helper)))
    + "\">\n    <span>"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"tag") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</span>\n    <button data-title=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"tag") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "\" data-id=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"tag") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\" class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"buttonClasses") || (depth0 != null ? lookupProperty(depth0,"buttonClasses") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"buttonClasses","hash":{},"data":data,"loc":{"start":{"line":3,"column":67},"end":{"line":3,"column":84}}}) : helper)))
    + "\"><i class=\"fa fa-times\"></i></button>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["sidebarUpdateButton"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span class=\"sidebar-update-button\">\n    <i class=\"fa fa-circle-o-notch fa-spin\"></i>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"updateText") || (depth0 != null ? lookupProperty(depth0,"updateText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"updateText","hash":{},"data":data,"loc":{"start":{"line":2,"column":48},"end":{"line":2,"column":62}}}) : helper)))
    + "\n</span>";
},"useData":true});

this["Handlebars"]["templates"]["forgotPassword"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    "
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.forgotpasswordfooter",{"name":"t","hash":{"supportContact":((stack1 = (depth0 != null ? lookupProperty(depth0,"constants") : depth0)) != null ? lookupProperty(stack1,"supportContact") : stack1)},"data":data,"loc":{"start":{"line":31,"column":4},"end":{"line":31,"column":76}}}))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    "
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.forgotpasswordfooter",{"name":"t","hash":{"supportContact":(lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.anadmin",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":33,"column":50},"end":{"line":33,"column":67}}})},"data":data,"loc":{"start":{"line":33,"column":4},"end":{"line":33,"column":69}}}))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias3(((helper = (helper = lookupProperty(helpers,"importConstants") || (depth0 != null ? lookupProperty(depth0,"importConstants") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"importConstants","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":19}}}) : helper)))
    + "\n\n<div class=\"login-logo\"></div>\n\n<div class=\"login-title\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.resetpassword",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":5,"column":25},"end":{"line":5,"column":50}}}))
    + "</div>\n\n<div class=\"forgot-password-success display-none\">\n    "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.forgotpasswordsuccess",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":8,"column":37}}}))
    + "\n    <button class=\"return btn small secondary\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.returnto",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":9,"column":47},"end":{"line":9,"column":67}}}))
    + " "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.login",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":9,"column":68},"end":{"line":9,"column":85}}}))
    + "</button>\n</div>\n\n<div class=\"forgot-container\">\n  <div class=\"forgot-introduction\">\n    "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.forgotpasswordblurb",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":14,"column":35}}}))
    + "\n  </div>\n  <div class=\"forgot-form\">\n    <form class=\"forgot-password-form\">\n      <div id=\"loginError\" class=\"forgotError display-none\">\n        <i class=\"fa fa-times\"></i> "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.invalidusernameoremail",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":19,"column":36},"end":{"line":19,"column":70}}}))
    + "<span id=\"loginErrorMessage\"/>\n      </div>\n      <div class=\"forgot-login\">\n          <input type=\"email\" autocomplete=\"off\" placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.usernameoremail",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":22,"column":62},"end":{"line":22,"column":89}}}))
    + "\" class=\"input-username-email\" tabindex=\"1\">\n      </div>\n      <button type=\"submit\" class=\"submit btn secondary\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.continue",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":24,"column":57},"end":{"line":24,"column":77}}}))
    + "</button>\n      <button class=\"cancel btn white-hollow\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":25,"column":46},"end":{"line":25,"column":64}}}))
    + "</button>\n    </form>\n  </div>\n    <div class=\"forgot-footer\">\n    <strong>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.hasyouremailchanged",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":43}}}))
    + "</strong>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"constants") : depth0)) != null ? lookupProperty(stack1,"supportContact") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":30,"column":4},"end":{"line":34,"column":11}}})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["login"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.alreadyloggedin",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":7,"column":39}}}))
    + "\n            <button class=\"dash btn small secondary\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.gotodashboard",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":8,"column":53},"end":{"line":8,"column":78}}}))
    + "</button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "            <div class=\"login-fields\">\n                <div id=\"loginError\" class=\"display-none\">\n                    <i class=\"fa fa-times\"></i><span id=\"loginErrorMessage\"/>\n                </div>\n                <input type=\"email\" autocomplete=\"off\" class=\"login-input-username\" value=\"\" id=\"login-input-username\" placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.usernameoremail",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":14,"column":132},"end":{"line":14,"column":159}}}))
    + "\" tabindex=\"1\" />\n                <input type=\"password\" autocomplete=\"off\" class=\"login-input-password\" value=\"\" id=\"login-input-password\" placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.password",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":15,"column":135},"end":{"line":15,"column":155}}}))
    + "\" tabindex=\"2\" />\n                <button type=\"submit\" class=\"btn secondary login-form-submit\" tabindex=\"3\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.login",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":16,"column":91},"end":{"line":16,"column":108}}}))
    + "</button>\n            </div>\n            <div class=\"login-remember-me\">\n                <input id=\"remember-me\" class=\"remember-me-checkbox\" name=\"remember-me\" type=\"checkbox\"/>\n                <label for=\"remember-me\" class=\"remember-me-label\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.rememberme",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":20,"column":67},"end":{"line":20,"column":89}}}))
    + "</label>\n            </div>\n";
  stack1 = ((helper = (helper = lookupProperty(helpers,"ifMailEnabled") || (depth0 != null ? lookupProperty(depth0,"ifMailEnabled") : depth0)) != null ? helper : alias2),(options={"name":"ifMailEnabled","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":26,"column":30}}}),(typeof helper === "function" ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"ifMailEnabled")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"login-forgot-password\">\n                <a class=\"\" href=\"#user/forgot\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.forgotpassword",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":24,"column":48},"end":{"line":24,"column":74}}}))
    + "</a>\n            </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"login-inner\">\n    <div class=\"login-logo\"></div>\n\n    <form class=\"login-form\" autocomplete=\"off\">\n        <div class=\"login-title\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(alias1,"app.signin",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":5,"column":33},"end":{"line":5,"column":51}}}))
    + "</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isAuthenticated") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":27,"column":15}}})) != null ? stack1 : "")
    + "    </form>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["resetPassword"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"inner\">\n  <div class=\"login-logo\"></div>\n\n  <div class=\"login-title\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.resetpassword",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":4,"column":27},"end":{"line":4,"column":52}}}))
    + "</div>\n\n  <div class=\"reset-introduction\">\n    "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.passwordtip",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":7,"column":27}}}))
    + "\n  </div>\n\n  <div class=\"message\">\n    <div class=\"success display-none\">\n      <p>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.resetpasswordsuccess",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":12,"column":9},"end":{"line":12,"column":41}}}))
    + "</p>\n      <button class=\"return btn small secondary\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.returnto",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":13,"column":49},"end":{"line":13,"column":69}}}))
    + " "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.login",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":13,"column":70},"end":{"line":13,"column":87}}}))
    + "</button>\n    </div>\n  </div>\n\n  <form class=\"form-reset-password forms\">\n    <div class=\"login-fields\">\n        <div id=\"loginError\" class=\"resetError display-none\">\n          <i class=\"fa fa-times\"></i><span id=\"loginErrorMessage\" class=\"message\"/>\n        </div>\n        <input type=\"password\" class=\"login-input-password\" id=\"password\" value=\"\" placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.newpassword",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":22,"column":96},"end":{"line":22,"column":119}}}))
    + "\" autocomplete=\"off\">\n        <div id=\"passwordStrength\"></div>\n        <input type=\"password\" class=\"login-input-password\" id=\"confirmPassword\" value=\"\" placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.confirmpassword",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":24,"column":103},"end":{"line":24,"column":130}}}))
    + "\" autocomplete=\"off\">\n        <button type=\"submit\" class=\"btn secondary\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.changepassword",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":25,"column":52},"end":{"line":25,"column":78}}}))
    + "</button>\n        <button class=\"cancel btn white-hollow\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":26,"column":48},"end":{"line":26,"column":66}}}))
    + "</button>\n    </div>\n  </form>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["userProfile"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"form-group\">\n              <label>"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(alias1,"app.role",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":17,"column":21},"end":{"line":17,"column":37}}}))
    + "</label>\n              <dl>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"rolesAsName") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":21,"column":25}}})) != null ? stack1 : "")
    + "              </dl>\n            </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                  <dt>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</dt>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"change-password-section\">\n              <div class=\"form-group\">\n                <div class=\"inner display-none\">\n                  <label for=\"password\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.newpassword",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":54,"column":40},"end":{"line":54,"column":63}}}))
    + "\n                    <span class=\"req\">*</span>\n                    <span id=\"passwordError\" class=\"error feedback\"></span>\n                  </label>\n                  <input type=\"password\" class=\"width-15\" id=\"password\" value=\"\" autocomplete=\"off\">\n                  <input type=\"text\" class=\"width-15 display-none\" id=\"passwordText\" value=\"\" autocomplete=\"off\">\n                  <button href=\"#\" class=\"toggle-password display-none\"><i class=\"fa fa-eye\"></i></button>\n                </div>\n                <a href=\"#\" class=\"btn primary change-password\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.changepassword",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":62,"column":64},"end":{"line":62,"column":90}}}))
    + "</a>\n              </div>\n            </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"profile-inner\">\n  <div class=\"error-text display-none\">\n      "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.fixerrors",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":27}}}))
    + "\n  </div>\n  <div class=\"editing-overlay-panel form-container-style\">\n\n    <div class=\"editing-overlay-panel-content inner\">\n      <div class=\"intro-text\">\n        "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.editprofileinformation",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":9,"column":42}}}))
    + "\n      </div>\n      <div class=\"editing-overlay-panel-content-inner\">\n\n        <form class=\"forms\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"rolesAsName") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":10},"end":{"line":24,"column":17}}})) != null ? stack1 : "")
    + "\n          <div class=\"form-group\">\n            <label for=\"email\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.email",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":27,"column":31},"end":{"line":27,"column":48}}}))
    + "\n              <span class=\"req\">*</span>\n              <span id=\"emailError\" class=\"error\"></span>\n            </label>\n            <input type=\"email\" class=\"width-30\" id=\"email\" value=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":31,"column":67},"end":{"line":31,"column":76}}}) : helper)))
    + "\" autocomplete=\"off\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"firstName\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.firstname",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":35,"column":35},"end":{"line":35,"column":56}}}))
    + "\n              <span class=\"req\">*</span>\n              <span id=\"firstNameError\" class=\"error\"></span>\n            </label>\n            <input type=\"text\" class=\"width-30\" id=\"firstName\" value=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"firstName") || (depth0 != null ? lookupProperty(depth0,"firstName") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data,"loc":{"start":{"line":39,"column":70},"end":{"line":39,"column":83}}}) : helper)))
    + "\" autocomplete=\"off\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"lastName\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.lastname",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":43,"column":34},"end":{"line":43,"column":54}}}))
    + "\n              <span class=\"req\">*</span>\n              <span id=\"lastNameError\" class=\"error\"></span>\n            </label>\n            <input type=\"text\" class=\"width-30\" id=\"lastName\" value=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"lastName") || (depth0 != null ? lookupProperty(depth0,"lastName") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data,"loc":{"start":{"line":47,"column":69},"end":{"line":47,"column":81}}}) : helper)))
    + "\" autocomplete=\"off\">\n          </div>\n\n"
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"auth") : depth0),"local",{"name":"ifValueEquals","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":10},"end":{"line":65,"column":28}}})) != null ? stack1 : "")
    + "\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["userProfileSidebar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"sidebar-item-inner\">\n        <div class=\"separator\"></div>\n        <button class=\"user-profile-edit-sidebar-save action-primary\">\n            <span class=\"user-profile-edit-sidebar-save-inner\">\n                "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":8,"column":53},"end":{"line":8,"column":69}}}))
    + "\n            </span>\n        </button>\n        <button class=\"user-profile-edit-sidebar-cancel action-secondary\">\n            <span class=\"user-profile-edit-sidebar-cancel-inner\">\n                "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":13,"column":54},"end":{"line":13,"column":72}}}))
    + "\n            </span>\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["addUser"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <option value=\""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"_id") : stack1), depth0)) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"displayName") : stack1), depth0))
    + "</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <option value=\""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"_id") : stack1), depth0)) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"inner\">\n  <div class=\"title\">\n    "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.adduserformtitle",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":32}}}))
    + "\n  </div>\n  <form class=\"addUser forms\" action=\"api/user\" method=\"post\" autocomplete=\"off\">\n      <div class=\"form-group\">\n        <label>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.firstname",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":7,"column":15},"end":{"line":7,"column":36}}}))
    + " <span class=\"req\">*</span></label>\n        <div class=\"field-error display-none\" data-error=\"\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.validationrequired",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":8,"column":60},"end":{"line":8,"column":90}}}))
    + "</div>\n        <input type=\"text\" name=\"firstName\" autocomplete=\"off\">\n      </div>\n      <div class=\"form-group\">\n        <label>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.lastname",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":12,"column":15},"end":{"line":12,"column":35}}}))
    + "<span class=\"req\">*</span></label>\n        <div class=\"field-error display-none\" data-error=\"\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.validationrequired",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":13,"column":60},"end":{"line":13,"column":90}}}))
    + "</div>\n        <input type=\"text\" name=\"lastName\" autocomplete=\"off\">\n      </div>\n      <div class=\"form-group\">\n        <label>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.usernameoremail",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":17,"column":15},"end":{"line":17,"column":42}}}))
    + " <span class=\"req\">*</span></label>\n        <div class=\"field-error display-none\" data-error=\"\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.invalidusernameoremail",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":18,"column":60},"end":{"line":18,"column":94}}}))
    + "</div>\n        <input type=\"email\" name=\"email\" autocomplete=\"off\">\n      </div>\n      <div class=\"form-group\">\n          <label>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.password",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":22,"column":17},"end":{"line":22,"column":37}}}))
    + " <span class=\"req\">*</span></label>\n          <div class=\"field-error display-none\" data-error=\"\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.validationrequired",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":23,"column":62},"end":{"line":23,"column":92}}}))
    + "</div>\n          <input type=\"password\" name=\"password\" autocomplete=\"off\">\n      </div>\n      <div class=\"form-group\">\n        <label>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.tenant",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":27,"column":15},"end":{"line":27,"column":33}}}))
    + "</label>\n        <select name=\"_tenantId\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"globalData") : depth0)) != null ? lookupProperty(stack1,"allTenants") : stack1)) != null ? lookupProperty(stack1,"models") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":10},"end":{"line":31,"column":19}}})) != null ? stack1 : "")
    + "        </select>\n      </div>\n      <div class=\"form-group\">\n        <label>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.role",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":35,"column":15},"end":{"line":35,"column":31}}}))
    + "</label>\n        <select name=\"role\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"globalData") : depth0)) != null ? lookupProperty(stack1,"allRoles") : stack1)) != null ? lookupProperty(stack1,"models") : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":10},"end":{"line":39,"column":19}}})) != null ? stack1 : "")
    + "        </select>\n      </div>\n  </form>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["addUserSidebar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"separator\"></div>\n<div class=\"sidebar-item-inner\">\n  <button type=\"submit\" class=\"action-primary save\">\n    <span>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.save",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":4,"column":10},"end":{"line":4,"column":26}}}))
    + "</span>\n  </button>\n  <button type=\"button\" class=\"cancel action-secondary\">\n    <span>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.cancel",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":7,"column":10},"end":{"line":7,"column":28}}}))
    + "</span>\n  </button>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["user"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isDeleted") : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":28},"end":{"line":23,"column":19}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "\n          <a class=\"edit read edit-mode\"><i class=\"fa fa-pencil-square-o\"></i></a>\n          <div class=\"input-container write\">\n            <input class=\"input\" type=\"email\" data-modelKey=\"email\" autocomplete=\"off\">\n            <a class=\"save\"><i class=\"fa fa-check-square-o\"></i></a>\n            <a class=\"cancel\"><i class=\"fa fa-times\"></i></a>\n          </div>\n        ";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isDeleted") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":28},"end":{"line":40,"column":19}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n            <a class=\"edit read edit-mode\"><i class=\"fa fa-pencil-square-o\"></i></a>\n            <div class=\"write\">\n              <select class=\"input\" data-modelKey=\"_tenantId\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"globalData") : depth0)) != null ? lookupProperty(stack1,"allTenants") : stack1)) != null ? lookupProperty(stack1,"models") : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":16},"end":{"line":35,"column":25}}})) != null ? stack1 : "")
    + "              </select>\n              <a class=\"save\"><i class=\"fa fa-check-square-o\"></i></a>\n              <a class=\"cancel\"><i class=\"fa fa-times\"></i></a>\n            </div>\n        ";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <option value=\""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"_id") : stack1), depth0)) != null ? stack1 : "")
    + "\""
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depths[1] != null ? lookupProperty(depths[1],"_tenantId") : depths[1])) != null ? lookupProperty(stack1,"_id") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"_id") : stack1),{"name":"ifValueEquals","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":59},"end":{"line":34,"column":142}}})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"displayName") : stack1), depth0))
    + "</option>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return " selected";
},"9":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"no-wrap\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\n";
},"11":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isDeleted") : depth0),{"name":"unless","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":52,"column":28},"end":{"line":64,"column":19}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n            <a class=\"edit read edit-mode\"><i class=\"fa fa-pencil-square-o\"></i></a>\n            <div class=\"write\">\n              <select class=\"input\" data-modelKey=\"roles\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"globalData") : depth0)) != null ? lookupProperty(stack1,"allRoles") : stack1)) != null ? lookupProperty(stack1,"models") : stack1),{"name":"each","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":16},"end":{"line":59,"column":25}}})) != null ? stack1 : "")
    + "              </select>\n              <a class=\"saveRoles\"><i class=\"fa fa-check-square-o\"></i></a>\n              <a class=\"cancel\"><i class=\"fa fa-times\"></i></a>\n            </div>\n        ";
},"13":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <option value=\""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"_id") : stack1), depth0)) != null ? stack1 : "")
    + "\""
    + ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"roles") : depths[1])) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"_id") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"_id") : stack1),{"name":"ifValueEquals","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":59},"end":{"line":58,"column":141}}})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</option>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "          <i class=\"fa fa-lock\"></i>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"group\">\n              "
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.changeadminaccounts",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":83,"column":14},"end":{"line":83,"column":45}}}))
    + "\n            </div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "";
},"21":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "            <div class=\"group\">\n";
  stack1 = ((helper = (helper = lookupProperty(helpers,"ifMailEnabled") || (depth0 != null ? lookupProperty(depth0,"ifMailEnabled") : depth0)) != null ? helper : container.hooks.helperMissing),(options={"name":"ifMailEnabled","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.program(24, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":89,"column":14},"end":{"line":94,"column":32}}}),(typeof helper === "function" ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"ifMailEnabled")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.program(28, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":96,"column":12},"end":{"line":107,"column":19}}})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <button class=\"btn primary invite\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.inviteuser",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":90,"column":51},"end":{"line":90,"column":73}}}))
    + "</button>\n                <button class=\"btn primary resetPassword\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.resetpassword",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":91,"column":58},"end":{"line":91,"column":83}}}))
    + "</button>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <button class=\"btn tertiary changePassword\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.changepassword",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":93,"column":60},"end":{"line":93,"column":86}}}))
    + "</button>\n";
},"26":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <div class=\"group\">\n                <button class=\"btn secondary unlock\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.unlockuser",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":98,"column":53},"end":{"line":98,"column":75}}}))
    + "</button>\n              </div>\n";
},"28":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifValueEquals")||(depth0 && lookupProperty(depth0,"ifValueEquals"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"failedLoginCount") : depth0),0,{"name":"ifValueEquals","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.program(29, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":101,"column":14},"end":{"line":106,"column":32}}})) != null ? stack1 : "");
},"29":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"group\">\n                  <button class=\"btn secondary unlock\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.resetlogins",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":104,"column":55},"end":{"line":104,"column":78}}}))
    + "</button>\n                </div>\n";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"group\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isDeleted") : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.program(34, data, 0),"data":data,"loc":{"start":{"line":111,"column":14},"end":{"line":115,"column":21}}})) != null ? stack1 : "")
    + "              <hr>\n              <button class=\"btn alert edit-input delete\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.deleteuser",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":117,"column":58},"end":{"line":117,"column":80}}}))
    + "</button>\n              <select name=\"delete-options\">\n                <option value=\"transfer\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.deleteusertransfer",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":119,"column":41},"end":{"line":119,"column":71}}}))
    + "</option>\n                <option value=\"delete\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.deleteuserdelete",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":120,"column":39},"end":{"line":120,"column":67}}}))
    + "</option>\n                <option value=\"share\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.deleteusershare",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":121,"column":38},"end":{"line":121,"column":65}}}))
    + "</option>\n              </select>\n            </div>\n";
},"32":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <button class=\"btn action-primary restore\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.restoreuser",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":112,"column":59},"end":{"line":112,"column":82}}}))
    + "</button>\n";
},"34":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <button class=\"btn warning disable\">"
    + container.escapeExpression((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"app.disableuser",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":114,"column":52},"end":{"line":114,"column":75}}}))
    + "</button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"inner\">\n  <div class=\"col-row\">\n    <div class=\"col-25\">\n      <div class=\"tb-col-inner\">\n        <span class=\"read no-wrap\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":15,"column":35},"end":{"line":15,"column":44}}}) : helper)))
    + "</span>\n        "
    + ((stack1 = (lookupProperty(helpers,"ifUserNotMe")||(depth0 && lookupProperty(depth0,"ifUserNotMe"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_id") : depth0),{"name":"ifUserNotMe","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":23,"column":35}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n    <div class=\"col-15\">\n      <div class=\"tb-col-inner\">\n        <span class=\"read no-wrap\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"tenantName") || (depth0 != null ? lookupProperty(depth0,"tenantName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tenantName","hash":{},"data":data,"loc":{"start":{"line":28,"column":35},"end":{"line":28,"column":49}}}) : helper)))
    + "</span>\n        "
    + ((stack1 = (lookupProperty(helpers,"ifUserNotMe")||(depth0 && lookupProperty(depth0,"ifUserNotMe"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_id") : depth0),{"name":"ifUserNotMe","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":8},"end":{"line":40,"column":35}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n    <div class=\"col-15\">\n      <div class=\"tb-col-inner\">\n        <div class=\"read\">\n          <ul>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"roleNames") : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":10},"end":{"line":49,"column":19}}})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n        "
    + ((stack1 = (lookupProperty(helpers,"ifUserNotMe")||(depth0 && lookupProperty(depth0,"ifUserNotMe"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_id") : depth0),{"name":"ifUserNotMe","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":52,"column":8},"end":{"line":64,"column":35}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n    <div class=\"col-15 col-centered\">\n      <div class=\"tb-col-inner\">\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"failedLoginCount") || (depth0 != null ? lookupProperty(depth0,"failedLoginCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"failedLoginCount","hash":{},"data":data,"loc":{"start":{"line":69,"column":8},"end":{"line":69,"column":28}}}) : helper)))
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":8},"end":{"line":72,"column":15}}})) != null ? stack1 : "")
    + "      </div>\n    </div>\n    <div class=\"col-15 col-centered\">\n      <div class=\"tb-col-inner no-wrap\">"
    + alias4((lookupProperty(helpers,"momentFormat")||(depth0 && lookupProperty(depth0,"momentFormat"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"lastAccess") : depth0),"DD MMM-YY",{"name":"momentFormat","hash":{},"data":data,"loc":{"start":{"line":76,"column":40},"end":{"line":76,"column":79}}}))
    + "</div>\n    </div>\n    <div class=\"col-15\">\n      <div class=\"tb-col-inner\">\n        <div class=\"buttons edit-mode\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifUserIsMe")||(depth0 && lookupProperty(depth0,"ifUserIsMe"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_id") : depth0),{"name":"ifUserIsMe","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":81,"column":10},"end":{"line":85,"column":25}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isDeleted") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.program(21, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":86,"column":10},"end":{"line":108,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifUserNotMe")||(depth0 && lookupProperty(depth0,"ifUserNotMe"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_id") : depth0),{"name":"ifUserNotMe","hash":{},"fn":container.program(31, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":109,"column":10},"end":{"line":124,"column":26}}})) != null ? stack1 : "")
    + "        </div>\n      </div>\n    </div>\n</div>\n";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["userManagement"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\">\n    <div class=\"inner\">\n        <div class=\"tb-heading col-row tb-row\">\n            <div class=\"col-25\">\n              <button data-sort=\"email\" class=\"active sort sort-down\">\n                <h4 class=\"tb-col-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.usernameoremail",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":6,"column":41},"end":{"line":6,"column":68}}}))
    + "</h4>\n                <i class=\"fa\"></i>\n              </button>\n            </div>\n            <div class=\"col-15\">\n              <button data-sort=\"tenantName\" class=\"sort sort-down\">\n                <h4 class=\"tb-col-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.tenant",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":12,"column":41},"end":{"line":12,"column":59}}}))
    + "</h4>\n                <i class=\"fa\"></i>\n              </button>\n            </div>\n            <div class=\"col-15\">\n              <button data-sort=\"roleNames\" class=\"sort sort-down\">\n                <h4 class=\"tb-col-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.role",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":18,"column":41},"end":{"line":18,"column":57}}}))
    + "</h4>\n                <i class=\"fa\"></i>\n              </button>\n            </div>\n            <div class=\"col-15 col-centered\">\n              <button data-sort=\"failedLoginCount\" class=\"sort sort-down\">\n                <h4 class=\"tb-col-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.failedlogins",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":24,"column":41},"end":{"line":24,"column":65}}}))
    + "</h4>\n                <i class=\"fa\"></i>\n              </button>\n            </div>\n            <div class=\"col-15 col-centered\">\n              <button data-sort=\"lastAccess\" class=\"sort sort-down\">\n                <h4 class=\"tb-col-inner\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.lastaccess",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":30,"column":41},"end":{"line":30,"column":63}}}))
    + "</h4>\n                <i class=\"fa\"></i>\n              </button>\n            </div>\n            <div class=\"col-15\">\n            </div>\n        </div>\n        <ul class=\"users clearfix grid-layout\">\n        </ul>\n\n        <div class=\"action-buttons\">\n            <button class=\"btn tertiary-hollow refresh-all\">"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.refresh",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":42,"column":60},"end":{"line":42,"column":79}}}))
    + "</button>\n        </div>\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["userManagementFilter"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"displayName") || (depth0 != null ? lookupProperty(depth0,"displayName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data,"loc":{"start":{"line":14,"column":23},"end":{"line":14,"column":38}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"displayName") || (depth0 != null ? lookupProperty(depth0,"displayName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data,"loc":{"start":{"line":14,"column":40},"end":{"line":14,"column":55}}}) : helper)))
    + "</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"sidebar-row\">\n    <label class=\"sidebar-tag\">\n      <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":26,"column":12},"end":{"line":26,"column":20}}}) : helper)))
    + "</span>\n      <input type=\"checkbox\" name=\"roleNames\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":27,"column":53},"end":{"line":27,"column":61}}}) : helper)))
    + "\">\n      <i class=\"fa fa-toggle-off\"></i>\n    </label>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"filter-inner\">\n  <div class=\"sidebar-row-input\">\n    <input placeholder=\""
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.searchByMail",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":3,"column":24},"end":{"line":3,"column":48}}}))
    + "\" type=\"text\" class=\"search-email\">\n  </div>\n\n  <div class=\"sidebar-row sidebar-divide\">\n    <h3 class=\"sidebar-divide-inner\">\n      "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.tenant",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":24}}}))
    + "\n    </h3>\n  </div>\n  <div class=\"sidebar-row-input\">\n    <select name=\"tenantName\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"tenants") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":15,"column":15}}})) != null ? stack1 : "")
    + "    </select>\n  </div>\n  <div class=\"sidebar-row sidebar-divide\">\n    <h3 class=\"sidebar-divide-inner\">\n      "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.role",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":20,"column":6},"end":{"line":20,"column":22}}}))
    + "\n    </h3>\n  </div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"roles") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":2},"end":{"line":31,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["userManagementSidebar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"separator\"></div>\n<div class=\"sidebar-item-inner\">\n  <button class=\"action-primary add\">\n    "
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.addnewuser",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":4,"column":26}}}))
    + "\n  </button>\n  <div class=\"separator\"></div>\n  <div class=\"sidebar-row sidebar-divide\">\n      <h3 class=\"sidebar-divide-inner\">\n          <i class=\"fa fa-filter\"></i>"
    + alias3((lookupProperty(helpers,"t")||(depth0 && lookupProperty(depth0,"t"))||alias2).call(alias1,"app.assetfilters",{"name":"t","hash":{},"data":data,"loc":{"start":{"line":9,"column":38},"end":{"line":9,"column":62}}}))
    + "\n      </h3>\n  </div>\n\n</div>\n";
},"useData":true});

return this["Handlebars"];

});