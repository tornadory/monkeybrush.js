#version 300 es
precision highp float;

layout(location = 0) in vec3 position;
layout(location = 1) in vec3 normal;
layout(location = 2) in vec2 uv;
layout(location = 3) in vec3 offset;

out vec3 outPosition;
out vec3 outNormal;
out vec2 outUV;
out vec3 lp;

uniform mat4 projection;
uniform mat4 view;
uniform mat4 model;
uniform vec3 lightPosition;

void main() {
	mat3 normalMatrix = mat3(inverse(transpose(model)));


	vec3 pos = position;


	//outPosition = (view * model * vec4(pos, 1.0)).xyz;
	vec4 pp = model * vec4(pos, 1.0);
	pp.xyz += offset;
	pp = view * pp;
	outPosition = pp.xyz;
	outUV = uv;
	outNormal = normal;//normalize(normalMatrix * normal);
	gl_Position = projection * pp;

    gl_PointSize = 5.0;
	lp = (view * model * vec4(lightPosition, 1.0)).rgb;
}
