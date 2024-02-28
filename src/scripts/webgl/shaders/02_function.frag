uniform float time;

varying vec2 v_uv;

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.y) -
          smoothstep( pct, pct+0.02, st.y);
}

void main() {
    vec2 uv = (v_uv * 2. -1.) * 2.;

    float y = ceil(cos(uv.x));

    float line = plot(uv, y);

    vec3 color = vec3(1. - line) * vec3(y) + vec3(line) * vec3(1., 1., 1.) * (1. - vec3(y));

    gl_FragColor = vec4(color, 1.);
}
