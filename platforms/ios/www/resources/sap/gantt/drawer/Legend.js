sap.ui.define(["sap/gantt/drawer/Drawer","sap/gantt/misc/Format","sap/ui/thirdparty/d3"],function(D,F){"use strict";var L=D.extend("sap.gantt.drawer.Legend");L.prototype._recursiveDraw=function(g,s){var S=g.selectAll("."+s.getId()).data(function(d){var r=[];return r.concat(d);});this._drawPerTag(S,s);};L.prototype._drawPerTag=function(s,S){var l=S.mChartInstance;if(S.getIsDuration()){S.getTime=function(){return l.TIME_RANGE[0];};S.getEndTime=function(){return l.TIME_RANGE[1];};}else{S.getTime=function(){return l.TIME;};}S.setRowYCenter(l.getScaledLegendHeight()/2);switch(S.getTag()){case"g":this._drawGroup(s,S);break;case"line":this._drawLine(s,S);break;case"rect":this._drawRect(s,S);break;case"text":this._drawText(s,S);break;case"path":this._drawPath(s,S);break;case"image":this._drawImage(s,S);break;case"polygon":this._drawPolygon(s,S);break;case"polyline":this._drawPolyline(s,S);break;case"circle":this._drawCircle(s,S);break;default:break;}this._insertTitle(s,S);};L.prototype._insertTitle=function(s,S){s.select("title").remove();s.insert("title",":first-child").text(function(d){if(!S.getParent()){return S.getTitle(d);}});};L.prototype._drawGroup=function(s,S){s.enter().append("g").classed(S.getId(),true).attr("role",function(d){if(!S.getParent()){return"tooltip";}}).attr("focusable",function(d){if(!S.getParent()){return true;}}).attr("tabindex",function(d){if(!S.getParent()){return 0;}}).attr("aria-label",function(d){if(!S.getParent()){return S.getAriaLabel(d);}});s.exit().remove();var a=S.getShapes();if(a&&a.length>0){for(var i=0;i<a.length;i++){this._recursiveDraw(s,a[i]);}}};L.prototype._drawLine=function(s,S){var t=this;s.enter().append("line").attr("x1",function(d){return S.getX1(d);}).attr("y1",function(d){return S.getY1(d);}).attr("x2",function(d){return S.getX2(d);}).attr("y2",function(d){return S.getY2(d);}).attr("filter",function(d){return S.getFilter(d);}).attr("aria-label",function(d){return S.getAriaLabel(d);}).attr("stroke",function(d){return t.determineValue("stroke",S,d);}).attr("stroke-width",function(d){return S.getStrokeWidth(d);}).attr("stroke-dasharray",function(d){return S.getStrokeDasharray(d);}).attr("fill-Opacity",function(d){return S.getFillOpacity(d);}).attr("transform",function(d){return S.getTransform(d);}).attr("role",function(d){if(!S.getParent()){return"tooltip";}}).attr("focusable",function(d){if(!S.getParent()){return true;}}).attr("tabindex",function(d){if(!S.getParent()){return 0;}}).attr("aria-label",function(d){if(!S.getParent()){return S.getAriaLabel(d);}});s.exit().remove();};L.prototype._drawRect=function(s,S){var l=S.mChartInstance,t=this;s.enter().append("rect").classed(S.getId(),true);s.attr("x",function(d){if(l.getLegendSpace!==undefined){if(sap.ui.getCore().getConfiguration().getRTL()){var x=l.getXDomain(),X=x.length;return l.getScaledLegendWidth()*(X-d.xIndex-1)+l.getLegendSpace()*(X-d.xIndex);}return l.getScaledLegendWidth()*d.xIndex+l.getLegendSpace()*(d.xIndex+1);}return S.getX(d);}).attr("y",function(d){if(l.getLegendSpace!==undefined){return l.getScaledLegendHeight()*d.yIndex+l.getLegendSpace()*(d.yIndex+1);}return S.getY(d);}).attr("width",function(d){return S.getWidth(d);}).attr("height",function(d){return S.getHeight(d);}).attr("fill",function(d){return t.determineValue("fill",S,d);}).attr("rx",function(d){return S.getRx(d);}).attr("ry",function(d){return S.getRy(d);}).attr("filter",function(d){return S.getFilter(d);}).attr("stroke",function(d){return t.determineValue("stroke",S,d);}).attr("stroke-width",function(d){return S.getStrokeWidth(d);}).attr("stroke-dasharray",function(d){return S.getStrokeDasharray(d);}).attr("opacity",function(d){return S.getFillOpacity(d);}).attr("aria-label",function(d){return S.getAriaLabel(d);}).attr("transform",function(d){return S.getTransform(d);}).attr("role",function(d){if(!S.getParent()){return"tooltip";}}).attr("focusable",function(d){if(!S.getParent()){return true;}}).attr("tabindex",function(d){if(!S.getParent()){return 0;}}).attr("aria-label",function(d){if(!S.getParent()){return S.getAriaLabel(d);}});s.exit().remove();};L.prototype._drawText=function(s,S){var l=S.mChartInstance,t=this;s.enter().append("text").attr("x",function(d){if(l.getLegendSpace!==undefined){return l.getScaledLegendWidth()*d.xIndex+l.getLegendSpace()*(d.xIndex+1);}return S.getX(d);}).attr("y",function(d){if(l.getLegendSpace!==undefined){return l.getScaledLegendHeight()*d.yIndex+l.getLegendSpace()*(d.yIndex+1);}return S.getRowYCenter(d);}).attr("text-anchor","middle").attr("font-size",function(d){return S.getFontSize(d);}).attr("fill",function(d){return t.determineValue("fill",S,d);}).attr("filter",function(d){return S.getFilter(d);}).attr("stroke",function(d){return t.determineValue("stroke",S,d);}).attr("stroke-width",function(d){return S.getStrokeWidth(d);}).attr("alignment-baseline","central").attr("font-family",function(d){return S.getFontFamily(d);}).text(S.getText()).attr("transform",function(d){return S.getTransform(d);}).attr("role",function(d){if(!S.getParent()){return"tooltip";}}).attr("focusable",function(d){if(!S.getParent()){return true;}}).attr("tabindex",function(d){if(!S.getParent()){return 0;}}).attr("aria-label",function(d){if(!S.getParent()){return S.getAriaLabel(d);}});s.exit().remove();};L.prototype._drawPath=function(s,S){var t=this;s.enter().append("path").attr("d",function(d){return S.getD(d);}).attr("fill",function(d){return t.determineValue("fill",S,d);}).attr("stroke",function(d){return t.determineValue("stroke",S,d);}).attr("stroke-width",function(d){return S.getStrokeWidth(d);}).attr("stroke-dasharray",function(d){return S.getStrokeDasharray(d);}).attr("opacity",function(d){if(S.getIsClosed()){return S.getFillOpacity(d);}}).attr("filter",function(d){return S.getFilter(d);}).attr("aria-label",function(d){return S.getAriaLabel(d);}).attr("transform",function(d){return S.getTransform(d);}).attr("role",function(d){if(!S.getParent()){return"tooltip";}}).attr("focusable",function(d){if(!S.getParent()){return true;}}).attr("tabindex",function(d){if(!S.getParent()){return 0;}}).attr("aria-label",function(d){if(!S.getParent()){return S.getAriaLabel(d);}});s.exit().remove();};L.prototype._drawImage=function(s,S){var l=S.mChartInstance;s.enter().append("image").attr("xlink:href",function(d){return S.getImage(d);}).attr("x",function(d){if(l.getLegendSpace!==undefined){return l.getScaledLegendWidth()*d.xIndex+l.getLegendSpace()*(d.xIndex+1);}return S.getX(d);}).attr("y",function(d){if(l.getLegendSpace!==undefined){return l.getScaledLegendHeight()*d.yIndex+l.getLegendSpace()*(d.yIndex+1);}return S.getY(d);}).attr("width",function(d){return S.getWidth(d);}).attr("height",function(d){return S.getHeight(d);}).attr("filter",function(d){return S.getFilter(d);}).attr("aria-label",function(d){return S.getAriaLabel(d);}).attr("transform",function(d){return S.getTransform(d);}).attr("role",function(d){if(!S.getParent()){return"tooltip";}}).attr("focusable",function(d){if(!S.getParent()){return true;}}).attr("tabindex",function(d){if(!S.getParent()){return 0;}}).attr("aria-label",function(d){if(!S.getParent()){return S.getAriaLabel(d);}});s.exit().remove();};L.prototype._drawPolygon=function(s,S){var t=this;s.enter().append("polygon").attr("fill",function(d){return t.determineValue("fill",S,d);}).attr("points",function(d){return S.getPoints(d);}).attr("stroke-width",function(d){return S.getStrokeWidth(d);}).attr("stroke",function(d){return t.determineValue("stroke",S,d);}).attr("filter",function(d){return S.getFilter(d);}).attr("aria-label",function(d){return S.getAriaLabel(d);}).attr("transform",function(d){return S.getTransform(d);}).attr("role",function(d){if(!S.getParent()){return"tooltip";}}).attr("focusable",function(d){if(!S.getParent()){return true;}}).attr("tabindex",function(d){if(!S.getParent()){return 0;}}).attr("aria-label",function(d){if(!S.getParent()){return S.getAriaLabel(d);}});s.exit().remove();};L.prototype._drawPolyline=function(s,S){var t=this;s.enter().append("polyline").attr("fill",function(d){return t.determineValue("fill",S,d);}).attr("points",function(d){return S.getPoints(d);}).attr("stroke-width",function(d){return S.getStrokeWidth(d);}).attr("stroke",function(d){return t.determineValue("stroke",S,d);}).attr("filter",function(d){return S.getFilter(d);}).attr("aria-label",function(d){return S.getAriaLabel(d);}).attr("transform",function(d){return S.getTransform(d);}).attr("role",function(d){if(!S.getParent()){return"tooltip";}}).attr("focusable",function(d){if(!S.getParent()){return true;}}).attr("tabindex",function(d){if(!S.getParent()){return 0;}}).attr("aria-label",function(d){if(!S.getParent()){return S.getAriaLabel(d);}});s.exit().remove();};L.prototype._drawCircle=function(s,S){var l=S.mChartInstance,t=this;s.enter().append("circle").attr("fill",function(d){return t.determineValue("fill",S,d);}).attr("stroke-width",function(d){return S.getStrokeWidth(d);}).attr("stroke",function(d){return t.determineValue("stroke",S,d);}).attr("filter",function(d){return S.getFilter(d);}).attr("aria-label",function(d){return S.getAriaLabel(d);}).attr("cx",function(d){if(l.getLegendSpace!==undefined){return l.getScaledLegendWidth()*(d.xIndex+0.5)+l.getLegendSpace()*(d.xIndex+1);}return S.getCx(d);}).attr("cy",function(d){if(l.getLegendSpace!==undefined){return l.getScaledLegendHeight()*(d.yIndex+0.5)+l.getLegendSpace()*(d.yIndex+1);}return S.getCy(d);}).attr("r",function(d){return S.getR(d);}).attr("transform",function(d){return S.getTransform(d);}).attr("role",function(d){if(!S.getParent()){return"tooltip";}}).attr("focusable",function(d){if(!S.getParent()){return true;}}).attr("tabindex",function(d){if(!S.getParent()){return 0;}}).attr("aria-label",function(d){if(!S.getParent()){return S.getAriaLabel(d);}});s.exit().remove();};L.prototype.determineValue=function(a,s,d){var A=null;if(a==="fill"){A=s.getFill(d);}else if(a==="stroke"){A=s.getStroke(d);}return sap.gantt.ValueSVGPaintServer.normalize(A);};return L;},true);
