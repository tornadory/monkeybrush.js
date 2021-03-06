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
     * PingPong class.
     * This class may be used, for example, for purposes that require
     *   a previous step, as the Path Tracing algorithm.
     * @class PingPong
     */
    export class PingPong {
        protected _size: MB.Vect2;
        protected _fbo: MB.Framebuffer;
        protected _flag: boolean;
        protected _tex1: MB.Texture2D;
        protected _tex2: MB.Texture2D;
        protected _context: GLContext;
        /**
         * PingProng constructor
         * @param {MB.Vect2} size Framebuffer/texture size
         */
        // TOOD: DOC
        constructor(context: GLContext, size: MB.Vect2) {
            this._context = context;
            this._flag = true;
            this._size = size;

            this._tex1 =
                new MB.Texture2D(this._context, {
                    width: size.x,
                    height: size.y
                }, {
                    internalFormat: MB.ctes.PixelFormat.RGBA,
                    format: MB.ctes.PixelFormat.RGBA,
                    type: MB.ctes.DataType.Float,
                    minFilter: MB.ctes.TextureFilter.Nearest,
                    magFilter: MB.ctes.TextureFilter.Nearest
                });

            this._tex2 =
                new MB.Texture2D(this._context, {
                    width: size.x,
                    height: size.y
                }, {
                    internalFormat: MB.ctes.PixelFormat.RGBA,
                    format: MB.ctes.PixelFormat.RGBA,
                    type: MB.ctes.DataType.Float,
                    minFilter: MB.ctes.TextureFilter.Nearest,
                    magFilter: MB.ctes.TextureFilter.Nearest
                });

            this._fbo = new MB.Framebuffer(this._context, [this._tex1], size);
        };
        /**
         * Replace textures.
         */
        public pingpong() {
            if (this._flag) {
                this._tex1.bind();
                this._fbo.replaceTexture(this._tex1, 0);
            } else {
                this._tex2.bind();
                this._fbo.replaceTexture(this._tex2, 0);
            }
            this._flag = !this._flag;
        };
        /**
         * Resize ping pong texture
         * @param {MB.Vect2} size New size
         */
        public resize(size: MB.Vect2) {
            if (!this._size.exactEquals(size)) {
                this._fbo.rebuild(size);
                if (this._flag) {
                    this._tex2.resize(size);
                } else {
                    this._tex1.resize(size);
                }
            }
        }
    };
};
