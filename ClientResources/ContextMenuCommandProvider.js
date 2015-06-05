define([
    "dojo/_base/lang",
    "epi-cms/component/ContentContextMenuCommandProvider",
    "reload-children/commands/RefreshTreeNode"
], function(
    lang,
    ContentContextMenuCommandProvider,
    RefreshTreeNode
) {

    var originalMethod = ContentContextMenuCommandProvider.prototype.postscript;

    lang.mixin(ContentContextMenuCommandProvider.prototype, {

        postscript: function() {
            originalMethod.call(this);

            var refreshCommand = new RefreshTreeNode(this._settings);

            this.commands.push(refreshCommand);
        }
    });

    ContentContextMenuCommandProvider.prototype.postscript.nom = "postscript";

});
