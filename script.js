let scene = new THREE.Scene();

// Créez une caméra
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

// Définissez la largeur et la hauteur souhaitées pour le canevas de rendu
let newWidth = 400; // Largeur souhaitée en pixels
let newHeight = 400; // Hauteur souhaitée en pixels

// Créez un rendu WebGL avec un fond transparent et la nouvelle taille
let renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(newWidth, newHeight);
renderer.setClearColor(0x000000, 0); // Le premier argument est la couleur d'effacement, le second est l'opacité (0 pour transparent)

// Ajoutez le rendu à la div
let sceneContainer = document.getElementById('scene-container');
sceneContainer.appendChild(renderer.domElement);

// Mise à jour de la caméra pour correspondre à la nouvelle taille
camera.aspect = newWidth / newHeight;
camera.updateProjectionMatrix();


// Créez un polyèdre (cube) pour la scène
// Définir les sommets du losange (dans le plan XY)
const dodecahedronGeometry = new THREE.DodecahedronGeometry(1); // Le paramètre 1 définit la taille du dodécaèdre

// Créez un matériau
const customColor = new THREE.Color(8 / 255, 131 / 255, 212 / 255); // Convertissez les valeurs RVB en valeurs comprises entre 0 et 1
const material = new THREE.MeshStandardMaterial({
    color: customColor,
    roughness: 0.7,
    metalness: 1.2,
});

// Créez un maillage en utilisant la géométrie et le matériau
const dodecahedronMesh = new THREE.Mesh(dodecahedronGeometry, material);

// Ajoutez le maillage à la scène
scene.add(dodecahedronMesh);

// Ajoutez une lumière pour voir les effets de brillance
const pointLight = new THREE.PointLight(0xffffff, 1.5);

// Positionnez la lumière à la position de la caméra
camera.add(pointLight);

// Ajoutez la lumière à la scène
scene.add(camera);


// Animation
let animate = function () {
    requestAnimationFrame(animate);
    dodecahedronMesh.rotation.x = 0.5;
    dodecahedronMesh.rotation.y += 0.009;
    renderer.render(scene, camera);
};
animate();


let burger = document.querySelector('.navbar-burger');

let nav = document.getElementById('navbarBasic');

burger.addEventListener('click', () => {
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});


    function scrollToSection(triggerId, targetId) {
        let trigger = document.getElementById(triggerId);
        let target = document.getElementById(targetId);
        trigger.addEventListener("click", function() {
        target.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    let sections = [
        { triggerId: 'connaissance', targetId: 'connaissanceCible' },
        { triggerId: 'projet', targetId: 'projetCible' },
        { triggerId: 'propos', targetId: 'proposCible' },
        { triggerId: 'connaissanceFooter', targetId: 'connaissanceCible' },
        { triggerId: 'projetFooter', targetId: 'projetCible' },
        { triggerId: 'proposFooter', targetId: 'proposCible' },
    ];
    
    sections.forEach(function(section) {
        scrollToSection(section.triggerId, section.targetId);
    });