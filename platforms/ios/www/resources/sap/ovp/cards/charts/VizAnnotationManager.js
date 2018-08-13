(function(){"use strict";jQuery.sap.declare("sap.ovp.cards.charts.VizAnnotationManager");sap.ovp.cards.charts.VizAnnotationManager=sap.ovp.cards.charts.VizAnnotationManager||{};sap.ovp.cards.charts.VizAnnotationManager.constants={LABEL_KEY:"sap:label",TEXT_KEY:"sap:text",TYPE_KEY:"type",DISPLAY_FORMAT_KEY:"sap:display-format",SEMANTICS_KEY:"sap:semantics",UNIT_KEY:"sap:unit",CURRENCY_CODE:"currency-code",NAME_KEY:"name",NAME_CAP_KEY:"Name",EDM_TYPE:"type",EDM_INT32:"Edm.Int32"};sap.ovp.cards.charts.VizAnnotationManager.errorMessages={CARD_WARNING:"OVP-AC: Analytic card: Warning: ",CARD_ERROR:"OVP-AC: Analytic card Error: ",DATA_ANNO_ERROR:"OVP-AC: Analytic card Error:",CARD_ANNO_ERROR:"OVP-AC: Analytic card: Error ",CHART_ANNO_ERROR:"OVP-AC: Analytic card: Error ",INVALID_CHART_ANNO:"OVP-AC: Analytic Cards: Invalid Chart Annotation.",ANALYTICAL_CONFIG_ERROR:"Analytic card configuration error",CACHING_ERROR:"no model defined while caching OdataMetaData",INVALID_MAXITEMS:"maxItems is Invalid. ",NO_DATASET:"OVP-AC: Analytic Cards: Could not obtain dataset.",SORTORDER_WARNING:"SortOrder is present in PresentationVariant, but it is empty or not well formed.",BOOLEAN_ERROR:"Boolean value is not present in PresentationVariant.",IS_MANDATORY:"is mandatory.",IS_MISSING:"is missing.",NOT_WELL_FORMED:"is not found or not well formed)",MISSING_CHARTTYPE:"Missing ChartType in ",CHART_ANNO:"Chart Annotation.",DATA_ANNO:"Data Annotation",CARD_ANNO:"card annotation.",CARD_CONFIG:"card configuration.",CARD_CONFIG_ERROR:"Could not obtain configuration for ",CARD_CONTAINER_ERROR:"Could not obtain card container. ",DATA_UNAVAIALABLE:"No data available.",CONFIG_LOAD_ERROR:"Failed to load config.json. Reason: ",INVALID_CHARTTYPE:"Invalid ChartType given for ",INVALID_CONFIG:"No valid configuration given for ",CONFIG_JSON:"in config.json",ENTER_INTEGER:"Please enter an Integer.",NO_CARD_MODEL:"Could not obtain Cards model.",ANNO_REF:"com.sap.vocabularies.UI.v1 annotation.",INVALID_REDUNDANT:"Invalid/redundant role configured for ",CHART_IS:"chart is/are ",CARD_CONFIG_JSON:"card from config.json",ALLOWED_ROLES:"Allowed role(s) for ",DIMENSIONS_MANDATORY:"DimensionAttributes are mandatory.",MEASURES_MANDATORY:"MeasureAttributes are mandatory.",CARD_LEAST:"card: Enter at least ",CARD_MOST:"card: Enter at most ",FEEDS:"feed(s).",MIN_FEEDS:"Minimum number of feeds required for ",FEEDS_OBTAINED:"card is not configured. Obtained ",FEEDS_REQUIRED:"feed(s), Required: ",INVALID_SEMANTIC_MEASURES:"More than one measure is being semantically coloured",INVALID_IMPROVEMENT_DIR:"No Improvement Direction Found",INVALID_CRITICALITY:"Invalid criticality values",INVALID_DIMMEAS:"Invalid number of Measures or Dimensions",INVALID_FORECAST:"Invalid/Redundant Datapoint or Forecast measure"};sap.ovp.cards.charts.VizAnnotationManager.formatItems=function(c,e,s,p,D,M){var a=c.getSetting("dataModel");var r="{";var b=[];var f=[];var g=[];var F=s&&s.SelectOptions;var P=s&&s.Parameters;var S=p&&p.SortOrder;var h=p&&p.MaxItems,j=null;var C;var t;var k=null;var l=sap.ovp.cards.charts.VizAnnotationManager;var n=l.constants.TEXT_KEY;if(h){j=h.Int32?h.Int32:h.Int;}if(j){if(j=="0"){jQuery.sap.log.error("OVP-AC: Analytic card Error: maxItems is configured as "+j);r+="}";return r;}if(!/^\d+$/.test(j)){jQuery.sap.log.error("OVP-AC: Analytic card Error: maxItems is Invalid. "+"Please enter an Integer.");r+="}";return r;}}if(P){var o=sap.ovp.cards.AnnotationHelper.resolveParameterizedEntitySet(a,e,s);r+="path: '"+o+"'";}else{r+="path: '/"+e.name+"'";}var q=[];if(!c||!c.getSetting('ovpCardProperties')){jQuery.sap.log.error(l.errorMessages.ANALYTICAL_CONFIG_ERROR);r+="}";return r;}k=c.getSetting('ovpCardProperties').getProperty("/entitySet");if(!a||!k){return r;}var u=l.getMetadata(a,k);C=c.getSetting('ovpCardProperties').getProperty("/filters");if(F){jQuery.each(s.SelectOptions,function(){var d=this.PropertyName.PropertyPath;jQuery.each(this.Ranges,function(){if(this.Sign.EnumMember==="com.sap.vocabularies.UI.v1.SelectionRangeSignType/I"){var m=sap.ovp.cards.charts.VizAnnotationManager.getPrimitiveValue(this.Low);var E=this.High&&this.High.String;var G=l.formatByType;m=G(u,d,m);var H={path:d,operator:this.Option.EnumMember.split("/")[1],value1:m};if(E){H.value2=G(u,d,E);}q.push(H);}});});}if(C&&C.length>0){q=q.concat(C);}if(q.length>0){r+=", filters: "+JSON.stringify(q);}if(S){var v=p.SortOrder;if(v.length<1){jQuery.sap.log.warning(l.errorMessages.CARD_WARNING+l.errorMessages.SORTORDER_WARNING);}else{var w="";var x;var y;var z;for(var i=0;i<v.length;i++){x=v[i];z=x.Property.PropertyPath;g.push(z);if(typeof x.Descending=="undefined"){y='true';}else{var A=x.Descending.Bool||x.Descending.Boolean;if(!A){jQuery.sap.log.warning(l.errorMessages.CARD_WARNING+l.errorMessages.BOOLEAN_ERROR);y='true';}else{y=A.toLowerCase()=='true'?'true':'false';}}w=w+"{path: '"+z+"',descending: "+y+"},";}r+=", sorter: ["+w.substring(0,w.length-1)+"]";}}var B=c.getSetting("ovpCardProperties").getProperty("/entityType");jQuery.each(M,function(i,m){t=m.Measure.PropertyPath;if(m.DataPoint&&m.DataPoint.AnnotationPath){var d=B[m.DataPoint.AnnotationPath.substring(1)];if(d.ForecastValue&&d.ForecastValue.PropertyPath){f.push(d.ForecastValue.PropertyPath);}}f.push(t);if(u&&u[t]&&u[t][n]&&t!=u[t][n]){f.push(u[t][n]?u[t][n]:t);}});jQuery.each(D,function(i,d){t=d.Dimension.PropertyPath;b.push(t);if(u&&u[t]&&u[t][n]&&t!=u[t][n]){b.push(u[t][n]?u[t][n]:t);}});r+=", parameters: {select:'"+[].concat(b,f).join(",");if(g.length>0){r+=","+g.join(",");}r+="'}";if(j){r+=", length: "+j;}r+="}";return r;};sap.ovp.cards.charts.VizAnnotationManager.formatItems.requiresIContext=true;sap.ovp.cards.charts.VizAnnotationManager.checkForecastMeasure=function(m,e){var s=sap.ovp.cards.charts.VizAnnotationManager;var b=false;var r;if(m.DataPoint&&m.DataPoint.AnnotationPath){var d=e[m.DataPoint.AnnotationPath.substring(1)];if(d&&d.ForecastValue&&d.ForecastValue.PropertyPath){b=true;r=m;}}if(b==true){return r;}else{jQuery.sap.log.warning(s.errorMessages.CARD_WARNING+s.errorMessages.INVALID_FORECAST);return undefined;}};sap.ovp.cards.charts.VizAnnotationManager.getSapLabel=function(m,M){var a;jQuery.each(M,function(i,v){if(v.name==m){a=v["sap:label"];return false;}});return a;};sap.ovp.cards.charts.VizAnnotationManager.getMeasureDimCheck=function(f,c){var s=sap.ovp.cards.charts.VizAnnotationManager;var b=true;if(c=="line"||c=="column"){jQuery.each(f,function(i,v){if((v.getUid()=='valueAxis')||(v.getUid()=='categoryAxis')){if(v.getValues().length!=1){b=false;jQuery.sap.log.warning(s.errorMessages.CARD_WARNING+s.errorMessages.INVALID_DIMMEAS);return false;}}});}else if(c=="vertical_bullet"){jQuery.each(f,function(i,v){if((v.getUid()=='actualValues')||(v.getUid()=='categoryAxis')){if(v.getValues().length!=1){b=false;jQuery.sap.log.warning(s.errorMessages.CARD_WARNING+s.errorMessages.INVALID_DIMMEAS);return false;}}});}if(b==true){return true;}};sap.ovp.cards.charts.VizAnnotationManager.formatByType=function(m,p,v){var s=sap.ovp.cards.charts.VizAnnotationManager;var t=s.constants.TYPE_KEY;if(!m||!m[p]||!m[p][t]){return v;}var n=["Edm.Int","Edmt.Int16","Edm.Int32","Edm.Int64","Edm.Decimal"];var c=m[p][t];if(jQuery.inArray(c,n)!==-1){return Number(v);}return v;};sap.ovp.cards.charts.VizAnnotationManager.returnDateFormat=function(d){if(d){jQuery.sap.require("sap.ui.core.format.DateFormat");var D=sap.ui.core.format.DateFormat.getDateTimeInstance({pattern:"dd-MMM"});return D.format(new Date(d));}return"";};sap.ovp.cards.charts.VizAnnotationManager.formatChartAxes=function(){jQuery.sap.require("sap.ui.core.format.NumberFormat");var c={locale:function(){},format:function(v,p){var a="";if(p){a=p.split('/');}if(a.length>0){var m,s;if(a.length==3){m=Number(a[1]);s=Number(a[2]);if(isNaN(m)){m=2;}if(isNaN(s)){s=0;}}else{m=2;s=0;}if(a[0]=="axisFormatter"){var n=sap.ui.core.format.NumberFormat.getFloatInstance({style:'short',shortRefNumber:s,minFractionDigits:m,maxFractionDigits:m});return n.format(Number(v));}else if(a[0]=="CURR"){var b=sap.ui.core.format.NumberFormat.getCurrencyInstance({style:'short',currencyCode:false,shortRefNumber:s,minFractionDigits:m,maxFractionDigits:m});return b.format(Number(v));}}if(v.constructor==Date){jQuery.sap.require("sap.ui.core.format.DateFormat");var d=sap.ui.core.format.DateFormat.getDateTimeInstance({pattern:"dd-MMM"});v=d.format(new Date(v));}return v;}};jQuery.sap.require("sap.viz.ui5.api.env.Format");sap.viz.ui5.api.env.Format.numericFormatter(c);};sap.ovp.cards.charts.VizAnnotationManager.hideDateTimeAxis=function(v,f){var d=v.getModel();var t=v.getVizType();if(t!="line"&&t!="bubble"){return;}if(!f){f=t=="line"?"categoryAxis":"valueAxis";}var e=v.getModel('ovpCardProperties').getProperty("/entitySet");if(!d||!e){return;}var m=this.getMetadata(d,e);var a=v.getFeeds();for(var i=0;i<a.length;i++){if(a[i].getUid()==f){var b=a[i].getValues();if(!b){return;}for(var j=0;j<b.length;j++){if(m[b[j][this.constants.TYPE_KEY]]!="Edm.DateTime"){return;}}v.setVizProperties({categoryAxis:{title:{visible:false}}});return;}}};sap.ovp.cards.charts.VizAnnotationManager.checkExists=function(t,a,b,m,l,c){var s=sap.ovp.cards.charts.VizAnnotationManager;m=typeof m==="undefined"?false:m;var r=false;var d;if(!t&&m){jQuery.sap.log.error(l+s.errorMessages.CARD_ERROR+b+s.errorMessages.IS_MANDATORY);return r;}if(!t){jQuery.sap.log.warning(l+s.errorMessagesCARD_WARNING+b+s.errorMessages.IS_MISSING);r=true;return r;}d=a[t];if(!d||typeof d!=="object"){var e=m?jQuery.sap.log.error:jQuery.sap.log.warning;e(l+s.errorMessages.CARD_ERROR+"in "+b+". ("+t+" "+s.errorMessages.NOT_WELL_FORMED);return r;}if(c&&c=="sap.ovp.cards.charts.analytical.analyticalChart"&&b=="Chart Annotation"&&(!d.ChartType||!d.ChartType.EnumMember)){jQuery.sap.log.error(l+s.errorMessages.CARD_ERROR+s.errorMessages.MISSING_CHARTTYPE+s.errorMessages.CHART_ANNO);return r;}r=true;return r;};sap.ovp.cards.charts.VizAnnotationManager.validateCardConfiguration=function(c){var s=sap.ovp.cards.charts.VizAnnotationManager;var r=false;if(!c){return r;}var a;var b;var d;var p;var i;var P;var e;var l="";var C;var v=c.getView();if(v){l="["+v.getId()+"] ";}if(!(C=c.getCardPropertiesModel())){jQuery.sap.log.error(l+s.errorMessages.CARD_ERROR+"in "+s.errorMessages.CARD_CONFIG+s.errorMessages.NO_CARD_MODEL);return r;}e=C.getProperty("/entityType");if(!e||jQuery.isEmptyObject(e)){jQuery.sap.log.error(l+s.errorMessages.CARD_ERROR+"in "+s.errorMessages.CARD_ANNO);return r;}a=C.getProperty("/selectionAnnotationPath");b=C.getProperty("/chartAnnotationPath");p=C.getProperty("/presentationAnnotationPath");i=C.getProperty("/identificationAnnotationPath");P=C.getProperty("/dataPointAnnotationPath");d=C.getProperty("/contentFragment");r=this.checkExists(a,e,"Selection Variant",false,l);r=this.checkExists(b,e,"Chart Annotation",true,l,d)&&r;r=this.checkExists(p,e,"Presentation Variant",false,l)&&r;r=this.checkExists(i,e,"Identification Annotation",true,l)&&r;r=this.checkExists(P,e,"Data Point",false,l)&&r;return r;};sap.ovp.cards.charts.VizAnnotationManager.checkNoData=function(e,c,v){};sap.ovp.cards.charts.VizAnnotationManager.getConfig=function(c){var s=sap.ovp.cards.charts.VizAnnotationManager;var r={};var a,b,d,f,g=null;var C=!!c;if(!jQuery.sap.getObject("sap.ovp.cards.charts.config")){d=jQuery.sap.getModulePath("sap.ovp.cards.charts");sap.ovp.cards=sap.ovp.cards||{};sap.ovp.cards.charts=sap.ovp.cards.charts||{};try{sap.ovp.cards.charts.config=jQuery.sap.loadResource({url:d+"/config.json",dataType:"json",async:false});}catch(e){jQuery.sap.log.error(s.errorMessages.CONFIG_LOAD_ERROR+e);}sap.ovp.cards.charts.config=sap.ovp.cards.charts.config||{};}g=sap.ovp.cards.charts.config;if(!C){return g;}if(!c.EnumMember||!(a=c.EnumMember.split("/"))||a.length<2){jQuery.sap.log.error(s.errorMessages.CARD_ERROR+s.errorMessages.INVALID_CHARTTYPE+s.errorMessages.ANNO_REF);return r;}b=a[1];if(!g[b]){jQuery.sap.log.error(s.errorMessages.INVALID_CONFIG+b+" "+s.errorMessages.CONFIG_JSON);return r;}if((f=g[b].reference)&&g[f]){var v=jQuery.extend(true,{},g[f]);g[b]=v;}r=g[b];return r;};sap.ovp.cards.charts.VizAnnotationManager.hasTimeSemantics=function(d,c,a,e){var r=false;var m;var b;var f;var g;var s;if(!c.time||jQuery.isEmptyObject(c.time)){return r;}if(!d){return r;}if(d.length!=1){return r;}if(!d[0].Dimension||!(b=d[0].Dimension.PropertyPath)){return r;}m=this.getMetadata(a,e);if(m&&m[b]){f=m[b][this.constants.TYPE_KEY];g=m[b][this.constants.DISPLAY_FORMAT_KEY];s=m[b][this.constants.SEMANTICS_KEY];}if(f&&g&&f.lastIndexOf("Edm.Date",0)===0&&g.toLowerCase()=="date"){r=true;}if(f=="Edm.String"&&s&&s.lastIndexOf("year",0)===0){r=true;}return r;};sap.ovp.cards.charts.VizAnnotationManager.getChartType=function(c,C,d){var r="";var s=sap.ovp.cards.charts.VizAnnotationManager;var a=s.getConfig(C);var b,e;if(!a){return r;}r=a.default.type;b=c.getSetting("dataModel");e=c.getSetting('ovpCardProperties').getProperty("/entitySet");if(s.hasTimeSemantics(d,a,b,e)){r=a.time.type;}return r;};sap.ovp.cards.charts.VizAnnotationManager.getChartType.requiresIContext=true;sap.ovp.cards.charts.VizAnnotationManager.checkRolesForProperty=function(q,c,t){var s=sap.ovp.cards.charts.VizAnnotationManager;if(!q.length){return;}var a=t=="dimension"?"Dimension":"Measure";var b=[];jQuery.each(q,function(i,v){if(!v||!v[a]||!v[a].PropertyPath){jQuery.sap.log.error(s.errorMessages.INVALID_CHART_ANNO);return false;}b.push(v[a].PropertyPath);});var d=jQuery.map(c.feeds,function(f){if(f.type==t){if(f.role){return f.role.split("|");}return[];}});d=jQuery.grep(d,function(r,i){return jQuery.inArray(r,d)==i;}).join(", ");jQuery.sap.log.error(s.errorMessages.CARD_ERROR+s.errorMessages.INVALID_REDUNDANT+t+"(s) "+b.join(", ")+". "+s.errorMessages.ALLOWED_ROLES+c.type+s.errorMessages.CHART_IS+d);};sap.ovp.cards.charts.VizAnnotationManager.getPrimitiveValue=function(v){var a;if(v){if(v.String){a=v.String;}else if(v.Boolean||v.Bool){a=sap.ovp.cards.charts.VizAnnotationManager.getBooleanValue(v);}else{a=sap.ovp.cards.charts.VizAnnotationManager.getNumberValue(v);}}return a;};sap.ovp.cards.charts.VizAnnotationManager.getBooleanValue=function(v,d){if(v&&v.Boolean){if(v.Boolean.toLowerCase()==="true"){return true;}else if(v.Boolean.toLowerCase()==="false"){return false;}}else if(v&&v.Bool){if(v.Bool.toLowerCase()==="true"){return true;}else if(v.Bool.toLowerCase()==="false"){return false;}}return d;};sap.ovp.cards.charts.VizAnnotationManager.getNumberValue=function(v){var a;if(v){if(v.String){a=Number(v.String);}else if(v.Int){a=Number(v.Int);}else if(v.Decimal){a=Number(v.Decimal);}else if(v.Double){a=Number(v.Double);}else if(v.Single){a=Number(v.Single);}}return a;};sap.ovp.cards.charts.VizAnnotationManager.formThePathForCriticalityStateCalculation=function(c,d){function g(I){if(I){if(I.Path){return"{path:'"+I.Path+"'}";}else{return sap.ovp.cards.charts.VizAnnotationManager.getPrimitiveValue(I);}}else{return"";}}var v=c[c.measureNames];var i=d.CriticalityCalculation.ImprovementDirection.EnumMember;var a=g(d.CriticalityCalculation.DeviationRangeLowValue);var b=g(d.CriticalityCalculation.DeviationRangeHighValue);var t=g(d.CriticalityCalculation.ToleranceRangeLowValue);var e=g(d.CriticalityCalculation.ToleranceRangeHighValue);return sap.ovp.cards.AnnotationHelper._calculateCriticalityState(v,i,a,b,t,e,sap.ovp.cards.AnnotationHelper.criticalityConstants.StateValues);};sap.ovp.cards.charts.VizAnnotationManager.mapMeasures=function(c,m,M){var a,d;jQuery.each(m,function(i,v){if(v["sap:label"]==c.measureNames){a=v.name;return false;}});jQuery.each(M,function(i,v){if(v.Measure.PropertyPath==a){if(!v.DataPoint||!v.DataPoint.AnnotationPath){return false;}d=v.DataPoint.AnnotationPath;return false;}});return d;};sap.ovp.cards.charts.VizAnnotationManager.checkFlag=function(m,e){function a(S,c){return S&&S.indexOf(c,S.length-c.length)!==-1;}var b=false;var s=sap.ovp.cards.charts.VizAnnotationManager;jQuery.each(m,function(i,v){if(v.DataPoint&&v.DataPoint.AnnotationPath){var d=e[v.DataPoint.AnnotationPath.substring(1)];if(d&&d.CriticalityCalculation&&d.CriticalityCalculation.ImprovementDirection&&d.CriticalityCalculation.ImprovementDirection.EnumMember){var I=d.CriticalityCalculation.ImprovementDirection.EnumMember;var c=d.CriticalityCalculation.DeviationRangeLowValue&&d.CriticalityCalculation.DeviationRangeLowValue.String||"";var f=d.CriticalityCalculation.DeviationRangeHighValue&&d.CriticalityCalculation.DeviationRangeHighValue.String||"";var t=d.CriticalityCalculation.ToleranceRangeLowValue&&d.CriticalityCalculation.ToleranceRangeLowValue.String||"";var g=d.CriticalityCalculation.ToleranceRangeHighValue&&d.CriticalityCalculation.ToleranceRangeHighValue.String||"";if(a(I,"Minimize")||a(I,"Minimizing")){if(g&&f){b=true;return false;}else{jQuery.sap.log.warning(s.errorMessages.CARD_WARNING+s.errorMessages.INVALID_CRITICALITY);}}else if(a(I,"Maximize")||a(I,"Maximizing")){if(t&&c){b=true;return false;}else{jQuery.sap.log.warning(s.errorMessages.CARD_WARNING+s.errorMessages.INVALID_CRITICALITY);}}else if(a(I,"Target")){if(t&&c&&g&&f){b=true;return false;}else{jQuery.sap.log.warning(s.errorMessages.CARD_WARNING+s.errorMessages.INVALID_CRITICALITY);}}}else{jQuery.sap.log.warning(s.errorMessages.CARD_WARNING+s.errorMessages.INVALID_IMPROVEMENT_DIR);}}});if(b==true&&m.length>1){jQuery.sap.log.warning(s.errorMessages.CARD_WARNING+s.errorMessages.INVALID_SEMANTIC_MEASURES);}return b;};sap.ovp.cards.charts.VizAnnotationManager.buildSemanticLegends=function(m,e,M){function a(s,S){return s&&s.indexOf(S,s.length-S.length)!==-1;}var r=[null,null];var b=m.Measure.PropertyPath;if(M[b]){b=M[b][this.constants.LABEL_KEY]||b;}var d=m.DataPoint.AnnotationPath;var D=e[d.substring(1)];if(!D.CriticalityCalculation||!D.CriticalityCalculation.ImprovementDirection||!D.CriticalityCalculation.ImprovementDirection.EnumMember){return r;}var i=D.CriticalityCalculation.ImprovementDirection.EnumMember;var c=D.CriticalityCalculation.DeviationRangeLowValue&&D.CriticalityCalculation.DeviationRangeLowValue.String||"";var f=D.CriticalityCalculation.DeviationRangeHighValue&&D.CriticalityCalculation.DeviationRangeHighValue.String||"";var t=D.CriticalityCalculation.ToleranceRangeLowValue&&D.CriticalityCalculation.ToleranceRangeLowValue.String||"";var g=D.CriticalityCalculation.ToleranceRangeHighValue&&D.CriticalityCalculation.ToleranceRangeHighValue.String||"";jQuery.sap.require("sap.ui.core.format.NumberFormat");var n=sap.ui.core.format.NumberFormat.getFloatInstance({style:'short',minFractionDigits:2,maxFractionDigits:2});if(c){c=n.format(Number(c));}if(f){f=n.format(Number(f));}if(t){t=n.format(Number(t));}if(g){g=n.format(Number(g));}if(a(i,"Minimize")||a(i,"Minimizing")){if(g&&f){r[0]=sap.ui.getCore().getLibraryResourceBundle("sap.ovp").getText("MINIMIZING_LESS",[b,g]);r[1]=sap.ui.getCore().getLibraryResourceBundle("sap.ovp").getText("MINIMIZING_MORE",[b,f]);}}else if(a(i,"Maximize")||a(i,"Maximizing")){if(t&&c){r[0]=sap.ui.getCore().getLibraryResourceBundle("sap.ovp").getText("MAXIMISING_MORE",[b,t]);r[1]=sap.ui.getCore().getLibraryResourceBundle("sap.ovp").getText("MAXIMISING_LESS",[b,c]);}}else if(a(i,"Target")){if(t&&c&&g&&f){r[0]=sap.ui.getCore().getLibraryResourceBundle("sap.ovp").getText("TARGET_BETWEEN",[t,b,g]);r[1]=sap.ui.getCore().getLibraryResourceBundle("sap.ovp").getText("TARGET_AROUND",[b,c,f]);}}return r;};sap.ovp.cards.charts.VizAnnotationManager.checkNumberFormat=function(m,v,e){if(v&&v.DataPoint&&v.DataPoint.AnnotationPath){var d=e[v.DataPoint.AnnotationPath.substring(1)];var f,a;if(d&&d.ValueFormat){f=d.ValueFormat;}else if(d&&d.NumberFormat){f=d.NumberFormat;}if(f&&f.NumberOfFractionalDigits&&f.NumberOfFractionalDigits.Int){a=f.NumberOfFractionalDigits.Int;if(m<Number(a)){m=Number(a);}}}return m;};sap.ovp.cards.charts.VizAnnotationManager.getMaxScaleFactor=function(m,v,e){if(v&&v.DataPoint&&v.DataPoint.AnnotationPath){var d=e[v.DataPoint.AnnotationPath.substring(1)];var s,S;if(d&&d.ValueFormat){s=d.ValueFormat;}else if(d&&d.NumberFormat){s=d.NumberFormat;}if(s){if(s.ScaleFactor&&s.ScaleFactor.Decimal){S=Number(s.ScaleFactor.Decimal);}else if(s.ScaleFactor&&s.ScaleFactor.Int){S=Number(s.ScaleFactor.Int);}if(!isNaN(S)){if(m===undefined){m=Number(S);}else if(m>Number(S)){m=Number(S);}}}}else if(m===undefined){m="";}return m;};sap.ovp.cards.charts.VizAnnotationManager.isMeasureCurrency=function(m,s){var a=sap.ovp.cards.charts.VizAnnotationManager;if(m&&m[s]&&m[s][a.constants.SEMANTICS_KEY]&&m[s][a.constants.SEMANTICS_KEY]===a.constants.CURRENCY_CODE){return true;}return false;};sap.ovp.cards.charts.VizAnnotationManager.fractionalDigitsExists=function(v,e){if(v.DataPoint&&v.DataPoint.AnnotationPath){var d=e[v.DataPoint.AnnotationPath.substring(1)];if(d&&d.ValueFormat&&d.ValueFormat.NumberOfFractionalDigits&&d.ValueFormat.NumberOfFractionalDigits.Int){return true;}else if(d&&d.NumberFormat&&d.NumberFormat.NumberOfFractionalDigits&&d.NumberFormat.NumberOfFractionalDigits.Int){return true;}}return false;};sap.ovp.cards.charts.VizAnnotationManager.checkEDMINT32Exists=function(m,v,f){var s=sap.ovp.cards.charts.VizAnnotationManager;if(m[v[f].PropertyPath][s.constants.EDM_TYPE]==s.constants.EDM_INT32){return true;}return false;};sap.ovp.cards.charts.VizAnnotationManager.buildVizAttributes=function(a){var c,e,b,d;var f,g,h,D,m;var V;var q,Q,l;var p,n=[],M=[];var s;var r;var o=sap.ovp.cards.charts.VizAnnotationManager;f=a.getVizType();g=this.getConfig();for(var t in g){if((r=g[t].reference)&&g[r]){var u=jQuery.extend(true,{},g[r]);g[t]=u;}if(g[t].default.type==f||(g[t].time&&g[t].time.type==f)){h=g[t];break;}}if(!h){jQuery.sap.log.error(o.errorMessages.CARD_ERROR+"in "+o.errorMessages.CARD_CONFIG+o.errorMessages.CARD_CONFIG_ERROR+f+" "+o.errorMessages.CARD_CONFIG_JSON);return;}if(!(c=a.getModel('ovpCardProperties'))){jQuery.sap.log.error(o.errorMessages.CARD_ERROR+"in "+o.errorMessages.CARD_CONFIG+o.errorMessages.NO_CARD_MODEL);return;}var w=a.getModel();var x=c.getProperty("/entitySet");if(!w||!x){return;}e=c.getProperty("/entityType");if(!e){jQuery.sap.log.error(o.errorMessages.CARD_ANNO_ERROR+"in "+o.errorMessages.CARD_ANNO);return;}var y=o.getMetadata(w,x);b=c.getProperty("/chartAnnotationPath");if(!b||!(d=e[b])){jQuery.sap.log.error(o.errorMessages.CARD_ANNO_ERROR+"in "+o.errorMessages.CARD_ANNO);return;}if(!(D=d.DimensionAttributes)||!D.length){jQuery.sap.log.error(o.errorMessages.CHART_ANNO_ERROR+"in "+o.errorMessages.CHART_ANNO+" "+o.errorMessages.DIMENSIONS_MANDATORY);return;}if(!(m=d.MeasureAttributes)||!m.length){jQuery.sap.log.error(o.errorMessages.CHART_ANNO_ERROR+"in "+o.errorMessages.CHART_ANNO+" "+o.errorMessages.MEASURES_MANDATORY);return;}s=o.hasTimeSemantics(D,h,w,x);if(s){h=h.time;}else{h=h.default;}var E=false;[h.dimensions,h.measures].forEach(function(j,i){var k=i?m:D;var v=i?"measure(s)":"dimension(s)";if(j.min&&k.length<j.min){jQuery.sap.log.error(o.errorMessages.CARD_ERROR+"in "+f+" "+o.errorMessages.CARD_LEAST+j.min+" "+v);E=true;}if(j.max&&k.length>j.max){jQuery.sap.log.error(o.errorMessages.CARD_ERROR+"in "+f+o.errorMessages.CARD_MOST+j.max+" "+v);E=true;}});if(E){return;}var H=true;if(h.properties&&h.properties.hasOwnProperty("hideLabel")&&!h.properties["hideLabel"]){H=false;}var z=true;var N=c.getProperty("/navigation");if(N=="chartNav"){z=false;}a.removeAllAggregation();V={legend:{isScrollable:false},title:{visible:false},interaction:{noninteractiveMode:z?false:true,selectability:{legendSelection:false,axisLabelSelection:false,mode:'EXCLUSIVE',plotLassoSelection:false,plotStdSelection:true},zoom:{enablement:'disabled'}},plotArea:{window:{start:'firstDataPoint',end:'lastDataPoint'}},general:{groupData:false}};if(h.properties&&h.properties.semanticColor==true&&sap.ovp.cards.charts.VizAnnotationManager.checkFlag(m,e)){var A=sap.ui.getCore().getLibraryResourceBundle("sap.ovp").getText("GOOD");var B=sap.ui.getCore().getLibraryResourceBundle("sap.ovp").getText("BAD");var C=sap.ui.getCore().getLibraryResourceBundle("sap.ovp").getText("OTHERS");if(m.length==1){var F=o.buildSemanticLegends(m[0],e,y);var A=F[0]||A,B=F[1]||B,C=sap.ui.getCore().getLibraryResourceBundle("sap.ovp").getText("OTHERS");}V.plotArea={dataPointStyle:{rules:[{callback:function(i){var j=sap.ovp.cards.charts.VizAnnotationManager.mapMeasures(i,y,m);if(!j){return false;}var k=e[j.substring(1)];var v=sap.ovp.cards.charts.VizAnnotationManager.formThePathForCriticalityStateCalculation(i,k);if(v==sap.ovp.cards.AnnotationHelper.criticalityConstants.StateValues.Positive){return true;}},properties:{color:"sapUiChartPaletteSemanticGoodLight1"},"displayName":A},{callback:function(i){var j=sap.ovp.cards.charts.VizAnnotationManager.mapMeasures(i,y,m);if(!j){return false;}var k=e[j.substring(1)];var v=sap.ovp.cards.charts.VizAnnotationManager.formThePathForCriticalityStateCalculation(i,k);if(v==sap.ovp.cards.AnnotationHelper.criticalityConstants.StateValues.Negative){return true;}},properties:{color:"sapUiChartPaletteSemanticBadLight1"},"displayName":B},{callback:function(i){var j=sap.ovp.cards.charts.VizAnnotationManager.mapMeasures(i,y,m);if(!j){return false;}var k=e[j.substring(1)];var v=sap.ovp.cards.charts.VizAnnotationManager.formThePathForCriticalityStateCalculation(i,k);if(v==sap.ovp.cards.AnnotationHelper.criticalityConstants.StateValues.Critical){return true;}},properties:{color:"sapUiChartPaletteSemanticNeutralLight1"},"displayName":C}]}};}Q=D.slice();l=m.slice();var G=0;var I=0;var J;var K;var L=false;var O=false;var P=false;var R=false;var S;var T=[];jQuery.each(h.feeds,function(i,v){var W=v.uid;var X=[];if(v.type){var Y,Z,$;if(v.type==="dimension"){Y=D.length;Z="Dimension";$="dimensions";q=Q;p=n;}else{Y=m.length;Z="Measure";$="measures";q=l;p=M;}var _=0,a1=Y;if(v.min){_=_>v.min?_:v.min;}if(v.max){a1=a1<v.max?a1:v.max;}if(!v.role){var b1=q.length;for(var j=0;j<b1&&X.length<a1;++j){var c1=q[j];q.splice(j,1);--b1;--j;X.push(c1);S=y[c1[Z].PropertyPath][o.constants.UNIT_KEY];if(!R){R=o.checkEDMINT32Exists(y,c1,Z);}if(o.isMeasureCurrency(y,S)){L=true;}else{O=true;}if(!P){P=o.fractionalDigitsExists(c1,e);}if(!L){G=o.checkNumberFormat(G,c1,e);J=o.getMaxScaleFactor(J,c1,e);}else{I=o.checkNumberFormat(I,c1,e);K=o.getMaxScaleFactor(K,c1,e);}}}else{var d1=v.role.split("|");jQuery.each(d1,function(j,v1){if(X.length==a1){return false;}var b1=q.length;for(var k=0;k<b1&&X.length<a1;++k){var c1=q[k];if(c1&&c1.Role&&c1.Role.EnumMember&&c1.Role.EnumMember.split("/")&&c1.Role.EnumMember.split("/")[1]){var w1=c1.Role.EnumMember.split("/")[1];if(w1==v1){q.splice(k,1);--b1;--k;X.push(c1);S=y[c1[Z].PropertyPath][o.constants.UNIT_KEY];if(o.isMeasureCurrency(y,S)){L=true;}else{O=true;}if(!R){R=o.checkEDMINT32Exists(y,c1,Z);}if(!P){P=o.fractionalDigitsExists(c1,e);}if(!L){G=o.checkNumberFormat(G,c1,e);J=o.getMaxScaleFactor(J,c1,e);}else{I=o.checkNumberFormat(I,c1,e);K=o.getMaxScaleFactor(K,c1,e);}}}else if(jQuery.inArray(c1,p)==-1){p.push(c1);}}});if(X.length<a1){jQuery.each(p,function(k,c1){var v1;var w1;if((v1=h[$].defaultRole)&&(jQuery.inArray(v1,d1)!==-1)&&(w1=jQuery.inArray(c1,q))!==-1){q.splice(w1,1);X.push(c1);S=y[c1[Z].PropertyPath][o.constants.UNIT_KEY];if(o.isMeasureCurrency(y,S)){L=true;}else{O=true;}if(!R){R=o.checkEDMINT32Exists(y,c1,Z);}if(!P){P=o.fractionalDigitsExists(c1,e);}if(!L){G=o.checkNumberFormat(G,c1,e);J=o.getMaxScaleFactor(J,c1,e);}else{I=o.checkNumberFormat(I,c1,e);K=o.getMaxScaleFactor(K,c1,e);}if(X.length==a1){return false;}}});}if(X.length<_){jQuery.sap.log.error(o.errorMessages.CARD_ERROR+o.errorMessages.MIN_FEEDS+f+" "+o.errorMessages.FEEDS_OBTAINED+X.length+" "+o.errorMessages.FEEDS_REQUIRED+_+" "+o.errorMessages.FEEDS);return false;}}if(X.length){var e1=[];var f1;if(!(f1=a.getDataset())){jQuery.sap.log.error(o.errorMessages.NO_DATASET);return false;}jQuery.each(X,function(i,c1){if(!c1||!c1[Z]||!c1[Z].PropertyPath){jQuery.sap.log.error(o.errorMessages.INVALID_CHART_ANNO);return false;}var k=c1[Z].PropertyPath;var v1=k;var w1=k;var x1=null;if(y&&y[k]){v1=y[k][o.constants.LABEL_KEY]||k;w1=y[k][o.constants.TEXT_KEY]||k;x1=y[k][o.constants.TYPE_KEY]||null;}var y1;if(x1=="Edm.DateTime"&&w1==k){y1="{path:'"+k+"', formatter: 'sap.ovp.cards.charts.VizAnnotationManager.returnDateFormat'}";}else{y1="{"+w1+"}";}e1.push(v1);if(Z=="Dimension"){var z1=new sap.viz.ui5.data.DimensionDefinition({name:v1,value:"{"+k+"}",displayValue:y1});if(s){z1.setDataType("date");}f1.addDimension(z1);}else{f1.addMeasure(new sap.viz.ui5.data.MeasureDefinition({name:v1,value:"{"+k+"}"}));}});a.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({'uid':W,'type':Z,'values':e1}));V[W]={title:{visible:H?false:true,text:e1.join(", ")},label:{formatString:L?'CURR':'axisFormatter'}};T.push(V[W]);if(h.hasOwnProperty("vizProperties")){var g1=0;var h1=h.vizProperties.length;var i1;var j1;for(;g1<h1;g1++){if(h.vizProperties[g1].hasOwnProperty("value")){j1=h.vizProperties[g1].value;}if(h.vizProperties[g1].hasOwnProperty("path")){i1=(h.vizProperties[g1].path).split(".");var k1=i1.length;var l1;var m1;for(var n1=0,m1=i1[0],l1=V;n1<k1;++n1){if(n1==k1-1){l1[m1]=j1;break;}l1[m1]=l1[m1]||{};l1=l1[m1];m1=i1[n1+1];}}}}if(v.hasOwnProperty("vizProperties")){var i=0;var o1=v.vizProperties.length;var p1;var q1;var r1;for(;i<o1;i++){if(v.vizProperties[i].hasOwnProperty("method")){q1=v.vizProperties[i].method;switch(q1){case'count':p1=e1.length;if(v.vizProperties[i].hasOwnProperty("min")&&p1<=v.vizProperties[i].min){p1=v.vizProperties[i].min;}else if(v.vizProperties[i].hasOwnProperty("max")&&p1>=v.vizProperties[i].max){p1=v.vizProperties[i].max;}break;}}else if(v.vizProperties[i].hasOwnProperty("value")){p1=v.vizProperties[i].value;}if(v.vizProperties[i].hasOwnProperty("path")){r1=(v.vizProperties[i].path).split(".");var s1=r1.length;var t1;var u1;for(var j=0,u1=r1[0],t1=V;j<s1;++j){if(j==s1-1){t1[u1]=p1;break;}t1[u1]=t1[u1]||{};t1=t1[u1];u1=r1[j+1];}}}}}}});var U=a.getFeeds();if(h.properties&&h.properties.semanticPattern==true&&sap.ovp.cards.charts.VizAnnotationManager.getMeasureDimCheck(U,f)){jQuery.each(U,function(i,v){if(U[i].getType()=='Measure'&&((U[i].getUid()=='valueAxis')||(U[i].getUid()=='actualValues'))){var j;jQuery.each(m,function(_,a1){var b1=sap.ovp.cards.charts.VizAnnotationManager.getSapLabel(a1.Measure.PropertyPath,y);if(b1==U[i].getValues()[0]){j=sap.ovp.cards.charts.VizAnnotationManager.checkForecastMeasure(a1,e);return false;}});if(j){var k=sap.ovp.cards.charts.VizAnnotationManager.getSapLabel(j.Measure.PropertyPath,y);var W=e[j.DataPoint.AnnotationPath.substring(1)].ForecastValue.PropertyPath;var X=sap.ovp.cards.charts.VizAnnotationManager.getSapLabel(W,y);var Y=sap.ui.getCore().getLibraryResourceBundle("sap.ovp").getText("ACTUAL",[k]);var Z=sap.ui.getCore().getLibraryResourceBundle("sap.ovp").getText("FORECAST",[X]);V.plotArea={dataPointStyle:{rules:[{dataContext:{MeasureNamesDimension:k},properties:{color:"sapUiChartPaletteSequentialHue1Light1",lineType:"line",lineColor:"sapUiChartPaletteSequentialHue1Light1"},displayName:Y},{dataContext:{MeasureNamesDimension:X},properties:{color:"sapUiChartPaletteSequentialHue1Light1",lineType:"dotted",lineColor:"sapUiChartPaletteSequentialHue1Light1",pattern:"diagonalLightStripe"},displayName:Z}]}};a.getDataset().addMeasure(new sap.viz.ui5.data.MeasureDefinition({name:X,value:"{"+W+"}"}));var $=U[i].getValues();$.push(X);U[i].setValues($);}return false;}});}if(L&&O){jQuery.sap.log.warning(sap.ui.getCore().getLibraryResourceBundle("sap.ovp").getText("Currency_non_currency_measure"));}if(R&&!P){I=G=0;}else if(!R&&!P){I=G=2;}jQuery.each(T,function(i,j){var k=j.label.formatString;var v="";if(L){if(k==='CURR'){v='CURR/'+I.toString()+"/"+K.toString();}else{v='axisFormatter/'+I.toString()+"/"+K.toString();}}else{v='axisFormatter/'+G.toString()+"/"+J.toString();}j.label={formatString:v};});this.checkRolesForProperty(Q,h,"dimension");this.checkRolesForProperty(l,h,"measure");a.setVizProperties(V);};sap.ovp.cards.charts.VizAnnotationManager.getMetadata=function(m,e){var a=this.cacheODataMetadata(m);if(!a){return undefined;}return a[e];};sap.ovp.cards.charts.VizAnnotationManager.cacheODataMetadata=function(m){var s=sap.ovp.cards.charts.VizAnnotationManager;if(m){if(!jQuery.sap.getObject("sap.ovp.cards.charts.cachedMetaModel")){sap.ovp.cards.charts.cachedMetaModel={};}var a=sap.ovp.cards.charts.cachedMetaModel[m.getId()];if(!a){var b=m.getMetaModel();a={};var c=b.getODataEntityContainer();jQuery.each(c.entitySet,function(d,e){var f=b.getODataEntityType(e.entityType);var g={};jQuery.each(f.property,function(p,h){g[h.name]=h;});a[e.name]=g;});sap.ovp.cards.charts.cachedMetaModel[m.getId()]=a;}return a;}else{jQuery.sap.log.error(s.errorMessages.CARD_ERROR+s.errorMessages.CACHING_ERROR);}};sap.ovp.cards.charts.VizAnnotationManager.getSelectedDataPoint=function(v,c){v.attachSelectData(function(e){var s=sap.ovp.cards.charts.VizAnnotationManager;var C=v.getModel('ovpCardProperties');var d=v.getModel();var a=C.getProperty("/entitySet");var m=s.getMetadata(d,a);var b=[],f=[];var g={};var h=v.getDataset().getDimensions();var l;for(var i=0;i<h.length;i++){b.push(h[i].getName());}var n=jQuery.map(v.getDataset().getBinding("data").getCurrentContexts(),function(x){return x.getObject();});if(e.getParameter("data")&&e.getParameter("data")[0]&&e.getParameter("data")[0].data){l=e.getParameter("data")[0].data._context_row_number;f=Object.keys(e.getParameter("data")[0].data);for(var j=0;j<b.length;j++){for(var k=0;k<f.length;k++){if(b[j]==f[k]){for(var o in m){if(m.hasOwnProperty(o)){var p=m[o][s.constants.LABEL_KEY]||m[o][s.constants.NAME_KEY]||m[o][s.constants.NAME_CAP_KEY];if(p==f[k]){g[o]=n[l][o];}}}}}}var q={getObject:function(){return g;}};c.doNavigation(q);}});};sap.ovp.cards.charts.VizAnnotationManager.checkBubbleChart=function(c){if(c.EnumMember.endsWith("Bubble")){return true;}else{return false;}};sap.ovp.cards.charts.VizAnnotationManager.dimensionAttrCheck=function(d){var r=false;var s=sap.ovp.cards.charts.VizAnnotationManager;if(!d||d.constructor!=Array||d.length<1||d[0].constructor!=Object||!d[0].Dimension||!d[0].Dimension.PropertyPath){jQuery.sap.log.error(s.errorMessages.CHART_ANNO_ERROR+"in "+s.errorMessages.CHART_ANNO+" "+s.errorMessages.DIMENSIONS_MANDATORY);return r;}r=true;return r;};sap.ovp.cards.charts.VizAnnotationManager.measureAttrCheck=function(m){var r=false;var s=sap.ovp.cards.charts.VizAnnotationManager;if(!m||m.constructor!=Array||m.length<1||m[0].constructor!=Object||!m[0].Measure||!m[0].Measure.PropertyPath){jQuery.sap.log.error(s.errorMessages.CHART_ANNO_ERROR+"in "+s.errorMessages.CHART_ANNO+" "+s.errorMessages.MEASURES_MANDATORY);return r;}r=true;return r;};}());
