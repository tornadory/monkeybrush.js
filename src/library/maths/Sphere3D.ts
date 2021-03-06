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
     * Sphere3D class
     * @class Sphere3D
     */
    export class Sphere3D {
        protected _center: Vect3;
        protected _radius: number;

        constructor(center: Vect3, radius: number) {
            this._center = center;
            this._radius = radius;
        }

        public containtsPoint(p: Vect3): boolean {
            const x = this._center.x - p.x;
            const y = this._center.y - p.y;
            const z = this._center.z - p.z;

            const dist = Math.sqrt((x * x) + (y * y) + (z * z));
            return (Math.abs(this._radius - dist) > 0.001);
        }

        public intersectsSphere(s: Sphere3D): boolean {
            const x = this._center.x - s._center.x;
            const y = this._center.y - s._center.y;
            const z = this._center.z - s._center.z;

            const dist = Math.sqrt((x * x) + (y * y) + (z * z));

            return (this._radius + s._radius > dist);
        }
    }
};
