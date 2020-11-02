
var canvas = document.getElementById('renderCanvas');

var config = {
    devicePixelRatio: window.devicePixelRatio || .8, //org 1.0
    fontSize: 23 * devicePixelRatio //org 28
};

// load the 3D engine
var engine = new BABYLON.Engine(canvas, true);

engine.setHardwareScalingLevel(1.0 / config.devicePixelRatio);

// call the createScene function
var scene = createScene(engine, canvas, config);

// run the render loop
engine.runRenderLoop(function() {
    scene.render();
});

// the canvas/window resize event handler
window.addEventListener('resize', function() {
    engine.resize();
});

