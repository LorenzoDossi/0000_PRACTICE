import * as THREE from 'three'
import math from '../utils/math'
import ease from '../utils/ease'
import properties from '../global/properties'
import { OrbitControls } from 'three/addons/controls/OrbitControls'
import vertexShader from './shaders/05_gradient_circle.vert'
import fragmentShader from './shaders/05_gradient_circle.frag'
import { Pane } from 'tweakpane'

class Experience {
    init() {
        document.body.innerHTML =  ''
        this.dateTime = performance.now()
        this.time = 0
        this.fov = 60
        this.distance = (window.innerHeight / 2) / Math.tan((this.fov / 2) * Math.PI / 180)

        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(this.fov, window.innerWidth / window.innerHeight, 0.001, 10000)
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

        this.pane = new Pane({
            title: 'Options',
            expanded: true
        })
        const paneContainer = document.querySelector('.tp-dfwv'); // or use a more specific selector if needed
        paneContainer.style.width = '300px';

        this.createPlane()
        this.scrollProgress = this.pane.addBinding(this.plane.material.uniforms.u_scroll_progress, 'value', {
            label: 'Scroll progress',
            min: 0,
            max: 2,
            step: 0.001
        })
    }

    createPlane() {
        let shortSize = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth
        let gap = math.fit(shortSize, 320, 1440, 10, 100)
        this.geometry = new THREE.PlaneGeometry(shortSize - gap, shortSize - gap, 1000, 1000)
        this.material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                u_time: { value: 0.0 },
                u_scroll_progress: { value: 0 }
            }
        })
        this.plane = new THREE.Mesh(this.geometry, this.material)
        this.scene.add(this.plane)

    }

    update(dt) {
        this.renderer.render(this.scene, this.camera)
        this.controls.update()
        this.plane.material.uniforms.u_time.value = properties.time
    }
}

const experience = new Experience()
export default experience
