uniform float time;

varying vec2 v_uv;

void main() {

    float color = step(0.4, mod(v_uv.x * 10. - 0.2, 1.)) * step(0.8, mod(v_uv.y * 10., 1.));
    color += step(0.8, mod(v_uv.x * 10., 1.)) * step(0.4, mod(v_uv.y * 10. - 0.2, 1.));

    gl_FragColor = vec4(vec3(color), 1.);
}
