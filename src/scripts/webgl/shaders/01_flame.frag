uniform float time;

varying vec2 v_uv;

float strip(float t, float start, float end, float blur) {
    float step1 = smoothstep(start - blur, start + blur, t);
    float step2 = smoothstep(end + blur, end - blur, t);
    return step1 * step2;
}

float remap01(float a, float b, float t) {
    return (t - a) / (b - a);
}

float remap(float fromA, float toA, float fromB, float toB, float t) {
    return remap01(fromA, toA, t) * (toB - fromB) + fromB;
}

float rect(vec2 uv, float left, float right, float bottom, float top, float blur) {
    float strip1 = strip(uv.x, left, right, blur);
    float strip2 = strip(uv.y, bottom, top, blur);

    return strip1 * strip2;
}

void main() {
    vec2 uv = v_uv;
    uv -= 0.5;

    float y = uv.y;
    float m = sin(time - y * 8.) / 8.;
    float x = uv.x - m;
    x -= sin(time + 0.1) / 8.;

    float blur = remap(-.4, .4, 0.075, 0.5, y);
    blur = pow(blur * 2., 3.);
    float mask = rect(vec2(x, y), -0.1, 0.1, -0.4, 0.4, blur);
    vec3 color = mix(vec3(1.),vec3(0.9961, 0.7647, 0.302), (mask));

    gl_FragColor = vec4(color, 1.);
}
