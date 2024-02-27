varying vec2 v_uv;

float circle(vec2 uv, vec2 p, float r, float blur) {
	float d = length(uv - 0.5 - p);
	float c = smoothstep(r, r - blur, d);
	return c;
}

void main() {
	vec2 uv = v_uv;
	float d = length(uv);
	float r = 0.5;
	float mask = circle(uv, vec2(0.1, 0.1), 0.4, 0.01);


	mask += circle(uv, vec2(-0.4, 0.4), 0.1, 0.01);
	mask += circle(uv, vec2(-0.2, -0.3), 0.05, 0.01);
	mask -= circle(uv, vec2(0., 0.), 0.05, 0.01);
	mask -= circle(uv, vec2(0.3, 0.3), 0.05, 0.01);
	mask -= circle(uv, vec2(0.3, -0.1), 0.05, 0.01);

	vec3 color = vec3(1., 0., 1.) * mask;

	gl_FragColor = vec4(color, 1.0);
}
