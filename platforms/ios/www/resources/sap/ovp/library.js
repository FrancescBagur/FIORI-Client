/*!
 * Copyright (c) 2009-2014 SAP SE, All Rights Reserved
 */
jQuery.sap.declare("sap.ovp.library");jQuery.sap.require("sap.ui.core.Core");jQuery.sap.require("sap.ui.core.library");jQuery.sap.require("sap.ui.layout.library");jQuery.sap.require("sap.ui.generic.app.library");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.comp.library");sap.ui.getCore().initLibrary({name:"sap.ovp",dependencies:["sap.ui.core","sap.ui.layout","sap.ui.generic.app","sap.m","sap.ui.comp"],types:[],interfaces:[],controls:[],elements:[],version:"1.42.9"});jQuery.sap.require("sap.ui.Device");if(sap.ui.Device.browser.firefox){jQuery.sap.log.warning("Loading library 'sap.viz' to avoid issues with Firefox sync XHR support (https://bugzilla.mozilla.org/show_bug.cgi?id=697151)");sap.ui.getCore().loadLibrary("sap.viz");}
