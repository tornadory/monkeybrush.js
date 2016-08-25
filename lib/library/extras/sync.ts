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


/// <reference path="../core/core.ts" />
/// <reference path="../constants/SyncParam.ts" />

import Core from "../core/core";
import SyncParam from "../constants/SyncParam";

"use strict";

const gl = Core.getInstance().getGL();

class Sync {
    protected _handle: WebGLSync;
    constructor(condition: number, flags: number) {
        condition = condition || gl.SYNC_GPU_COMMANDS_COMPLETE;

        this._handle = gl.fenceSync(condition, flags);
    };
    public wait(flags, timeout: number) {
        gl.waitSync(this._handle, flags, timeout);
    };
    /**
     * [clientWait description]
     * @param {number} flags: Bitwise combination of flags controlling the flushing behavior.
     *                        May be gl.SYNC_FLUSH_COMMANDS_BIT.
     * @param {number} timeout: Timeout (in nanoseconds) for which to wait for the sync obj to become signaled.
     */
    public clientWait(flags: number, timeout: number) {
        return gl.clientWaitSync(this._handle, flags, timeout);
    };
    public getParameter(name: SyncParam) {
        return gl.getSyncParameter(this._handle, name);
    };
    public destroy() {
        gl.deleteSync(this._handle);
    };
    public isValid(): boolean {
        return gl.isSync(this._handle);
    };
};

export default Sync;