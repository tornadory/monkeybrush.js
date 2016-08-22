/// <reference path="../core/core.ts" />

"use strict";

class VertexArray {
    /**
     * [_handle description]
     * @type {WebGLVertexArrayObject}
     */
    protected _handle: any; // TODO: WebGLVertexArrayObject;
    /**
     * @param {WebGLVertexArrayObject}
     */
    constructor(vao?: any /**/) {
        const gl = Core.getInstance().getGL();
        if (vao !== undefined) {
            this._handle = vao;
        } else {
            if (gl instanceof WebGL2RenderingContext) {
                this._handle = (<any>gl).createVertexArray();
            } else {
                const ext = gl.getExtension("OES_vertex_array_object");
                if (ext) {
                    this._handle = ext.createVertexArray();
                }
            }
        }
        this.bind();
    }
    /**
     * @param {WebGLVertexArrayObject}
     */
    public static wrap(vao: any /*WebGLVertexArrayObject*/) {
        return new VertexArray(vao);
    }
    /**
     * 
     */
    public bind() {
        const gl = Core.getInstance().getGL();
        if (gl instanceof WebGL2RenderingContext) {
            (<any>gl).bindVertexArray(this._handle);
            return;
        }
        const ext = gl.getExtension("OES_vertex_array_object");
        if (ext) {
            ext.bindVertexArrayOES(this._handle);
        }
    }
    /**
     * 
     */
    public unbind() {
        const gl = Core.getInstance().getGL();
        if (gl instanceof WebGL2RenderingContext) {
            (<any>gl).bindVertexArray(null);
            return;
        }
        const ext = gl.getExtension("OES_vertex_array_object");
        if (ext) {
            ext.bindVertexArrayOES(null);
        }
    }
    /**
     * 
     */
    public destroy() {
        const gl = Core.getInstance().getGL();
        this.bind();
        if (gl instanceof WebGL2RenderingContext) {
            (<any>gl).deleteVertexArray(this._handle);
            return;
        }
        const ext = gl.getExtension("OES_vertex_array_object");
        if (ext) {
            ext.deleteVertexArrayOES(this._handle);
        }
    }
    /**
     * @return {boolean}
     */
    public static isSupported(): boolean {
        const gl = Core.getInstance().getGL();
        return gl instanceof WebGL2RenderingContext || 
            gl.getExtension("OES_vertex_array_object");
    }
    /**
     * @return {boolean}
     */
    public is(): boolean {
        const gl = Core.getInstance().getGL();

        if (gl instanceof WebGL2RenderingContext) {
            return (<any>gl).isVertexArray(this._handle);
        }
        const ext = gl.getExtension("OES_vertex_array_object");
        if (ext) {
            return ext.isVertexArrayOES(this._handle);
        }
        return false;
    }
}