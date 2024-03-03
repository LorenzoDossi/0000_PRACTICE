uniform float time;

varying vec2 v_uv;
varying vec3 v_viewNormal;

void main() {
    vec3 viewNormal = vec3(normalize(v_viewNormal));

    vec3 lightPosition = vec3(5., 0., 0.);
    vec3 lightDir = normalize(lightPosition);

    float shade = max(0., dot(viewNormal, lightDir));

    gl_FragColor = vec4(vec3(shade), 1.);
}
