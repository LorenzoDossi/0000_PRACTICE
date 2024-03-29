#define PI 3.1415926535897932384626433832795

uniform float time;

varying vec2 v_uv;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

vec2 rotate(vec2 uv, float rotation, vec2 mid) {
    return vec2(
      cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
      cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}

void main() {
    float color = atan(v_uv.x - 0.5, v_uv.y - 0.5) / (2. * PI) + 0.5;

    gl_FragColor = vec4(vec3(color), 1.);
}
