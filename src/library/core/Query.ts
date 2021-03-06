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
     * Query class.
     * @class Query
     *
     * Query Objects are objects that are used for asynchronous
     *     queries of certain kinds of information.
     */
    export class Query {
        /**
         * Query internal handler.
         *
         * @protected
         * @type {WebGLQuery}
         * @memberOf Query
         */
        protected _handler: WebGLQuery;
        protected _context: GLContext;
        /**
         * Query constructor.
         * @param {GLContext} context [description]
         */
        constructor(context: GLContext) {
            this._context = context;
            const gl: WebGL2RenderingContext = this._context.gl;
            this._handler = gl.createQuery();
        };
        /**
         * Delete query object
         */
        public destroy() {
            const gl: WebGL2RenderingContext = this._context.gl;
            gl.deleteQuery(this._handler);
        };
        /**
         * Start the asynchronous query.
         * @param {MB.ctes.QueryTarget} target Indicate which kind of query to begin.
         */
        public begin(target: MB.ctes.QueryTarget) {
            const gl: WebGL2RenderingContext = this._context.gl;
            gl.beginQuery(target, this._handler);
        };
        /**
         * Marks the end of a given query target.
         * @param {MB.ctes.QueryTarget} target Specifying the target of the query.
         */
        public end(target: MB.ctes.QueryTarget) {
            const gl: WebGL2RenderingContext = this._context.gl;
            gl.endQuery(target);
        };
        public useAnySamples(cb: Function) {
            this.oneUse(MB.ctes.QueryTarget.AnySamplesPassed, cb);
        };
        public useAnySamplesConservative(cb: Function) {
            this.oneUse(MB.ctes.QueryTarget.AnySamplesPassedConservative, cb);
        };
        public useTransfFeedbackPrimWritten(cb: Function) {
            this.oneUse(MB.ctes.QueryTarget.TransformFeedbackPrimitivesWritten, cb);
        };
        public oneUse(target: MB.ctes.QueryTarget, cb: Function) {
            this.begin(target);
            cb();
            this.end(target);
        };
        /**
         * Return query param
         * @param  {MB.ctes.QueryParams} param [description]
         * @return {any}               [description]
         */
        public getParameter(param: MB.ctes.QueryParams): any {
            const gl: WebGL2RenderingContext = this._context.gl;
            return gl.getQueryParameter(this._handler, param);
        };
        /**
         * Return a boolean indicating whether or not a query
         *     result is available.
         * @return {boolean} Query has result now.
         */
        public isResultAvailable(): boolean {
            return this.getParameter(MB.ctes.QueryParams.QueryResultAvailable);
        };
        /**
         * Return a number containing the query result.
         * @return {number} Query result (0 or 1)
         */
        public getResult(): number {
            return this.getParameter(MB.ctes.QueryParams.QueryResult);
        };
    };
};
