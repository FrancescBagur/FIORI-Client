/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

(c) Copyright 2009-2016 SAP SE. All rights reserved
 */
sap.ui.define(['jquery.sap.global','sap/ui/dt/plugin/ControlDragDrop','sap/ui/rta/plugin/RTAElementMover'],function(q,C,R){"use strict";var D=C.extend("sap.ui.rta.plugin.DragDrop",{metadata:{library:"sap.ui.rta",properties:{elementMover:{type:"sap.ui.dt.plugin.ElementMover"}},associations:{},events:{dragStarted:{}}}});D.prototype.init=function(){C.prototype.init.apply(this,arguments);this.setElementMover(new R());};D.prototype.registerElementOverlay=function(o){if(o.isMovable()){this._attachMovableBrowserEvents(o);}C.prototype.registerElementOverlay.apply(this,arguments);};D.prototype.deregisterElementOverlay=function(o){C.prototype.deregisterElementOverlay.apply(this,arguments);this._detachMovableBrowserEvents(o);};D.prototype._attachMovableBrowserEvents=function(o){o.attachBrowserEvent("mouseover",this._onMouseOver,this);o.attachBrowserEvent("mouseleave",this._onMouseLeave,this);};D.prototype._detachMovableBrowserEvents=function(o){o.detachBrowserEvent("mouseover",this._onMouseOver,this);o.detachBrowserEvent("mouseleave",this._onMouseLeave,this);};D.prototype.onDragStart=function(o){this.fireDragStarted();C.prototype.onDragStart.apply(this,arguments);this.getDesignTime().getSelection().forEach(function(o){o.setSelected(false);});o.$().addClass("sapUiRtaOverlayPlaceholder");};D.prototype.onDragEnd=function(o){C.prototype.onDragEnd.apply(this,arguments);o.$().removeClass("sapUiRtaOverlayPlaceholder");o.setSelected(true);o.focus();};D.prototype.onMovableChange=function(o){C.prototype.onMovableChange.apply(this,arguments);if(o.isMovable()){this._attachMovableBrowserEvents(o);}else{this._detachMovableBrowserEvents(o);}};D.prototype._onMouseOver=function(e){var o=sap.ui.getCore().byId(e.currentTarget.id);if(o!==this._oPreviousHoverTarget){if(this._oPreviousHoverTarget){this._oPreviousHoverTarget.$().removeClass("sapUiRtaOverlayHover");}this._oPreviousHoverTarget=o;o.$().addClass("sapUiRtaOverlayHover");}e.preventDefault();e.stopPropagation();};D.prototype._onMouseLeave=function(e){if(this._oPreviousHoverTarget){this._oPreviousHoverTarget.$().removeClass("sapUiRtaOverlayHover");}delete this._oPreviousHoverTarget;e.preventDefault();e.stopPropagation();};return D;},true);
