import * as THREE from 'three'
import math from '../utils/math'
import ease from '../utils/ease'
import properties from '../global/properties'
import { OrbitControls } from 'three/addons/controls/OrbitControls'

class Experience {
    init() {
        document.body.innerHTML =  ''
        this.dateTime = performance.now()
        this.time = 0
        this.fov = 130
        this.distance = (window.innerHeight / 2) / Math.tan((this.fov / 2) * Math.PI / 180)

        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(this.fov, window.innerWidth / window.innerHeight, 0.001, 100000)
        this.camera.position.z = this.distance
        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        })
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enableDamping = true
        this.controls.dampingFactor = 0.05
        this.controls.update()
        document.body.appendChild(this.renderer.domElement)

        this.createPlane()
        this.addLight()
    }

    createPlane() {
        // let shortSize = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth
        let shortSize = 200
        let gap = math.fit(shortSize, 320, 1440, 10, 100)
        this.geometry = new THREE.BoxGeometry(shortSize - gap, shortSize - gap, shortSize - gap, 10, 10, 10)
        this.material = new THREE.MeshLambertMaterial({
            color: 0x52340a,
            wireframe: true,
            side: THREE.DoubleSide
        })
        this.plane = new THREE.Mesh(this.geometry, this.material)
        this.scene.add(this.plane)
    }

    addLight() {
        this.pointLight = new THREE.PointLight( 0xffffff, 1000000)
        this.pointLight.position.set(0, 175, 200)

        this.ambientLight = new THREE.AmbientLight( 0x404040, 40 ); // soft white light

        this.scene.add(this.pointLight)
        this.scene.add(this.ambientLight);

        const sphereSize = 10;
        const pointLightHelper = new THREE.PointLightHelper( this.pointLight, sphereSize );
        this.scene.add( pointLightHelper );
    }

    update(dt) {
        this.plane.rotation.x = math.fit((properties.time) % 1, 0, 1, 0, 1, ease.bounceOut) * Math.PI / 2
        this.renderer.render(this.scene, this.camera)
        this.controls.update()
    }
}

const experience = new Experience()
export default experience
