jQuery.sap.declare("sap.rules.ui.parser.ruleBody.lib.ruleBodyConvertor");jQuery.sap.require("sap.rules.ui.parser.ruleBody.lib.ruleBodyValidator");jQuery.sap.require("sap.rules.ui.parser.ruleBody.lib.constants");sap.rules.ui.parser.ruleBody.lib.ruleBodyConvertor=sap.rules.ui.parser.ruleBody.lib.ruleBodyConvertor||{};sap.rules.ui.parser.ruleBody.lib.ruleBodyConvertor.lib=(function(){var r=sap.rules.ui.parser.ruleBody.lib.ruleBodyValidator.lib;var c=sap.rules.ui.parser.ruleBody.lib.constants.lib;function R(){jQuery.sap.log.debug("CTOR - Rule Convertor");r.RuleBodyValidator.call(this);this.convertedRuleBody=null;}R.prototype=Object.create(r.RuleBodyValidator.prototype);R.prototype.constructor=R;R.prototype.isParserConvertedExpression=function isParserConvertedExpression(){if(this.status===c.RULE_SUCCESS){if(!this.currentParserResult.hasOwnProperty(c.parserResultEnum.convertedExpression)){this.status=c.RULE_ERROR;}else{return true;}}return false;};R.prototype.getParserConvertedExpression=function getParserConvertedExpression(){return this.currentParserResult[c.parserResultEnum.convertedExpression];};R.prototype.handleTextCondition=function handleTextCondition(a,b,p){r.RuleBodyValidator.prototype.handleTextCondition.call(this,a,b,p);if(this.isParserConvertedExpression()){this.convertedRuleBody.content.condition=this.getParserConvertedExpression();}};R.prototype.handleTextOutputParameter=function handleTextOutputParameter(a,b,p){r.RuleBodyValidator.prototype.handleTextOutputParameter.call(this,a,b,p);if(this.isParserConvertedExpression()){a.content=this.getParserConvertedExpression();}};R.prototype.handleTextActionParameter=function handleTextActionParameter(a,b,i,p){r.RuleBodyValidator.prototype.handleTextActionParameter.call(this,a,b,i,p);if(this.isParserConvertedExpression()){a.content=this.getParserConvertedExpression();}};R.prototype.handleDecisionTableCondition=function handleDecisionTableCondition(h,a,b,d){var e;d=r.RuleBodyValidator.prototype.handleDecisionTableCondition.call(this,h,a,b,d);if(this.isParserConvertedExpression()){e=this.getParserConvertedExpression();a.row[b].content=this.splitDecisionTableCondition(h.convertedExpression,e);h.expression=h.convertedExpression;}return d;};R.prototype.handleDecisionTableActionParameter=function handleDecisionTableActionParameter(h,a,b,d){d=r.RuleBodyValidator.prototype.handleDecisionTableActionParameter.call(this,h,a,b,d);if(this.isParserConvertedExpression()){a.row[b].content=this.getParserConvertedExpression();}return d;};R.prototype.handleDecisionTableOutputParameter=function handleDecisionTableOutputParameter(h,a,b,d){d=r.RuleBodyValidator.prototype.handleDecisionTableOutputParameter.call(this,h,a,b,d);if(this.isParserConvertedExpression()){a.row[b].content=this.getParserConvertedExpression();}return d;};R.prototype.handleConditionHeader=function handleConditionHeader(h){r.RuleBodyValidator.prototype.handleConditionHeader.call(this,h);if(this.isParserConvertedExpression()){h.convertedExpression=this.getParserConvertedExpression();}};R.prototype.finalizeResult=function finalizeResult(a){var i;for(i=0;i<a.content.headers.length;i++){if(a.content.headers[i].hasOwnProperty(c.parserResultEnum.convertedExpression)){delete a.content.headers[i].convertedExpression;}}};R.prototype.initFlags=function initFlags(f){r.RuleBodyValidator.prototype.initFlags.call(this,f);if(f!==null&&f!==undefined){if(f.hasOwnProperty(c.outputFlagsEnum.conversionOutput)){this.flags[c.outputFlagsEnum.conversionOutput]=f[c.outputFlagsEnum.conversionOutput];}}};R.prototype.convert=function convert(a,v,b,f,o,p,t){this.convertedRuleBody=JSON.parse(JSON.stringify(a));var d=this.validateBusinessRule(this.convertedRuleBody,v,b,f,o,p,t);if(this.status===c.RULE_SUCCESS){d.convertedRuleBody=this.convertedRuleBody;}else{d.convertedRuleBody=null;}return d;};return{RuleBodyConvertor:R};}());
