var container, stats;
var camera, scene, raycaster, renderer;


init();
render();

function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
      //camera.position.y+=1600;
    //camera.position.z-=300;
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf0f0f0 );

  var light = new THREE.DirectionalLight( 0xffffff, 2 );
  light.position.set( 1, 1, 1 ).normalize();
  scene.add( light );

  virus1();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth/1.2, window.innerHeight/1.2);
  container.appendChild( renderer.domElement);
}
/////////////////////////
function virus1(){


  // Model/material loading!
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.load("gold.mtl", function(materials){
	materials.preload();

    var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials(materials);

  		objLoader.load("gold.obj", function(mesh){
  			mesh.traverse(function(node){
  				if( node instanceof THREE.Mesh ){
  					node.castShadow = true;
  					node.receiveShadow = true;
  				}
  			});
        mesh.scale.set(1,1,1);
        mesh.position.z = -200;
        scene.add(mesh);
  		});
  	});


  document.getElementById("showvirus1").addEventListener("click",virus1);
  document.getElementById("showvirus2").addEventListener("click",virus2);
  document.getElementById("showvirus3").addEventListener("click",virus3);
}
////////////////////////////
function virus2(){


  // Model/material loading!
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.load("wood.mtl", function(materials){
	materials.preload();

    var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials(materials);

  		objLoader.load("wood.obj", function(mesh){
  			mesh.traverse(function(node){
  				if( node instanceof THREE.Mesh ){
  					node.castShadow = true;
  					node.receiveShadow = true;
  				}
  			});
        mesh.scale.set(1,1,1);
        mesh.position.z = -200;
        scene.add(mesh);
  		});
  	});
}
///////////////////////////////
function virus3(){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("marble.mtl", function(materials){
  materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);

      objLoader.load("marble.obj", function(mesh){
        mesh.traverse(function(node){
          if( node instanceof THREE.Mesh ){
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });
        mesh.scale.set(1,1,1);
        mesh.position.z = -200;
        scene.add(mesh);
      });
    });
}
/////////////////////////////
function render() {
  requestAnimationFrame(render);
  renderer.render(scene,camera);
}
