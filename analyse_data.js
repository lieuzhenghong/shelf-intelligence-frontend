"use strict";

const test_payload ={"image": "https://s3.amazonaws.com/mikewalmsley-public/pg-shelf/uploads/shelf_image.jpg", "data": {"class": "StoreDisplay", "shelves": [{"class": "Shelf", "products": [{"class": "ShelfProduct", "text": "head&", "vertices": [{"x": 274, "y": 344}, {"x": 502, "y": 354}, {"x": 499, "y": 411}, {"x": 272, "y": 401}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "head&", "vertices": [{"x": 848, "y": 272}, {"x": 1100, "y": 294}, {"x": 1094, "y": 358}, {"x": 842, "y": 336}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "shoulders", "vertices": [{"x": 735, "y": 337}, {"x": 1090, "y": 356}, {"x": 1087, "y": 420}, {"x": 731, "y": 401}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "simple", "vertices": [{"x": 2231, "y": 681}, {"x": 2502, "y": 693}, {"x": 2496, "y": 822}, {"x": 2225, "y": 810}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "simple", "vertices": [{"x": 2612, "y": 697}, {"x": 2896, "y": 709}, {"x": 2890, "y": 838}, {"x": 2606, "y": 826}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "simple.", "vertices": [{"x": 1381, "y": 755}, {"x": 1613, "y": 747}, {"x": 1616, "y": 829}, {"x": 1384, "y": 837}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "Simple", "vertices": [{"x": 1741, "y": 742}, {"x": 2016, "y": 733}, {"x": 2019, "y": 814}, {"x": 1744, "y": 824}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "Simple", "vertices": [{"x": 2288, "y": 1320}, {"x": 2352, "y": 1321}, {"x": 2352, "y": 1358}, {"x": 2288, "y": 1357}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "Simple", "vertices": [{"x": 2697, "y": 1311}, {"x": 2762, "y": 1311}, {"x": 2762, "y": 1346}, {"x": 2697, "y": 1346}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "Simple", "vertices": [{"x": 1169, "y": 1529}, {"x": 1234, "y": 1529}, {"x": 1234, "y": 1546}, {"x": 1169, "y": 1546}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "Simple", "vertices": [{"x": 2126, "y": 1534}, {"x": 2188, "y": 1534}, {"x": 2188, "y": 1551}, {"x": 2126, "y": 1551}], "brand": "PRO:VOKE", "company": "TODO"}], "labels": [{"class": "ShelfLabel", "text": "\u00a32.50", "vertices": [{"x": 1109, "y": 1619}, {"x": 1350, "y": 1613}, {"x": 1352, "y": 1674}, {"x": 1111, "y": 1680}]}, {"class": "ShelfLabel", "text": "\u00a32.50", "vertices": [{"x": 2085, "y": 1622}, {"x": 2312, "y": 1622}, {"x": 2312, "y": 1680}, {"x": 2085, "y": 1680}]}], "left_edge": 378.0, "right_edge": 4493.5, "height": 1590.5}, {"class": "Shelf", "products": [{"class": "ShelfProduct", "text": "head&", "vertices": [{"x": 274, "y": 344}, {"x": 502, "y": 354}, {"x": 499, "y": 411}, {"x": 272, "y": 401}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "head&", "vertices": [{"x": 848, "y": 272}, {"x": 1100, "y": 294}, {"x": 1094, "y": 358}, {"x": 842, "y": 336}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "shoulders", "vertices": [{"x": 735, "y": 337}, {"x": 1090, "y": 356}, {"x": 1087, "y": 420}, {"x": 731, "y": 401}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "simple", "vertices": [{"x": 2231, "y": 681}, {"x": 2502, "y": 693}, {"x": 2496, "y": 822}, {"x": 2225, "y": 810}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "simple", "vertices": [{"x": 2612, "y": 697}, {"x": 2896, "y": 709}, {"x": 2890, "y": 838}, {"x": 2606, "y": 826}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "simple.", "vertices": [{"x": 1381, "y": 755}, {"x": 1613, "y": 747}, {"x": 1616, "y": 829}, {"x": 1384, "y": 837}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "Simple", "vertices": [{"x": 1741, "y": 742}, {"x": 2016, "y": 733}, {"x": 2019, "y": 814}, {"x": 1744, "y": 824}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "Simple", "vertices": [{"x": 2288, "y": 1320}, {"x": 2352, "y": 1321}, {"x": 2352, "y": 1358}, {"x": 2288, "y": 1357}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "Simple", "vertices": [{"x": 2697, "y": 1311}, {"x": 2762, "y": 1311}, {"x": 2762, "y": 1346}, {"x": 2697, "y": 1346}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "Simple", "vertices": [{"x": 1169, "y": 1529}, {"x": 1234, "y": 1529}, {"x": 1234, "y": 1546}, {"x": 1169, "y": 1546}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "Simple", "vertices": [{"x": 2126, "y": 1534}, {"x": 2188, "y": 1534}, {"x": 2188, "y": 1551}, {"x": 2126, "y": 1551}], "brand": "PRO:VOKE", "company": "TODO"}], "labels": [{"class": "ShelfLabel", "text": "\u00a32.50", "vertices": [{"x": 1109, "y": 1619}, {"x": 1350, "y": 1613}, {"x": 1352, "y": 1674}, {"x": 1111, "y": 1680}]}, {"class": "ShelfLabel", "text": "\u00a32.50", "vertices": [{"x": 2085, "y": 1622}, {"x": 2312, "y": 1622}, {"x": 2312, "y": 1680}, {"x": 2085, "y": 1680}]}, {"class": "ShelfLabel", "text": "\u00a31.25", "vertices": [{"x": 1111, "y": 1707}, {"x": 1182, "y": 1707}, {"x": 1182, "y": 1727}, {"x": 1111, "y": 1727}]}, {"class": "ShelfLabel", "text": "E1.25", "vertices": [{"x": 2094, "y": 1707}, {"x": 2159, "y": 1707}, {"x": 2159, "y": 1727}, {"x": 2094, "y": 1727}]}, {"class": "ShelfLabel", "text": "55p", "vertices": [{"x": 3482, "y": 1703}, {"x": 3529, "y": 1703}, {"x": 3529, "y": 1727}, {"x": 3482, "y": 1727}]}, {"class": "ShelfLabel", "text": "55p", "vertices": [{"x": 4418, "y": 1700}, {"x": 4465, "y": 1700}, {"x": 4465, "y": 1722}, {"x": 4418, "y": 1722}]}], "left_edge": 378.0, "right_edge": 4493.5, "height": 1651.0}, {"class": "Shelf", "products": [{"class": "ShelfProduct", "text": "head&", "vertices": [{"x": 274, "y": 344}, {"x": 502, "y": 354}, {"x": 499, "y": 411}, {"x": 272, "y": 401}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "head&", "vertices": [{"x": 848, "y": 272}, {"x": 1100, "y": 294}, {"x": 1094, "y": 358}, {"x": 842, "y": 336}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "shoulders", "vertices": [{"x": 735, "y": 337}, {"x": 1090, "y": 356}, {"x": 1087, "y": 420}, {"x": 731, "y": 401}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "simple", "vertices": [{"x": 2231, "y": 681}, {"x": 2502, "y": 693}, {"x": 2496, "y": 822}, {"x": 2225, "y": 810}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "simple", "vertices": [{"x": 2612, "y": 697}, {"x": 2896, "y": 709}, {"x": 2890, "y": 838}, {"x": 2606, "y": 826}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "simple.", "vertices": [{"x": 1381, "y": 755}, {"x": 1613, "y": 747}, {"x": 1616, "y": 829}, {"x": 1384, "y": 837}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "Simple", "vertices": [{"x": 1741, "y": 742}, {"x": 2016, "y": 733}, {"x": 2019, "y": 814}, {"x": 1744, "y": 824}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "Simple", "vertices": [{"x": 2288, "y": 1320}, {"x": 2352, "y": 1321}, {"x": 2352, "y": 1358}, {"x": 2288, "y": 1357}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "Simple", "vertices": [{"x": 2697, "y": 1311}, {"x": 2762, "y": 1311}, {"x": 2762, "y": 1346}, {"x": 2697, "y": 1346}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "Simple", "vertices": [{"x": 1169, "y": 1529}, {"x": 1234, "y": 1529}, {"x": 1234, "y": 1546}, {"x": 1169, "y": 1546}], "brand": "PRO:VOKE", "company": "TODO"}, {"class": "ShelfProduct", "text": "Simple", "vertices": [{"x": 2126, "y": 1534}, {"x": 2188, "y": 1534}, {"x": 2188, "y": 1551}, {"x": 2126, "y": 1551}], "brand": "PRO:VOKE", "company": "TODO"}], "labels": [{"class": "ShelfLabel", "text": "\u00a32.50", "vertices": [{"x": 1109, "y": 1619}, {"x": 1350, "y": 1613}, {"x": 1352, "y": 1674}, {"x": 1111, "y": 1680}]}, {"class": "ShelfLabel", "text": "\u00a32.50", "vertices": [{"x": 2085, "y": 1622}, {"x": 2312, "y": 1622}, {"x": 2312, "y": 1680}, {"x": 2085, "y": 1680}]}, {"class": "ShelfLabel", "text": "\u00a31.25", "vertices": [{"x": 1111, "y": 1707}, {"x": 1182, "y": 1707}, {"x": 1182, "y": 1727}, {"x": 1111, "y": 1727}]}, {"class": "ShelfLabel", "text": "E1.25", "vertices": [{"x": 2094, "y": 1707}, {"x": 2159, "y": 1707}, {"x": 2159, "y": 1727}, {"x": 2094, "y": 1727}]}, {"class": "ShelfLabel", "text": "55p", "vertices": [{"x": 3482, "y": 1703}, {"x": 3529, "y": 1703}, {"x": 3529, "y": 1727}, {"x": 3482, "y": 1727}]}, {"class": "ShelfLabel", "text": "55p", "vertices": [{"x": 4418, "y": 1700}, {"x": 4465, "y": 1700}, {"x": 4465, "y": 1722}, {"x": 4418, "y": 1722}]}], "left_edge": 378.0, "right_edge": 4493.5, "height": 1717.0}]}}

//const backend_url = "https://pg-shelf-intel.herokuapp.com/";
const backend_url = "http://127.0.0.1:5000";

function upload_image()
{

    const file = document.querySelector('input[type=file]').files[0];
    //const reader = new FileReader();
    send_request_and_receive_payload(file)


/*
    reader.addEventListener("load", () => {
	send_request_and_receive_payload(reader.result);
    });

    if (file) {
	reader.readAsDataURL(file);
    }
*/

}

function send_request_and_receive_payload(image)
{
    console.log(image);
    // send request
    
    var formData = new FormData();
    formData.append('test', "test");
    formData.append('files', image); 

    //console.log(formData);

    /*
    function reqListener () {
      console.log(this.responseText);
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "http://127.0.0.1:5000");
    oReq.send();
    */

    // New Fetch API
    fetch(backend_url, {
	method: 'POST',
	body: formData
    })
    .then((response) => {
	console.log(response);
	return response.json();
    })
    .then((json) => {
	console.log(json);
	display_data(json);
    })
    .catch(error => console.error('Error:', error));
}

function FAKE_upload_image()
{
    var image = null;
    FAKE_send_request_and_receive_payload(image);
}

function FAKE_send_request_and_receive_payload(image)
{
    display_data(test_payload);
}

function display_data(data) {

    // Initialise canvas variables
    const CANVAS = document.getElementById('area-map-canvas');
    const CTX = CANVAS.getContext('2d');
    CANVAS.width = window.innerWidth * 0.9;
    CANVAS.height = CANVAS.width;
    // Draw white rectangle on Canvas
    CTX.fillStyle = "white";
    CTX.fillRect(0, 0, CANVAS.width, CANVAS.height);

    // First, display the image
    document.getElementById("image-result").src = data.image;

    // Scale the area map to fit the image
    const img_height = document.getElementById("image-result").naturalHeight;
    const img_width = document.getElementById("image-result").naturalWidth;
    CTX.setTransform(CANVAS.width/img_width, 0, 0, CANVAS.height/img_height, 0, 0);
     
   
    // This should probably go into a separate function
    var brand_counts = {};
    var company_counts = {};
    var number_of_products = 0;
    
    data.data.shelves.map((shelf) => {
	draw_shelves([CANVAS, CTX], {"height": shelf.height, "left": shelf.left_edge, "right": shelf.right_edge})
	
	shelf.products.map((product) => {
	    console.log(product)
	    number_of_products++;
	    draw_bounding_box([CANVAS, CTX], product.vertices);

	    brand_counts[product.brand] = (product.brand in brand_counts) ? 
		brand_counts[product.brand] + 1 : 0
	    company_counts[product.company] = (product.company in company_counts) ? 
		company_counts[product.company] + 1 : 0

	});
	//document.getElementById("overview").innerHTML +=  "<li>" + JSON.stringify(shelf);
    });

    console.log(brand_counts);
    console.log(company_counts);
    
    draw_bar_chart(brand_counts, "brand-chart");
    draw_bar_chart(company_counts, "company-chart");

    // Should be taken out of this function too
    document.getElementById("overview").innerHTML += "<ul>"
    document.getElementById("overview").innerHTML += 
	`<li> Products detected: ${number_of_products}`
    document.getElementById("overview").innerHTML += "</ul>"
}


function scale_canvas() {
}

function draw_bar_chart(input_data, element_id) {
    const width = window.innerWidth * 0.9, barHeight = 20;
    var x = d3.scale.linear()
	.range([0, width]);

    // Convert into a format d3.js can read nicely
    var data = [];
    Object.keys(input_data).forEach(key => data.push(
	    {"name": key, "value": input_data[key]})
    );

    /* For testing purposes 
      data = [
      {"name": "P&G", "value": 19}, 
      {"name": "Mike Walmsley", "value": 35},
      {"name": "Tesco's", "value": 7}
     ];
     */

    x.domain([0, d3.max(data, (d) => {return d.value;})]);

    var chart = d3.select("#"+element_id)
	.attr("width", width)
	.attr("height", barHeight * data.length)

    var bar = chart.selectAll("rect")
	.data(data)
	  .enter().append("g")
	.attr("transform", (d, i) => {return "translate(0," + i * barHeight + ")"; });

    bar.append("rect")
	.attr("width", (d) => { return x(d.value); })
	.attr("height", barHeight -1);

    bar.append("text")
	.attr("x", (d) => {return x(d.value) - 3;})
	.attr("y", barHeight/2)
	.attr("dy", ".35em")
	.text((d) => {return d.name + ": " + d.value;});
}

// void canvas, context, [vertex]
// vertex has 4 objects with x and y coordinates
function draw_bounding_box(canvas_variables, vs) {
    const ctx = canvas_variables[1];
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(vs[0].x, vs[0].y);
    ctx.lineTo(vs[1].x, vs[1].y);
    ctx.lineTo(vs[2].x, vs[2].y);
    ctx.lineTo(vs[3].x, vs[3].y);
    ctx.lineTo(vs[0].x, vs[0].y);
    ctx.fill();
}

// void [canvas, context], [shelf.height, shelf left edge, shelf right edge]
function draw_shelves(canvas_variables, shelf) {
    const ctx = canvas_variables[1];
    //console.log(shelf);
    ctx.fillStyle = "black";
    ctx.fillRect(Math.min(shelf.right, shelf.left), 
	    shelf.height, Math.abs(shelf.right-shelf.left), 
	    20);
}
