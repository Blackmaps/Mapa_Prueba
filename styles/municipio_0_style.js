var size = 0;
var placement = 'point';

    var fill_municipio_0 = new ol.style.Fill();
var style_municipio_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("nam") !== null) {
        labelText = String(feature.get("nam"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(85,170,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        
        fill: fill_municipio_0,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};

    fill_municipio_0.setColor(stripe(0.26, 2.0, 315.0, '#000000'));