var json = "js/winecom-pretty.json";

var snooth = ["static/json/snooth-0.json", "static/json/snooth-100.json", "static/json/snooth-200.json",
"static/json/snooth-300.json", "static/json/snooth-400.json", "static/json/snooth-500.json",
"static/json/snooth-600.json", "static/json/snooth-700.json", "static/json/snooth-800.json", 
"static/json/snooth-900.json", "static/json/snooth-1000.json", "static/json/snooth-1100.json", 
"static/json/snooth-1200.json", "static/json/snooth-1300.json", "static/json/snooth-1400.json",
"static/json/snooth-1500.json", "static/json/snooth-1600.json", "static/json/snooth-1700.json", 
"static/json/snooth-1800.json", "static/json/snooth-1900.json", "static/json/snooth-2000.json", 
"static/json/snooth-2100.json"]

var snoothJS = 'js/json/snooth-0.json';

var items = [];

// object constructor function
function wineBottle(name, year, vineyard, price, attribute, labelUrl) {

	this.name = name;
	this.year = year;
	this.vineyard = vineyard;
	this.price = price;
	this.attribute = attribute;
	this.labelImg = labelUrl
	this.changeName = function (name) {
		this.name = name;
	}
}

var checking = function(value){if (value === undefined){return value = '';} else {return value = value.Name;}}
var $table = $('#summaryOfResults');

// Disable search and ordering by default
$.extend( $.fn.dataTable.defaults, {
    "info" : false,
    dom: 'Bfrtip',
	buttons: [
    	'csv', 'excel'
    ],
    paging : false
} );

	var foo = function(){
		for (var i = snooth.length - 1; i >= 0; i--) {
			json = snooth[i]
		
			$.getJSON(json, function( data ) {
				$.each(data, function( key, a ) {
					items.push(new wineBottle(data[key].name, data[key].vintage, data[key].winery, data[key].price, '', data[key].image));
					$table.append('<tr><td>' + 
 					items[key].name + '</td><td>' + 
 					items[key].year + '</td><td>' + 
 					'$ ' + items[key].price + '</td><td>' +
 					items[key].vineyard + '</td>');
				});
				
				$(document).ready(function() {
					    $($table).DataTable();
					});
			});
		}
	}
foo();

// $($table).DataTable( {
// 	"columns": [
// 	{ "data": "name" },
// 	{ "data": "year" },
// 	{ "data": "price" },
// 	{ "data": "vineyard" }
// 	]
// });
