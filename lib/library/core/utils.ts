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

namespace utils {
    class RNG {
        private _seed:number;

        constructor(seed:number) {
            this._seed = seed;
        };
        private _next(min:number, max:number):number {
            max = max || 0;
            min = min || 0;

            this._seed = (this._seed * 9301 + 49297) % 233280;
            var rnd = this._seed / 233281;

            return min + rnd * (max - min);
        };
        public nextInt(min:number, max:number):number {
            return Math.floor(this._next(min, max));
        };
        public next():number {
            return this._next(0, 1);
        };
    }

    export let random: RNG = new RNG(new Date().getTime());

    export function Uint8Concat(first, second) {
        var firstLength = first.length,
            result = new Uint8Array(firstLength + second.length);

        result.set(first);
        result.set(second, firstLength);

        return result;
    };
    export function Uint16Concat(first, second) {
        var firstLength = first.length,
            result = new Uint16Array(firstLength + second.length);

        result.set(first);
        result.set(second, firstLength);

        return result;
    };
    export function Uint32Concat(first, second) {
        var firstLength = first.length,
            result = new Uint32Array(firstLength + second.length);

        result.set(first);
        result.set(second, firstLength);

        return result;
    };


    export function Int8Concat(first, second) {
        var firstLength = first.length,
            result = new Int8Array(firstLength + second.length);

        result.set(first);
        result.set(second, firstLength);

        return result;
    };
    export function Int16Concat(first, second) {
        var firstLength = first.length,
            result = new Int16Array(firstLength + second.length);

        result.set(first);
        result.set(second, firstLength);

        return result;
    };
    export function Int32Concat(first, second) {
        var firstLength = first.length,
            result = new Int32Array(firstLength + second.length);

        result.set(first);
        result.set(second, firstLength);

        return result;
    };

    export function Float32Concat(first, second) {
        var firstLength = first.length,
            result = new Float32Array(firstLength + second.length);

        result.set(first);
        result.set(second, firstLength);

        return result;
    };
    export function Float64Concat(first, second) {
        var firstLength = first.length,
            result = new Float64Array(firstLength + second.length);

        result.set(first);
        result.set(second, firstLength);

        return result;
    };
};

export { utils };
