/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/library','sap/ui/core/Locale','sap/ui/core/LocaleData','sap/ui/core/date/UniversalDate','jquery.sap.strings'],function(q,l,L,a,U){"use strict";var C=l.CalendarType;var D=function(){throw new Error();};D.oDateInfo={oDefaultFormatOptions:{style:"medium",relativeScale:"day",relativeStyle:"wide"},aFallbackFormatOptions:[{style:"short"},{style:"medium"},{pattern:"yyyy-MM-dd"},{pattern:"yyyyMMdd",strictParsing:true}],bShortFallbackFormatOptions:true,bPatternFallbackWithoutDelimiter:true,getPattern:function(o,s,c){return o.getDatePattern(s,c);},oRequiredParts:{"text":true,"year":true,"weekYear":true,"month":true,"day":true},aRelativeScales:["year","month","week","day"],aRelativeParseScales:["year","quarter","month","week","day","hour","minute","second"]};D.oDateTimeInfo={oDefaultFormatOptions:{style:"medium",relativeScale:"auto",relativeStyle:"wide"},aFallbackFormatOptions:[{style:"short"},{style:"medium"},{pattern:"yyyy-MM-dd'T'HH:mm:ss"},{pattern:"yyyyMMdd HHmmss"}],getPattern:function(o,s,c){var S=s.indexOf("/");if(S>0){return o.getCombinedDateTimePattern(s.substr(0,S),s.substr(S+1),c);}else{return o.getCombinedDateTimePattern(s,s,c);}},oRequiredParts:{"text":true,"year":true,"weekYear":true,"month":true,"day":true,"hour0_23":true,"hour1_24":true,"hour0_11":true,"hour1_12":true},aRelativeScales:["year","month","week","day","hour","minute","second"],aRelativeParseScales:["year","quarter","month","week","day","hour","minute","second"]};D.oTimeInfo={oDefaultFormatOptions:{style:"medium",relativeScale:"auto",relativeStyle:"wide"},aFallbackFormatOptions:[{style:"short"},{style:"medium"},{pattern:"HH:mm:ss"},{pattern:"HHmmss"}],getPattern:function(o,s,c){return o.getTimePattern(s,c);},oRequiredParts:{"text":true,"hour0_23":true,"hour1_24":true,"hour0_11":true,"hour1_12":true},aRelativeScales:["hour","minute","second"],aRelativeParseScales:["year","quarter","month","week","day","hour","minute","second"]};D.getInstance=function(f,o){return this.getDateInstance(f,o);};D.getDateInstance=function(f,o){return this.createInstance(f,o,this.oDateInfo);};D.getDateTimeInstance=function(f,o){return this.createInstance(f,o,this.oDateTimeInfo);};D.getTimeInstance=function(f,o){return this.createInstance(f,o,this.oTimeInfo);};D.createInstance=function(f,o,i){var F=q.sap.newObject(this.prototype);if(f instanceof L){o=f;f=undefined;}if(!o){o=sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale();}F.oLocale=o;F.oLocaleData=a.getInstance(o);F.oFormatOptions=q.extend(false,{},i.oDefaultFormatOptions,f);if(!F.oFormatOptions.calendarType){F.oFormatOptions.calendarType=sap.ui.getCore().getConfiguration().getCalendarType();}if(!F.oFormatOptions.pattern){if(F.oFormatOptions.format){F.oFormatOptions.pattern=F.oLocaleData.getCustomDateTimePattern(F.oFormatOptions.format,F.oFormatOptions.calendarType);}else{F.oFormatOptions.pattern=i.getPattern(F.oLocaleData,F.oFormatOptions.style,F.oFormatOptions.calendarType);}}if(!F.oFormatOptions.fallback){if(!i.oFallbackFormats){i.oFallbackFormats={};}var s=o.toString(),c=F.oFormatOptions.calendarType,k=s+"-"+c,p,b;if(F.oFormatOptions.pattern&&i.bPatternFallbackWithoutDelimiter){k=k+"-"+F.oFormatOptions.pattern;}if(!i.oFallbackFormats[k]){b=i.aFallbackFormatOptions;if(i.bShortFallbackFormatOptions){p=i.getPattern(F.oLocaleData,"short");b=b.concat(D._createFallbackOptionsWithoutDelimiter(p));}if(F.oFormatOptions.pattern&&i.bPatternFallbackWithoutDelimiter){b=D._createFallbackOptionsWithoutDelimiter(F.oFormatOptions.pattern).concat(b);}i.oFallbackFormats[k]=D._createFallbackFormat(b,c,o,i);}F.aFallbackFormats=i.oFallbackFormats[k];}F.oRequiredParts=i.oRequiredParts;F.aRelativeScales=i.aRelativeScales;F.aRelativeParseScales=i.aRelativeParseScales;F.init();return F;};D.prototype.init=function(){var c=this.oFormatOptions.calendarType;this.aMonthsAbbrev=this.oLocaleData.getMonths("abbreviated",c);this.aMonthsWide=this.oLocaleData.getMonths("wide",c);this.aMonthsNarrow=this.oLocaleData.getMonths("narrow",c);this.aMonthsAbbrevSt=this.oLocaleData.getMonthsStandAlone("abbreviated",c);this.aMonthsWideSt=this.oLocaleData.getMonthsStandAlone("wide",c);this.aMonthsNarrowSt=this.oLocaleData.getMonthsStandAlone("narrow",c);this.aDaysAbbrev=this.oLocaleData.getDays("abbreviated",c);this.aDaysWide=this.oLocaleData.getDays("wide",c);this.aDaysNarrow=this.oLocaleData.getDays("narrow",c);this.aDaysShort=this.oLocaleData.getDays("short",c);this.aDaysAbbrevSt=this.oLocaleData.getDaysStandAlone("abbreviated",c);this.aDaysWideSt=this.oLocaleData.getDaysStandAlone("wide",c);this.aDaysNarrowSt=this.oLocaleData.getDaysStandAlone("narrow",c);this.aDaysShortSt=this.oLocaleData.getDaysStandAlone("short",c);this.aQuartersAbbrev=this.oLocaleData.getQuarters("abbreviated",c);this.aQuartersWide=this.oLocaleData.getQuarters("wide",c);this.aQuartersNarrow=this.oLocaleData.getQuarters("narrow",c);this.aQuartersAbbrevSt=this.oLocaleData.getQuartersStandAlone("abbreviated",c);this.aQuartersWideSt=this.oLocaleData.getQuartersStandAlone("wide",c);this.aQuartersNarrowSt=this.oLocaleData.getQuartersStandAlone("narrow",c);this.aErasNarrow=this.oLocaleData.getEras("narrow",c);this.aErasAbbrev=this.oLocaleData.getEras("abbreviated",c);this.aErasWide=this.oLocaleData.getEras("wide",c);this.aDayPeriods=this.oLocaleData.getDayPeriods("abbreviated",c);this.aFormatArray=this.parseCldrDatePattern(this.oFormatOptions.pattern);this.sAllowedCharacters=this.getAllowedCharacters(this.aFormatArray);};D._createFallbackFormat=function(f,c,o,i){return f.map(function(F){F.calendarType=c;F.fallback=true;var b=D.createInstance(F,o,i);b.bIsFallback=true;return b;});};D._createFallbackOptionsWithoutDelimiter=function(b){var r=/[^dMyGU]/g,d={regex:/d+/g,replace:"dd"},m={regex:/M+/g,replace:"MM"},y={regex:/[yU]+/g,replace:["yyyy","yy"]};b=b.replace(r,"");b=b.replace(d.regex,d.replace);b=b.replace(m.regex,m.replace);return y.replace.map(function(R){return{pattern:b.replace(y.regex,R),strictParsing:true};});};D.prototype.oSymbols={"G":"era","y":"year","Y":"weekYear","M":"month","L":"monthStandalone","w":"weekInYear","W":"weekInMonth","D":"dayInYear","d":"day","Q":"quarter","q":"quarterStandalone","F":"dayOfWeekInMonth","E":"dayNameInWeek","c":"dayNameInWeekStandalone","u":"dayNumberOfWeek","a":"amPmMarker","H":"hour0_23","k":"hour1_24","K":"hour0_11","h":"hour1_12","m":"minute","s":"second","S":"fractionalsecond","z":"timezoneGeneral","Z":"timezoneRFC822","X":"timezoneISO8601"};D.prototype.format=function(j,u){if(u===undefined){u=this.oFormatOptions.UTC;}if(!j||isNaN(j.getTime())){return"";}if(this.oFormatOptions.relative){var r=this.formatRelative(j,u,this.oFormatOptions.relativeRange);if(r){return r;}}var c=this.oFormatOptions.calendarType;var d=U.getInstance(j,c);var b=[],p,c=this.oFormatOptions.calendarType,e=u?d.getUTCDay():d.getDay(),f=u?d.getUTCDate():d.getDate(),m=u?d.getUTCMonth():d.getMonth(),y=u?d.getUTCFullYear():d.getFullYear(),E=u?d.getUTCEra():d.getEra(),w=u?d.getUTCWeek():d.getWeek(),M=u?d.getUTCMilliseconds():d.getMilliseconds(),s=u?d.getUTCSeconds():d.getSeconds(),g=u?d.getUTCMinutes():d.getMinutes(),h=u?d.getUTCHours():d.getHours(),t=Math.abs(d.getTimezoneOffset()),P=d.getTimezoneOffset()>0,H=Math.floor(t/60),k=t%60,Q=Math.floor(m/3),Y,W,n,R;for(var i=0;i<this.aFormatArray.length;i++){p=this.aFormatArray[i];switch(p.type){case"text":b.push(p.value);break;case"day":b.push(q.sap.padLeft(String(f),"0",p.digits));break;case"dayNameInWeek":if(p.digits<4){b.push(this.aDaysAbbrev[e]);}else if(p.digits==4){b.push(this.aDaysWide[e]);}else if(p.digits==5){b.push(this.aDaysNarrow[e]);}else{b.push(this.aDaysShort[e]);}break;case"dayNameInWeekStandalone":if(p.digits<4){b.push(this.aDaysAbbrevSt[e]);}else if(p.digits==4){b.push(this.aDaysWideSt[e]);}else if(p.digits==5){b.push(this.aDaysNarrowSt[e]);}else{b.push(this.aDaysShortSt[e]);}break;case"dayNumberOfWeek":b.push(e||7);break;case"month":if(p.digits==3){b.push(this.aMonthsAbbrev[m]);}else if(p.digits==4){b.push(this.aMonthsWide[m]);}else if(p.digits>4){b.push(this.aMonthsNarrow[m]);}else{b.push(q.sap.padLeft(String(m+1),"0",p.digits));}break;case"monthStandalone":if(p.digits==3){b.push(this.aMonthsAbbrevSt[m]);}else if(p.digits==4){b.push(this.aMonthsWideSt[m]);}else if(p.digits>4){b.push(this.aMonthsNarrowSt[m]);}else{b.push(q.sap.padLeft(String(m+1),"0",p.digits));}break;case"quarter":if(p.digits==3){b.push(this.aQuartersAbbrev[Q]);}else if(p.digits==4){b.push(this.aQuartersWide[Q]);}else if(p.digits>4){b.push(this.aQuartersNarrow[Q]);}else{b.push(q.sap.padLeft(String(Q+1),"0",p.digits));}break;case"quarterStandalone":if(p.digits==3){b.push(this.aQuartersAbbrevSt[Q]);}else if(p.digits==4){b.push(this.aQuartersWideSt[Q]);}else if(p.digits>4){b.push(this.aQuartersNarrowSt[Q]);}else{b.push(q.sap.padLeft(String(Q+1),"0",p.digits));}break;case"era":if(p.digits<=3){b.push(this.aErasAbbrev[E]);}else if(p.digits===4){b.push(this.aErasWide[E]);}else{b.push(this.aErasNarrow[E]);}break;case"year":case"weekYear":Y=""+y;if(p.digits==2&&Y.length>2){Y=Y.substr(Y.length-2);}if(c!=C.Japanese&&p.digits==1&&y<100){Y=q.sap.padLeft(Y,"0",4);}b.push(q.sap.padLeft(Y,"0",p.digits));break;case"weekInYear":if(w==undefined){break;}W=""+w;if(p.digits<3){W=q.sap.padLeft(W,"0",p.digits);}else{W=this.oLocaleData.getCalendarWeek(p.digits===3?"narrow":"wide",q.sap.padLeft(W,"0",2));}b.push(W);break;case"hour0_23":b.push(q.sap.padLeft(String(h),"0",p.digits));break;case"hour1_24":if(h==0){n="24";}else{n=String(h);}b.push(q.sap.padLeft(n,"0",p.digits));break;case"hour0_11":if(h>11){n=String(h-12);}else{n=String(h);}b.push(q.sap.padLeft(n,"0",p.digits));break;case"hour1_12":if(h>12){n=String(h-12);}else if(h==0){n="12";}else{n=String(h);}b.push(q.sap.padLeft(n,"0",p.digits));break;case"minute":b.push(q.sap.padLeft(String(g),"0",p.digits));break;case"second":b.push(q.sap.padLeft(String(s),"0",p.digits));break;case"fractionalsecond":var o=String(M),F=q.sap.padLeft(o,"0",3);F=F.substr(0,p.digits);F=q.sap.padRight(F,"0",p.digits);b.push(F);break;case"amPmMarker":var v=h<12?0:1;b.push(this.aDayPeriods[v]);break;case"timezoneGeneral":if(p.digits>3&&d.getTimezoneLong()){b.push(d.getTimezoneLong());break;}else if(d.getTimezoneShort()){b.push(d.getTimezoneShort());break;}b.push("GMT");case"timezoneISO8601":if(!u&&t!=0){b.push(P?"-":"+");b.push(q.sap.padLeft(String(H),"0",2));b.push(":");b.push(q.sap.padLeft(String(k),"0",2));}else{b.push("Z");}break;case"timezoneRFC822":if(!u&&t!=0){b.push(P?"-":"+");b.push(q.sap.padLeft(String(H),"0",2));b.push(q.sap.padLeft(String(k),"0",2));}break;}}R=b.join("");if(sap.ui.getCore().getConfiguration().getOriginInfo()){R=new String(R);R.originInfo={source:"Common Locale Data Repository",locale:this.oLocale.toString(),style:this.oFormatOptions.style,pattern:this.oFormatOptions.pattern};}return R;};D.prototype.parse=function(v,u,s){if(u===undefined){u=this.oFormatOptions.UTC;}if(s===undefined){s=this.oFormatOptions.strictParsing;}var d,I=0,b=null,m=null,y=null,e=null,h=null,M=null,S=null,c=null,Q=null,p=false,P,f,t=null,V=true,F,g,k=this.aErasWide.length-1,r=this.oRequiredParts,n=this.oFormatOptions.calendarType,o=[this.aDaysWide,this.aDaysWideSt,this.aDaysAbbrev,this.aDaysAbbrevSt,this.aDaysShort,this.aDaysShortSt,this.aDaysNarrow,this.aDaysNarrowSt],w=[this.aMonthsWide,this.aMonthsWideSt,this.aMonthsAbbrev,this.aMonthsAbbrevSt,this.aMonthsNarrow,this.aMonthsNarrowSt],x=[this.aQuartersWide,this.aQuartersWideSt,this.aQuartersAbbrev,this.aQuartersAbbrevSt,this.aQuartersNarrow,this.aQuartersNarrowSt],E=[this.aErasWide,this.aErasAbbrev,this.aErasNarrow];function z(j){return j>=48&&j<=57;}function A(j){var _=0;while(_<j&&z(v.charCodeAt(I+_))){_++;}return v.substr(I,_);}function B(_){var a1=-1,b1=0;for(var j=0;j<_.length;j++){if(_[j]&&_[j].length>b1&&v.indexOf(_[j],I)==I){a1=j;b1=_[j].length;}}return{index:a1,value:a1===-1?null:_[a1]};}function G(j){var _=v.charAt(I)=="+"?-1:1;I++;f=A(2);var a1=parseInt(f,10);I=I+2;if(j){I++;}f=A(2);I=I+2;t=parseInt(f,10);t=(t+60*a1)*_;}function H(j,_){if(j in r&&_){V=false;}}function J(j){F=B(j);if(F.index!==-1){I+=F.value.length;return true;}}v=q.trim(v);var K=this.parseRelative(v,u);if(K){return K;}for(var i=0;i<this.aFormatArray.length;i++){P=this.aFormatArray[i];switch(P.type){case"text":if(v.indexOf(P.value,I)==I){I+=P.value.length;}else{H(P.type,this.aFormatArray[i+1].type in r);}break;case"day":f=A(Math.max(P.digits,2));H(P.type,f==="");I+=f.length;b=parseInt(f,10);if(s&&(b>31||b<1)){V=false;}break;case"dayNameInWeek":case"dayNameInWeekStandalone":o.some(J);break;case"dayNumberOfWeek":f=A(P.digits);I+=f.length;break;case"month":case"monthStandalone":if(P.digits<3){f=A(Math.max(P.digits,2));H(P.type,f==="");m=parseInt(f,10)-1;I+=f.length;if(s&&(m>11||m<0)){V=false;}}else{g=w.some(J);if(g){m=F.index;}else{H(P.type,true);}}break;case"quarter":case"quarterStandalone":if(P.digits<3){f=A(Math.max(P.digits,2));H(P.type,f==="");Q=parseInt(f,10)-1;I+=f.length;if(s&&Q>3){V=false;}}else{g=x.some(J);if(g){Q=F.index;}else{H(P.type,true);}}break;case"era":g=E.some(J);if(g){e=F.index;}else{H(P.type,true);e=k;}break;case"year":case"weekYear":if(P.digits==1){f=A(4);}else if(P.digits==2){f=A(2);}else{f=A(P.digits);}I+=f.length;H(P.type,f==="");y=parseInt(f,10);if(n!=C.Japanese&&f.length<=2){var N=U.getInstance(new Date(),n),O=N.getFullYear(),R=Math.floor(O/100),Y=R*100+y-O;if(Y<-70){y+=(R+1)*100;}else if(Y<30){y+=R*100;}else{y+=(R-1)*100;}}break;case"weekInYear":if(P.digits<3){f=A(2);I+=f.length;H(P.type,!f);}else{f=this.oLocaleData.getCalendarWeek(P.digits===3?"narrow":"wide");f=f.replace("{0}","[0-9]+");var T=new RegExp(f),W=T.exec(v.substring(I));if(W){I+=W[0].length;}else{H(P.type,true);}}break;case"hour0_23":f=A(Math.max(P.digits,2));H(P.type,f==="");I+=f.length;h=parseInt(f,10);if(s&&h>23){V=false;}break;case"hour1_24":f=A(Math.max(P.digits,2));H(P.type,f==="");I+=f.length;h=parseInt(f,10);if(h==24){h=0;}if(s&&h>23){V=false;}break;case"hour0_11":f=A(Math.max(P.digits,2));H(P.type,f==="");I+=f.length;h=parseInt(f,10);if(s&&h>11){V=false;}break;case"hour1_12":f=A(Math.max(P.digits,2));H(P.type,f==="");I+=f.length;h=parseInt(f,10);if(h==12){h=0;p=true;}if(s&&h>11){V=false;}break;case"minute":f=A(Math.max(P.digits,2));H(P.type,f==="");I+=f.length;M=parseInt(f,10);if(s&&M>59){V=false;}break;case"second":f=A(Math.max(P.digits,2));H(P.type,f==="");I+=f.length;S=parseInt(f,10);if(s&&S>59){V=false;}break;case"fractionalsecond":f=A(P.digits);I+=f.length;f=f.substr(0,3);f=q.sap.padRight(f,"0",3);c=parseInt(f,10);break;case"amPmMarker":var X=this.aDayPeriods[0],Z=this.aDayPeriods[1];if(v.indexOf(X,I)==I){p=false;I+=X.length;}else if(v.indexOf(Z,I)==I){p=true;I+=Z.length;}break;case"timezoneGeneral":var $=v.substring(I,I+3);if($==="GMT"||$==="UTC"){I=I+3;}else if(v.substring(I,I+2)==="UT"){I=I+2;}else if(v.charAt(I)=="Z"){I=I+1;t=0;break;}else{q.sap.log.error(v+" cannot be parsed correcly by sap.ui.core.format.DateFormat: The given timezone is not supported!");break;}case"timezoneISO8601":if(v.charAt(I)=="Z"){I=I+1;t=0;break;}G(true);break;case"timezoneRFC822":G(false);break;}if(!V){break;}}if(I<v.length){V=false;}if(p){h+=12;}if(Q!==null&&m===null&&b===null){m=3*Q;b=1;}if(V){if(u||t!=null){d=U.getInstance(new Date(0),n);d.setUTCEra(e||U.getCurrentEra(n));d.setUTCFullYear(y||1970);d.setUTCMonth(m||0);d.setUTCDate(b||1);d.setUTCHours(h||0);d.setUTCMinutes(M||0);d.setUTCSeconds(S||0);d.setUTCMilliseconds(c||0);if(s&&(b||1)!==d.getUTCDate()){V=false;d=undefined;}else if(t){d.setUTCMinutes((M||0)+t);}}else{d=U.getInstance(new Date(1970,0,1,0,0,0),n);d.setEra(e||U.getCurrentEra(n));d.setFullYear(y||1970);d.setMonth(m||0);d.setDate(b||1);d.setHours(h||0);d.setMinutes(M||0);d.setSeconds(S||0);d.setMilliseconds(c||0);if(s&&(b||1)!==d.getDate()){V=false;d=undefined;}}if(V){d=d.getJSDate();return d;}}if(!this.bIsFallback){q.each(this.aFallbackFormats,function(i,j){d=j.parse(v,u,s);if(d){return false;}});return d;}return null;};D.prototype.parseCldrDatePattern=function(p){var f=[],i,Q=false,c=null,s="",n="";for(i=0;i<p.length;i++){var b=p.charAt(i),N,P,d;if(Q){if(b=="'"){P=p.charAt(i-1);d=p.charAt(i-2);N=p.charAt(i+1);if(P=="'"&&d!="'"){Q=false;}else if(N=="'"){i+=1;}else{Q=false;continue;}}if(s=="text"){c.value+=b;}else{c={type:"text",value:b};f.push(c);s="text";}}else{if(b=="'"){Q=true;}else if(this.oSymbols[b]){n=this.oSymbols[b];if(s==n){c.digits++;}else{c={type:n,digits:1};f.push(c);s=n;}}else{if(s=="text"){c.value+=b;}else{c={type:"text",value:b};f.push(c);s="text";}}}}return f;};D.prototype.parseRelative=function(v,u){var p,e,r,R,V;if(!v){return null;}p=this.oLocaleData.getRelativePatterns(this.aRelativeParseScales,this.oFormatOptions.relativeStyle);for(var i=0;i<p.length;i++){e=p[i];r=new RegExp("^\\s*"+e.pattern.replace(/\{0\}/,"(\\d+)")+"\\s*$","i");R=r.exec(v);if(R){if(e.value!==undefined){return c(e.value,e.scale);}else{V=parseInt(R[1],10);return c(V*e.sign,e.scale);}}}function c(d,s){var t,T=new Date(),j;if(u){t=T.getTime();}else{t=Date.UTC(T.getFullYear(),T.getMonth(),T.getDate(),T.getHours(),T.getMinutes(),T.getSeconds(),T.getMilliseconds());}j=new Date(t);switch(s){case"second":j.setUTCSeconds(j.getUTCSeconds()+d);break;case"minute":j.setUTCMinutes(j.getUTCMinutes()+d);break;case"hour":j.setUTCHours(j.getUTCHours()+d);break;case"day":j.setUTCDate(j.getUTCDate()+d);break;case"week":j.setUTCDate(j.getUTCDate()+d*7);break;case"month":j.setUTCMonth(j.getUTCMonth()+d);break;case"quarter":j.setUTCMonth(j.getUTCMonth()+d*3);break;case"year":j.setUTCFullYear(j.getUTCFullYear()+d);break;}if(u){return j;}else{return new Date(j.getUTCFullYear(),j.getUTCMonth(),j.getUTCDate(),j.getUTCHours(),j.getUTCMinutes(),j.getUTCSeconds(),j.getUTCMilliseconds());}}};D.prototype.formatRelative=function(j,u,r){var t=new Date(),s=this.oFormatOptions.relativeScale||"day",T,d,i,p,b;b=(j.getTime()-t.getTime())/1000;if(this.oFormatOptions.relativeScale=="auto"){s=this._getScale(b,this.aRelativeScales);}if(!r){r=this._mRanges[s];}if(s=="year"||s=="month"||s=="day"){T=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate());if(u){d=Date.UTC(j.getUTCFullYear(),j.getUTCMonth(),j.getUTCDate());}else{d=Date.UTC(j.getFullYear(),j.getMonth(),j.getDate());}b=(d-T)/1000;}i=this._getDifference(s,b);if(this.oFormatOptions.relativeScale!="auto"&&(i<r[0]||i>r[1])){return null;}p=this.oLocaleData.getRelativePattern(s,i,b>0,this.oFormatOptions.relativeStyle);return q.sap.formatMessage(p,[Math.abs(i)]);};D.prototype._mRanges={second:[-60,60],minute:[-60,60],hour:[-24,24],day:[-6,6],week:[-4,4],month:[-12,12],year:[-10,10]};D.prototype._mScales={second:1,minute:60,hour:3600,day:86400,week:604800,month:2592000,quarter:7776000,year:31536000};D.prototype._getScale=function(d,s){var S,t;d=Math.abs(d);for(var i=0;i<s.length;i++){t=s[i];if(d>=this._mScales[t]){S=t;break;}}if(!S){S=s[s.length-1];}return S;};D.prototype._getDifference=function(s,d){var S=this._mScales[s],i=d/S;if(d>0){i=Math.floor(i);}else{i=Math.ceil(i);}return i;};D.prototype.getAllowedCharacters=function(f){if(this.oFormatOptions.relative){return"";}var A="";var n=false;var b=false;var p;for(var i=0;i<this.aFormatArray.length;i++){p=this.aFormatArray[i];switch(p.type){case"text":if(A.indexOf(p.value)<0){A+=p.value;}break;case"day":case"year":case"weekYear":case"dayNumberOfWeek":case"weekInYear":case"hour0_23":case"hour1_24":case"hour0_11":case"hour1_12":case"minute":case"second":case"fractionalsecond":if(!n){A+="0123456789";n=true;}break;case"month":case"monthStandalone":if(p.digits<3){if(!n){A+="0123456789";n=true;}}else{b=true;}break;default:b=true;break;}}if(b){A="";}return A;};return D;},true);