/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

(c) Copyright 2009-2016 SAP SE. All rights reserved
 */
sap.ui.define(['sap/ui/dt/Plugin','sap/ui/dt/ElementUtil','sap/ui/rta/Utils'],function(P,E,R){"use strict";var M=P.extend("sap.ui.rta.plugin.MultiSelection",{metadata:{library:"sap.ui.rta",properties:{multiSelectionTypes:{type:"string[]"}}}});M.prototype.init=function(){P.prototype.init.apply(this,arguments);this._fnKeyDown=this._onKeyDown.bind(this);this._fnKeyUp=this._onKeyUp.bind(this);window.addEventListener("keydown",this._fnKeyDown);window.addEventListener("keyup",this._fnKeyUp);};M.prototype.exit=function(){P.prototype.exit.apply(this,arguments);window.removeEventListener("keydown",this._fnKeyDown);window.removeEventListener("keyup",this._fnKeyUp);};M.prototype.setDesignTime=function(d){this._oDesignTime=d;if(this._oDesignTime){this._oDesignTime.detachSelectionChange(this._onDesignTimeSelectionChange,this);}P.prototype.setDesignTime.apply(this,arguments);if(d){d.attachSelectionChange(this._onDesignTimeSelectionChange,this);}};M.prototype._onKeyDown=function(e){if(sap.ui.Device.os.name===sap.ui.Device.os.OS.WINDOWS){if(e.keyCode===17){this._oDesignTime.setSelectionMode(sap.ui.dt.SelectionMode.Multi);}}else if(sap.ui.Device.os.name===sap.ui.Device.os.OS.MACINTOSH){if(e.keyCode===91||e.keyCode===93){this._oDesignTime.setSelectionMode(sap.ui.dt.SelectionMode.Multi);}}};M.prototype._onKeyUp=function(e){if(sap.ui.Device.os.name===sap.ui.Device.os.OS.WINDOWS){if(e.keyCode===17){this._oDesignTime.setSelectionMode(sap.ui.dt.SelectionMode.Single);}}else if(sap.ui.Device.os.name===sap.ui.Device.os.OS.MACINTOSH){if(e.keyCode===91||e.keyCode===93){this._oDesignTime.setSelectionMode(sap.ui.dt.SelectionMode.Single);}}};M.prototype._onDesignTimeSelectionChange=function(e){if(this._oDesignTime.getSelectionMode()===sap.ui.dt.SelectionMode.Single){return;}var m=this.getMultiSelectionTypes();var b=true;var c=e.getParameter("selection")[e.getParameter("selection").length-1];var s=this._oDesignTime.getSelection();if(s&&s.length===1){c.setSelected(true);return;}if(!c||this._oDesignTime.getSelectionMode()===sap.ui.dt.SelectionMode.Single){return;}m.forEach(function(t,i,a){s.forEach(function(S){if(!E.isInstanceOf(S.getElementInstance(),t)){b=false;}});c.setSelected(b);});};return M;},true);
