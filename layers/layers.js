var wms_layers = [];

var format_municipio_0 = new ol.format.GeoJSON();
var features_municipio_0 = format_municipio_0.readFeatures(json_municipio_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipio_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipio_0.addFeatures(features_municipio_0);
var lyr_municipio_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_municipio_0, 
                style: style_municipio_0,
                interactive: true,
                title: '<img src="styles/legend/municipio_0.png" /> municipio'
            });

lyr_municipio_0.setVisible(true);
var layersList = [lyr_municipio_0];
lyr_municipio_0.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_municipio_0.set('fieldImages', {'gid': 'TextEdit', 'entidad': 'TextEdit', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_municipio_0.set('fieldLabels', {'gid': 'no label', 'entidad': 'no label', 'objeto': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_municipio_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});