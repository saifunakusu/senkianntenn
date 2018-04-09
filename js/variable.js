const viewport = document.getElementById('viewport');
const canvas = document.getElementById('canvas');
const cvctx = canvas.getContext('2d');
const vid = document.getElementById('video');
let vid_width = vid.width;
let vid_height = vid.height;
let oldLeftEye = new Array(2);
let oldRightEye = new Array(2);
let oldNose = new Array(2);

let leftMode = 0;
let leftInterval = 10;

let closeFlag = false;

let faceX = 0;
let faceY =0;

let sceneChange;
let sceneChangeStart;
let sceneChangeRandomNum = 0;


let container, stats;
let camera, scene, renderer;
let sphere;
let setValue;
let waterNormals;
let element;
let clock = new THREE.Clock();
let orientations, instanceBuffer;
let mixer;
let reactiveSphere = [];
let reactiveBoxes = [];
let reactiveFish = [];
let time;
let scenemane = [];
let frame = 0;
let firstChange = false;
let parameters = {
	width: 2000,
	height: 2000,
	widthSegments: 250,
	heightSegments: 250,
	depth: 1500,
	param: 4,
	filterparam: 1
};
let sphereScale = 40;
let element3;
let animationFlags = [];
var controls;
var cubeMat;
let background;
let particleStart = false;

let cameraGo = false;
let trackingStarted = false;
let maxpos = 10000;
let minpos = -10000;

// var manifest = [
//     { id: '0', src: 'img/skybox/0.png'},
// 	  { id: '1', src: 'img/skybox/1.png'},
// 	  { id: '2', src: 'img/skybox/2.png'},
// 	  { id: '3', src: 'img/skybox/3.png'},
// 		{ id: '4', src: 'img/skybox/0.png'},
// 		{ id: '5', src: 'img/skybox/1.png'},
// 		{ id: '6', src: 'img/skybox/2.png'},
// 		{ id: '7', src: 'img/skybox/3.png'},
// 		{ id: '8', src: 'img/skybox/0.png'},
// 		{ id: '9', src: 'img/skybox/1.png'},
// 		{ id: '10', src: 'img/skybox/2.png'},
// 		{ id: '11', src: 'img/skybox/3.png'},
// 		{ id: '12', src: 'img/skybox/0.png'},
// 		{ id: '13', src: 'img/skybox/1.png'},
// 		{ id: '14', src: 'img/skybox/2.png'},
// 		{ id: '15', src: 'img/skybox/3.png'},
// 		{ id: '16', src: 'img/skybox/0.png'},
// 		{ id: '17', src: 'img/skybox/1.png'},
// 		{ id: '18', src: 'img/skybox/2.png'},
// 		{ id: '19', src: 'img/skybox/3.png'},
// 		{ id: '20', src: 'img/skybox/3.png'},
//
// ];
// let imageee;
// var loadQueue = new createjs.LoadQueue();
//
// loadQueue.on('complete', function() {
//     // loadQueueからロードした画像データを取得
//     var image = loadQueue.getResult('hoge');
//     // three.jsで使えるテクスチャーに変換
//     var texture = new THREE.Texture(image);
//     // 【重要】更新を許可
//     texture.needsUpdate = true;
// });
//
// // テクスチャーのロードを開始
// loadQueue.loadManifest(manifest);
//
// var image = loadQueue.getResult('1');
