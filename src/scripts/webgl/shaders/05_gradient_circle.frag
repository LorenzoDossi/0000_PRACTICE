uniform float u_time;
uniform float u_scroll_progress;

varying vec2 v_uv;

float rand(vec2 n) {
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

void main() {
    vec2 uv = (v_uv - 0.5) * 2.;
    vec4 bgColor = vec4(0., 0., 0., 1.);

    vec4 innColors[3];
    vec4 midColors[3];
    vec4 outColors[3];

    innColors[0] = vec4(.977, 0.989, .641, 1.);
    innColors[1] = vec4(0.774, 0.711, 1., 1.);
    innColors[2] = vec4(0.963, 0.649, .646, 1.);

    midColors[0] = vec4(1., 0.713, .216, 1.);
    midColors[1] = vec4(0.730, 0.901, .201, 1.);
    midColors[2] = vec4(0.533, 0.941, 1., 1.);

    outColors[0] = vec4(1., 0.245, .22, 1.);
    outColors[1] = vec4(0.071, 0.557, 0.300, 1.);
    outColors[2] = vec4(0., 0.206, .758, 1.);

    int floorIndex = int(floor(u_scroll_progress));
    int ceilIndex = int(ceil(u_scroll_progress));
    float normalized_scroll_progress = fract(u_scroll_progress);

    vec4 innColor = mix(innColors[floorIndex], innColors[ceilIndex], normalized_scroll_progress);
    vec4 midColor = mix(midColors[floorIndex], midColors[ceilIndex], normalized_scroll_progress);
    vec4 outColor = mix(outColors[floorIndex], outColors[ceilIndex], normalized_scroll_progress);

    vec2 innPoint = vec2(0., 0.) + vec2(cos(u_time), sin(u_time)) * 0.25;
    vec2 midPoint = innPoint + vec2(cos(u_time), sin(u_time)) * 0.5;
    vec2 outPoint = vec2(0., 0.);

    float innDist = distance(uv, innPoint);
    float midDist = distance(uv, midPoint);
    float outDist = distance(uv, outPoint);

    float grain = mix(-0.1, 0.1, rand(uv));

    float innStep = smoothstep(0., 1., innDist + grain);
    float midStep = smoothstep(0., 1.5, midDist + grain);
    float outStep = step(1., outDist);

    vec4 color = mix(innColor, midColor, innStep);
    color = mix(color, outColor, midStep);
    color = mix(color, bgColor, outStep);

    float disc = fract(outDist * 50.);
    float mixDisc = smoothstep(0.2, .3, disc) - smoothstep(0.6, 0.7, disc);

    color = mix(bgColor, color, mixDisc);

    gl_FragColor = vec4(color);
}
