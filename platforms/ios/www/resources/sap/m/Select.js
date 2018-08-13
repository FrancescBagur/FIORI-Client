/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./Dialog','./Popover','./SelectList','./library','sap/ui/core/Control','sap/ui/core/EnabledPropagator','sap/ui/core/IconPool','./Button','./delegate/ValueStateMessage'],function(q,D,P,S,l,C,E,I,B,V){"use strict";var a=C.extend("sap.m.Select",{metadata:{library:"sap.m",properties:{name:{type:"string",group:"Misc",defaultValue:""},enabled:{type:"boolean",group:"Behavior",defaultValue:true},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"auto"},maxWidth:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"100%"},selectedKey:{type:"string",group:"Data",defaultValue:""},selectedItemId:{type:"string",group:"Misc",defaultValue:""},icon:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:""},type:{type:"sap.m.SelectType",group:"Appearance",defaultValue:sap.m.SelectType.Default},autoAdjustWidth:{type:"boolean",group:"Appearance",defaultValue:false},textAlign:{type:"sap.ui.core.TextAlign",group:"Appearance",defaultValue:sap.ui.core.TextAlign.Initial},textDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:sap.ui.core.TextDirection.Inherit},valueState:{type:"sap.ui.core.ValueState",group:"Appearance",defaultValue:sap.ui.core.ValueState.None},valueStateText:{type:"string",group:"Misc",defaultValue:""},showSecondaryValues:{type:"boolean",group:"Misc",defaultValue:false},forceSelection:{type:"boolean",group:"Behavior",defaultValue:true}},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.core.Item",multiple:true,singularName:"item",bindable:"bindable"},picker:{type:"sap.ui.core.PopupInterface",multiple:false,visibility:"hidden"}},associations:{selectedItem:{type:"sap.ui.core.Item",multiple:false},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{change:{parameters:{selectedItem:{type:"sap.ui.core.Item"}}}},designTime:true}});I.insertFontFaceStyle();E.apply(a.prototype,[true]);function h(i){if(i){this.setSelection(i);this.setValue(i.getText());this.scrollToItem(i);}}a.prototype._handleFocusout=function(){this._bFocusoutDueRendering=this.bRenderingPhase;if(this._bFocusoutDueRendering){this._bProcessChange=false;return;}if(this._bProcessChange){this._checkSelectionChange();this._bProcessChange=false;}else{this._bProcessChange=true;}};a.prototype._checkSelectionChange=function(){var i=this.getSelectedItem();if(this._oSelectionOnFocus!==i){this.fireChange({selectedItem:i});}};a.prototype._getSelectedItemText=function(i){i=i||this.getSelectedItem();if(!i){i=this.getDefaultSelectedItem();}if(i){return i.getText();}return"";};a.prototype._callMethodInControl=function(f,A){var L=this.getList();if(A[0]==="items"){if(L){return S.prototype[f].apply(L,A);}}else{return C.prototype[f].apply(this,A);}};a.prototype.findFirstEnabledItem=function(i){var L=this.getList();return L?L.findFirstEnabledItem(i):null;};a.prototype.findLastEnabledItem=function(i){var L=this.getList();return L?L.findLastEnabledItem(i):null;};a.prototype.setSelectedIndex=function(i,_){var o;_=_||this.getItems();i=(i>_.length-1)?_.length-1:Math.max(0,i);o=_[i];if(o){this.setSelection(o);}};a.prototype.scrollToItem=function(i){var p=this.getPicker(),o=p.getDomRef("cont"),b=i&&i.getDomRef();if(!p||!o||!b){return;}var c=o.scrollTop,d=b.offsetTop,e=o.clientHeight,f=b.offsetHeight;if(c>d){o.scrollTop=d;}else if((d+f)>(c+e)){o.scrollTop=Math.ceil(d+f-e);}};a.prototype.setValue=function(v){this.$("label").text(v);};a.prototype._isShadowListRequired=function(){if(this.getAutoAdjustWidth()){return false;}else if(this.getWidth()==="auto"){return true;}return false;};a.prototype._handleAriaActiveDescendant=function(i){var d=this.getDomRef(),o=i&&i.getDomRef(),A="aria-activedescendant";if(!d){return;}if(o&&this.isOpen()){d.setAttribute(A,i.getId());}else{d.removeAttribute(A);}};a.prototype.getList=function(){if(this.bIsDestroyed){return null;}return this._oList;};a.prototype.updateItems=function(r){S.prototype.updateItems.apply(this,arguments);this._oSelectionOnFocus=this.getSelectedItem();};a.prototype.refreshItems=function(){S.prototype.refreshItems.apply(this,arguments);};a.prototype.onBeforeOpen=function(c){var p=this["_onBeforeOpen"+this.getPickerType()];this.addStyleClass(this.getRenderer().CSS_CLASS+"Pressed");this.closeValueStateMessage();this.addContent();p&&p.call(this);};a.prototype.onAfterOpen=function(c){var d=this.getFocusDomRef(),i=null;if(!d){return;}i=this.getSelectedItem();d.setAttribute("aria-expanded","true");d.setAttribute("aria-owns",this.getList().getId());if(i){d.setAttribute("aria-activedescendant",i.getId());this.scrollToItem(i);}};a.prototype.onBeforeClose=function(c){var d=this.getFocusDomRef();if(d){d.removeAttribute("aria-owns");d.removeAttribute("aria-activedescendant");if(this.shouldValueStateMessageBeOpened()&&(document.activeElement===d)){this.openValueStateMessage();}}this.removeStyleClass(this.getRenderer().CSS_CLASS+"Pressed");};a.prototype.onAfterClose=function(c){var d=this.getFocusDomRef();if(d){d.setAttribute("aria-expanded","false");}};a.prototype.getPicker=function(){if(this.bIsDestroyed){return null;}return this.createPicker(this.getPickerType());};a.prototype.setPickerType=function(p){this._sPickerType=p;};a.prototype.getPickerType=function(){return this._sPickerType;};a.prototype._createPopover=function(){var t=this;var p=new P({showArrow:false,showHeader:false,placement:sap.m.PlacementType.VerticalPreferredBottom,offsetX:0,offsetY:0,initialFocus:this,bounce:false});p.addEventDelegate({ontouchstart:function(e){var o=this.getDomRef("cont");if((e.target===o)||(e.srcControl instanceof sap.ui.core.Item)){t._bProcessChange=false;}}},p);this._decoratePopover(p);return p;};a.prototype._decoratePopover=function(p){var t=this;p.open=function(){return this.openBy(t);};};a.prototype._onBeforeRenderingPopover=function(){var p=this.getPicker(),w=(this.$().outerWidth()/parseFloat(sap.m.BaseFontSize))+"rem";if(p){p.setContentMinWidth(w);}};a.prototype._createDialog=function(){var t=this;return new D({stretch:true,showHeader:false,buttons:[this.createPickerCloseButton()],beforeOpen:function(){t.updatePickerHeaderTitle();}});};a.prototype.createPickerCloseButton=function(){var t=this;var r=sap.ui.getCore().getLibraryResourceBundle("sap.m");return new B({text:r.getText("SELECT_CANCEL_BUTTON"),press:function(){t.close();}});};a.prototype.updatePickerHeaderTitle=function(){var p=this.getPicker();if(!p){return;}var L=this.getLabels();if(L.length){var o=L[0];if(o&&(typeof o.getText==="function")){p.setShowHeader(true);p.setTitle(o.getText());}}else{p.setShowHeader(false);}};a.prototype._onBeforeOpenDialog=function(){};a.prototype.init=function(){this.setPickerType(sap.ui.Device.system.phone?"Dialog":"Popover");this.createPicker(this.getPickerType());this._oSelectionOnFocus=null;this.bRenderingPhase=false;this._bFocusoutDueRendering=false;this._bProcessChange=false;this.sTypedChars="";this.iTypingTimeoutID=-1;this._oValueStateMessage=new V(this);};a.prototype.onBeforeRendering=function(){this.bRenderingPhase=true;if(sap.ui.Device.browser.firefox&&(this.getFocusDomRef()===document.activeElement)){this._handleFocusout();}this.synchronizeSelection();};a.prototype.onAfterRendering=function(){this.bRenderingPhase=false;};a.prototype.exit=function(){var v=this.getValueStateMessage();this._oSelectionOnFocus=null;if(v){this.closeValueStateMessage();v.destroy();}this._oValueStateMessage=null;};a.prototype.ontouchstart=function(e){e.setMarked();if(this.getEnabled()&&this.isOpenArea(e.target)){this.addStyleClass(this.getRenderer().CSS_CLASS+"Pressed");}};a.prototype.ontouchend=function(e){e.setMarked();if(this.getEnabled()&&!this.isOpen()&&this.isOpenArea(e.target)){this.removeStyleClass(this.getRenderer().CSS_CLASS+"Pressed");}};a.prototype.ontap=function(e){var b=this.getRenderer().CSS_CLASS;e.setMarked();if(!this.getEnabled()){return;}if(this.isOpenArea(e.target)){if(this.isOpen()){this.close();this.removeStyleClass(b+"Pressed");return;}this.open();}if(this.isOpen()){this.addStyleClass(b+"Pressed");}};a.prototype.onSelectionChange=function(c){var i=c.getParameter("selectedItem");this.close();this.setSelection(i);this.fireChange({selectedItem:i});this.setValue(this._getSelectedItemText());};a.prototype.onkeypress=function(e){if(!this.getEnabled()){return;}e.setMarked();var t=String.fromCharCode(e.which),s=this.getSelectedItem(),T=t,i=null;this.sTypedChars+=t;if((s&&q.sap.startsWithIgnoreCase(s.getText(),this.sTypedChars))||((this.sTypedChars.length===1)||((this.sTypedChars.length>1)&&(this.sTypedChars.charAt(0)!==this.sTypedChars.charAt(1))))){T=this.sTypedChars;}i=this.searchNextItemByText(T);clearTimeout(this.iTypingTimeoutID);this.iTypingTimeoutID=setTimeout(function(){this.sTypedChars="";this.iTypingTimeoutID=-1;}.bind(this),1000);h.call(this,i);};a.prototype.onsapshow=function(e){if(!this.getEnabled()){return;}e.setMarked();if(e.which===q.sap.KeyCodes.F4){e.preventDefault();}this.toggleOpenState();};a.prototype.onsaphide=a.prototype.onsapshow;a.prototype.onsapescape=function(e){if(!this.getEnabled()){return;}if(this.isOpen()){e.setMarked();this.close();this._checkSelectionChange();}};a.prototype.onsapenter=function(e){if(!this.getEnabled()){return;}e.setMarked();this.close();this._checkSelectionChange();};a.prototype.onsapspace=function(e){if(!this.getEnabled()){return;}e.setMarked();e.preventDefault();if(this.isOpen()){this._checkSelectionChange();}this.toggleOpenState();};a.prototype.onsapdown=function(e){if(!this.getEnabled()){return;}e.setMarked();e.preventDefault();var n,s=this.getSelectableItems();n=s[s.indexOf(this.getSelectedItem())+1];h.call(this,n);};a.prototype.onsapup=function(e){if(!this.getEnabled()){return;}e.setMarked();e.preventDefault();var p,s=this.getSelectableItems();p=s[s.indexOf(this.getSelectedItem())-1];h.call(this,p);};a.prototype.onsaphome=function(e){if(!this.getEnabled()){return;}e.setMarked();e.preventDefault();var f=this.getSelectableItems()[0];h.call(this,f);};a.prototype.onsapend=function(e){if(!this.getEnabled()){return;}e.setMarked();e.preventDefault();var L=this.findLastEnabledItem(this.getSelectableItems());h.call(this,L);};a.prototype.onsappagedown=function(e){if(!this.getEnabled()){return;}e.setMarked();e.preventDefault();var s=this.getSelectableItems(),o=this.getSelectedItem();this.setSelectedIndex(s.indexOf(o)+10,s);o=this.getSelectedItem();if(o){this.setValue(o.getText());}this.scrollToItem(o);};a.prototype.onsappageup=function(e){if(!this.getEnabled()){return;}e.setMarked();e.preventDefault();var s=this.getSelectableItems(),o=this.getSelectedItem();this.setSelectedIndex(s.indexOf(o)-10,s);o=this.getSelectedItem();if(o){this.setValue(o.getText());}this.scrollToItem(o);};a.prototype.onfocusin=function(e){if(!this._bFocusoutDueRendering&&!this._bProcessChange){this._oSelectionOnFocus=this.getSelectedItem();}this._bProcessChange=true;setTimeout(function(){if(!this.isOpen()&&this.shouldValueStateMessageBeOpened()&&(document.activeElement===this.getFocusDomRef())){this.openValueStateMessage();}}.bind(this),100);if(e.target!==this.getFocusDomRef()){this.focus();}};a.prototype.onfocusout=function(e){this._handleFocusout();if(this.bRenderingPhase){return;}this.closeValueStateMessage();};a.prototype.onsapfocusleave=function(e){var p=this.getAggregation("picker");if(!e.relatedControlId||!p){return;}var c=sap.ui.getCore().byId(e.relatedControlId),f=c&&c.getFocusDomRef();if(sap.ui.Device.system.desktop&&q.sap.containsOrEquals(p.getFocusDomRef(),f)){this.focus();}};a.prototype.setSelection=function(i){var L=this.getList(),k;if(L){L.setSelection(i);}this.setAssociation("selectedItem",i,true);this.setProperty("selectedItemId",(i instanceof sap.ui.core.Item)?i.getId():i,true);if(typeof i==="string"){i=sap.ui.getCore().byId(i);}k=i?i.getKey():"";this.setProperty("selectedKey",k,true);this._handleAriaActiveDescendant(i);};a.prototype.isSelectionSynchronized=function(){var i=this.getSelectedItem();return this.getSelectedKey()===(i&&i.getKey());};a.prototype.synchronizeSelection=function(){S.prototype.synchronizeSelection.apply(this,arguments);};a.prototype.addContent=function(p){};a.prototype.createPicker=function(p){var o=this.getAggregation("picker"),b=this.getRenderer().CSS_CLASS;if(o){return o;}o=this["_create"+p]();this.setAggregation("picker",o,true);o.setHorizontalScrolling(false).addStyleClass(b+"Picker").addStyleClass(b+"Picker-CTX").attachBeforeOpen(this.onBeforeOpen,this).attachAfterOpen(this.onAfterOpen,this).attachBeforeClose(this.onBeforeClose,this).attachAfterClose(this.onAfterClose,this).addEventDelegate({onBeforeRendering:this.onBeforeRenderingPicker,onAfterRendering:this.onAfterRenderingPicker},this).addContent(this.createList());return o;};a.prototype.searchNextItemByText=function(t){var b=this.getItems(),s=this.getSelectedIndex(),c=b.splice(s+1,b.length-s),d=b.splice(0,b.length-1);b=c.concat(d);for(var i=0,o;i<b.length;i++){o=b[i];if(o.getEnabled()&&!(o instanceof sap.ui.core.SeparatorItem)&&q.sap.startsWithIgnoreCase(o.getText(),t)){return o;}}return null;};a.prototype.createList=function(){var L=sap.m.SelectListKeyboardNavigationMode,k=sap.ui.Device.system.phone?L.Delimited:L.None;this._oList=new S({width:"100%",keyboardNavigationMode:k}).addStyleClass(this.getRenderer().CSS_CLASS+"List-CTX").addEventDelegate({ontap:function(e){this.close();}},this).attachSelectionChange(this.onSelectionChange,this);return this._oList;};a.prototype.hasContent=function(){return this.getItems().length>0;};a.prototype.onBeforeRenderingPicker=function(){var o=this["_onBeforeRendering"+this.getPickerType()];o&&o.call(this);};a.prototype.onAfterRenderingPicker=function(){var o=this["_onAfterRendering"+this.getPickerType()];o&&o.call(this);};a.prototype.open=function(){var p=this.getPicker();if(p){p.open();}return this;};a.prototype.toggleOpenState=function(){if(this.isOpen()){this.close();}else{this.open();}return this;};a.prototype.getVisibleItems=function(){var L=this.getList();return L?L.getVisibleItems():[];};a.prototype.isItemSelected=function(i){return i&&(i.getId()===this.getAssociation("selectedItem"));};a.prototype.getSelectedIndex=function(){var s=this.getSelectedItem();return s?this.indexOfItem(this.getSelectedItem()):-1;};a.prototype.getDefaultSelectedItem=function(i){return this.getForceSelection()?this.findFirstEnabledItem():null;};a.prototype.getSelectableItems=function(){var L=this.getList();return L?L.getSelectableItems():[];};a.prototype.getOpenArea=function(){return this.getDomRef();};a.prototype.isOpenArea=function(d){var o=this.getOpenArea();return o&&o.contains(d);};a.prototype.findItem=function(p,v){var L=this.getList();return L?L.findItem(p,v):null;};a.prototype.clearSelection=function(){this.setSelection(null);};a.prototype.onItemChange=function(c){var s=this.getAssociation("selectedItem"),n=c.getParameter("newValue"),p=c.getParameter("name");if(s===c.getParameter("id")){switch(p){case"text":this.setValue(n);break;case"key":if(!this.isBound("selectedKey")){this.setSelectedKey(n);}break;}}};a.prototype.fireChange=function(p){this._oSelectionOnFocus=p.selectedItem;return this.fireEvent("change",p);};a.prototype.addAggregation=function(A,o,s){this._callMethodInControl("addAggregation",arguments);if(A==="items"&&!s&&!this.isInvalidateSuppressed()){this.invalidate(o);}return this;};a.prototype.getAggregation=function(){return this._callMethodInControl("getAggregation",arguments);};a.prototype.setAssociation=function(A,i,s){var L=this.getList();if(L&&(A==="selectedItem")){S.prototype.setAssociation.apply(L,arguments);}return C.prototype.setAssociation.apply(this,arguments);};a.prototype.indexOfAggregation=function(){return this._callMethodInControl("indexOfAggregation",arguments);};a.prototype.insertAggregation=function(){this._callMethodInControl("insertAggregation",arguments);return this;};a.prototype.removeAggregation=function(){return this._callMethodInControl("removeAggregation",arguments);};a.prototype.removeAllAggregation=function(){return this._callMethodInControl("removeAllAggregation",arguments);};a.prototype.destroyAggregation=function(A,s){this._callMethodInControl("destroyAggregation",arguments);if(!s&&!this.isInvalidateSuppressed()){this.invalidate();}return this;};a.prototype.setProperty=function(p,v,s){var L=this.getList();if((p==="selectedKey")||(p==="selectedItemId")){L&&S.prototype.setProperty.apply(L,arguments);}return C.prototype.setProperty.apply(this,arguments);};a.prototype.removeAllAssociation=function(A,s){var L=this.getList();if(L&&(A==="selectedItem")){S.prototype.removeAllAssociation.apply(L,arguments);}return C.prototype.removeAllAssociation.apply(this,arguments);};a.prototype.clone=function(){var s=C.prototype.clone.apply(this,arguments),L=this.getList(),o=this.getSelectedItem(),b=this.getSelectedKey();if(!this.isBound("items")&&L){for(var i=0,c=L.getItems();i<c.length;i++){s.addItem(c[i].clone());}}if(!this.isBound("selectedKey")&&!s.isSelectionSynchronized()){if(o&&(b==="")){s.setSelectedIndex(this.indexOfItem(o));}else{s.setSelectedKey(b);}}return s;};a.prototype.updateValueStateClasses=function(v,o){var t=this.$(),L=this.$("label"),A=this.$("arrow"),m=sap.ui.core.ValueState,b=this.getRenderer().CSS_CLASS;if(o!==m.None){t.removeClass(b+"State");t.removeClass(b+o);L.removeClass(b+"LabelState");L.removeClass(b+"Label"+o);A.removeClass(b+"ArrowState");}if(v!==m.None){t.addClass(b+"State");t.addClass(b+v);L.addClass(b+"LabelState");L.addClass(b+"Label"+v);A.addClass(b+"ArrowState");}};a.prototype.getLabels=function(){var L=this.getAriaLabelledBy().map(function(s){return sap.ui.getCore().byId(s);});var o=sap.ui.require("sap/ui/core/LabelEnablement");if(o){L=L.concat(o.getReferencingLabels(this).map(function(s){return sap.ui.getCore().byId(s);}));}return L;};a.prototype.getDomRefForValueStateMessage=function(){return this.getDomRef();};a.prototype.getValueStateMessageId=function(){return this.getId()+"-message";};a.prototype.getValueStateMessage=function(){return this._oValueStateMessage;};a.prototype.openValueStateMessage=function(){var v=this.getValueStateMessage();if(v){v.open();}};a.prototype.closeValueStateMessage=function(){var v=this.getValueStateMessage();if(v){v.close();}};a.prototype.shouldValueStateMessageBeOpened=function(){return((this.getValueState()!==sap.ui.core.ValueState.None)&&this.getEnabled());};a.prototype.setShowSecondaryValues=function(A){var s=!this._isShadowListRequired();this.setProperty("showSecondaryValues",A,s);var L=this.getList();if(L){L.setShowSecondaryValues(A);}return this;};a.prototype.addItem=function(i){this.addAggregation("items",i);if(i){i.attachEvent("_change",this.onItemChange,this);}return this;};a.prototype.insertItem=function(i,b){this.insertAggregation("items",i,b);if(i){i.attachEvent("_change",this.onItemChange,this);}return this;};a.prototype.findAggregatedObjects=function(){var L=this.getList();if(L){return S.prototype.findAggregatedObjects.apply(L,arguments);}return[];};a.prototype.getItems=function(){var L=this.getList();return L?L.getItems():[];};a.prototype.setSelectedItem=function(i){if(typeof i==="string"){this.setAssociation("selectedItem",i,true);i=sap.ui.getCore().byId(i);}if(!(i instanceof sap.ui.core.Item)&&i!==null){return this;}if(!i){i=this.getDefaultSelectedItem();}this.setSelection(i);this.setValue(this._getSelectedItemText(i));return this;};a.prototype.setSelectedItemId=function(i){i=this.validateProperty("selectedItemId",i);if(!i){i=this.getDefaultSelectedItem();}this.setSelection(i);this.setValue(this._getSelectedItemText());return this;};a.prototype.setSelectedKey=function(k){k=this.validateProperty("selectedKey",k);var d=(k==="");if(!this.getForceSelection()&&d){this.setSelection(null);this.setValue("");return this;}var i=this.getItemByKey(k);if(i||d){if(!i&&d){i=this.getDefaultSelectedItem();}this.setSelection(i);this.setValue(this._getSelectedItemText(i));return this;}return this.setProperty("selectedKey",k);};a.prototype.setValueState=function(v){var o=this.getValueState();this.setProperty("valueState",v,true);v=this.getValueState();if(v===o){return this;}var d=this.getDomRefForValueState();if(!d){return this;}var m=sap.ui.core.ValueState;if(v===m.Error){d.setAttribute("aria-invalid",true);}else{d.removeAttribute("aria-invalid");}this.updateValueStateClasses(v,o);return this;};a.prototype.getItemAt=function(i){return this.getItems()[+i]||null;};a.prototype.getSelectedItem=function(){var s=this.getAssociation("selectedItem");return(s===null)?null:sap.ui.getCore().byId(s)||null;};a.prototype.getFirstItem=function(){return this.getItems()[0]||null;};a.prototype.getLastItem=function(){var i=this.getItems();return i[i.length-1]||null;};a.prototype.getEnabledItems=function(i){var L=this.getList();return L?L.getEnabledItems(i):[];};a.prototype.getItemByKey=function(k){var L=this.getList();return L?L.getItemByKey(k):null;};a.prototype.removeItem=function(i){var L=this.getList(),o;i=L?L.removeItem(i):null;if(this.getItems().length===0){this.clearSelection();}else if(this.isItemSelected(i)){o=this.findFirstEnabledItem();if(o){this.setSelection(o);}}this.setValue(this._getSelectedItemText());if(i){i.detachEvent("_change",this.onItemChange,this);}return i;};a.prototype.removeAllItems=function(){var L=this.getList(),b=L?L.removeAllItems():[];this.setValue("");if(this._isShadowListRequired()){this.$().children(".sapMSelectListItemBase").remove();}for(var i=0;i<b.length;i++){b[i].detachEvent("_change",this.onItemChange,this);}return b;};a.prototype.destroyItems=function(){var L=this.getList();if(L){L.destroyItems();}this.setValue("");if(this._isShadowListRequired()){this.$().children(".sapMSelectListItemBase").remove();}return this;};a.prototype.isOpen=function(){var p=this.getAggregation("picker");return!!(p&&p.isOpen());};a.prototype.close=function(){var p=this.getAggregation("picker");if(p){p.close();}return this;};a.prototype.getDomRefForValueState=function(){return this.getDomRef();};a.prototype.getAccessibilityInfo=function(){var i={role:this.getRenderer().getAriaRole(this),focusable:this.getEnabled(),enabled:this.getEnabled()};if(this.getType()==="IconOnly"){var d=this.getTooltip_AsString();if(!d){var o=I.getIconInfo(this.getIcon());d=o&&o.text?o.text:"";}i.type=sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("ACC_CTR_TYPE_BUTTON");i.description=d;}else if(this.getType()==="Default"){i.type=sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("ACC_CTR_TYPE_COMBO");i.description=this._getSelectedItemText();}return i;};a.prototype.propagateMessages=function(n,m){if(m&&m.length>0){this.setValueState(m[0].type);this.setValueStateText(m[0].message);}else{this.setValueState(sap.ui.core.ValueState.None);this.setValueStateText("");}};a.prototype.refreshDataState=function(n,d){if(d.getChanges().messages){this.propagateMessages(n,d.getMessages());}};return a;},true);
