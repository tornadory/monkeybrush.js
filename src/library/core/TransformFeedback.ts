/// Copyright (C) 2016 [MonkeyBrush.js]
///
/// Permission is hereby granted, free of charge, to any person obtaining a copy of this
/// software and associated documentation files (the "Software"), to deal in the Software
/// without restriction, including without limitation the rights to use, copy, modify,
/// merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
/// permit persons to whom the Software is furnished to do so, subject to the following
/// conditions:
///
/// The above copyright notice and this permission notice shall be included in
/// all copies or substantial portions of the Software.
///
/// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
/// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
/// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
/// OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
/// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
/// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

"use strict";

namespace MB {
    /**
     * TransformFeedback class
     * @class TransformFeedback
     *
     * Transform Feedback is the process of capturing Primitives
     * generated by the Vertex Processing step(s), recording data
     * from those primitives into Buffer Objects.
     * This allows one to preserve the post-transform rendering
     * state of an object and resubmit this data multiple times.
     */
    export class TransformFeedback {
        /**
         * TransformFeedback object handler.
         * @type {WebGLTransformFeedback}
         */
        protected _handler: WebGLTransformFeedback;
        protected _context: GLContext;
        /**
         * Create and initializes a TransformFeedback object.
         * @param {GLContext} context [description]
         */
        constructor(context: GLContext) {
            this._context = context;
            const gl: WebGL2RenderingContext = this._context.gl;
            this._handler = gl.createTransformFeedback();
        };
        /**
         * Delete TransformFeedback object.
         */
        public destroy() {
            const gl: WebGL2RenderingContext = this._context.gl;
            gl.deleteTransformFeedback(this._handler);
            this._handler = null;
        };
        /**
         * Bind this TransformFeedback object to current GL state.
         */
        public bind() {
            const gl: WebGL2RenderingContext = this._context.gl;
            gl.bindTransformFeedback(MB.ctes.TFTarget.TransformFeedback, this._handler);
        };
        /**
         * Unbind this TransformFeedback object to current GL state.
         */
        public unbind() {
            const gl: WebGL2RenderingContext = this._context.gl;
            gl.bindTransformFeedback(MB.ctes.TFTarget.TransformFeedback, null);
        };
        /**
         * Init TransformFeedback operation using given mode.
         * @param {MB.ctes.TFPrimitive} mode TransformFeedback mode.
         */
        public begin(mode: MB.ctes.TFPrimitive) {
            const gl: WebGL2RenderingContext = this._context.gl;
            gl.beginTransformFeedback(mode);
        };
        /**
         * Init TransformFeedback operation using point mode.
         */
        public beginPoints() {
            this.begin(MB.ctes.TFPrimitive.Points);
        };
        /**
         * Init TransformFeedback operation using line mode.
         */
        public beginLines() {
            this.begin(MB.ctes.TFPrimitive.Lines);
        };
        /**
         * Init TransformFeedback operation using triangle mode.
         */
        public beginTriangles() {
            this.begin(MB.ctes.TFPrimitive.Triangles);
        };
        /**
         * Finish TransformFeedback operation.
         */
        public end() {
            const gl: WebGL2RenderingContext = this._context.gl;
            gl.endTransformFeedback();
        };
        /**
         * Pause TransformFeedback operation.
         */
        public pause() {
            const gl: WebGL2RenderingContext = this._context.gl;
            gl.pauseTransformFeedback();
        };
        /**
         * Resume TransformFeedback operation.
         */
        public resume() {
            const gl: WebGL2RenderingContext = this._context.gl;
            gl.resumeTransformFeedback();
        };
        /**
         * Specifies values to record in TransformFeedback buffers.
         * @param {GLContext} context [description]
         * @param {Program}       program    Program targe object.
         * @param {Array<string>} varyings   [description]
         * @param {ctes.TFMode}        bufferMode [description]
         */
        public static varyings(context: GLContext, program: Program, varyings: Array<string>,
            bufferMode: ctes.TFMode) {

            const gl: WebGL2RenderingContext = context.gl;
            gl.transformFeedbackVaryings(program.id(), varyings, bufferMode);
        };
        /**
         * Return information about varying variables specifies in the previous
         *     call to "varyings" method.
         * @param  {Program}         program [description]
         * @param  {number}          idx     [description]
         * @return {VaryingInfo}         [description]
         */
        public getVarying(program: Program, idx: number): VaryingInfo {
            const gl: WebGL2RenderingContext = this._context.gl;
            let info = gl.getTransformFeedbackVarying(program.id(), idx);
            let info2: VaryingInfo = {
                name: info.name,
                type: Program.getType(gl, info["type"])
            };
            return info2;
        };
        /**
         * Return true if this object is a valid TransformFeedback object.
         * @return {boolean} [description]
         */
        public isValid(): boolean {
            const gl: WebGL2RenderingContext = this._context.gl;
            return gl.isTransformFeedback(this._handler);
        };
        /**
         * Returns current data from transform feedback buffer.
         * @param  {number}         numElems [description]
         * @return {Float32Array}         [description]
         */
        // TODO: Improve in Point_TF demo
        public extractData(numElems: number): Float32Array {
            let arrBuffer = new ArrayBuffer(numElems * Float32Array.BYTES_PER_ELEMENT);
            const gl: WebGL2RenderingContext = this._context.gl;
            gl.getBufferSubData(gl.TRANSFORM_FEEDBACK_BUFFER, 0, arrBuffer);
            return new Float32Array(arrBuffer);
        };
    };
    /**
     * Contains type and name attributes for transform feedback.
     * @interface VaryingInfo
     */
    export interface VaryingInfo {
        name: string;
        type: string;
    }
};
