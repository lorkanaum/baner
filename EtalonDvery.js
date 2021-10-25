(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 120,
	height: 670,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/EtalonDvery_atlas_.png", id:"EtalonDvery_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"EtalonDvery_atlas_", frames: [[348,0,111,218],[226,0,120,202],[461,0,27,23],[0,0,111,241],[113,0,111,236],[226,204,120,106]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.вхідні4 = function() {
	this.spriteSheet = ss["EtalonDvery_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.вхідні5 = function() {
	this.spriteSheet = ss["EtalonDvery_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.инстацвет = function() {
	this.spriteSheet = ss["EtalonDvery_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.міжкімн1 = function() {
	this.spriteSheet = ss["EtalonDvery_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.міжкімн2 = function() {
	this.spriteSheet = ss["EtalonDvery_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Vikna_dveri_Etalon = function() {
	this.spriteSheet = ss["EtalonDvery_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.мж_д_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.міжкімн2();
	this.instance.setTransform(-55.5,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-118,111,236);


(lib.мж_д_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.міжкімн1();
	this.instance.setTransform(-50,-108.5,0.901,0.901);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-108.5,100,217.1);


(lib.міжкімн = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXBnIAAjNIAuAAIAADNg");
	this.shape.setTransform(48.3,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AANBnIAAhYIgZAAIAABYIgwAAIAAjNIAwAAIAABNIAZAAIAAhNIAwAAIAADNg");
	this.shape_1.setTransform(37.5,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBnIAAilIgfAAIAAgoIBrAAIAAAoIgfAAIAAClg");
	this.shape_2.setTransform(24.5,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAUBnIgFglIgfAAIgFAlIgwAAIAnjNIA9AAIAnDNgAALAdIgLhjIAAAAIgLBjIAWAAg");
	this.shape_3.setTransform(11.6,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AANBnIAAhYIgZAAIAABYIgwAAIAAjNIAwAAIAABNIAZAAIAAhNIAwAAIAADNg");
	this.shape_4.setTransform(-2.9,16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAqBnIAAifIAAAAIgbCfIgdAAIgbifIAACfIguAAIAAjNIBKAAIANBmIAAAAIANhmIBLAAIAADNg");
	this.shape_5.setTransform(-20.2,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWBnIAAjNIAtAAIAADNg");
	this.shape_6.setTransform(-33.9,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAQBnQgDgDgBgHIgBgOIAAgPIAAgiQAAgJgDgEQgDgEgIAAIgLAAIAABaIgwAAIAAjNIAwAAIAABNIAJAAQAGAAADgFQAEgGABgIIAAgTIAAgPIACgOQABgHADgDIAtAAQgCADgBAHIgBAOIAAAPQAAAMgCAKQgCALgGAIQgHAIgMAEIAAABQAPACAIAHQAIAJAAANIAAAqIAAAPIACAOQABAHACADg");
	this.shape_7.setTransform(-44.5,16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghATIAAglIBDAAIAAAlg");
	this.shape_8.setTransform(24.6,-14.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA4BnQgDgDgBgHQgBgGAAgIIgBgPIAAgiQABgGgBgEQgBgEgEgBQgDgCgHAAIgMAAIAABaIgtAAIAAhaIgMAAQgHAAgDACQgEABgBAEQgBAEABAGIAAAiIgBAPQAAAIgBAGQgBAHgDADIgvAAQACgDACgHIABgOIAAgPIAAgqQAAgNAIgJQAIgHAPgCIAAgBQgMgEgGgIQgHgIgCgLQgCgKABgMIAAgPIgCgOQgBgHgCgDIAuAAQACADACAHIABAOIAAAPIABATQABAIADAGQADAFAJAAIAJAAIAAhNIAtAAIAABNIAKAAQAIAAADgFQAEgGAAgIIABgTIAAgPQAAgIACgGQABgHACgDIAuAAQgCADgBAHIgBAOIgBAPQABAMgCAKQgCALgHAIQgGAIgMAEIAAABQAPACAIAHQAIAJAAANIAAAqIAAAPIABAOQACAHACADg");
	this.shape_9.setTransform(9.3,-16.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgXBnIAAjNIAuAAIAADNg");
	this.shape_10.setTransform(-5.2,-16.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAqBnIAAifIAAAAIgbCfIgdAAIgbifIAACfIguAAIAAjNIBLAAIAMBmIAAAAIANhmIBLAAIAADNg");
	this.shape_11.setTransform(-18.9,-16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.8,-34.6,111.7,69.3);


(lib.вх_слово = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjCdIAAk5IBHAAIAAE5g");
	this.shape.setTransform(50.3,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVCdIAAiGIgoAAIAACGIhJAAIAAk5IBJAAIAAB2IAoAAIAAh2IBIAAIAAE5g");
	this.shape_1.setTransform(33.9,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA4C5IAAg5IhwAAIAAA5Ig8AAIAAh2IARAAQAKgUAEgfQAFgbACgkIAChGIABhDICsAAIAAD7IAUAAIAAB2gAgLhNQgBAcgCAcQgCAZgEAYQgDAXgFAQIA0AAIAAjGIghAAIgCA2g");
	this.shape_2.setTransform(10.9,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgjCdIAAk5IBHAAIAAE5g");
	this.shape_3.setTransform(-6.6,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAdCdIgdhmIAAAAIgdBmIhLAAIA8ioIg4iRIBNAAIAXBZIABAAIAZhZIBLAAIg5CUIA9Clg");
	this.shape_4.setTransform(-22.9,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhcCdIAAk5IBjAAQAnAAAUARQATARAAAoQAAARgDAOQgCAPgJALQgIALgSAGIAAABQAbAFAKARQALATAAAeQAAAagIAVQgHAVgTAMQgSANggAAgAgTBnIAPAAQAKAAAGgEQAFgEACgKQACgJAAgQQAAgLgCgJQgCgKgFgGQgGgGgJAAIgQAAgAgTggIANAAQAJAAAGgEQAFgGACgIQACgIAAgKQAAgRgFgIQgFgJgLAAIgQAAg");
	this.shape_5.setTransform(-44.8,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-26.2,120.7,52.5);


(lib.вх_дв1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.вхідні4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111,218);


(lib.вх_дв_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.вхідні5();
	this.instance.setTransform(-49,-92.5,0.817,0.916);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-92.5,98,185);


// stage content:
(lib.EtalonDvery = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// телефон
	this.text = new cjs.Text("099 730 98 37 ", "15px 'BastionKontrastC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 82;
	this.text.setTransform(-94.5,417,3.174,3.174,-90);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(302).to({_off:false},0).wait(1).to({x:-85.8},0).wait(1).to({x:-77.1},0).wait(1).to({x:-68.3},0).wait(1).to({x:-59.6},0).wait(1).to({x:-50.9},0).wait(1).to({x:-42.1},0).wait(1).to({x:-33.4},0).wait(1).to({x:-24.7},0).wait(1).to({x:-15.9},0).wait(1).to({x:-7.2},0).wait(1).to({x:1.6},0).wait(1).to({x:10.3},0).wait(1).to({x:19},0).wait(1).to({x:27.8},0).wait(1).to({x:36.5},0).wait(25).to({x:48.6},0).wait(1).to({x:60.7},0).wait(1).to({x:72.8},0).wait(1).to({x:84.9},0).wait(1).to({x:97.1},0).wait(1).to({x:109.2},0).wait(1).to({x:121.3},0).wait(1).to({x:133.4},0).wait(1).to({x:145.5},0).wait(1));

	// адрес
	this.text_1 = new cjs.Text("м. Чернівці, \nпросп. Незалежності, 91", "15px 'BastionKontrastC'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 155;
	this.text_1.setTransform(-91.1,429.8,1.921,1.921,-90);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(240).to({x:-90.4},0).wait(1).to({x:-86.1},0).wait(1).to({x:-81.8},0).wait(1).to({x:-77.5},0).wait(1).to({x:-73.2},0).wait(1).to({x:-68.8},0).wait(1).to({x:-64.5},0).wait(1).to({x:-60.2},0).wait(1).to({x:-55.9},0).wait(1).to({x:-51.6},0).wait(1).to({x:-47.3},0).wait(1).to({x:-43},0).wait(1).to({x:-38.7},0).wait(1).to({x:-34.4},0).wait(1).to({x:-30},0).wait(1).to({x:-25.7},0).wait(1).to({x:-21.4},0).wait(1).to({x:-17.1},0).wait(1).to({x:-12.8},0).wait(1).to({x:-8.5},0).wait(1).to({x:-4.2},0).wait(1).to({x:0.1},0).wait(1).to({x:4.4},0).wait(1).to({x:8.8},0).wait(1).to({x:13.1},0).wait(1).to({x:17.4},0).wait(1).to({x:21.7},0).wait(1).to({x:26},0).wait(24).to({x:36.3},0).wait(1).to({x:46.7},0).wait(1).to({x:57},0).wait(1).to({x:67.3},0).wait(1).to({x:77.7},0).wait(1).to({x:88},0).wait(1).to({x:98.4},0).wait(1).to({x:108.7},0).wait(1).to({x:119},0).wait(1).to({x:129.4},0).wait(1).to({x:139.7},0).wait(1).to({x:150},0).to({_off:true},1).wait(48));

	// вх_дв_2
	this.instance = new lib.вх_дв_2();
	this.instance.setTransform(-69.9,470.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(187).to({x:-65.1},0).wait(1).to({x:-60.2},0).wait(1).to({x:-55.3},0).wait(1).to({x:-50.4},0).wait(1).to({x:-45.5},0).wait(1).to({x:-40.6},0).wait(1).to({x:-35.7},0).wait(1).to({x:-30.8},0).wait(1).to({x:-25.9},0).wait(1).to({x:-21},0).wait(1).to({x:-16.1},0).wait(1).to({x:-11.2},0).wait(1).to({x:-6.3},0).wait(1).to({x:-1.4},0).wait(1).to({x:3.5},0).wait(1).to({x:8.4},0).wait(1).to({x:13.3},0).wait(1).to({x:18.1},0).wait(1).to({x:23},0).wait(1).to({x:27.9},0).wait(1).to({x:32.8},0).wait(1).to({x:37.7},0).wait(1).to({x:42.6},0).wait(1).to({x:47.5},0).wait(1).to({x:52.4},0).wait(1).to({x:57.3},0).wait(15).to({x:66.9},0).wait(1).to({x:76.5},0).wait(1).to({x:86},0).wait(1).to({x:95.6},0).wait(1).to({x:105.2},0).wait(1).to({x:114.8},0).wait(1).to({x:124.3},0).wait(1).to({x:133.9},0).wait(1).to({x:143.5},0).wait(1).to({x:153.1},0).wait(1).to({x:162.6},0).wait(1).to({x:172.2},0).wait(1).to({x:181.8},0).wait(1).to({x:191.4},0).to({_off:true},1).wait(110));

	// вх_дв_1
	this.instance_1 = new lib.вх_дв1();
	this.instance_1.setTransform(-71.4,464.1,0.91,0.91,0,0,0,54.6,109);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(134).to({_off:false},0).wait(1).to({regX:55.5,x:-63.8,y:464},0).wait(1).to({x:-56.9},0).wait(1).to({x:-50.1},0).wait(1).to({x:-43.2},0).wait(1).to({x:-36.4},0).wait(1).to({x:-29.5},0).wait(1).to({x:-22.7},0).wait(1).to({x:-15.8},0).wait(1).to({x:-9},0).wait(1).to({x:-2.1},0).wait(1).to({x:4.7},0).wait(1).to({x:11.6},0).wait(1).to({x:18.4},0).wait(1).to({x:25.3},0).wait(1).to({x:32.1},0).wait(1).to({x:39},0).wait(1).to({x:45.8},0).wait(1).to({x:52.6},0).wait(1).to({x:59.4},0).wait(10).to({x:82},0).wait(1).to({x:104.5},0).wait(1).to({x:127},0).wait(1).to({x:149.5},0).wait(1).to({x:172},0).wait(1).to({x:194.5},0).wait(18).to({_off:true},1).wait(164));

	// вх_сл
	this.instance_2 = new lib.вх_слово();
	this.instance_2.setTransform(-76.1,285.6);
	this.instance_2.alpha = 0.219;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(118).to({_off:false},0).wait(1).to({regX:-0.1,regY:3.2,x:-70.9,y:288.8,alpha:0.259},0).wait(1).to({x:-65.7,alpha:0.297},0).wait(1).to({x:-60.5,alpha:0.336},0).wait(1).to({x:-55.3,alpha:0.374},0).wait(1).to({x:-50,alpha:0.413},0).wait(1).to({x:-44.8,alpha:0.451},0).wait(1).to({x:-39.6,alpha:0.49},0).wait(1).to({x:-34.4,alpha:0.513},0).wait(1).to({x:-29.2,alpha:0.537},0).wait(1).to({x:-23.9,alpha:0.56},0).wait(1).to({x:-18.7,alpha:0.583},0).wait(1).to({x:-13.5,alpha:0.607},0).wait(1).to({x:-8.3,alpha:0.63},0).wait(1).to({x:-3.1,alpha:0.653},0).wait(1).to({x:2.1,alpha:0.677},0).wait(1).to({x:7.3,alpha:0.7},0).wait(1).to({x:12.6,alpha:0.73},0).wait(1).to({x:17.8,alpha:0.76},0).wait(1).to({x:23,alpha:0.79},0).wait(1).to({x:28.2,alpha:0.82},0).wait(1).to({x:33.4,alpha:0.85},0).wait(1).to({x:38.7,alpha:0.88},0).wait(1).to({x:43.9,alpha:0.91},0).wait(1).to({x:49.1,alpha:0.94},0).wait(1).to({x:54.3,alpha:0.97},0).wait(1).to({x:59.6,alpha:1},0).wait(90).to({x:79},0).wait(1).to({x:98.4},0).wait(1).to({x:117.9},0).wait(1).to({x:137.3},0).wait(1).to({x:156.7},0).wait(1).to({x:176.2},0).wait(1).to({x:195.6},0).to({_off:true},1).wait(110));

	// мж_д_2
	this.instance_3 = new lib.мж_д_2();
	this.instance_3.setTransform(198.9,475,0.91,0.91);
	this.instance_3.alpha = 0.25;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(69).to({_off:false},0).wait(1).to({x:191.5},0).wait(1).to({x:184.1},0).wait(1).to({x:176.7},0).wait(1).to({x:169.3},0).wait(1).to({x:161.9},0).wait(1).to({x:154.5,alpha:0.312},0).wait(1).to({x:147.2,alpha:0.374},0).wait(1).to({x:139.8,alpha:0.436},0).wait(1).to({x:132.4,alpha:0.498},0).wait(1).to({x:125,alpha:0.56},0).wait(1).to({x:117.6,alpha:0.614},0).wait(1).to({x:110.2,alpha:0.668},0).wait(1).to({x:102.9,alpha:0.722},0).wait(1).to({x:95.5,alpha:0.776},0).wait(1).to({x:88.1,alpha:0.83},0).wait(1).to({x:80.7,alpha:0.873},0).wait(1).to({x:73.3,alpha:0.915},0).wait(1).to({x:65.9,alpha:0.957},0).wait(1).to({x:58.6,alpha:1},0).wait(9).to({x:44.4},0).wait(1).to({x:30.2},0).wait(1).to({x:16},0).wait(1).to({x:1.8},0).wait(1).to({x:-12.4},0).wait(1).to({x:-26.6},0).wait(1).to({x:-40.8},0).wait(1).to({x:-55},0).wait(1).to({x:-69.2},0).wait(1).to({x:-83.4},0).wait(12).to({_off:true},1).wait(232));

	// між_д1
	this.instance_4 = new lib.мж_д_1();
	this.instance_4.setTransform(-103,459.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).wait(1).to({x:-96.3},0).wait(1).to({x:-89.6},0).wait(1).to({x:-82.8},0).wait(1).to({x:-76.1},0).wait(1).to({x:-69.4},0).wait(1).to({x:-62.7},0).wait(1).to({x:-56},0).wait(1).to({x:-49.2},0).wait(1).to({x:-42.5},0).wait(1).to({x:-35.8},0).wait(1).to({x:-29.1},0).wait(1).to({x:-22.3},0).wait(1).to({x:-15.6},0).wait(1).to({x:-8.9},0).wait(1).to({x:-2.2},0).wait(1).to({x:4.5},0).wait(1).to({x:11.3},0).wait(1).to({x:18},0).wait(1).to({x:24.7},0).wait(1).to({x:31.4},0).wait(1).to({x:38.1},0).wait(1).to({x:44.9},0).wait(1).to({x:51.6},0).wait(1).to({x:58.3},0).wait(12).to({x:75.4},0).wait(1).to({x:92.6},0).wait(1).to({x:109.7},0).wait(1).to({x:126.8},0).wait(1).to({x:144},0).wait(1).to({x:161.1},0).wait(1).to({x:178.2},0).wait(1).to({x:195.4},0).to({_off:true},1).wait(282));

	// мж_сл
	this.instance_5 = new lib.міжкімн();
	this.instance_5.setTransform(-81.8,281.3);
	this.instance_5.alpha = 0.23;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:-0.1,regY:0.2,x:-78,y:281.5,alpha:0.248},0).wait(1).to({x:-74,alpha:0.265},0).wait(1).to({x:-70.1,alpha:0.283},0).wait(1).to({x:-66.2,alpha:0.3},0).wait(1).to({x:-62.2,alpha:0.318},0).wait(1).to({x:-58.3,alpha:0.335},0).wait(1).to({x:-54.3,alpha:0.352},0).wait(1).to({x:-50.4,alpha:0.37},0).wait(1).to({x:-46.5,alpha:0.387},0).wait(1).to({x:-42.5,alpha:0.405},0).wait(1).to({x:-38.6,alpha:0.423},0).wait(1).to({x:-34.7,alpha:0.44},0).wait(1).to({x:-31.1,alpha:0.452},0).wait(1).to({x:-27.6,alpha:0.464},0).wait(1).to({x:-24,alpha:0.476},0).wait(1).to({x:-20.5,alpha:0.488},0).wait(1).to({x:-17,alpha:0.5},0).wait(1).to({x:-13.4,alpha:0.512},0).wait(1).to({x:-9.9,alpha:0.524},0).wait(1).to({x:-6.3,alpha:0.536},0).wait(1).to({x:-2.8,alpha:0.548},0).wait(1).to({x:0.7,alpha:0.56},0).wait(1).to({x:4.3,alpha:0.572},0).wait(1).to({x:7.8,alpha:0.584},0).wait(1).to({x:11.3,alpha:0.596},0).wait(1).to({x:14.9,alpha:0.608},0).wait(1).to({x:18.4,alpha:0.62},0).wait(1).to({x:21.9,alpha:0.652},0).wait(1).to({x:25.3,alpha:0.683},0).wait(1).to({x:28.8,alpha:0.715},0).wait(1).to({x:32.2,alpha:0.747},0).wait(1).to({x:35.6,alpha:0.778},0).wait(1).to({x:39.1,alpha:0.81},0).wait(1).to({x:42.5,alpha:0.842},0).wait(1).to({x:46,alpha:0.873},0).wait(1).to({x:49.4,alpha:0.905},0).wait(1).to({x:52.9,alpha:0.937},0).wait(1).to({x:56.3,alpha:0.968},0).wait(1).to({x:59.8,alpha:1},0).wait(73).to({x:79.8},0).wait(1).to({x:99.8},0).wait(1).to({x:119.8},0).wait(1).to({x:139.8},0).wait(1).to({x:159.8},0).wait(1).to({x:179.8},0).wait(1).to({x:199.8},0).to({_off:true},1).wait(232));

	// Фон
	this.instance_6 = new lib.инстацвет();
	this.instance_6.setTransform(4,623,0.648,0.648);

	this.instance_7 = new lib.Vikna_dveri_Etalon();
	this.instance_7.setTransform(8,16,0.892,0.892);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AgoCzIAAllIBRAAIAAFlg");
	this.shape.setTransform(110.7,152.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AhrCzIAAllIBZAAQArAAAcAIQAcAIANAXQAOAYAAAvQAAAagGAYQgHAXgTAQQgTAPglABIgsAAIAACOgAgYgZIAUAAQASAAAGgLQAFgKAAgZQAAgVgFgJQgEgJgKgCQgHgDgOABIgJAAg");
	this.shape_1.setTransform(92.3,152.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AhcCzIAAllIC1AAIAABGIhjAAIAABHIBXAAIAABDIhXAAIAABPIBnAAIAABGg");
	this.shape_2.setTransform(68.4,152.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AhpCzIAAllIBwAAQAtAAAXATQAVAUAAAtQABAUgDAQQgDARgKAMQgKANgTAHIAAABQAdAGANATQAMAVAAAjQAAAegJAYQgJAYgUANQgVAPglAAgAgWB2IARAAQALAAAHgFQAHgFACgLQABgKAAgSQAAgNgBgLQgCgLgHgHQgGgGgKgBIgTAAgAgWgkIAPAAQALAAAGgGQAGgGACgJQACgJAAgMQAAgTgGgKQgFgKgNAAIgSAAg");
	this.shape_3.setTransform(44.7,152.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("ABBDUIAAhCIiBAAIAABCIhFAAIAAiHIAVAAQAKgYAFgiQAGghACgoQACgnAAgpIAChMIDEAAIAAEfIAXAAIAACHgAgMhYIgEBAQgCAdgEAbQgEAagGATIA8AAIAAjjIgmAAIgCA+g");
	this.shape_4.setTransform(18.5,155.4);

	this.text_2 = new cjs.Text("etalon786", "15px 'BastionKontrastC'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 17;
	this.text_2.lineWidth = 71;
	this.text_2.setTransform(68.2,618,1.608,1.608);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AgRBQIAAiAIgYAAIAAgfIBTAAIAAAfIgYAAIAACAg");
	this.shape_5.setTransform(110.6,227);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC0000").s().p("AAKBQIAAhEIgTAAIAABEIglAAIAAifIAlAAIAAA8IATAAIAAg8IAlAAIAACfg");
	this.shape_6.setTransform(100.5,227);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC0000").s().p("AgoBQIAAifIBQAAIAAAfIgrAAIAAAgIAlAAIAAAdIglAAIAAAkIAsAAIAAAfg");
	this.shape_7.setTransform(89.9,227);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0000").s().p("AAhBQIAAh7IAAAAIgWB7IgVAAIgWh7IAAB7IgkAAIAAifIA7AAIAJBPIAKhPIA7AAIAACfg");
	this.shape_8.setTransform(77,227);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC0000").s().p("AALBQIAAhHIADgWIgbBdIghAAIAAifIAjAAIAABHIgCAWIAbhdIAhAAIAACfg");
	this.shape_9.setTransform(63.5,227);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC0000").s().p("AgRBQIAAiAIgYAAIAAgfIBTAAIAAAfIgYAAIAACAg");
	this.shape_10.setTransform(53.5,227);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC0000").s().p("AgvBQIAAifIAnAAQATAAAMADQANAEAGALQAGAKAAAVQAAAMgDALQgDAJgIAHQgJAHgQAAIgTAAIAABAgAgKgKIAJAAQAHAAACgFQADgFAAgLQAAgJgCgFQgCgEgFgBQgCgBgGABIgEAAg");
	this.shape_11.setTransform(43.4,227);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC0000").s().p("AgiBGQgMgMAAgWIAAhHQAAgQAGgKQAGgKALgGQAKgFANAAQANAAALAFQALAGAGAKQAGAKAAAQIAABHQAAAWgNAMQgMANgWAAQgVAAgNgNgAgGgyQgDACAAADIAAAHIAABNIAAAGQAAAEADACQACADAEAAQAFAAACgDQACgCABgEIAAgGIAAhNIAAgHQgBgDgCgCQgCgDgFAAQgEAAgCADg");
	this.shape_12.setTransform(32.1,227);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC0000").s().p("AgiBGQgMgMAAgWIAAhHQAAgQAGgKQAGgKALgGQAKgFANAAQANAAALAFQALAGAGAKQAGAKAAAQIAAAPIglAAIAAgSIAAgHQgBgDgCgCQgCgDgFAAQgEAAgCADQgDACAAADIAAAHIAABNIAAAGQAAAEADACQACADAEAAQAFAAACgDQACgCABgEIAAgGIAAgXIAlAAIAAAUQAAAWgNAMQgMANgWAAQgVAAgNgNg");
	this.shape_13.setTransform(20.9,227);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC0000").s().p("AAPBQIgDgcIgYAAIgEAcIglAAIAdifIAwAAIAeCfgAAIAXIgIhNIAAAAIgJBNIARAAg");
	this.shape_14.setTransform(9.7,227);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC0000").s().p("AALBfIAAhHIADgYIgbBfIghAAIAAifIAjAAIAABFIgCAYIAbhdIAhAAIAACfgAgUhHQgHgFgDgGQgDgGAAgGIAXAAQAAACAEADQACADAEAAQAEAAADgDQADgDAAgCIAYAAQAAAGgDAGQgDAGgHAFQgIAEgNAAQgMAAgIgEg");
	this.shape_15.setTransform(96.2,200.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC0000").s().p("AALBQIAAhHIADgWIgbBdIghAAIAAifIAjAAIAABHIgCAWIAbhdIAhAAIAACfg");
	this.shape_16.setTransform(85,201.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC0000").s().p("AAMBQQgCgCgBgGIgBgLIAAgLIAAgbQAAgHgDgDQgBgDgHAAIgIAAIAABGIglAAIAAifIAlAAIAAA8IAHAAQAEAAADgEQACgEABgHIABgPIAAgLIABgLQABgFACgDIAkAAQgCADgBAFIgBALIAAALQAAAJgCAJQgBAIgFAGQgFAHgKADQANACAFAFQAHAHAAAKIAAAhIAAALIABALQABAGACACg");
	this.shape_17.setTransform(74,201.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC0000").s().p("AgiBGQgMgMAAgWIAAhHQAAgQAGgKQAGgKALgGQAKgFANAAQANAAALAFQALAGAGAKQAGAKAAAQIAABHQAAAWgNAMQgMANgWAAQgVAAgNgNgAgGgyQgDACAAADIAAAHIAABNIAAAGQAAAEADACQACADAEAAQAFAAACgDQACgCABgEIAAgGIAAhNIAAgHQgBgDgCgCQgCgDgFAAQgEAAgCADg");
	this.shape_18.setTransform(62.6,201.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC0000").s().p("AgvBQIAAifIAnAAQATAAAMADQANAEAGALQAGAKAAAVQAAAMgDALQgDAJgIAHQgJAHgQAAIgTAAIAABAgAgKgKIAJAAQAHAAACgFQADgFAAgLQAAgJgCgFQgCgEgFgBQgCgBgGABIgEAAg");
	this.shape_19.setTransform(51.4,201.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC0000").s().p("AALBQIAAhHIADgWIgbBdIghAAIAAifIAjAAIAABHIgCAWIAbhdIAhAAIAACfg");
	this.shape_20.setTransform(40.1,201.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC0000").s().p("AhMBQIAAifIAlAAIAACAIAWAAIAAiAIAjAAIAACAIAVAAIAAiAIAlAAIAACfg");
	this.shape_21.setTransform(26,201.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC00").s().p("EgJXA09MAAAhp6ISuAAMAAABp6g");
	this.shape_22.setTransform(60.1,331);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.text_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_7},{t:this.instance_6}]}).wait(351));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.7,327,266,678);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;