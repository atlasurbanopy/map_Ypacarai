var wms_layers = [];

var format_U_11_17_BL_03_20_12_01_0 = new ol.format.GeoJSON();
var features_U_11_17_BL_03_20_12_01_0 = format_U_11_17_BL_03_20_12_01_0.readFeatures(json_U_11_17_BL_03_20_12_01_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_17_BL_03_20_12_01_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_17_BL_03_20_12_01_0.addFeatures(features_U_11_17_BL_03_20_12_01_0);
var lyr_U_11_17_BL_03_20_12_01_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_17_BL_03_20_12_01_0, 
                style: style_U_11_17_BL_03_20_12_01_0,
                interactive: true,
                title: '<img src="styles/legend/U_11_17_BL_03_20_12_01_0.png" /> U_11_17_BL_03_20_12_01'
            });
var format_U_11_17_BL_02_20_12_01_1 = new ol.format.GeoJSON();
var features_U_11_17_BL_02_20_12_01_1 = format_U_11_17_BL_02_20_12_01_1.readFeatures(json_U_11_17_BL_02_20_12_01_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_17_BL_02_20_12_01_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_17_BL_02_20_12_01_1.addFeatures(features_U_11_17_BL_02_20_12_01_1);
var lyr_U_11_17_BL_02_20_12_01_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_17_BL_02_20_12_01_1, 
                style: style_U_11_17_BL_02_20_12_01_1,
                interactive: true,
                title: '<img src="styles/legend/U_11_17_BL_02_20_12_01_1.png" /> U_11_17_BL_02_20_12_01'
            });
var format_U_11_17_BL_01_20_12_01_2 = new ol.format.GeoJSON();
var features_U_11_17_BL_01_20_12_01_2 = format_U_11_17_BL_01_20_12_01_2.readFeatures(json_U_11_17_BL_01_20_12_01_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_17_BL_01_20_12_01_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_17_BL_01_20_12_01_2.addFeatures(features_U_11_17_BL_01_20_12_01_2);
var lyr_U_11_17_BL_01_20_12_01_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_17_BL_01_20_12_01_2, 
                style: style_U_11_17_BL_01_20_12_01_2,
                interactive: true,
                title: '<img src="styles/legend/U_11_17_BL_01_20_12_01_2.png" /> U_11_17_BL_01_20_12_01'
            });
var format_U_11_17_B_YES_20_12_01_3 = new ol.format.GeoJSON();
var features_U_11_17_B_YES_20_12_01_3 = format_U_11_17_B_YES_20_12_01_3.readFeatures(json_U_11_17_B_YES_20_12_01_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_17_B_YES_20_12_01_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_17_B_YES_20_12_01_3.addFeatures(features_U_11_17_B_YES_20_12_01_3);
var lyr_U_11_17_B_YES_20_12_01_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_17_B_YES_20_12_01_3, 
                style: style_U_11_17_B_YES_20_12_01_3,
                interactive: true,
                title: '<img src="styles/legend/U_11_17_B_YES_20_12_01_3.png" /> U_11_17_B_YES_20_12_01'
            });
var format_U_11_17_B_MIX_20_12_01_4 = new ol.format.GeoJSON();
var features_U_11_17_B_MIX_20_12_01_4 = format_U_11_17_B_MIX_20_12_01_4.readFeatures(json_U_11_17_B_MIX_20_12_01_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_17_B_MIX_20_12_01_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_17_B_MIX_20_12_01_4.addFeatures(features_U_11_17_B_MIX_20_12_01_4);
var lyr_U_11_17_B_MIX_20_12_01_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_17_B_MIX_20_12_01_4, 
                style: style_U_11_17_B_MIX_20_12_01_4,
                interactive: true,
                title: '<img src="styles/legend/U_11_17_B_MIX_20_12_01_4.png" /> U_11_17_B_MIX_20_12_01'
            });
var format_U_11_17_B_IND_20_12_01_5 = new ol.format.GeoJSON();
var features_U_11_17_B_IND_20_12_01_5 = format_U_11_17_B_IND_20_12_01_5.readFeatures(json_U_11_17_B_IND_20_12_01_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_17_B_IND_20_12_01_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_17_B_IND_20_12_01_5.addFeatures(features_U_11_17_B_IND_20_12_01_5);
var lyr_U_11_17_B_IND_20_12_01_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_17_B_IND_20_12_01_5, 
                style: style_U_11_17_B_IND_20_12_01_5,
                interactive: true,
                title: '<img src="styles/legend/U_11_17_B_IND_20_12_01_5.png" /> U_11_17_B_IND_20_12_01'
            });
var format_U_11_17_B_GPR_20_12_01_6 = new ol.format.GeoJSON();
var features_U_11_17_B_GPR_20_12_01_6 = format_U_11_17_B_GPR_20_12_01_6.readFeatures(json_U_11_17_B_GPR_20_12_01_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_17_B_GPR_20_12_01_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_17_B_GPR_20_12_01_6.addFeatures(features_U_11_17_B_GPR_20_12_01_6);
var lyr_U_11_17_B_GPR_20_12_01_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_17_B_GPR_20_12_01_6, 
                style: style_U_11_17_B_GPR_20_12_01_6,
                interactive: true,
                title: '<img src="styles/legend/U_11_17_B_GPR_20_12_01_6.png" /> U_11_17_B_GPR_20_12_01'
            });
var format_U_11_17_B_GPU_20_12_01_7 = new ol.format.GeoJSON();
var features_U_11_17_B_GPU_20_12_01_7 = format_U_11_17_B_GPU_20_12_01_7.readFeatures(json_U_11_17_B_GPU_20_12_01_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_17_B_GPU_20_12_01_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_17_B_GPU_20_12_01_7.addFeatures(features_U_11_17_B_GPU_20_12_01_7);
var lyr_U_11_17_B_GPU_20_12_01_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_17_B_GPU_20_12_01_7, 
                style: style_U_11_17_B_GPU_20_12_01_7,
                interactive: true,
                title: '<img src="styles/legend/U_11_17_B_GPU_20_12_01_7.png" /> U_11_17_B_GPU_20_12_01'
            });
var format_U_11_17_B_COM_20_12_01_8 = new ol.format.GeoJSON();
var features_U_11_17_B_COM_20_12_01_8 = format_U_11_17_B_COM_20_12_01_8.readFeatures(json_U_11_17_B_COM_20_12_01_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_17_B_COM_20_12_01_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_17_B_COM_20_12_01_8.addFeatures(features_U_11_17_B_COM_20_12_01_8);
var lyr_U_11_17_B_COM_20_12_01_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_17_B_COM_20_12_01_8, 
                style: style_U_11_17_B_COM_20_12_01_8,
                interactive: true,
                title: '<img src="styles/legend/U_11_17_B_COM_20_12_01_8.png" /> U_11_17_B_COM_20_12_01'
            });
var format_U_11_17_B_RES_20_12_01_9 = new ol.format.GeoJSON();
var features_U_11_17_B_RES_20_12_01_9 = format_U_11_17_B_RES_20_12_01_9.readFeatures(json_U_11_17_B_RES_20_12_01_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_11_17_B_RES_20_12_01_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_11_17_B_RES_20_12_01_9.addFeatures(features_U_11_17_B_RES_20_12_01_9);
var lyr_U_11_17_B_RES_20_12_01_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_11_17_B_RES_20_12_01_9, 
                style: style_U_11_17_B_RES_20_12_01_9,
                interactive: true,
                title: '<img src="styles/legend/U_11_17_B_RES_20_12_01_9.png" /> U_11_17_B_RES_20_12_01'
            });

lyr_U_11_17_BL_03_20_12_01_0.setVisible(true);lyr_U_11_17_BL_02_20_12_01_1.setVisible(true);lyr_U_11_17_BL_01_20_12_01_2.setVisible(true);lyr_U_11_17_B_YES_20_12_01_3.setVisible(true);lyr_U_11_17_B_MIX_20_12_01_4.setVisible(true);lyr_U_11_17_B_IND_20_12_01_5.setVisible(true);lyr_U_11_17_B_GPR_20_12_01_6.setVisible(true);lyr_U_11_17_B_GPU_20_12_01_7.setVisible(true);lyr_U_11_17_B_COM_20_12_01_8.setVisible(true);lyr_U_11_17_B_RES_20_12_01_9.setVisible(true);
var layersList = [lyr_U_11_17_BL_03_20_12_01_0,lyr_U_11_17_BL_02_20_12_01_1,lyr_U_11_17_BL_01_20_12_01_2,lyr_U_11_17_B_YES_20_12_01_3,lyr_U_11_17_B_MIX_20_12_01_4,lyr_U_11_17_B_IND_20_12_01_5,lyr_U_11_17_B_GPR_20_12_01_6,lyr_U_11_17_B_GPU_20_12_01_7,lyr_U_11_17_B_COM_20_12_01_8,lyr_U_11_17_B_RES_20_12_01_9];
lyr_U_11_17_BL_03_20_12_01_0.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', });
lyr_U_11_17_BL_02_20_12_01_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'name': 'name', });
lyr_U_11_17_BL_01_20_12_01_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'name': 'name', 'shop': 'shop', 'building_u': 'building_u', });
lyr_U_11_17_B_YES_20_12_01_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'type': 'type', 'building_u': 'building_u', 'man_made': 'man_made', 'addr_stree': 'addr_stree', 'amenity': 'amenity', 'denominati': 'denominati', 'religion': 'religion', 'name': 'name', 'railway': 'railway', 'club': 'club', 'Source': 'Source', 'product': 'product', 'building_l': 'building_l', 'landcover': 'landcover', });
lyr_U_11_17_B_MIX_20_12_01_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'building_u': 'building_u', });
lyr_U_11_17_B_IND_20_12_01_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'type': 'type', });
lyr_U_11_17_B_GPR_20_12_01_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'name': 'name', });
lyr_U_11_17_B_GPU_20_12_01_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', });
lyr_U_11_17_B_COM_20_12_01_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'name': 'name', 'shop': 'shop', });
lyr_U_11_17_B_RES_20_12_01_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', });
lyr_U_11_17_BL_03_20_12_01_0.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', });
lyr_U_11_17_BL_02_20_12_01_1.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'name': 'TextEdit', });
lyr_U_11_17_BL_01_20_12_01_2.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'name': 'TextEdit', 'shop': 'TextEdit', 'building_u': 'TextEdit', });
lyr_U_11_17_B_YES_20_12_01_3.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'type': 'TextEdit', 'building_u': 'TextEdit', 'man_made': 'TextEdit', 'addr_stree': 'TextEdit', 'amenity': 'TextEdit', 'denominati': 'TextEdit', 'religion': 'TextEdit', 'name': 'TextEdit', 'railway': 'TextEdit', 'club': 'TextEdit', 'Source': 'TextEdit', 'product': 'TextEdit', 'building_l': 'TextEdit', 'landcover': 'TextEdit', });
lyr_U_11_17_B_MIX_20_12_01_4.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'building_u': 'TextEdit', });
lyr_U_11_17_B_IND_20_12_01_5.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'type': 'TextEdit', });
lyr_U_11_17_B_GPR_20_12_01_6.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'name': 'TextEdit', });
lyr_U_11_17_B_GPU_20_12_01_7.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', });
lyr_U_11_17_B_COM_20_12_01_8.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'name': 'TextEdit', 'shop': 'TextEdit', });
lyr_U_11_17_B_RES_20_12_01_9.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', });
lyr_U_11_17_BL_03_20_12_01_0.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', });
lyr_U_11_17_BL_02_20_12_01_1.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'name': 'no label', });
lyr_U_11_17_BL_01_20_12_01_2.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'name': 'no label', 'shop': 'no label', 'building_u': 'no label', });
lyr_U_11_17_B_YES_20_12_01_3.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'type': 'no label', 'building_u': 'no label', 'man_made': 'no label', 'addr_stree': 'no label', 'amenity': 'no label', 'denominati': 'no label', 'religion': 'no label', 'name': 'no label', 'railway': 'no label', 'club': 'no label', 'Source': 'no label', 'product': 'no label', 'building_l': 'no label', 'landcover': 'no label', });
lyr_U_11_17_B_MIX_20_12_01_4.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_u': 'no label', });
lyr_U_11_17_B_IND_20_12_01_5.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'type': 'no label', });
lyr_U_11_17_B_GPR_20_12_01_6.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'name': 'no label', });
lyr_U_11_17_B_GPU_20_12_01_7.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', });
lyr_U_11_17_B_COM_20_12_01_8.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'name': 'no label', 'shop': 'no label', });
lyr_U_11_17_B_RES_20_12_01_9.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', });
lyr_U_11_17_B_RES_20_12_01_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});