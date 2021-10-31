const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 5, window.innerWidth / window.innerHeight, 0.1, 100 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xffffff);
document.body.appendChild( renderer.domElement );



var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 0, 0, 200 );
scene.add(spotLight);


var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 0, 200, 0 );
scene.add(spotLight);


var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 0, 0, -200 );
scene.add(spotLight);
camera.position.z = 5;

const controls = new THREE.OrbitControls( camera, renderer.domElement );

var loader = new THREE.GLTFLoader();
loader.load("assets/scene.gltf" , function(gltf){
  gltf.scene.rotation.set(THREE.Math.degToRad(0), THREE.Math.degToRad(0) , THREE.Math.degToRad(0));
  scene.add(gltf.scene);
});

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

// markerebi
// let markers =[];
// let markerData = [
//   // {
//   //   position : [0, 0, 0.2],
//   //   headline : 'one',
//   //   description : ''
//   // },
//   {
//     position : [0.1, 0.05, 0.1],
//     heading : 'two',
//     description : ''

//   },
// ];

// Object.keys(markerData).forEach(function(key){
//   marker = markerData[key];
//   console.log(marker);

//   var markerContainer = new THREE.Object3D();

//   var geometry = new THREE.TorusGeometry(0.01, 0.01, 2, 100);
//   var material = new THREE.MeshBasicMaterial({color: 0xcccccc});
//   var torus = new THREE.CircleGeometry(0.1, 32);
//   var material = new THREE.MeshBasicMaterial({color: 0x000000 , transparent: true, opacity:0.5});
//   var circle = new THREE.Mesh(geometry , material);
//   markerContainer.add(circle);

//   markerContainer.position.set(marker.position[0], marker.position[1] , marker.position[2]);

//   scene.add(markerContainer);
// });