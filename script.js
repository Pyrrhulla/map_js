var map = new L.Map('leaflet', {
	layers: [
		new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			'attribution': 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
		})
	],
	center: [0, 0],
	zoom: 0
});




var sidebar = L.control.sidebar('sidebar', {
		position: 'left'
});

map.addControl(sidebar);

var marker = L.marker([0,0]).addTo(map).on('click', function(){
	sidebar.setContent('<h1>Somewhere else</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam diam libero, sagittis sed eros ac, sodales vestibulum diam. Pellentesque tristique nulla tellus, at facilisis metus fermentum in. Vestibulum eu nisl sit amet nibh hendrerit bibendum a eu risus. Nullam eget convallis quam. Nulla facilisi. Quisque gravida volutpat laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie dignissim mi, a ullamcorper diam ultricies nec. Nulla sapien nibh, interdum et dignissim non, dapibus quis augue. Nunc molestie pretium ante, nec venenatis quam tempus vitae. Nunc viverra sem eros, a sollicitudin metus viverra ac. Curabitur in tempor massa. Nam blandit dapibus elit at viverra. Quisque vehicula erat sit amet libero rutrum, at sodales ipsum tincidunt. Aliquam iaculis non urna eget finibus. </p>').show();
});


var marker2 = L.marker([40,40]).addTo(map).on('click', function(){
	sidebar.setContent('Somewhere else').show();
});

var marker3 = L.marker([50,40]).addTo(map).on('click', function(){
	sidebar.setContent('<h1>Somewhere else</h1> <br> <p>Contenet here</p>').show();
});

var marker4 = L.marker([50,20]).addTo(map).on('click', function(){
	sidebar.setContent('<h1>Somewhere else</h1> <br> <p>Contenet here</p>').show();
});
