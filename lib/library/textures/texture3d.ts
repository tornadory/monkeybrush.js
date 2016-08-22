/// <reference path="texture.ts" />
/// <reference path="..//maths/vector3.ts" />

"use strict";

class Texture3D extends Texture {
    constructor (data, size: Vector3<number>, options = {}) {
        const gl = Core.getInstance().getGL();
        if (!(gl instanceof WebGL2RenderingContext)) {
            throw new Error("Must provide a WebGL2 context ...");
        }
        super((<any>gl).TEXTURE_3D);
        options = options || {};

        console.log(this.target);
        this._handle = gl.createTexture();

        let compressed = options["compressed"] === true;
        
        let _internalformat = options["internalformat"] || gl.RGBA;
        let _format = options["format"] || gl.RGBA;
        let _type = options["type"] || gl.UNSIGNED_BYTE;

        this.bind();

        if (compressed) {
            /*gl.compressedTexImage3D(
                this.target,
                0,  // level
                format,
                size.x,
                size.y,
                size.z,
                0,
                data);*/
        } else {
            /*(<any>gl).texSubImage3D(
                this.target, 
                0,  // level
                _internalformat,    // Internal format A GLenum specifying the format of the texel data
                size.x,
                size.y,
                size.z,
                0,
                _format,    // Format2
                _type,  // A GLenum specifying the data type of the texel data
                data
            );*/
            (<any>gl).texImage3D(
                this.target, 
                0, 
                _internalformat, 
                size.x, 
                size.y, 
                size.z, 
                0, 
                _format, 
                _type, 
                data
            );
        }
    }
    public bind(slot?: number) {
        const gl = Core.getInstance().getGL();
        if (typeof slot === "number") {
            gl.activeTexture(gl.TEXTURE0 + slot);
        }
        gl.bindTexture(this.target, this._handle);
    }

    public destroy() {
        const gl = Core.getInstance().getGL();
        gl.deleteTexture(this._handle);
        this._handle = null;
    }
}