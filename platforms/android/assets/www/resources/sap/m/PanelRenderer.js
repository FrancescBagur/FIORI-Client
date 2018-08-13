/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";var P={};P.render=function(r,c){this.startPanel(r,c);this.renderHeader(r,c);this.renderContent(r,c);this.endPanel(r);};P.startPanel=function(r,c){r.write("<section");r.addClass("sapMPanel");r.addStyle("width",c.getWidth());r.addStyle("height",c.getHeight());r.writeAccessibilityState(c,{role:"form",labelledby:c._getLabellingElementId()});r.writeControlData(c);r.writeClasses();r.writeStyles();r.write(">");};P.renderHeader=function(r,c){var i=c.getExpandable(),I=c.getExpanded(),h=c.getHeaderToolbar(),H;if(i){r.write("<header");if(h){H="sapMPanelWrappingDivTb";}else{H="sapMPanelWrappingDiv";}r.addClass(H);if(I){r.addClass(H+"Expanded");}r.writeClasses();r.write(">");var o=c._getIcon();if(I){o.addStyleClass("sapMPanelExpandableIconExpanded");}else{o.removeStyleClass("sapMPanelExpandableIconExpanded");}r.renderControl(o);}var s=c.getHeaderText();if(h){h.setDesign(sap.m.ToolbarDesign.Transparent,true);r.renderControl(h);}else if(s||i){r.write("<h1");r.addClass("sapMPanelHdr");r.writeClasses();r.writeAttribute("id",c.getId()+"-header");r.write(">");r.writeEscaped(s);r.write("</h1>");}if(i){r.write("</header>");}var a=c.getInfoToolbar();if(a){if(i){a.addStyleClass("sapMPanelExpandablePart");}a.setDesign(sap.m.ToolbarDesign.Info,true);r.renderControl(a);}};P.renderContent=function(r,c){this.startContent(r,c);this.renderChildren(r,c.getContent());this.endContent(r);};P.startContent=function(r,c){r.write("<div");r.addClass("sapMPanelContent");r.addClass("sapMPanelBG"+c.getBackgroundDesign());if(c.getExpandable()){r.addClass("sapMPanelExpandablePart");}r.writeClasses();r.write(">");};P.renderChildren=function(r,c){c.forEach(r.renderControl);};P.endContent=function(r){r.write("</div>");};P.endPanel=function(r){r.write("</section>");};return P;},true);
