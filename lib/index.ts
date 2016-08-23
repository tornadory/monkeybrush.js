/// <reference path="library/_init_.ts" />

/// <reference path="library/core/core.ts" />
/// <reference path="library/core/program.ts" />
/// <reference path="library/resources/programManager.ts" />
/// <reference path="library/resources/resourceMap.ts" />
/// <reference path="library/resources/loaders.ts" />
/// <reference path="library/models/torus.ts" />
/// <reference path="library/models/sphere.ts" />
/// <reference path="library/models/plane.ts" />
/// <reference path="library/models/cube.ts" />
/// <reference path="library/models/mesh.ts" />
/// <reference path="library/textures/texture2d.ts" />
/// <reference path="library/extras/skybox.ts" />

/// <reference path="library/core/postprocess.ts" />
/// <reference path="library/extras/timer.ts" />

/// <reference path="library/lights/pointLight.ts" />
/// <reference path="library/_demoCamera.ts" />
/// <reference path="library/core/postProcess.ts" />
/// <reference path="library/constants/ProgramCte.ts" />

import _init__ from "./library/_init_"

import Core from "./library/core/core"
import Torus from "./library/models/torus"
import Sphere from "./library/models/sphere"
import Plane from "./library/models/plane"
import Cube from "./library/models/cube"
import Mesh from "./library/models/mesh"
import Texture2D from "./library/textures/texture2d"
import SimpleTexture2D from "./library/textures/simpleTexture2d"
import Program from "./library/core/program"
import Framebuffer from "./library/core/framebuffer"
import PostProcess from "./library/core/postProcess"
import ProgramManager from "./library/resources/programManager"
import ResourceMap from "./library/resources/resourceMap"
import loaders from "./library/resources/loaders"
import Timer from "./library/extras/timer"
import PointLight from "./library/lights/pointLight"
import Vector2 from "./library/maths/vector2"
import Vector3 from "./library/maths/vector3"
import Camera2 from "./library/_demoCamera"
import Skybox from "./library/extras/skybox"

import ProgramCte from "./library/constants/ProgramCte";

"use strict";

let camera = new Camera2(new Float32Array([-2.7, -1.4, 11.8]));

let gl_;
let skybox: Skybox;

let esferita: Sphere;
let cubito: Cube;

let SimpleConfig = function() {
    return {
        max: 10
    };
};
let torito: Torus;
let planito: Plane;
let m: Mesh;

let view;
let projection;

let tex2d: Texture2D;

let light = new PointLight(new Vector3<number>( -5.0, 0.0, 0.0 ));

let identityMatrix = mat4.create();
mat4.identity(identityMatrix);
let model = mat4.create();
let angle = 0;

let text = SimpleConfig();
function loadAssets() {
    loaders.loadImage("assets/images/example.png", "exampleImg");
    // skybox
    loaders.loadImage("assets/images/canyon/back.jpg");
    loaders.loadImage("assets/images/canyon/bottom.jpg");
    loaders.loadImage("assets/images/canyon/front.jpg");
    loaders.loadImage("assets/images/canyon/left.jpg");
    loaders.loadImage("assets/images/canyon/right.jpg");
    loaders.loadImage("assets/images/canyon/top.jpg");
}

const mainShader: string = "prog";

let framebuffer: Framebuffer;

function initialize() {
    gl_ = Core.getInstance().getGL();
    esferita = new Sphere(1.0, 20, 20);
    torito = new Torus(3.7, 2.3, 25, 10);
    planito = new Plane(100.0, 100.0, 2.0, 2.0);
    m = new Mesh("assets/objects/teddy.json");
    cubito = new Cube(1.0);

    let canvasSize = new Vector2<number>(
        gl_.canvas.width,
        gl_.canvas.height
    );

    skybox = new Skybox("assets/images/canyon");

    framebuffer = new Framebuffer([
        new SimpleTexture2D(canvasSize, {
            "internalformat": gl_.RGB,
            "format": gl_.RGB,
            "type": gl_.FLOAT,
            "minFilter": gl_.NEAREST,
            "maxFilter": gl_.NEAREST
        })
    ], canvasSize, true, true, {});

    const vsize = new Vector3<number>(100, 100, 100);

    ProgramManager.addWithFun("prog", (): Program => {
        let prog: Program = new Program();
        prog.addShader("./shaders/demoShader.vert", ProgramCte.shader_type.vertex, ProgramCte.mode.read_file);
        prog.addShader("./shaders/demoShader.frag", ProgramCte.shader_type.fragment, ProgramCte.mode.read_file);
        prog.compile();

        prog.addUniforms(["projection", "view", "model", 
            "normalMatrix", "texSampler", "viewPos", "lightPosition"]);
        return prog;
    });

    let cubeImage = ResourceMap.retrieveAsset("exampleImg");
    const gl = Core.getInstance().getGL();
    tex2d = new Texture2D(cubeImage, {
        flipY: true,
        minFilter: gl.LINEAR,
        magFilter: gl.LINEAR,
        wrap: [gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE]
    });

    cameraUpdateCb();
}

function cameraUpdateCb() {
    let canvas = Core.getInstance().canvas();
    view = camera.GetViewMatrix();
    projection = camera.GetProjectionMatrix(canvas.width, canvas.height);

    let prog = ProgramManager.get(mainShader);
    prog.use();
    prog.sendUniformMat4("view", view);
    prog.sendUniformMat4("projection", projection);
    prog.sendUniformVec3("viewPos", camera.position);
}

// @param dt: Global time in seconds
function drawScene(dt: number) {
    const gl = Core.getInstance().getGL();
    camera.timeElapsed = Timer.deltaTime() / 10.0;

    camera.update(cameraUpdateCb);

    //framebuffer.bind();

    Core.getInstance().clearColorAndDepth();

    const prog = ProgramManager.get(mainShader);
    prog.use();

    tex2d.bind(0);
    prog.sendUniform1i("tex", 0);

    angle += Timer.deltaTime() * 0.001;

    light.addTransform(
        Math.sin(angle) * 0.06,
        Math.cos(angle) * 0.06,
        0.0 //5.0 + Math.cos(dt) * 0.06
    );
    
    let varvar = text.max;
    let i = 0, j = 0, k = 0;
    let dd = -1;
    /**/
    for (i = -varvar; i < varvar; i += 5.0) {
        for (j = -varvar; j < varvar; j += 5.0) {
            for (k = -varvar; k < varvar; k += 5.0) {
                dd *= -1;
                mat4.translate(model, identityMatrix, vec3.fromValues(j * 1.0, i * 1.0, k * 1.0));
                mat4.rotateY(model, model, 90.0 * Math.PI / 180);
                mat4.rotateY(model, model, angle * dd);
                mat4.scale(model, model, vec3.fromValues(0.1, 0.1, 0.1));

                prog.sendUniformMat4("model", model);

                m.render();
            }
        }
    }
    /**/
    mat4.translate(model, identityMatrix, 
        new Float32Array([
            light._position.x,
            light._position.y,
            light._position.z
        ]));
    prog.sendUniformMat4("model", model);
    esferita.render();
    /**/

    skybox.render(view, projection);
}

// ============================================================================================ //
// ============================================================================================ //
// ============================================================================================ //
// ============================================================================================ //
// ============================================================================================ //
// ============================================================================================ //


window.onload = () => {
    _init__.init(loadAssets, text);
    _init__.start(initialize, drawScene);
};