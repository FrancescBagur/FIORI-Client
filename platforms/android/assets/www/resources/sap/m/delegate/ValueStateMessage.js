/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/Device','sap/ui/base/Object','sap/ui/core/ValueStateSupport','sap/ui/core/Popup'],function(q,D,B,V,P){"use strict";var a=B.extend("sap.m.delegate.ValueState",{constructor:function(c){B.apply(this,arguments);this._oControl=c;this._oPopup=null;}});a.prototype.open=function(){var c=this._oControl,p=this.getPopup(),m=this.createDom(),d=P.Dock,C=q(c.getDomRefForValueStateMessage());if(!c||!p||!m){return;}p.setContent(m);p.close(0);if(p.getContent()){p.getContent().style.maxWidth=c.getDomRef().offsetWidth+"px";}else{p.getContent().style.maxWidth="";}p.open(this.getOpenDuration(),d.BeginTop,d.BeginBottom,c.getDomRefForValueStateMessage(),null,null,D.system.phone?true:P.CLOSE_ON_SCROLL);var $=q(m);if(C.offset().top<$.offset().top){$.addClass("sapMValueStateMessageBottom");}else{$.addClass("sapMValueStateMessageTop");}C.addAriaDescribedBy(this.getId());};a.prototype.close=function(){var c=this._oControl,p=this.getPopup();if(p){p.close(0);}if(c){q(c.getFocusDomRef()).removeAriaDescribedBy(this.getId());}};a.prototype.getId=function(){var c=this._oControl;if(!c){return"";}return(typeof c.getValueStateMessageId==="function")?c.getValueStateMessageId():c.getId()+"-message";};a.prototype.getOpenDuration=function(){var c=this._oControl;if(!c){return 0;}return(c.iOpenMessagePopupDuration===undefined)?0:c.iOpenMessagePopupDuration;};a.prototype.createPopup=function(i){i=i||this.getId();if(this._oPopup){return this._oPopup;}this._oPopup=new P(document.createElement("span"),false,false,false);this._oPopup.attachClosed(function(){q.sap.byId(i).remove();});return this._oPopup;};a.prototype.getPopup=function(){if(!this._oControl){return null;}return this.createPopup();};a.prototype.createDom=function(){var c=this._oControl;if(!c){return null;}var s=c.getValueState(),t=c.getValueStateText()||sap.ui.core.ValueStateSupport.getAdditionalText(c),C="sapMValueStateMessage sapMValueStateMessage"+s,r=sap.ui.getCore().getLibraryResourceBundle("sap.m");if(s===sap.ui.core.ValueState.Success){C="sapUiInvisibleText";t="";}var i=this.getId();var m=document.createElement("div");m.id=i;m.className=C;m.setAttribute("role","tooltip");m.setAttribute("aria-live","assertive");var A=document.createElement("span");A.id=i+"hidden";A.className="sapUiHidden";A.setAttribute("aria-hidden","true");A.appendChild(document.createTextNode(r.getText("INPUTBASE_VALUE_STATE_"+s.toUpperCase())));m.appendChild(A);m.appendChild(document.createTextNode(t));return m;};a.prototype.destroy=function(){if(this._oPopup){this._oPopup.destroy();this._oPopup=null;}this._oControl=null;};return a;});
