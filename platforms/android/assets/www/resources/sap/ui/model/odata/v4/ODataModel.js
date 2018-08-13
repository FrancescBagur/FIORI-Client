/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/message/Message","sap/ui/model/BindingMode","sap/ui/model/Model","sap/ui/model/odata/OperationMode","sap/ui/thirdparty/URI","./_ODataHelper","./lib/_MetadataRequestor","./lib/_Requestor","./ODataContextBinding","./ODataListBinding","./ODataMetaModel","./ODataPropertyBinding"],function(q,M,B,a,O,U,_,b,c,d,e,f,g){"use strict";var C="sap.ui.model.odata.v4.ODataModel",s={messageChange:true},S={annotationURI:true,groupId:true,operationMode:true,serviceUrl:true,synchronizationMode:true,updateGroupId:true};var h=a.extend(C,{constructor:function(p){var H={"Accept-Language":sap.ui.getCore().getConfiguration().getLanguageTag()},P,i,u;a.apply(this);if(!p||p.synchronizationMode!=="None"){throw new Error("Synchronization mode must be 'None'");}for(P in p){if(!(P in S)){throw new Error("Unsupported parameter: "+P);}}i=p.serviceUrl;if(!i){throw new Error("Missing service root URL");}u=new U(i);if(u.path()[u.path().length-1]!=="/"){throw new Error("Service root URL must end with '/'");}if(p.operationMode&&p.operationMode!==O.Server){throw new Error("Unsupported operation mode: "+p.operationMode);}this.sOperationMode=p.operationMode;this.mUriParameters=_.buildQueryOptions(null,u.query(true),null,true);this.sServiceUrl=u.query("").toString();this.sGroupId=p.groupId;if(this.sGroupId===undefined){this.sGroupId="$auto";}if(this.sGroupId!=="$auto"&&this.sGroupId!=="$direct"){throw new Error("Group ID must be '$auto' or '$direct'");}_.checkGroupId(p.updateGroupId,false,"Invalid update group ID: ");this.sUpdateGroupId=p.updateGroupId||this.getGroupId();this.oMetaModel=new f(b.create(H,this.mUriParameters),this.sServiceUrl+"$metadata",p.annotationURI);this.oRequestor=c.create(this.sServiceUrl,H,this.mUriParameters);this.aAllBindings=[];this.mCallbacksByGroupId={};this.sDefaultBindingMode=B.TwoWay;this.mSupportedBindingModes={OneTime:true,OneWay:true,TwoWay:true};}});h.prototype._submitBatch=function(G){var i=this.mCallbacksByGroupId[G],p;p=this.oRequestor.submitBatch(G)["catch"](function(E){q.sap.log.error("$batch failed",E.message,C);throw E;});if(i){delete this.mCallbacksByGroupId[G];i.forEach(function(j){j();});}return p;};h.prototype.addedRequestToGroup=function(G,i){var j=this.mCallbacksByGroupId[G];if(G==="$direct"){if(i){i();}return;}if(!j){j=this.mCallbacksByGroupId[G]=[];if(G==="$auto"){sap.ui.getCore().addPrerenderingTask(this._submitBatch.bind(this,G));}}if(i){j.push(i);}};h.prototype.attachEvent=function(E){if(!(E in s)){throw new Error("Unsupported event '"+E+"': v4.ODataModel#attachEvent");}return a.prototype.attachEvent.apply(this,arguments);};h.prototype.bindContext=function(p,o,P){return new d(this,p,o,P);};h.prototype.bindingCreated=function(o){this.aAllBindings.push(o);};h.prototype.bindingDestroyed=function(o){var i=this.aAllBindings.indexOf(o);if(i<0){throw new Error("Unknown "+o);}this.aAllBindings.splice(i,1);};h.prototype.bindList=function(p,o,v,F,P){return new e(this,p,o,v,F,P);};h.prototype.bindProperty=function(p,o,P){return new g(this,p,o,P);};h.prototype.bindTree=function(){throw new Error("Unsupported operation: v4.ODataModel#bindTree");};h.prototype.createBindingContext=function(){throw new Error("Unsupported operation: v4.ODataModel#createBindingContext");};h.prototype.destroy=function(){this.oMetaModel.destroy();return a.prototype.destroy.apply(this,arguments);};h.prototype.destroyBindingContext=function(){throw new Error("Unsupported operation: v4.ODataModel#destroyBindingContext");};h.prototype.getContext=function(){throw new Error("Unsupported operation: v4.ODataModel#getContext");};h.prototype.getDependentBindings=function(p){return this.aAllBindings.filter(function(o){return o.isRelative()&&(o.getContext()===p||o.getContext()&&o.getContext().getBinding()===p);});};h.prototype.getGroupId=function(){return this.sGroupId;};h.prototype.getMetaModel=function(){return this.oMetaModel;};h.prototype.getObject=function(){throw new Error("Unsupported operation: v4.ODataModel#getObject");};h.prototype.getOriginalProperty=function(){throw new Error("Unsupported operation: v4.ODataModel#getOriginalProperty");};h.prototype.getProperty=function(){throw new Error("Unsupported operation: v4.ODataModel#getProperty");};h.prototype.getUpdateGroupId=function(){return this.sUpdateGroupId;};h.prototype.hasPendingChanges=function(){return this.oRequestor.hasPendingChanges();};h.prototype.isList=function(){throw new Error("Unsupported operation: v4.ODataModel#isList");};h.prototype.refresh=function(G){_.checkGroupId(G);this.aBindings.slice().forEach(function(o){if(!o.isRelative()){o.refresh(G);}});};h.prototype.reportError=function(l,r,E){var D=E.stack||E.message;if(D.indexOf(E.message)<0){D=E.message+"\n"+E.stack;}q.sap.log.error(l,D,r);if(E.$reported){return;}E.$reported=true;sap.ui.getCore().getMessageManager().addMessages(new M({message:E.message,processor:this,technical:true,type:"Error"}));};h.prototype.requestCanonicalPath=function(E){return E.requestCanonicalPath();};h.prototype.resetChanges=function(G){G=G||this.sUpdateGroupId;_.checkGroupId(G,true);this.oRequestor.cancelPatch(G);};h.prototype.setLegacySyntax=function(){throw new Error("Unsupported operation: v4.ODataModel#setLegacySyntax");};h.prototype.submitBatch=function(G){_.checkGroupId(G,true);return this._submitBatch(G);};h.prototype.toString=function(){return C+": "+this.sServiceUrl;};return h;},true);
