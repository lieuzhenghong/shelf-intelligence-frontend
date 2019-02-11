"use strict";

const test_payload = {"image": "https://s3.amazonaws.com/mikewalmsley-public/pg-shelf/uploads/shelf_image.jpg", "data": {"class": "StoreDisplay", "shelves": [{"class": "Shelf", "products": [{"class": "ShelfProduct", "text": "shoulders", "vertices": [{"x": 735, "y": 337}, {"x": 1090, "y": 356}, {"x": 1087, "y": 420}, {"x": 731, "y": 401}], "brand": "TODO", "company": "TODO"}, {"class": "ShelfProduct", "text": "simple", "vertices": [{"x": 2231, "y": 681}, {"x": 2502, "y": 693}, {"x": 2496, "y": 822}, {"x": 2225, "y": 810}], "brand": "TODO", "company": "TODO"}, {"class": "ShelfProduct", "text": "simple", "vertices": [{"x": 2612, "y": 697}, {"x": 2896, "y": 709}, {"x": 2890, "y": 838}, {"x": 2606, "y": 826}], "brand": "TODO", "company": "TODO"}, {"class": "ShelfProduct", "text": "simple.", "vertices": [{"x": 1381, "y": 755}, {"x": 1613, "y": 747}, {"x": 1616, "y": 829}, {"x": 1384, "y": 837}], "brand": "TODO", "company": "TODO"}, {"class": "ShelfProduct", "text": "Simple", "vertices": [{"x": 1169, "y": 1529}, {"x": 1234, "y": 1529}, {"x": 1234, "y": 1546}, {"x": 1169, "y": 1546}], "brand": "TODO", "company": "TODO"}, {"class": "ShelfProduct", "text": "Simple", "vertices": [{"x": 2126, "y": 1534}, {"x": 2188, "y": 1534}, {"x": 2188, "y": 1551}, {"x": 2126, "y": 1551}], "brand": "TODO", "company": "TODO"}, {"class": "ShelfProduct", "text": "GARNIeR", "vertices": [{"x": 2324, "y": 2202}, {"x": 2543, "y": 2191}, {"x": 2544, "y": 2225}, {"x": 2326, "y": 2236}], "brand": "TODO", "company": "TODO"}, {"class": "ShelfProduct", "text": "Herbal", "vertices": [{"x": 3548, "y": 2261}, {"x": 3652, "y": 2262}, {"x": 3652, "y": 2290}, {"x": 3548, "y": 2289}], "brand": "TODO", "company": "TODO"}, {"class": "ShelfProduct", "text": "esseeces", "vertices": [{"x": 3928, "y": 2994}, {"x": 3978, "y": 2995}, {"x": 3978, "y": 3007}, {"x": 3928, "y": 3006}], "brand": "TODO", "company": "TODO"}], "labels": [{"class": "ShelfLabel", "text": "B5", "vertices": [{"x": 2465, "y": 1185}, {"x": 2489, "y": 1185}, {"x": 2489, "y": 1202}, {"x": 2465, "y": 1202}]}, {"class": "ShelfLabel", "text": "2.75", "vertices": [{"x": 3433, "y": 1588}, {"x": 3672, "y": 1602}, {"x": 3666, "y": 1706}, {"x": 3427, "y": 1692}]}, {"class": "ShelfLabel", "text": "500M", "vertices": [{"x": 4488, "y": 1563}, {"x": 4535, "y": 1563}, {"x": 4535, "y": 1578}, {"x": 4488, "y": 1578}]}, {"class": "ShelfLabel", "text": "5", "vertices": [{"x": 6, "y": 1592}, {"x": 86, "y": 1592}, {"x": 86, "y": 1706}, {"x": 6, "y": 1706}]}, {"class": "ShelfLabel", "text": "200MI", "vertices": [{"x": 2461, "y": 1703}, {"x": 2520, "y": 1700}, {"x": 2521, "y": 1716}, {"x": 2462, "y": 1719}]}, {"class": "ShelfLabel", "text": "100ml", "vertices": [{"x": 1250, "y": 1707}, {"x": 1333, "y": 1707}, {"x": 1333, "y": 1727}, {"x": 1250, "y": 1727}]}, {"class": "ShelfLabel", "text": "E1.25", "vertices": [{"x": 2094, "y": 1707}, {"x": 2159, "y": 1707}, {"x": 2159, "y": 1727}, {"x": 2094, "y": 1727}]}, {"class": "ShelfLabel", "text": "55p", "vertices": [{"x": 3482, "y": 1703}, {"x": 3529, "y": 1703}, {"x": 3529, "y": 1727}, {"x": 3482, "y": 1727}]}, {"class": "ShelfLabel", "text": "3600", "vertices": [{"x": 3568, "y": 1727}, {"x": 3602, "y": 1727}, {"x": 3602, "y": 1759}, {"x": 3568, "y": 1759}]}, {"class": "ShelfLabel", "text": "23584I/", "vertices": [{"x": 3611, "y": 1727}, {"x": 3679, "y": 1727}, {"x": 3679, "y": 1759}, {"x": 3611, "y": 1759}]}, {"class": "ShelfLabel", "text": "181204", "vertices": [{"x": 3827, "y": 1741}, {"x": 3891, "y": 1741}, {"x": 3891, "y": 1760}, {"x": 3827, "y": 1760}]}], "left_edge": 4561.0, "right_edge": 41.5, "height": 1590.5}, {"class": "Shelf", "products": [{"class": "ShelfProduct", "text": "head&", "vertices": [{"x": 274, "y": 344}, {"x": 502, "y": 354}, {"x": 499, "y": 411}, {"x": 272, "y": 401}], "brand": "TODO", "company": "TODO"}, {"class": "ShelfProduct", "text": "Simple", "vertices": [{"x": 1741, "y": 742}, {"x": 2016, "y": 733}, {"x": 2019, "y": 814}, {"x": 1744, "y": 824}], "brand": "TODO", "company": "TODO"}, {"class": "ShelfProduct", "text": "Simple", "vertices": [{"x": 2288, "y": 1320}, {"x": 2352, "y": 1321}, {"x": 2352, "y": 1358}, {"x": 2288, "y": 1357}], "brand": "TODO", "company": "TODO"}, {"class": "ShelfProduct", "text": "Simple", "vertices": [{"x": 2697, "y": 1311}, {"x": 2762, "y": 1311}, {"x": 2762, "y": 1346}, {"x": 2697, "y": 1346}], "brand": "TODO", "company": "TODO"}, {"class": "ShelfProduct", "text": "Herbal", "vertices": [{"x": 3919, "y": 2549}, {"x": 3998, "y": 2549}, {"x": 3998, "y": 2570}, {"x": 3919, "y": 2570}], "brand": "TODO", "company": "TODO"}], "labels": [{"class": "ShelfLabel", "text": "25", "vertices": [{"x": 3716, "y": 391}, {"x": 3774, "y": 391}, {"x": 3774, "y": 433}, {"x": 3716, "y": 433}]}, {"class": "ShelfLabel", "text": "200M", "vertices": [{"x": 2220, "y": 1577}, {"x": 2269, "y": 1577}, {"x": 2269, "y": 1594}, {"x": 2220, "y": 1594}]}, {"class": "ShelfLabel", "text": "E2.75", "vertices": [{"x": 4391, "y": 1619}, {"x": 4596, "y": 1618}, {"x": 4596, "y": 1677}, {"x": 4391, "y": 1678}]}, {"class": "ShelfLabel", "text": "100ml", "vertices": [{"x": 2225, "y": 1707}, {"x": 2301, "y": 1707}, {"x": 2301, "y": 1727}, {"x": 2225, "y": 1727}]}, {"class": "ShelfLabel", "text": "100ml", "vertices": [{"x": 4524, "y": 1700}, {"x": 4598, "y": 1700}, {"x": 4598, "y": 1720}, {"x": 4524, "y": 1720}]}, {"class": "ShelfLabel", "text": "MHRO9D3", "vertices": [{"x": 3266, "y": 1730}, {"x": 3543, "y": 1728}, {"x": 3543, "y": 1760}, {"x": 3266, "y": 1762}]}, {"class": "ShelfLabel", "text": "96498888", "vertices": [{"x": 0, "y": 1736}, {"x": 83, "y": 1736}, {"x": 83, "y": 1749}, {"x": 0, "y": 1749}]}, {"class": "ShelfLabel", "text": "080697487/5011451102996/25", "vertices": [{"x": 1124, "y": 1734}, {"x": 1351, "y": 1734}, {"x": 1351, "y": 1749}, {"x": 1124, "y": 1749}]}], "left_edge": 4561.0, "right_edge": 41.5, "height": 1651.0}, {"class": "Shelf", "products": [{"class": "ShelfProduct", "text": "head&", "vertices": [{"x": 848, "y": 272}, {"x": 1100, "y": 294}, {"x": 1094, "y": 358}, {"x": 842, "y": 336}], "brand": "TODO", "company": "TODO"}, {"class": "ShelfProduct", "text": "shoulders", "vertices": [{"x": 182, "y": 413}, {"x": 503, "y": 413}, {"x": 503, "y": 473}, {"x": 182, "y": 473}], "brand": "TODO", "company": "TODO"}, {"class": "ShelfProduct", "text": "Head", "vertices": [{"x": 218, "y": 1651}, {"x": 275, "y": 1651}, {"x": 275, "y": 1667}, {"x": 218, "y": 1667}], "brand": "TODO", "company": "TODO"}, {"class": "ShelfProduct", "text": "GARNIeR", "vertices": [{"x": 1838, "y": 2186}, {"x": 2030, "y": 2178}, {"x": 2031, "y": 2206}, {"x": 1839, "y": 2214}], "brand": "TODO", "company": "TODO"}, {"class": "ShelfProduct", "text": "Herbal", "vertices": [{"x": 2904, "y": 2326}, {"x": 3004, "y": 2330}, {"x": 3003, "y": 2353}, {"x": 2903, "y": 2349}], "brand": "TODO", "company": "TODO"}, {"class": "ShelfProduct", "text": "essences", "vertices": [{"x": 3626, "y": 2767}, {"x": 3683, "y": 2765}, {"x": 3684, "y": 2779}, {"x": 3627, "y": 2781}], "brand": "TODO", "company": "TODO"}], "labels": [{"class": "ShelfLabel", "text": "3Action", "vertices": [{"x": 911, "y": 161}, {"x": 1088, "y": 177}, {"x": 1083, "y": 235}, {"x": 906, "y": 220}]}, {"class": "ShelfLabel", "text": "25", "vertices": [{"x": 4144, "y": 177}, {"x": 4206, "y": 177}, {"x": 4206, "y": 221}, {"x": 4144, "y": 221}]}, {"class": "ShelfLabel", "text": "3", "vertices": [{"x": 330, "y": 240}, {"x": 365, "y": 240}, {"x": 365, "y": 296}, {"x": 330, "y": 296}]}, {"class": "ShelfLabel", "text": "2OOM", "vertices": [{"x": 1237, "y": 1572}, {"x": 1290, "y": 1572}, {"x": 1290, "y": 1589}, {"x": 1237, "y": 1589}]}, {"class": "ShelfLabel", "text": "\u00a310", "vertices": [{"x": 335, "y": 1574}, {"x": 419, "y": 1570}, {"x": 421, "y": 1607}, {"x": 337, "y": 1611}]}, {"class": "ShelfLabel", "text": "\u00a32.50", "vertices": [{"x": 1109, "y": 1619}, {"x": 1350, "y": 1613}, {"x": 1352, "y": 1674}, {"x": 1111, "y": 1680}]}, {"class": "ShelfLabel", "text": "\u00a32.50", "vertices": [{"x": 2085, "y": 1622}, {"x": 2312, "y": 1622}, {"x": 2312, "y": 1680}, {"x": 2085, "y": 1680}]}, {"class": "ShelfLabel", "text": "200MI", "vertices": [{"x": 1505, "y": 1700}, {"x": 1566, "y": 1697}, {"x": 1567, "y": 1713}, {"x": 1506, "y": 1716}]}, {"class": "ShelfLabel", "text": "\u00a31.25", "vertices": [{"x": 1111, "y": 1707}, {"x": 1182, "y": 1707}, {"x": 1182, "y": 1727}, {"x": 1111, "y": 1727}]}, {"class": "ShelfLabel", "text": "100ml", "vertices": [{"x": 3588, "y": 1703}, {"x": 3662, "y": 1703}, {"x": 3662, "y": 1723}, {"x": 3588, "y": 1723}]}, {"class": "ShelfLabel", "text": "55p", "vertices": [{"x": 4418, "y": 1700}, {"x": 4465, "y": 1700}, {"x": 4465, "y": 1722}, {"x": 4418, "y": 1722}]}, {"class": "ShelfLabel", "text": "080691458/5011451102965/25", "vertices": [{"x": 2105, "y": 1734}, {"x": 2323, "y": 1734}, {"x": 2323, "y": 1749}, {"x": 2105, "y": 1749}]}], "left_edge": 4561.0, "right_edge": 41.5, "height": 1750.5}]}};

//const backend_url = "http://163.1.246.246:5000";
const backend_url = "https://pg-shelf-intel.herokuapp.com/";

function upload_image()
{
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
	send_request_and_receive_payload(reader.result);
    });

    if (file) {
	reader.readAsDataURL(file);
    }
}


function send_request_and_receive_payload(image)
{
    console.log(image);
    // send request
    
    var formData = new FormData();
    formData.append('image', image); 

    // New Fetch API
    
    fetch(backend_url, {
	method: 'POST',
	body: formData
    })
    .then(response => display_data(response.json()))
    .catch(error => console.error('Error:', error));

    //display_data(payload);
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
	    number_of_products++;
	    draw_bounding_box([CANVAS, CTX], product.vertices);

	    brand_counts[product.brand] = (product.brand in brand_counts) ? 
		brand_counts[product.brand] + 1 : 0
	    company_counts[product.company] = (product.company in company_counts) ? 
		company_counts[product.company] + 1 : 0

	});
	//document.getElementById("shelf").innerHTML +=  "<li>" + JSON.stringify(shelf);
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
    console.log(shelf);
    ctx.fillStyle = "black";
    ctx.fillRect(Math.min(shelf.right, shelf.left), 
	    shelf.height, Math.abs(shelf.right-shelf.left), 
	    20);
}
