/*
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2016 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","./BaseController","./DraftContext"],function(q,B,D){"use strict";var a=B.extend("sap.ui.generic.app.transaction.DraftController",{metadata:{publicMethods:["getDraftContext","getDraftForActiveEntity","createNewDraftEntity","createEditDraftEntity","validateDraftEntity","validateDraft","prepareDraft","prepareDraftEntity","saveAndPrepareDraftEntity","activateDraftEntity","isActiveEntity","hasActiveEntity","destroy"]},constructor:function(m,Q){B.apply(this,[m,Q]);this.sName="sap.ui.generic.app.transaction.DraftController";this._oContext=null;}});a.prototype.getDraftContext=function(){if(!this._oContext){this._oContext=new D(this._oModel);}return this._oContext;};a.prototype.createDraft=function(e,p,P){var t=this;if(!e){throw new Error("No entity set");}P=P||{};return new Promise(function(r,b){var s=function(d,R){r({responseData:d,httpResponse:R});};t._oModel.createEntry(p,{success:s,error:b,batchGroupId:P.batchGroupId,changeSetId:P.changeSetId});});};a.prototype.validateDraft=function(c,p){var i=this.getDraftContext().getODataDraftFunctionImportName(c,"ValidationFunction");return this._callAction(i,c,p);};a.prototype.prepareDraft=function(c,p){var i;p=p||{};p.urlParameters=p.urlParameters||{};i=this.getDraftContext().getODataDraftFunctionImportName(c,"PreparationAction");return this._callAction(i,c,p);};a.prototype.activateDraft=function(c,p){var i=this.getDraftContext().getODataDraftFunctionImportName(c,"ActivationAction");return this._callAction(i,c,p);};a.prototype.editDraft=function(c,p){var i=this.getDraftContext().getODataDraftFunctionImportName(c,"EditAction");return this._callAction(i,c,p);};a.prototype.discardDraft=function(c,p){if(!c){throw new Error("No context");}return this._remove(c.getPath(),p);};a.prototype.getDraftForActive=function(c,p){var t=this;if(!c){throw new Error("No context");}p=p||{};p.urlParameters={"$expand":"SiblingEntity"};return this._read(c.getPath(),p).then(function(r){if(r.responseData&&r.responseData.hasOwnProperty("SiblingEntity")){r.context=t._oModel.getContext("/"+t._oModel.getKey(r.responseData.SiblingEntity));return r;}throw new Error("No draft entity could be found");});};a.prototype.getDraftForActiveEntity=function(c){var p,P,t=this,m={batchGroupId:"Changes",changeSetId:"Changes",noShowSuccessToast:true,forceSubmit:true};p=this.getDraftForActive(c,m).then(function(r){return r;},function(r){throw t._normalizeError(r);});P=this.triggerSubmitChanges(m);return this._returnPromiseAll([p,P]);};a.prototype.createNewDraftEntity=function(e,p){var P,o,t=this,m={batchGroupId:"Changes",changeSetId:"Changes",noShowSuccessToast:true,forceSubmit:true,failedMsg:"New draft document could not be created"};P=this.createDraft(e,p,m).then(function(r){return t._normalizeResponse(r,true);},function(r){var R=t._normalizeError(r);throw R;});o=this.triggerSubmitChanges(m).then(function(){return P.then(function(r){var i,h,R,b=t._normalizeResponse(r,true);if(b.context){R=b.context.getObject();}if(!R){q.sap.log.error("Activate function returned no entity");return Promise.reject(new Error("Activate function returned no entity"));}i=t._oDraftUtil.isActiveEntity(R);if(i){q.sap.log.error("New draft entity is not marked as draft - isActiveEntity = "+i);return Promise.reject("New draft entity is not marked as draft - isActiveEntity = "+i);}h=t._oDraftUtil.hasDraftEntity(R);if(h){q.sap.log.error("Wrong value for HasTwin of new draft entity - HasDraftEntity = "+h);return Promise.reject(new Error("Wrong value for HasTwin of new draft entity - HasDraftEntity = "+h));}return b;});});return this._returnPromiseAll([P,o]);};a.prototype.createEditDraftEntity=function(c,p){var P,o,t=this,m={batchGroupId:"Changes",changeSetId:"Changes",successMsg:"Draft for document was created",failedMsg:"Could not create draft for document",forceSubmit:true,context:c};if(p){m.urlParameters={PreserveChanges:true};}P=this.editDraft(c,m).then(function(r){var i,R,b;b=t._normalizeResponse(r,true);if(b.context){R=b.context.getObject();}if(!R){q.sap.log.error("Activate function returned no entity");return Promise.reject(new Error("Activate function returned no entity"));}i=t._oDraftUtil.isActiveEntity(R);if(i){q.sap.log.error("Edit function returned an entity which is not a draft instance - IsActiveEntity = "+i);return Promise.reject(new Error("Returned entity ist not a draft instance - IsActiveEntity = "+i));}return b;},function(r){var R=t._normalizeError(r);throw R;});o=this.triggerSubmitChanges(m);return this._returnPromiseAll([P,o]);};a.prototype.validateDraftEntity=function(c){var p,P,t=this,m={batchGroupId:"Changes",changeSetId:"Changes",context:c,forceSubmit:true};p=this.validateDraft(c,m).then(function(r){return t._normalizeResponse(r,true);},function(r){var R=t._normalizeError(r);throw R;});P=this.triggerSubmitChanges(m);return this._returnPromiseAll([p,P]);};a.prototype.saveAndPrepareDraftEntity=function(c,p){var P,o,t=this;p=p||{};p.batchGroupId="Changes";p.changeSetId="Changes";p.successMsg="Saved";p.failedMsg="Save failed";p.context=c;p.forceSubmit=true;P=this.prepareDraft(c,p).then(function(r){var i,R,b;b=t._normalizeResponse(r,true);if(b.context){R=b.context.getObject();}if(!R){q.sap.log.error("Activate function returned no entity");return Promise.reject(new Error("Activate function returned no entity"));}i=t._oDraftUtil.isActiveEntity(R);if(i){q.sap.log.error("Prepare function returned an entity which is not a draft instance - IsActiveEntity = "+i);return Promise.reject(new Error("Returned entity ist not a draft instance - IsActiveEntity = "+i));}return b;},function(r){var R=t._normalizeError(r);throw R;});if(p.binding){p.binding.refresh(true,"Changes");}o=this.triggerSubmitChanges(p);return this._returnPromiseAll([P,o]);};a.prototype.prepareDraftEntity=function(c){var t=this;return this.prepareDraft(c).then(function(r){var R,o;R=t._normalizeResponse(r,true);o=R.context.getObject();if(t._oDraftUtil.isActiveEntity(o)){q.sap.log.error("Prepare function returned an entity which is not a draft instance - IsActiveEntity = "+true);return Promise.reject(new Error("Returned entity ist not a draft instance - IsActiveEntity = "+true));}return R;},function(r){var R=t._normalizeError(r);throw R;});};a.prototype.activateDraftEntity=function(c){var p,P,t=this,m={batchGroupId:"Changes",changeSetId:"Changes",successMsg:"Document activated",failedMsg:"Activation of document failed",forceSubmit:true,context:c};p=this.activateDraft(c,m).then(function(r){var i,R,o;o=t._normalizeResponse(r,true);if(o.context){R=o.context.getObject();}if(!R){q.sap.log.error("Activate function returned no entity");return Promise.reject(new Error("Activate function returned no entity"));}i=t._oDraftUtil.isActiveEntity(R);if(!i){q.sap.log.error("Activate function returned an entity which is still a draft instance - IsActiveEntity = "+i);return Promise.reject(new Error("Returned entity is still a draft instance - IsActiveEntity = "+i));}return o;},function(r){var R=t._normalizeError(r);throw R;});P=this.triggerSubmitChanges(m);return this._returnPromiseAll([p,P]);};a.prototype.isActiveEntity=function(c){if(this.getDraftContext().hasDraft(c)){return this._oDraftUtil.isActiveEntity(c.getObject());}return true;};a.prototype.hasActiveEntity=function(c){return this._oDraftUtil.hasActiveEntity(c.getObject());};a.prototype.destroy=function(){if(this._oContext){this._oContext.destroy();}this._oContext=null;this._oModel=null;B.prototype.destroy.apply(this,[]);};return a;},true);
