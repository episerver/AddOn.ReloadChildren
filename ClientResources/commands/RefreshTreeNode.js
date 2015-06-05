define([
    "dojo/_base/declare",
    "dojo/topic",
    // Parent class and mixins
    "epi/shell/command/_Command",
    "epi/shell/command/_SelectionCommandMixin"
], function(
    declare,
    topic,
    // Parent class and mixins
    _Command,
    _SelectionCommandMixin
) {

    return declare([_Command, _SelectionCommandMixin], {

        label: "Reload Children",

        iconClass: "epi-iconReload",

        _execute: function() {
            topic.publish("/epi/cms/contentdata/childrenchanged", this.get("selectionData"));
        },

        _onModelChange: function() {
            this.set("canExecute", !!this.get("selectionData"));
        }
    });
});
