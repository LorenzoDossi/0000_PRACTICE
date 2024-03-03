uniform float time;

varying vec2 v_uv;
varying vec3 v_viewNormal;

void main() {
    vec4 modelPosition = modelMatrix * vec4( position, 1.0 );

    vec4 viewPosition = viewMatrix * modelPosition;

    gl_Position = projectionMatrix * viewPosition;

    v_uv = uv;
    v_viewNormal = normalMatrix * normal;
}
