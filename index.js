"use strict";
var SimpleConfig = function () {
    return {
        max: 5,
        resume: true,
        render: "0"
    };
};
//class MyScene extends MonkeyBrush.Scene {
//    protected homePoint = new MonkeyBrush.maths.Vect3(-2.7, -1.4, 11.8);
//    protected camera = new MonkeyBrush.Camera2(this.homePoint);
//
//    protected cubito: MonkeyBrush.models.Drawable;
//    protected skybox: MonkeyBrush.extras.Skybox;
//    protected view: MonkeyBrush.maths.Mat4;
//    protected projection: MonkeyBrush.maths.Mat4;
//
//    protected identityMatrix;
//    protected model;
//    protected angle = 0;
//
//    constructor() {
//        super(SimpleConfig(), "App", 2);
//        this.identityMatrix = new MonkeyBrush.maths.Mat4().identity;
//        this.model = new MonkeyBrush.maths.Mat4();
//    }
//
//    protected mainShader: string = "prog";
//
//    loadAssets() {
//        MonkeyBrush.resources.Loaders.loadCubeMap("assets/images/hw_mystic");
//        MonkeyBrush.resources.Loaders.loadImage("assets/images/55ac38bc604ce.jpg", "myTex");
//    }
//    protected tex2d: MonkeyBrush.textures.Texture2D;
//    initialize() {
//        this.skybox = new MonkeyBrush.extras.Skybox("assets/images/hw_mystic", this._webglVersion === 2);
//
//        let myTexture = MonkeyBrush.resources.ResourceMap.retrieveAsset("myTex");
//        this.tex2d = new MonkeyBrush.textures.Texture2D(myTexture, {
//            flipY: true,
//            minFilter: MonkeyBrush.constants.TextureType.Nearest,
//            magFilter: MonkeyBrush.constants.TextureType.Nearest,
//            wrapS: MonkeyBrush.constants.WrapMode.Clamp2Edge,
//            wrapT: MonkeyBrush.constants.WrapMode.Clamp2Edge
//        });
//
//        let points = [];
//        const height = 5;
//        const count = 30;
//        for (let p = count; p > 0; --p) {
//            points.push(
//                new MonkeyBrush.maths.Vect3((Math.sin(p * 0.2) + Math.cos(p * 0.3)) * height + 12,
//                    p - height,
//                    (count - p) + count / 2));
//        }
//        this.cubito = new MonkeyBrush.models.Lathe(points, 275);
//
//        MonkeyBrush.resources.ProgramManager.addWithFun("prog", (): MonkeyBrush.core.Program => {
//            let prog: MonkeyBrush.core.Program = new MonkeyBrush.core.Program();
//
//            if (this._webglVersion === 2) {
//                prog.addShader("shaders/demoShader.vert",
//                    MonkeyBrush.constants.ProgramCte.shader_type.vertex, MonkeyBrush.constants.ProgramCte.mode.read_file);
//                prog.addShader("shaders/demoShader.frag",
//                    MonkeyBrush.constants.ProgramCte.shader_type.fragment, MonkeyBrush.constants.ProgramCte.mode.read_file);
//            } else {
//                prog.addShader("shaders/demowebgl1.vert",
//                    MonkeyBrush.constants.ProgramCte.shader_type.vertex, MonkeyBrush.constants.ProgramCte.mode.read_file);
//                prog.addShader("shaders/demowebgl1.frag",
//                    MonkeyBrush.constants.ProgramCte.shader_type.fragment, MonkeyBrush.constants.ProgramCte.mode.read_file);
//            }
//            prog.compile();
//
//            prog.use();
//
//            prog.addUniforms(["projection", "view", "model", "tex", "tex2"]);
//
//            return prog;
//        });
//
//        this.cameraUpdate();
//    }
//    update(dt: number) {
//        if (MonkeyBrush.core.Input.isButtonClicked(MonkeyBrush.core.MouseButton.Left)) {
//            console.log("Mouse left clicked");
//        }
//
//        this.camera.timeElapsed = MonkeyBrush.extras.Timer.deltaTime() / 10.0;
//
//        this.camera.update(this.cameraUpdate.bind(this));
//
//        this.angle += MonkeyBrush.extras.Timer.deltaTime() * 0.001;
//    }
//    public layer: number = 0;
//    draw(dt?: number) {
//        MonkeyBrush.core.Core.getInstance().clearColorAndDepth();
//
//        let prog = MonkeyBrush.resources.ProgramManager.get(this.mainShader);
//        prog.use();
//
//        // let varvar = this.text.max;
//        let i = 0, j = 0, k = 0;
//        let dd = -1;
//
//        this.tex2d.bind(0);
//        prog.sendUniform1i("tex", 0);
//
//        const renderMode = this.text.render;
//        let mode: string;
//        switch (renderMode) {
//            case "0":
//                mode = "render";
//                break;
//            case "1":
//                mode = "render2";
//                break;
//            case "2":
//                mode = "render3";
//                break;
//        }
//
//        this.model =
//            this.model
//                .reset()
//                .translate(new MonkeyBrush.maths.Vect3(i * 1.0, j * 1.0, k * 1.0))
//                .rotate(90.0 * Math.PI / 180, MonkeyBrush.maths.Vect3.yAxis)
//                .rotate(this.angle * 0.5 * dd, MonkeyBrush.maths.Vect3.yAxis)
//                .scale(new MonkeyBrush.maths.Vect3(0.25, 0.25, 0.25));
//        prog.sendUniformMat4("model", this.model);
//        this.cubito[mode]();
//        this.skybox.render(this.view, this.projection);
//    }
//    public pos = 0;
//    cameraUpdate() {
//        let canvas = MonkeyBrush.core.Core.getInstance().canvas();
//        this.view = this.camera.GetViewMatrix();
//        this.projection = this.camera.GetProjectionMatrix(canvas.width, canvas.height);
//
//        let prog = MonkeyBrush.resources.ProgramManager.get(this.mainShader);
//        prog.use();
//
//        prog.sendUniformVec3("viewPos", this.camera.GetPos());
//        prog.sendUniformMat4("projection", this.projection);
//        prog.sendUniformMat4("view", this.view);
//
//    }
//    textCB(gui: dat.GUI) {
//        gui.add(this.text, "max", 5, 100);
//        gui.add(this.text, "render", {
//            simple: 0,
//            lines: 1,
//            points: 2
//        });
//    }
//};
//
//window.onload = () => {
//    let myScene: MyScene = new MyScene();
//    myScene.start();
//};
//