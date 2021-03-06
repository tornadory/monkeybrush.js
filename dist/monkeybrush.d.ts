
declare namespace MB {
    const VERSION: string;
}

declare namespace MB {
    namespace exceptions {
        class MBException extends Error {
            constructor(message: string);
        }
    }
}

declare namespace MB {
    class Node<T> {
        obj: T;
        next: Node<T>;
        prev: Node<T>;
        constructor(obj?: T, next?: Node<T>, prev?: Node<T>);
    }
    class List<T> {
        private root;
        constructor();
        first(): Node<T>;
        last(): Node<T>;
        pop(): T;
        isEmpty(): boolean;
        insertNodeBefore(node: Node<T>, ref?: Node<T>): void;
        insertBefore(node: T, ref?: Node<T>): void;
        remove(ref: Node<T>): Node<T>;
    }
}

declare namespace MB {
    /**
     * Box2D class
     * @class Box2D
     */
    class Box2D {
        /**
         * Min corner.
         * @type {Vect2}
         */
        protected _min: Vect2;
        /**
         * Max corner.
         * @type {Vect2}
         */
        protected _max: Vect2;
        /**
         * Box center.
         * @type {Vect2}
         */
        protected _center: Vect2;
        /**
         * Return min Box2D position.
         * @return {Vect2}
         */
        min: Vect2;
        /**
         * Return max Box2D position.
         * @return {Vect2}
         */
        max: Vect2;
        /**
         * Return Box2D center.
         * @return {Vect2}
         */
        center: Vect2;
        /**
         * Return box size.
         * @return {Vect2}
         */
        size: Vect2;
        /**
         * Box2D constructor
         * @param {Vect2 = new Vect2(Infinity, Infinity)} min: Box min corner
         * @param {Vect2 = new Vect2(-Infinity, Infinity)} max: Box max corner
         */
        constructor(min?: Vect2, max?: Vect2);
        containtsPoint(p: Vect2): boolean;
        /**
         * Check if owner box contains another box
         * @param  {Box2D} b: Another box
         * @return {boolean}
         */
        containsBox(b: Box2D): boolean;
        /**
         * Check if owner box intersect another box
         * @param  {Box2D} b: Another box
         * @return {boolean}
         */
        intersectsBox(b: Box2D): boolean;
        isEqual(b: Box2D): boolean;
    }
}

declare namespace MB {
    /**
     * Box3D class
     * @class Box3D
     */
    class Box3D {
        /**
         * Min corner.
         * @type {Vect3}
         */
        protected _min: Vect3;
        /**
         * Max corner.
         * @type {Vect3}
         */
        protected _max: Vect3;
        /**
         * Box center.
         * @type {Vect3}
         */
        protected _center: Vect3;
        /**
         * Return min Box2D position.
         * @return {Vect3}
         */
        min: Vect3;
        /**
         * Return max Box2D position.
         * @return {Vect3}
         */
        max: Vect3;
        /**
         * Return Box2D center.
         * @return {Vect3}
         */
        center: Vect3;
        /**
         * Return box size.
         * @return {Vect3}
         */
        size: Vect3;
        /**
         * Box3D constructor
         * @param {Vect3 = new Vect3(Infinity, Infinity, Infinity)} min: Box min corner
         * @param {Vect3 = new Vect3(-Infinity, -Infinity, -Infinity)} max: Box max corner
         */
        constructor(min?: Vect3, max?: Vect3);
        containtsPoint(p: Vect3): boolean;
        /**
         * Check if owner box contains another box
         * @param  {Box3D} b: Another box
         * @return {boolean}
         */
        containsBox(b: Box3D): boolean;
        /**
         * Check if owner box intersect another box
         * @param  {Box3D} b: Another box
         * @return {boolean}
         */
        intersectsBox(b: Box3D): boolean;
        /**
         * Create new Box3D based on vertices list
         * @param  {ArrayLike<number>} array Vertices list
         * @return {Box3D}                   New Box3D
         */
        static createFromArray(array: ArrayLike<number>): Box3D;
    }
}

declare namespace MB {
    /**
     * This namespace includes different types of curves are available in standard 2D Canvas api.
     * @namespace curves
     */
    namespace curves {
        abstract class Curve2D {
            abstract evaluate(t: number): Vect2;
        }
        abstract class Curve3D {
            abstract evaluate(t: number): Vect3;
        }
        /**
         * Ellipse class.
         * @class Ellipse
         * Create an ellipse to the path which is centered at (x, y)
         * position with the radius starting at startAngle and ending
         * at endAngle going in the given direction by anticlockwise.
         */
        class Ellipse extends Curve2D {
            protected _center: Vect2;
            protected _radius: Vect2;
            protected _startAngle: number;
            protected _endAngle: number;
            protected _isClockwise: boolean;
            /**
             * Ellipse constructor
             * @param {Vect2}   center      The center of the ellipse.
             * @param {Vect2}   radius      Ellipse major and minux radius.
             * @param {number}  startAngle  [description]
             * @param {number}  endAngle    [description]
             * @param {boolean} isClockwise if true, draws the ellipse
             *                              anticlockwise (counter-clockwise),
             *                              otherwise in a clockwise direction.
             */
            constructor(center: Vect2, radius: Vect2, startAngle: number, endAngle: number, isClockwise: boolean);
            /**
             * Return interpolate position based on ellipse definition.
             * @param  {number} t Interpolation value [0, 1].
             * @return {Vect2}    A new Vect2 interpolated position.
             */
            evaluate(t: number): Vect2;
        }
        /**
         * LineCurve2D class.
         * @class LineCurve2D
         * Create an line from first 2D point to second.
         */
        class Line2D extends Curve2D {
            protected _p1: Vect2;
            protected _p2: Vect2;
            /**
             * Line2D constructor.
             * @param {Vect2} x Minimum point.
             * @param {Vect2} y Maximum point.
             */
            constructor(x: Vect2, y: Vect2);
            /**
             * Return interpolate position based on 2D line definition.
             * @param  {number} t Interpolation value [0, 1].
             * @return {Vect2}    A new Vect2 interpolated position.
             */
            evaluate(t: number): Vect2;
        }
        /**
         * LineCurve3D class.
         * @class LineCurve3D
         * Create an line from first 3D point to second.
         */
        class Line3D extends Curve3D {
            protected _p1: Vect3;
            protected _p2: Vect3;
            /**
             * Line3D constructor.
             * @param {Vect3} x Minimum point.
             * @param {Vect3} y Maximum point.
             */
            constructor(x: Vect3, y: Vect3);
            /**
             * Return interpolate position based on 3D line definition.
             * @param  {number} t Interpolation value [0, 1].
             * @return {Vect3}    A new Vect3 interpolated position.
             */
            evaluate(t: number): Vect3;
        }
        /**
         * BezierCurve class
         * @class BezierCurve
         *
         * Create a cubic Bézier curve to the path. It requires
         * three points. The first two points are control points
         * and the third one is the end point.
         */
        class CubicBezier extends Curve2D {
            _list: Array<Vect2>;
            _curves: any[];
            /**
             * CubicBezier constructor
             * @param {Vect2} cpi  Starting point
             * @param {Vect2} cpp1 First control point
             * @param {Vect2} cpp2 Second control point
             * @param {Vect2} cpe  Ending point
             */
            constructor(cpi: Vect2, cpp1: Vect2, cpp2: Vect2, cpe: Vect2);
            protected bezierCurveInterpolation(p0: number, p1: number, p2: number, p3: number, t: number): number;
            /**
             * Return interpolate position based on cubic bezier definition.
             * @param  {number} t Interpolation value [0, 1].
             * @return {Vect2}    A new Vect2 interpolated position.
             */
            evaluate(t: number): Vect2;
        }
        class CubicBezier3D extends Curve3D {
            _list: Array<Vect3>;
            _curves: any[];
            /**
             * CubicBezier constructor
             * @param {Vect3} cpi  Starting point
             * @param {Vect3} cpp1 First control point
             * @param {Vect3} cpp2 Second control point
             * @param {Vect3} cpe  Ending point
             */
            constructor(cpi: Vect3, cpp1: Vect3, cpp2: Vect3, cpe: Vect3);
            protected bezierCurveInterpolation(p0: number, p1: number, p2: number, p3: number, t: number): number;
            /**
             * Return interpolate position based on cubic bezier definition.
             * @param  {number} t Interpolation value [0, 1].
             * @return {Vect3}    A new Vect3 interpolated position.
             */
            evaluate(t: number): Vect3;
        }
        /**
         * QuadraticBezier class
         * @class QuadraticBezier
         *
         * Create a quadratic Bézier curve to the path.
         * It requires two points. The first point is a
         * control point and the second one is the end point.
         */
        class QuadraticBezier2D extends Curve2D {
            _list: Array<Vect2>;
            _curves: any[];
            /**
             * QuadraticBezier constructor.
             * @param {Vect2} cpi  Starting point.
             * @param {Vect2} cpp  Middle control point.
             * @param {Vect2} cpe  Ending point.
             */
            constructor(cpi: Vect2, cpp: Vect2, cpe: Vect2);
            protected bezierCurveInterpolation(p0: number, p1: number, p2: number, t: number): number;
            /**
             * Return interpolate position based on cubic bezier definition.
             * @param  {number} t Interpolation value [0, 1].
             * @return {Vect2}    A new Vect2 interpolated position.
             */
            evaluate(t: number): Vect2;
        }
        class QuadraticBezier3D extends Curve3D {
            _list: Array<Vect3>;
            _curves: any[];
            /**
             * QuadraticBezier constructor.
             * @param {Vect3} cpi  Starting point.
             * @param {Vect3} cpp  Middle control point.
             * @param {Vect3} cpe  Ending point.
             */
            constructor(cpi: Vect3, cpp: Vect3, cpe: Vect3);
            protected bezierCurveInterpolation(p0: number, p1: number, p2: number, t: number): number;
            /**
             * Return interpolate position based on cubic bezier definition.
             * @param  {number} t Interpolation value [0, 1].
             * @return {Vect3}    A new Vect3 interpolated position.
             */
            evaluate(t: number): Vect3;
        }
    }
}

declare namespace MB {
    enum RotSeq {
        zyx = 0,
        zyz = 1,
        zxy = 2,
        zxz = 3,
        yxz = 4,
        yxy = 5,
        yzx = 6,
        yzy = 7,
        xyz = 8,
        xyx = 9,
        xzy = 10,
        xzx = 11,
    }
    class EulerAngle {
        order: RotSeq;
        protected _value: Float32Array;
        x: number;
        y: number;
        z: number;
        onChange: Function;
        set(vx: number, vy: number, vz: number): void;
        static create(values: Float32Array): EulerAngle;
        reset(): void;
        /**
         * EulerAngle constructor
         * @param {number = 0.0} x
         * @param {number = 0.0} y
         * @param {number = 0.0} z
         */
        constructor(x?: number, y?: number, z?: number, order?: RotSeq);
    }
}

declare namespace MB {
    namespace Interpolation {
        /**
         * Linear interpolation.
         * @param  {number} p0 [description]
         * @param  {number} p1 [description]
         * @param  {number} t  [description]
         * @return {number}    [description]
         */
        function linear(p0: number, p1: number, t: number): number;
        /**
         * Bezier interpolation.
         * @param  {number} x1 [description]
         * @param  {number} y1 [description]
         * @param  {number} x2 [description]
         * @param  {number} y2 [description]
         * @param  {number} t  [description]
         * @return {number}    [description]
         */
        function bezier(x1: number, y1: number, x2: number, y2: number, t: number): number;
        /**
         * Catmull rom interpolation.
         * @param  {number} p0 [description]
         * @param  {number} p1 [description]
         * @param  {number} p2 [description]
         * @param  {number} p3 [description]
         * @param  {number} t  [description]
         * @return {number}    [description]
         */
        function catmullRom(p0: number, p1: number, p2: number, p3: number, t: number): number;
    }
}

declare namespace MB {
    /**
     * Mat2 class
     * @class Mat2
     */
    class Mat2 {
        _value: Float32Array;
        /**
         * Mat2 constructor
         * @param {number[] = null} values [description]
         */
        constructor(values?: number[]);
        init(values: number[]): Mat2;
        isEquals(mat: Mat2, threshold?: boolean): boolean;
        transpose(): Mat2;
        determinant(): number;
        invert(): Mat2;
        add(m: Mat2): Mat2;
        sub(m: Mat2): Mat2;
        mult(m: Mat2): Mat2;
        identity(): Mat2;
        toString(): string;
        rotate(angle: number): Mat2;
        scale(v: Vect2): Mat2;
    }
}

declare namespace MB {
    /**
     * Mat3 class
     * @class Mat3
     */
    class Mat3 {
        _value: Float32Array;
        /**
         * Mat3 constructor
         * @param {number[] = null} values [description]
         */
        constructor(values?: number[]);
        init(values: number[]): Mat3;
        isEquals(mat: Mat3, threshold?: boolean): boolean;
        toMat4(result?: Mat4): Mat4;
        transpose(): Mat3;
        determinant(): number;
        invert(): Mat3;
        add(m: Mat3): Mat3;
        sub(m: Mat3): Mat3;
        mult(m: Mat3): Mat3;
        identity(): Mat3;
        toString(): string;
        translate(v: Vect2): Mat3;
        rotate(angle: number, axis: Vect3): Mat3;
        scale(v: Vect2): Mat3;
    }
}

declare namespace MB {
    /**
     * Mat4 class
     * @class Mat4
     */
    class Mat4 {
        _value: Float32Array;
        /**
         * Mat4 constructor
         * @param {ArrayLike<number>[] = null} values [description]
         */
        constructor(values?: ArrayLike<number>);
        /**
         * Create a new Mat4 initialized with values from current Mat4
         * @return {Mat4} a new Mat4
         */
        clone(): Mat4;
        /**
         * Create a new Mat4 initialized with the given values
         * @param  {ArrayLike<number>} values Array of values (minLength 16)
         * @return {Mat4} a new Mat4
         */
        static create(values: ArrayLike<number>): Mat4;
        /**
         * Transpose the values of a mat4 not using SIMD
         * @return {Mat4} [description]
         */
        transpose(dest?: Mat4): Mat4;
        /**
         * Inverse of the components of current Mat4
         * @param  {Mat4 = null} dest Destiny Mat4 (optional)
         * @return {Mat4} a new Mat4
         */
        inverse(dest?: Mat4): Mat4;
        determinant(): number;
        mult: (b: Mat4, dest?: Mat4) => Mat4;
        translate(v: Vect3, dest?: Mat4): Mat4;
        scale(v: Vect3, dest?: Mat4): Mat4;
        rotate(angle: number, axis: Vect3, dest?: Mat4): Mat4;
        static frustum(l: number, r: number, b: number, t: number, n: number, f: number): Mat4;
        static perspective(fovy: number, aspect: number, near: number, far: number): Mat4;
        static orthographic(l: number, r: number, b: number, t: number, n: number, f: number): Mat4;
        static lookAt(pos: Vect3, target: Vect3, up: Vect3): Mat4;
        static product(m1: Mat4, m2: Mat4, result?: Mat4): Mat4;
        static identity: Mat4;
        toMat3(): Mat3;
        /**
         * [toCSSMatrix description]
         * @return {string} [description]
         *
         * Example:
         *     var m = new MB.Mat4(...);
         *     $("#myElem").css("transform", m.toCSSMatrix());
         */
        toCSSMatrix(): string;
        compose(position: MB.Vect3, quaternion: MB.Quat, scale: MB.Vect3): void;
    }
}

declare namespace MB {
    /**
     * This namespace includes various mathematical methods.
     * It is based on the functionality found in the Unity Editor Mathf class.
     * @namespace Mathf
     */
    namespace Mathf {
        /**
         * Linear interpolation.
         * @param  {number} x   [description]
         * @param  {number} x1  [description]
         * @param  {number} x2  [description]
         * @param  {number} q00 [description]
         * @param  {number} q01 [description]
         * @return {number}     [description]
         */
        function lerp(x: number, x1: number, x2: number, q00: number, q01: number): number;
        /**
         * Bilinear interpolation
         * @param  {number} x   [description]
         * @param  {number} y   [description]
         * @param  {number} q11 [description]
         * @param  {number} q12 [description]
         * @param  {number} q21 [description]
         * @param  {number} q22 [description]
         * @param  {number} x1  [description]
         * @param  {number} x2  [description]
         * @param  {number} y1  [description]
         * @param  {number} y2  [description]
         * @return {number}     [description]
         */
        function biLerp(x: number, y: number, q11: number, q12: number, q21: number, q22: number, x1: number, x2: number, y1: number, y2: number): number;
        /**
         * Trilinear interpolation.
         * @param  {number} x    [description]
         * @param  {number} y    [description]
         * @param  {number} z    [description]
         * @param  {number} q000 [description]
         * @param  {number} q001 [description]
         * @param  {number} q010 [description]
         * @param  {number} q011 [description]
         * @param  {number} q100 [description]
         * @param  {number} q101 [description]
         * @param  {number} q110 [description]
         * @param  {number} q111 [description]
         * @param  {number} x1   [description]
         * @param  {number} x2   [description]
         * @param  {number} y1   [description]
         * @param  {number} y2   [description]
         * @param  {number} z1   [description]
         * @param  {number} z2   [description]
         * @return {number}      [description]
         */
        function triLerp(x: number, y: number, z: number, q000: number, q001: number, q010: number, q011: number, q100: number, q101: number, q110: number, q111: number, x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): number;
        const Deg2Rad: number;
        const Rad2Deg: number;
        /**
         * Converts degrees angle to radians angle.
         * @param  {number} degs Degrees angle
         * @return {number}      Radians angle
         */
        function degToRad(degs: number): number;
        /**
         * Converts radians angle to degrees angle.
         * @param  {number} degs Radians angle
         * @return {number}      Degrees angle
         */
        function radToDeg(rads: number): number;
        /**
         * Returns true if the value is power of two.
         * @param  {number} v Integer value.
         * @return {boolean}
         */
        function isPOT(v: number): boolean;
        /**
         * Returns the next power of two value.
         * @param  {number} v Integer value.
         * @return {number}
         */
        function nearestPOT(v: number): number;
        /**
         * Clamps a value to be between a minimum and maximum value.
         * @param  {number} v   Value to clamp.
         * @param  {number} min Minimum value.
         * @param  {number} max Maximum value
         * @return {number}
         */
        function clamp(v: number, min: number, max: number): number;
        /**
         * Clamps value between 0 and 1 and returns value.
         * @param  {number} v Value to clamp.
         * @return {number}
         */
        function clamp01(v: number): number;
        /**
         * Return 1 when is a positive number. -1 otherwise.
         * @param  {number} v [description]
         * @return {number}   [description]
         */
        function sign(v: number): number;
        /**
         * Normalizes radians angle between [0, 2π].
         * @param  {number} radAngle Radian angle.
         * @return {number}          Normalizated radian angle.
         */
        function normalizeAngle(radAngle: number): number;
        /**
         * Interpolates between min and max with smoothing at the limits.
         * @param  {number}     x   Value to interpolate.
         * @param  {number = 0} min Minimum value.
         * @param  {number = 1} max Maximum value.
         * @return {number}         Interpolated value
         */
        function smoothstep(x: number, min?: number, max?: number): number;
        /**
         * Interpolates between min and max with more smoothing at the limits thatn smoothstep.
         * @param  {number}     x   Value to interpolate.
         * @param  {number = 0} min Minimum value.
         * @param  {number = 1} max Maximum value.
         * @return {number}         Interpolated value
         */
        function smootherstep(x: number, min: number, max: number): number;
        /**
         * Convert number to hexadecimal.
         * @param  {number} n Number value.
         * @return {string}   Hexadecimal representation.
         */
        function toHex(n: number): string;
        /**
         * Return angle between two 2D points
         * @param  {Vect2}  p0 First 2D point.
         * @param  {Vect2}  p1 Second 2D point.
         * @return {number}    Radians angle between points.
         */
        function angleBetween2DPoints(p0: Vect2, p1: Vect2): number;
        function euclideanModulo(m: number, n: number): number;
        /**
         * Return angle between two 3D points
         * @param  {Vect3}  p0 First 3D point.
         * @param  {Vect3}  p1 Second 3D point.
         * @return {number}    Radians angle between points.
         */
        function angleBetween3DPoints(p0: Vect3, p1: Vect3): number;
        /**
         * Evaluates CatmullRom spline in 2D.
         * @param  {Vect3}  p0 [description]
         * @param  {Vect3}  p1 [description]
         * @param  {Vect3}  p2 [description]
         * @param  {Vect3}  p3 [description]
         * @param  {number} t  [description]
         * @return {Vect3}     [description]
         */
        function CatmullRom2D(p0: Vect2, p1: Vect2, p2: Vect2, p3: Vect2, t: number): Vect2;
        /**
         * Evaluates Hermite spline in 2D.
         * @param  {Vect2}  p0 [description]
         * @param  {Vect2}  t0 [description]
         * @param  {Vect2}  p1 [description]
         * @param  {Vect2}  t1 [description]
         * @param  {number} t  [description]
         * @return {Vect2}     [description]
         */
        function Hermite2D(p0: Vect2, t0: Vect2, p1: Vect2, t1: Vect2, t: number): Vect2;
        /**
         * Evaluates CatmullRom spline in 3D.
         * @param  {Vect3}  p0 [description]
         * @param  {Vect3}  p1 [description]
         * @param  {Vect3}  p2 [description]
         * @param  {Vect3}  p3 [description]
         * @param  {number} t  [description]
         * @return {Vect3}     [description]
         */
        function CatmullRom3D(p0: Vect3, p1: Vect3, p2: Vect3, p3: Vect3, t: number): Vect3;
        /**
         * Evaluates Hermite spline in 3D.
         * @param  {Vect3}  p0 [description]
         * @param  {Vect3}  t0 [description]
         * @param  {Vect3}  p1 [description]
         * @param  {Vect3}  t1 [description]
         * @param  {number} t  [description]
         * @return {Vect3}     [description]
         */
        function Hermite3D(p0: Vect3, t0: Vect3, p1: Vect3, t1: Vect3, t: number): Vect3;
    }
}

declare namespace MB {
    class Path {
        protected _currentPoint: Vect2;
        protected _curves: Array<any>;
        constructor(points?: Array<Vect2>);
        /**
         * Moves the path to the specified point in the canvas, without creating a line.
         * @param {number} x The x-coordinate of where to move the path to.
         * @param {number} y The y-coordinate of where to move the path to.
         */
        moveTo(x: number, y: number): void;
        /**
         * Adds a new point and creates a line to that point from the last specified
         *     point in the canvas.
         * @param {number} x The x-coordinate of where to create the line to.
         * @param {number} y The y-coordinate of where to create the line to.
         */
        lineTo(x: number, y: number): void;
        /**
         * Adds a point to the current path by using the specified control points that represent
         * a quadratic Bézier curve.
         * @param  {number} cpx: number    The x-coordinate of the Bézier control point.
         * @param  {number} cpy: number    The y-coordinate of the Bézier control point.
         * @param  {number} x:   number    The x-coordinate of the ending point.
         * @param  {number} y:   number    The y-coordinate of the ending point.
         */
        quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
        /**
         * Adds a point to the current path by using the specified control points
         *     that represent a cubic Bézier curve.
         * @param {number} cpx1 The x-coordinate of the first Bézier control point.
         * @param {number} cpy1 The y-coordinate of the first Bézier control point.
         * @param {number} cpx2 The x-coordinate of the second Bézier control point.
         * @param {number} cpy2 The y-coordinate of the second Bézier control point.
         * @param {number} x    The x-coordinate of the ending point.
         * @param {number} y    The y-coordinate of the ending point.
         */
        bezierCurveTo(cpx1: number, cpy1: number, cpx2: number, cpy2: number, x: number, y: number): void;
    }
}

declare namespace MB {
    /**
     * Quat class
     * @class Quat
     */
    class Quat {
        protected _value: Float32Array;
        x: number;
        y: number;
        z: number;
        w: number;
        static create(values: Float32Array): Quat;
        reset(): void;
        /**
         * Quat constructor
         * @param {number = 0.0} x
         * @param {number = 0.0} y
         * @param {number = 0.0} z
         * @param {number = 1.0} w
         */
        constructor(x?: number, y?: number, z?: number, w?: number);
        /**
         * Set quaternion value to identity
         */
        setIdentity(): Quat;
        add(q: Quat): Quat;
        rem(q: Quat): Quat;
        static add(q: Quat, q2: Quat, dest?: Quat): Quat;
        static rem(q: Quat, q2: Quat, dest?: Quat): Quat;
        roll(): number;
        pitch(): number;
        yaw(): number;
        /**
         * Create a copy of this quaternion
         * @return {Quat}
         */
        clone(): Quat;
        /**
         * Calculate dot product with another quaternion
         */
        static dot(q1: Quat, q2: Quat): number;
        /**
         * Calculate multiplication with another quaternion
         */
        mult(q: Quat): Quat;
        /**
         * Normalize quaternion
         */
        normalize(dest?: Quat): Quat;
        /**
         * Invert quaternion
         */
        inverse(): Quat;
        conjugate(): Quat;
        /**
         * Returns whether or not current Quat and another Quat have exactly the same elements
         *     in the same position.
         * @param  {Vect2}   other The second vector
         * @return {boolean} True if the quaternions are equals, false otherwise
         */
        exactEquals(other: MB.Quat): boolean;
        static fromAxis(axis: Vect3, angle: number, dest?: Quat): Quat;
        onChange: Function;
        setFromEuler(euler: MB.EulerAngle): MB.Quat;
    }
}

declare namespace MB {
    /**
     * Sphere2D class
     * @class Sphere2D
     */
    class Sphere2D {
        protected _center: Vect2;
        protected _radius: number;
        constructor(center: Vect2, radius: number);
        containtsPoint(p: Vect2): boolean;
        intersectsSphere(s: Sphere2D): boolean;
    }
}

declare namespace MB {
    /**
     * Sphere3D class
     * @class Sphere3D
     */
    class Sphere3D {
        protected _center: Vect3;
        protected _radius: number;
        constructor(center: Vect3, radius: number);
        containtsPoint(p: Vect3): boolean;
        intersectsSphere(s: Sphere3D): boolean;
    }
}

declare namespace MB {
    /**
     * Spline2D class
     * Create a smooth 2D spline curve from a points list.
     *
     * @class Spline2D
     */
    class Spline2D {
        protected controlPoints: Array<Vect2>;
        protected _intpMode: string;
        constructor(intpMode?: string, points?: Array<Vect2>);
        /**
         * Return interpolate point at t.
         * @param  {number} t Interpolation value [0, 1].
         * @return {Vect2}     Interpolated position.
         */
        evaluate(t: number): Vect2;
    }
    /**
     * Spline3D class
     * Create a smooth 3D spline curve from a points list.
     *
     * @class Spline3D
     */
    class Spline3D {
        protected controlPoints: Array<Vect3>;
        protected _intpMode: string;
        protected _oldDT: number;
        protected _currentDT: number;
        constructor(intpMode?: string, points?: Array<Vect3>);
        /**
         * Return interpolate point at t.
         * @param  {number} t Interpolation value [0, 1].
         * @return {Vect3}     Interpolated position.
         */
        evaluate(t: number): Vect3;
        getTangent(oldDT?: number, currentDT?: number): Vect3;
        angleBetweenPoints(oldDT?: number, currentDT?: number): number;
    }
}

declare namespace MB {
    /**
     * Vect2 class
     * @class Vect2
     */
    class Vect2 {
        protected _value: Float32Array;
        /**
         * Vect2 constructor
         * @param {number = 0.0} x First component
         * @param {number = 0.0} y Second component
         */
        constructor(x?: number, y?: number);
        /**
         * Create a new Vect2 initialized with the given values
         * @param  {ArrayLike<number>} values Array of values (minLength 2)
         * @return {Vect2} a new Vect2
         */
        static create(values: ArrayLike<number>): Vect2;
        /**
         * Create a new Vect2 initialized with the given value.
         * All Vect2 component set with same value.
         * @param  {number} value Simple value
         * @return {Vect2} a new Vect2
         */
        static createFromScalar(value: number): Vect2;
        /**
         * Create a new Vect2 initialized with values from current Vect2
         * @return {Vect2} a new Vect2
         */
        clone(): Vect2;
        /**
         * Adds current Vect2 with another Vect2
         * @param  {Vect2} v Second vector
         * @return {Vect2} a new Vect2
         */
        add(v: Vect2): Vect2;
        /**
         * Substracts current Vect2 with another Vect2
         * @param  {Vect2} v Second vector
         * @return {Vect2} a new Vect2
         */
        sub(v: Vect2): Vect2;
        /**
         * Multiplies current Vect2 with another Vect2
         * @param  {Vect2} v Second vector
         * @return {Vect2} a new Vect2
         */
        mult(v: Vect2): Vect2;
        /**
         * Multiplies current Vect2 with scalar
         * @param  {number} s Scalar value.
         * @return {Vect2} a new Vect2
         */
        multByScalar(s: number): Vect2;
        /**
         * Divides current Vect2 with another Vect2
         * @param  {Vect2} v Second vector
         * @return {Vect2} a new Vect2
         */
        div(v: Vect2): Vect2;
        /**
         * Scales a Vect2 by a scalar number
         * @param  {number} value Amount to scale the vector by
         * @param  {Vect2 = null} dest Destiny Vect2 (optional)
         * @return {Vect2} a new Vect2
         */
        scale(value: number, dest?: Vect2): Vect2;
        /**
         * Add two Vect2 after scaling the Vect2 given by a scalar value
         * @param  {Vect2} v Second vector
         * @param  {number} scale Amount to scale v by before adding
         * @param  {Vect2 = null} dest Destiny Vect2 (optional)
         * @return {Vect2} a new Vect2
         */
        scaleAndAdd(v: Vect2, scale: number, dest?: Vect2): Vect2;
        /**
         * Calculate the euclidian distance between two Vect2s
         * @param  {Vect2}  v First Vect2 operand
         * @param  {Vect2}  v2 Second Vect2 operand
         * @return {number} Distance between Vect2s
         */
        static distance(v: Vect2, v2: Vect2): number;
        /**
         * Calculate the squared euclidian distance between two Vect2s
         * @param  {Vect2}  v First Vect2 operand
         * @param  {Vect2}  v2 Second Vect2 operand
         * @return {number} Distance between Vect2s
         */
        static squaredDistance(v: Vect2, v2: Vect2): number;
        /**
         * Negates the components of current Vect2
         * @param  {Vect2 = null} dest Destiny Vect2 (optional)
         * @return {Vect2} a new Vect2
         */
        negate(dest?: Vect2): Vect2;
        /**
         * Inverse of the components of current Vect2
         * @param  {Vect2 = null} dest Destiny Vect2 (optional)
         * @return {Vect2} a new Vect2
         */
        inverse(dest?: Vect2): Vect2;
        /**
         * Normalize current Vect2
         * @param  {Vect2 = null} dest Destiny Vect2 (optional)
         * @return {Vect2} a new Vect2
         */
        normalize(dest?: Vect2): Vect2;
        /**
         * Calculate the dot product of two Vect2´s
         * @param  {Vect2}  v  First Vect2 operand
         * @param  {Vect2}  v2 Second Vect2 operand
         * @return {number} a new Vect2
         */
        static dot(v: Vect2, v2: Vect2): number;
        /**
         * Return a string representation of Vect2
         * @return {String} String representation of Vect2
         */
        toString: () => string;
        /**
         * Get internal values of Vect2
         * @return {Float32Array} Interval Vect2 values
         */
        value: Float32Array;
        /**
         * Return x component of Vect2
         * @return {number} First component of Vect2
         */
        /**
         * Set x component of Vect2
         * @param {number} value New first component value
         */
        x: number;
        /**
         * Return y component of Vect2
         * @return {number} Second component of Vect2
         */
        /**
         * Set y component of Vect2
         * @param {number} value New second component value
         */
        y: number;
        /**
         * Returns whether or not current Vect2 and another Vect2 have exactly the same elements
         *     in the same position.
         * @param  {Vect2}   other The second vector
         * @return {boolean} True if the vectors are equals, false otherwise
         */
        exactEquals(other: Vect2): boolean;
        /**
         * Returns whether or not current Vect2 and another Vect2 have approximately the same elements
         *     in the same position.
         * @param  {Vect2}   other The second vector
         * @param  {boolean} Enable or disable threshold epsilon in values comparison
         * @return {boolean} True if the vectors are equals, false otherwise
         */
        isEquals(vec: Vect2, threshold?: boolean): boolean;
        /**
         * Adds two Vect2´s
         * @param  {Vect2}    v  First Vect2 operand
         * @param  {Vect2}    v2 Second Vect2 operand
         * @param  {Vect2 = null} dest Destiny Vect2 (optional)
         * @return {number} a new Vect2
         */
        static add(v: Vect2, v2: Vect2, dest?: Vect2): Vect2;
        /**
         * Subtracts two Vect2´s
         * @param  {Vect2}    v  First Vect2 operand
         * @param  {Vect2}    v2 Second Vect2 operand
         * @param  {Vect2 = null} dest Destiny Vect2 (optional)
         * @return {number} a new Vect2
         */
        static sub(v: Vect2, v2: Vect2, dest?: Vect2): Vect2;
        /**
         * Multiplies two Vect2´s
         * @param  {Vect2}    v  First Vect2 operand
         * @param  {Vect2}    v2 Second Vect2 operand
         * @param  {Vect2 = null} dest Destiny Vect2 (optional)
         * @return {number} a new Vect2
         */
        static mult(v: Vect2, v2: Vect2, dest?: Vect2): Vect2;
        /**
         * Divides two Vect2´s
         * @param  {Vect2}    v  First Vect2 operand
         * @param  {Vect2}    v2 Second Vect2 operand
         * @param  {Vect2 = null} dest Destiny Vect2 (optional)
         * @return {number} a new Vect2
         */
        static div(v: Vect2, v2: Vect2, dest?: Vect2): Vect2;
        /**
         * Return minimum Vect2 between two Vect2's
         * @param  {Vect2} v0   First Vect2 operand
         * @param  {Vect2} v2   Second Vect2 operand
         * @return {Vect2} a new Vect2 equals to minimum Vect2 entries
         */
        static min(v0: Vect2, v2: Vect2): Vect2;
        /**
         * Return maximum Vect2 between two Vect2's
         * @param  {Vect2} v0   First Vect2 operand
         * @param  {Vect2} v2   Second Vect2 operand
         * @return {Vect2} a new Vect2 equals to maximum Vect2 entries
         */
        static max(v0: Vect2, v2: Vect2): Vect2;
        /**
         * Perform a linear interpolation between two Vect2's
         * @param  {Vect2}  init First Vec2 operand
         * @param  {Vect2}  end  Second Vec2 operand
         * @param  {number} t    Interpolation amount between the two inputs
         * @return {Vect2}  Interpolant Vect2
         */
        static lerp(init: Vect2, end: Vect2, t: number): Vect2;
        /**
         * Limiting Vect2 between min and max value
         * @param  {Vect2} value Entry vector
         * @param  {Vect2} min   Minimum Vect2 vector
         * @param  {Vect2} max   Maximum Vect2 vector
         * @return {Vect2}       a new Vect2
         */
        static clamp(value: Vect2, min: Vect2, max: Vect2): Vect2;
        /**
         * Replace X and Y values from Vect2
         * @param {number} x New X value
         * @param {number} y New Y value
         */
        setXY(x: number, y: number): void;
    }
}

declare namespace MB {
    /**
     * Vect3 class
     * @class Vect3
     */
    class Vect3 {
        protected _value: Float32Array;
        static xAxis: Vect3;
        static yAxis: Vect3;
        static zAxis: Vect3;
        static up: Vect3;
        /**
         * Vect3 constructor
         * @param {number = 0.0} x
         * @param {number = 0.0} y
         * @param {number = 0.0} z
         */
        constructor(x?: number, y?: number, z?: number);
        /**
         * Create a new Vect3 initialized with the given values
         * @param  {ArrayLike<number>} values Array of values (minLength 3)
         * @return {Vect3} a new Vect3
         */
        static create(value: ArrayLike<number>): Vect3;
        /**
         * Create a new Vect3 initialized with the given value.
         * All Vect3 component set with same value.
         * @param  {number = 0.0} value Simple value
         * @return {Vect3} a new Vect3
         */
        static createFromScalar(value?: number): Vect3;
        /**
         * Create a new Vect3 initialized with values from current Vect3
         * @return {Vect3} a new Vect3
         */
        clone(): Vect3;
        /**
         * Adds current Vect3 with another Vect3
         * @param  {Vect3} v Second vector
         * @return {Vect3} a new Vect3
         */
        add(v: Vect3): Vect3;
        /**
         * Substracts current Vect3 with another Vect3
         * @param  {Vect3} v Second vector
         * @return {Vect3} a new Vect3
         */
        sub(v: Vect3): Vect3;
        /**
         * Multiplies current Vect3 with another Vect3
         * @param  {Vect3} v Second vector
         * @return {Vect3} a new Vect3
         */
        mult(v: Vect3): Vect3;
        /**
         * Multiplies current Vect3 with scalar
         * @param  {number} s Scalar value.
         * @return {Vect3} a new Vect3
         */
        multByScalar(s: number): Vect3;
        /**
         * Divides current Vect3 with another Vect3
         * @param  {Vect3} v Second vector
         * @return {Vect3} a new Vect3
         */
        div(v: Vect3): Vect3;
        /**
         * Scales a Vect3 by a scalar number
         * @param  {number} value Amount to scale the vector by
         * @param  {Vect3 = null} dest Destiny Vect3 (optional)
         * @return {Vect3} a new Vect3
         */
        scale(value: number, dest?: Vect3): Vect3;
        /**
         * Add two Vect3 after scaling the Vect3 given by a scalar value
         * @param  {Vect3} v Second vector
         * @param  {number} scale Amount to scale v by before adding
         * @param  {Vect3 = null} dest Destiny Vect3 (optional)
         * @return {Vect3} a new Vect3
         */
        static scaleAndAdd(a: Vect3, b: Vect3, scale: number, dest?: Vect3): Vect3;
        /**
         * Calculate the euclidian distance between two Vect3s
         * @param  {Vect3}  v First Vect3 operand
         * @param  {Vect3}  v2 Second Vect3 operand
         * @return {number} Distance between Vect3s
         */
        static distance(v: Vect3, v2: Vect3): number;
        /**
         * Calculate the squared euclidian distance between two Vect3s
         * @param  {Vect3}  v First Vect3 operand
         * @param  {Vect3}  v2 Second Vect3 operand
         * @return {number} Distance between Vect3s
         */
        static squaredDistance(v: Vect3, v2: Vect3): number;
        /**
         * Negates the components of current Vect3
         * @param  {Vect3 = null} dest Destiny Vect3 (optional)
         * @return {Vect3} a new Vect3
         */
        negate(dest?: Vect3): Vect3;
        /**
         * Inverse of the components of current Vect3
         * @param  {Vect3 = null} dest Destiny Vect3 (optional)
         * @return {Vect3} a new Vect3
         */
        inverse(dest?: Vect3): Vect3;
        /**
         * Normalize current Vect3
         * @param  {Vect3 = null} dest Destiny Vect3 (optional)
         * @return {Vect3} a new Vect3
         */
        normalize(dest?: Vect3): Vect3;
        /**
         * Calculate the dot product of two Vect3´s
         * @param  {Vect3}  v  First Vect3 operand
         * @param  {Vect3}  v2 Second Vect3 operand
         * @return {number} a new Vect3
         */
        static dot(v: Vect3, v2: Vect3): number;
        /**
         * Return a string representation of Vect3
         * @return {String} String representation of Vect3
         */
        toString: () => string;
        /**
         * Get internal values of Vect3
         * @return {Float32Array} Interval Vect3 values
         */
        value: Float32Array;
        /**
         * Return x component of Vect3
         * @return {number} First component of Vect3
         */
        /**
         * Set x component of Vect3
         * @param {number} value New first component value
         */
        x: number;
        /**
         * Return y component of Vect3
         * @return {number} Second component of Vect3
         */
        /**
         * Set y component of Vect3
         * @param {number} value New seond component value
         */
        y: number;
        /**
         * Return z component of Vect3
         * @return {number} Third component of Vect3
         */
        /**
         * Set z component of Vect3
         * @param {number} value New third component value
         */
        z: number;
        /**
         * Returns whether or not current Vect3 and another Vect3 have exactly the same elements
         *     in the same position.
         * @param  {Vect3}   other The second vector
         * @return {boolean} True if the vectors are equals, false otherwise
         */
        exactEquals(other: Vect3): boolean;
        /**
         * Returns whether or not current Vect3 and another Vect3 have approximately the same elements
         *     in the same position.
         * @param  {Vect3}   other The second vector
         * @param  {boolean} Enable or disable threshold epsilon in values comparison
         * @return {boolean} True if the vectors are equals, false otherwise
         */
        isEquals(vec: Vect3, threshold?: boolean): boolean;
        /**
         * Compute the cross produt of two Vect3´s
         * @param  {Vect3}    v  First Vect3 operand
         * @param  {Vect3}    v2 Second Vect3 operand
         * @param  {Vect3 = null} dest Destiny Vect3 (optional)
         * @return {number} a new Vect3
         */
        static cross(v: Vect3, v2: Vect3, dest?: Vect3): Vect3;
        /**
         * Adds two Vect3´s
         * @param  {Vect3}    v  First Vect3 operand
         * @param  {Vect3}    v2 Second Vect3 operand
         * @param  {Vect3 = null} dest Destiny Vect3 (optional)
         * @return {number} a new Vect3
         */
        static add(v: Vect3, v2: Vect3, dest?: Vect3): Vect3;
        /**
         * Subtracts two Vect3´s
         * @param  {Vect3}    v  First Vect3 operand
         * @param  {Vect3}    v2 Second Vect3 operand
         * @param  {Vect3 = null} dest Destiny Vect3 (optional)
         * @return {number} a new Vect3
         */
        static sub(v: Vect3, v2: Vect3, dest?: Vect3): Vect3;
        /**
         * Multiplies two Vect3´s
         * @param  {Vect3}    v  First Vect3 operand
         * @param  {Vect3}    v2 Second Vect3 operand
         * @param  {Vect3 = null} dest Destiny Vect3 (optional)
         * @return {number} a new Vect3
         */
        static mult(v: Vect3, v2: Vect3, dest?: Vect3): Vect3;
        /**
         * Divides two Vect3´s
         * @param  {Vect3}    v  First Vect3 operand
         * @param  {Vect3}    v2 Second Vect3 operand
         * @param  {Vect3 = null} dest Destiny Vect3 (optional)
         * @return {number} a new Vect3
         */
        static div(v: Vect3, v2: Vect3, dest?: Vect3): Vect3;
        /**
         * Calculate Vect3 length
         * @return {number} Length of Vect3
         */
        length(): number;
        /**
         * Calculate Vect3 squared length
         * @return {number} Length of Vect3
         */
        squaredLength(): number;
        /**
         * Return minimum Vect3 between two Vect3's
         * @param  {Vect3} v0   First Vect3 operand
         * @param  {Vect3} v2   Second Vect3 operand
         * @return {Vect3} a new Vect3 equals to minimum Vect3 entries
         */
        static min(v0: Vect3, v2: Vect3): Vect3;
        /**
         * Return maximum Vect3 between two Vect3's
         * @param  {Vect3} v0   First Vect3 operand
         * @param  {Vect3} v2   Second Vect3 operand
         * @return {Vect3} a new Vect3 equals to maximum Vect3 entries
         */
        static max(v0: Vect3, v2: Vect3): Vect3;
        /**
         * Perform a linear interpolation between two Vect3's
         * @param  {Vect3}  init First Vec2 operand
         * @param  {Vect3}  end  Second Vec2 operand
         * @param  {number} t    Interpolation amount between the two inputs
         * @return {Vect3}  Interpolant Vect3
         */
        static lerp(init: Vect3, end: Vect3, t: number): Vect3;
        /**
         * Limiting Vect3 between min and max value
         * @param  {Vect3} value Entry vector
         * @param  {Vect3} min   Minimum Vect3 vector
         * @param  {Vect3} max   Maximum Vect3 vector
         * @return {Vect3}       a new Vect3
         */
        static clamp(value: Vect3, min: Vect3, max: Vect3): Vect3;
        set(vx: number, vy: number, vz: number): void;
        applyQuat(q: Quat, dest?: Vect3): Vect3;
    }
}

declare namespace MB {
    /**
     * Vect4 class
     * @class Vect4
     */
    class Vect4 {
        protected _value: Float32Array;
        /**
         * Vect4 constructor
         * @param {number = 0.0} x
         * @param {number = 0.0} y
         * @param {number = 0.0} z
         * @param {number = 0.0} w
         */
        constructor(x?: number, y?: number, z?: number, w?: number);
        /**
         * Create a new Vect4 initialized with the given values
         * @param  {ArrayLike<number>} values Array of values (minLength 4)
         * @return {Vect4} a new Vect4
         */
        static create(value: ArrayLike<number>): Vect4;
        /**
         * Create a new Vect4 initialized with the given value.
         * All Vect4 component set with same value.
         * @param  {number} value Simple value
         * @return {Vect4} a new Vect4
         */
        static createFromScalar(value: number): Vect4;
        /**
         * Create a new Vect4 initialized with values from current Vect4
         * @return {Vect4} a new Vect4
         */
        clone(): Vect4;
        /**
         * Adds current Vect4 with another Vect4
         * @param  {Vect4} v Second vector
         * @return {Vect4} a new Vect4
         */
        add(v: Vect4): Vect4;
        /**
         * Substracts current Vect4 with another Vect4
         * @param  {Vect4} v Second vector
         * @return {Vect4} a new Vect4
         */
        sub(v: Vect4): Vect4;
        /**
         * Multiplies current Vect4 with another Vect4
         * @param  {Vect4} v Second vector
         * @return {Vect4} a new Vect4
         */
        mult(v: Vect4): Vect4;
        /**
         * Divides current Vect4 with another Vect4
         * @param  {Vect4} v Second vector
         * @return {Vect4} a new Vect4
         */
        div(v: Vect4): Vect4;
        /**
         * Scales a Vect4 by a scalar number
         * @param  {number} value Amount to scale the vector by
         * @param  {Vect4 = null} dest Destiny Vect4 (optional)
         * @return {Vect4} a new Vect4
         */
        scale(value: number, dest?: Vect4): Vect4;
        /**
         * Add two Vect4 after scaling the Vect4 given by a scalar value
         * @param  {Vect4} v Second vector
         * @param  {number} scale Amount to scale v by before adding
         * @param  {Vect4 = null} dest Destiny Vect4 (optional)
         * @return {Vect4} a new Vect4
         */
        scaleAndAdd(v: Vect4, scale: number, dest?: Vect4): Vect4;
        static distance(v: Vect4, v2: Vect4): number;
        /**
         * Calculate the squared euclidian distance between two Vect4s
         * @param  {Vect4}  v First Vect4 operand
         * @param  {Vect4}  v2 Second Vect4 operand
         * @return {number} Distance between Vect4s
         */
        static squaredDistance(v: Vect4, v2: Vect4): number;
        /**
         * Negates the components of current Vect4
         * @param  {Vect4 = null} dest Destiny Vect4 (optional)
         * @return {Vect4} a new Vect4
         */
        negate(dest?: Vect4): Vect4;
        /**
         * Inverse of the components of current Vect4
         * @param  {Vect4 = null} dest Destiny Vect4 (optional)
         * @return {Vect4} a new Vect4
         */
        inverse(dest?: Vect4): Vect4;
        /**
         * Normalize current Vect4
         * @param  {Vect4 = null} dest Destiny Vect4 (optional)
         * @return {Vect4} a new Vect4
         */
        normalize(dest?: Vect4): Vect4;
        /**
         * Calculate the dot product of two Vect4´s
         * @param  {Vect4}  v  First Vect4 operand
         * @param  {Vect4}  v2 Second Vect4 operand
         * @return {number} a new Vect4
         */
        static dot(v: Vect4, v2: Vect4): number;
        /**
         * Return a string representation of Vect4
         * @return {String} String representation of Vect4
         */
        toString: () => string;
        /**
         * Get internal values of Vect4
         * @return {Float32Array} Interval Vect4 values
         */
        value: Float32Array;
        /**
         * Return x component of Vect2
         * @return {number} First component of Vect2
         */
        /**
         * Set x component of Vect2
         * @param {number} value New first component value
         */
        x: number;
        /**
         * Return y component of Vect2
         * @return {number} Second component of Vect2
         */
        /**
         * Set y component of Vect2
         * @param {number} value New second component value
         */
        y: number;
        /**
         * Return z component of Vect2
         * @return {number} Third component of Vect2
         */
        /**
         * Set z component of Vect2
         * @param {number} value New third component value
         */
        z: number;
        /**
         * Return w component of Vect2
         * @return {number} Fourth component of Vect2
         */
        /**
         * Set w component of Vect2
         * @param {number} value New fourth component value
         */
        w: number;
        /**
         * Returns whether or not current Vect4 and another Vect4 have exactly the same elements
         *     in the same position.
         * @param  {Vect4}   other The second vector
         * @return {boolean} True if the vectors are equals, false otherwise
         */
        exactEquals(other: Vect4): boolean;
        /**
         * Returns whether or not current Vect4 and another Vect4 have approximately the same elements
         *     in the same position.
         * @param  {Vect4}   other The second vector
         * @param  {boolean} Enable or disable threshold epsilon in values comparison
         * @return {boolean} True if the vectors are equals, false otherwise
         */
        isEquals(vec: Vect4, threshold?: boolean): boolean;
        /**
         * Adds two Vect4´s
         * @param  {Vect4}    v  First Vect4 operand
         * @param  {Vect4}    v2 Second Vect4 operand
         * @param  {Vect4 = null} dest Destiny Vect4 (optional)
         * @return {number} a new Vect4
         */
        static add(v: Vect4, v2: Vect4, dest?: Vect4): Vect4;
        /**
         * Subtracts two Vect4´s
         * @param  {Vect4}    v  First Vect4 operand
         * @param  {Vect4}    v2 Second Vect4 operand
         * @param  {Vect4 = null} dest Destiny Vect4 (optional)
         * @return {number} a new Vect4
         */
        static sub(v: Vect4, v2: Vect4, dest?: Vect4): Vect4;
        /**
         * Multiplies two Vect4´s
         * @param  {Vect4}    v  First Vect4 operand
         * @param  {Vect4}    v2 Second Vect4 operand
         * @param  {Vect4 = null} dest Destiny Vect4 (optional)
         * @return {number} a new Vect4
         */
        static mult(v: Vect4, v2: Vect4, dest?: Vect4): Vect4;
        /**
         * Divides two Vect4´s
         * @param  {Vect4}    v  First Vect4 operand
         * @param  {Vect4}    v2 Second Vect4 operand
         * @param  {Vect4 = null} dest Destiny Vect4 (optional)
         * @return {number} a new Vect4
         */
        static div(v: Vect4, v2: Vect4, dest?: Vect4): Vect4;
    }
}

declare namespace MB {
    /**
     * Vector2<T> class
     * @class Vector2<T>
     */
    class Vector2<T> {
        protected _x: T;
        protected _y: T;
        /**
         * Vector2<T> constructor
         * @param {T} x: First value
         * @param {T} y: Second value
         */
        constructor(x: T, y: T);
        /**
         * Check if two Vector2<T> are equals
         * @param  {Vector2<T>} other: Second vector
         * @return {boolean}: True if both equals
         */
        isEqual(other: Vector2<T>): boolean;
        /**
         * Return x value.
         * @return {T}
         */
        /**
         * Set x value.
         * @param {T} x New value.
         */
        x: T;
        /**
         * Return y value.
         * @return {T}
         */
        /**
         * Set y value.
         * @param {T} y New value.
         */
        y: T;
    }
}

declare namespace MB {
    /**
     * Vector3<T> class
     * @class Vector3<T>
     */
    class Vector3<T> {
        protected _x: T;
        protected _y: T;
        protected _z: T;
        /**
         * Vector3<T> constructor
         * @param {T} x: First value
         * @param {T} y: Second value
         * @param {T} z: Third value
         */
        constructor(x: T, y: T, z: T);
        /**
         * Check if two Vector3<T> are equals
         * @param  {Vector3<T>} other: Second vector
         * @return {boolean}: True if both equals
         */
        isEqual(other: Vector3<T>): boolean;
        /**
         * Return x value.
         * @return {T}
         */
        /**
         * Set x value.
         * @param {T} x New value.
         */
        x: T;
        /**
         * Return y value.
         * @return {T}
         */
        /**
         * Set y value.
         * @param {T} y New value.
         */
        y: T;
        /**
         * Return z value.
         * @return {T}
         */
        /**
         * Set z value.
         * @param {T} z New value.
         */
        z: T;
    }
}

declare namespace MB {
    /**
     * Vector4<T> class
     * @class Vector4<T>
     */
    class Vector4<T> {
        protected _x: T;
        protected _y: T;
        protected _z: T;
        protected _w: T;
        /**
         * Vector4<T> constructor
         * @param {T} x: First value
         * @param {T} y: Second value
         * @param {T} z: Third value
         * @param {T} z: Fourth value
         */
        constructor(x: T, y: T, z: T, w: T);
        copy(v: Vector4<T>): Vector4<T>;
        clone(): Vector4<T>;
        /**
         * Check if two Vector4<T> are equals
         * @param  {Vector4<T>} other: Second vector
         * @return {boolean}: True if both equals
         */
        isEqual(other: Vector4<T>): boolean;
        /**
         * Return x value.
         * @return {T}
         */
        /**
         * Set x value.
         * @param {T} x New value.
         */
        x: T;
        /**
         * Return y value.
         * @return {T}
         */
        /**
         * Set y value.
         * @param {T} y New value.
         */
        y: T;
        /**
         * Return z value.
         * @return {T}
         */
        /**
         * Set z value.
         * @param {T} z New value.
         */
        z: T;
        /**
         * Return w value.
         * @return {T}
         */
        /**
         * Set w value.
         * @param {T} w New value.
         */
        w: T;
    }
}

declare namespace MB {
    class Camera2 {
        protected position: MB.Vect3;
        protected front: MB.Vect3;
        protected up: MB.Vect3;
        protected right: MB.Vect3;
        protected worldUp: MB.Vect3;
        protected yaw: number;
        protected pitch: number;
        protected movSpeed: number;
        protected mouseSensivity: number;
        protected _updateCamera: boolean;
        timeElapsed: number;
        GetPos(): MB.Vect3;
        setHome(v: MB.Vect3): void;
        constructor(position?: MB.Vect3, up?: MB.Vect3, yaw?: number, pitch?: number);
        update(timeElapsed: number, callback: Function): void;
        protected _firstMouse: boolean;
        processKeyboard(direction: number, speed?: number): void;
        processMouseMovement(xOffset: number, yOffset: number): void;
        GetViewMatrix(): MB.Mat4;
        GetOrthoProjectionMatrix(canvas: HTMLCanvasElement): MB.Mat4;
        GetProjectionMatrix(canvas: HTMLCanvasElement): MB.Mat4;
        _fov: number;
        fov: number;
        updateCameraVectors(): void;
    }
}

declare namespace MB {
    namespace Decorators {
        /**
         * Seals an object, preventing new properties from being added to it and
         *     marking all existing properties as non-configurable.
         * Values of present properties can still be changed as long as they are writable.
         * @param {Function} constructor
         */
        function sealed(constructor: Function): void;
    }
}

declare namespace MB {
    abstract class App {
        protected _stats: Stats;
        protected _gui: dat.GUI;
        protected _webglVersion: number;
        protected _state: GlobalState;
        protected text: any;
        protected _context: GLContext;
        context: GLContext;
        constructor(title: string, context: GLContext, text?: Object);
        state: GlobalState;
        webglVersion(): number;
        loadAssets(): void;
        cameraUpdate(): void;
        textCB(g: dat.GUI): void;
        abstract initialize(): any;
        abstract update(dt: number): any;
        abstract draw(): any;
        clearColorAndDepth(): void;
        private __init__(text);
        stats: Stats;
        start(): this;
        pause(): void;
        resume(): void;
        canvas: HTMLCanvasElement;
        protected _resume: boolean;
        protected __resize__(): void;
    }
}

declare namespace MB {
    abstract class App2 {
        protected _webglVersion: number;
        protected _state: GlobalState;
        protected _context: GLContext;
        context: GLContext;
        constructor(title: string, context: GLContext);
        state: GlobalState;
        webglVersion(): number;
        loadAssets(): void;
        cameraUpdate(): void;
        abstract initialize(): any;
        abstract update(dt: number): any;
        abstract draw(): any;
        clearColorAndDepth(): void;
        private __init__();
        start(): this;
        pause(): void;
        resume(): void;
        canvas: HTMLCanvasElement;
        protected _resume: boolean;
        protected __resize__(): void;
    }
}

declare namespace MB {
    /**
     * Drawable abstract class
     * @class Drawable
     */
    abstract class Drawable {
        protected _indicesLen: number;
        protected _handle: Array<MB.VertexBuffer>;
        protected _vao: MB.VertexArray;
        protected _geometry: MB.VertexBufferGeometry;
        protected _context: GLContext;
        /**
         * Drawable constructor.
         * @param {GLContext} context [description]
         */
        constructor(context: GLContext);
        /**
         * Add Element buffer object.
         * @param {Uint16Array} data [description]
         * @param {MB.ctes.UsageType = MB.ctes.UsageType.StaticDraw} type [description]
         */
        protected addElementArray(data: Uint16Array, type?: MB.ctes.UsageType): VertexBuffer;
        /**
         * Add Vertex buffer object.
         * @param  {number} attribLocation [description]
         * @param  {Float32Array} data [description]
         * @param  {number} numElems [description]
         * @param  {MB.ctes.UsageType = MB.ctes.UsageType.StaticDraw} type [description]
         * @return {VertexBuffer} [description]
         */
        protected addBufferArray(attribLocation: number, data: Float32Array, numElems: number, type?: MB.ctes.UsageType): MB.VertexBuffer;
        /**
         * Normal render
         */
        render(): void;
        renderInstanced(nInstances: number): void;
        renderFan(): void;
        render2(): void;
        render3(): void;
        /**
         * Render with element instance mode
         * @param {number} numInstances: Instances to render
         */
        renderElementInstance(numInstances: number): void;
        /**
         * Render with array instance mode
         * @param {number} numInstances: Instances to render
         */
        renderArrayInstance(numInstances: number): void;
        protected computeNormals(): MB.BufferAttribute;
    }
}

declare namespace MB {
    /**
     * Polyhedron class
     * @class Polyhedron
     */
    abstract class Polyhedron extends Drawable {
        protected _radius: number;
        protected _subdivisions: number;
        /**
         * Polyhedron abstract constructor.
         * @param {GLContext} context [description]
         * @param {Array<number>} verts List of vertices
         * @param {Array<number>} el List of indices
         * @param {number} radius Polyhedron radius
         * @param {number} subdivisions Polyhedron subdivisions
         */
        constructor(context: GLContext, verts: Array<number>, el: Array<number>, radius: number, subdivisions: number);
    }
}

declare namespace MB {
    /**
     * Cone class
     * @class Cone
     */
    class Cone extends Drawable {
        protected _bottomRadius: number;
        protected _topRadius: number;
        protected _height: number;
        protected _radialSubDiv: number;
        protected _heightSubDiv: number;
        protected _createTopBase: boolean;
        protected _createBottomBase: boolean;
        /**
         * Cone constructor.
         * @param {GLContext} context [description]
         * @param {number} bottomRadius: Cone bottom radius
         * @param {number} topRadius: Cone top radius
         * @param {number} height: Cone height
         * @param {number = 3.0} radialSubDiv: Radial subdivisions around Cone
         * @param {number = 1.0} heightSubDiv Height subdivisions
         * @param {boolean = true} createTopBase: Create top base
         * @param {boolean = true} createBottomBase: Create bottom base
         */
        constructor(context: GLContext, bottomRadius: number, topRadius: number, height: number, radialSubDiv?: number, heightSubDiv?: number, createTopBase?: boolean, createBottomBase?: boolean);
    }
}

declare namespace MB {
    namespace ctes {
        /**
         * WebGL constants to clear buffer masks.
         */
        enum ClearBuffer {
            DepthBuffer = 256,
            StencilBuffer = 1024,
            ColorBuffer = 16384,
        }
        /**
         * WebGL constants primitives render modes
         */
        enum RenderMode {
            Points = 0,
            Lines = 1,
            LineLoop = 2,
            LineStrip = 3,
            Triangles = 4,
            TriangleStrip = 5,
            TriangleFan = 6,
        }
        /**
         * WebGL constants to specify blending mode
         */
        enum BlendingMode {
            Zero = 0,
            One = 1,
            /**
             * Multiply a component by the source elements color.
             * @type {number}
             */
            SrcColor = 768,
            /**
             * Multiply a component by one minus the source elements color.
             * @type {number}
             */
            OneMinusSrcColor = 769,
            /**
             * Multiply a component by the source's alpha.
             * @type {number}
             */
            SrcAlpha = 770,
            /**
             * Multiply a component by one minus the source's alpha.
             * @type {number}
             */
            OneMinusSrcAlpha = 771,
            /**
             * Multiply a component by the destination's alpha.
             * @type {number}
             */
            DstAlpha = 772,
            /**
             * Multiply a component by one minus the destination's alpha.
             * @type {number}
             */
            OneMinusDstAlpha = 773,
            /**
             * Multiply a component by the destination's color.
             * @type {number}
             */
            DstColor = 774,
            /**
             * Multiply a component by one minus the destination's color.
             * @type {number}
             */
            OneMinusDstColor = 775,
            /**
             * Multiply a component by the minimum of source's alpha or
             *     one minus the destination's alpha.
             * @type {number}
             */
            SrcAlphaSaturate = 776,
            /**
             * Specify a constant color blend function.
             * @type {number}
             */
            CteColor = 32769,
            /**
             * Specify one minus a constant color blend function.
             * @type {number}
             */
            OneMinusCteColor = 32770,
            /**
             * Specify a constant alpha blend function.
             * @type {number}
             */
            CteAlpha = 32771,
            /**
             * Specify one minus a constant alpha blend function.
             * @type {number}
             */
            OneMinusCteAlpha = 32772,
        }
        /**
         * WebGL constants to control how the blending
         *     is calculated (for both, RBG and alpha, or separately).
         */
        enum BlendingEq {
            /**
             * Set an addition blend function.
             * @type {number}
             */
            Add = 32774,
            /**
             * Specify a subtraction blend function (source - destination).
             * @type {number}
             */
            Substract = 32778,
            /**
             * Specify a reverse subtraction blend function (destination - source).
             * @type {number}
             */
            RevSubstract = 32779,
            /**
             * Produces the minimum color components of the source and destination colors.
             * @type {number}
             */
            Min = 32775,
            /**
             * Produces the maximum color components of the source and destination colors.
             * @type {number}
             */
            Max = 32776,
        }
        /**
         * WebGL constants used with buffer management.
         */
        enum BufferType {
            Array = 34962,
            ElementArray = 34963,
            TransformFeedback = 35982,
            Uniform = 35345,
            PixelPack = 35051,
            PixelUnpack = 35052,
            CopyRead = 36662,
            CopyWrite = 36663,
        }
        enum FaceSide {
            /**
             * Cull front-facing primitives.
             */
            Front = 1028,
            /**
             * Cull back-facing primitives.
             */
            Back = 1029,
            /**
             * Cull Front and back-facing primitives.
             */
            FrontAndBack = 1032,
        }
        /**
         * WebGL constants used by enable and disable capabilites for context.
         * Example: gl.getParameter(ctes.GLParameters.BlendEq)
         */
        enum GLStates {
            Blend = 3042,
            DepthTest = 2929,
            Dither = 3024,
            PolygonOffsetFill = 32823,
            SAMPLE_ALPHA_TO_COVERAGE = 32926,
            SAMPLE_COVERAGE = 32928,
            ScissorTest = 3089,
            StencilTest = 2960,
        }
        /**
         * WebGL constants returned by gl.getError() method.
         */
        enum GLErrors {
            NO_ERROR = 0,
            INVALID_ENUM = 1280,
            INVALID_VALUE = 1281,
            INVALID_OPERATION = 1282,
            OUT_OF_MEMORY = 1285,
            CONTEXT_LOST_WEBGL = 37442,
        }
        /**
         * WebGL constants to specify front face direction.
         */
        enum FaceDir {
            Clockwise = 2304,
            InvClockwise = 2305,
        }
        /**
         * WebGL constants to specify data type.
         */
        enum DataType {
            UnsignedByte = 5121,
            Byte = 5120,
            Short = 5122,
            UnsignedShort = 5123,
            Int = 5124,
            UnsignedInt = 5125,
            Float = 5126,
            HalfFloat = 5131,
        }
        /**
         * WebGL constants to specify pixel format.
         */
        enum PixelFormat {
            DepthComponent = 6402,
            Alpha = 6406,
            RGB = 6407,
            RGBA = 6408,
            Luminance = 6409,
            LuminanceAlpha = 6410,
            UNSIGNED_INT_2_10_10_10_REV = 33640,
            UNSIGNED_INT_10F_11F_11F_REV = 35899,
            UNSIGNED_INT_5_9_9_9_REV = 35902,
            FLOAT_32_UNSIGNED_INT_24_8_REV = 36269,
            UNSIGNED_INT_24_8 = 34042,
            HALF_FLOAT = 5131,
            RG = 33319,
            RG_INTEGER = 33320,
            INT_2_10_10_10_REV = 36255,
            RED = 6403,
            RGB8 = 32849,
            RGBA8 = 32856,
            RGB9_E5 = 35901,
            RGBA32UI = 36208,
            RGB32UI = 36209,
            RGBA16UI = 36214,
            RGB16UI = 36215,
            RGBA8UI = 36220,
            RGB8UI = 36221,
            RGBA32I = 36226,
            RGB32I = 36227,
            RGBA16I = 36232,
            RGB16I = 36233,
            RGBA8I = 36238,
            RGB8I = 36239,
            RED_INTEGER = 36244,
            RGB_INTEGER = 36248,
            RGBA_INTEGER = 36249,
            R8 = 33321,
            RG8 = 33323,
            R16F = 33325,
            R32F = 33326,
            RG16F = 33327,
            RG32F = 33328,
            R8I = 33329,
            R8UI = 33330,
            R16I = 33331,
            R16UI = 33332,
            R32I = 33333,
            R32UI = 33334,
            RG8I = 33335,
            RG8UI = 33336,
            RG16I = 33337,
            RG16UI = 33338,
            RG32I = 33339,
            RG32UI = 33340,
            R8_SNORM = 36756,
        }
        /**
         * WebGL constants to specify shader type.
         */
        enum ShaderType {
            vertex = 35633,
            fragment = 35632,
        }
        /**
         * WebGL constants to specify read mode.
         */
        enum ReadMode {
            read_file = 0,
            read_script = 1,
            read_text = 2,
        }
        /**
         * WebGL constants used by depth and stencil tests.
         */
        enum ComparisonFunc {
            /**
             * Comparison always fails.
             */
            Never = 512,
            /**
             * Passes if source is less than the destination.
             */
            Less = 513,
            /**
             * Passes if source is equal to the destination.
             */
            Equal = 514,
            /**
             * Passes if source is less than or equal to the destination.
             */
            LessEqual = 515,
            /**
             * Passes if source is greater than to the destination.
             */
            Greater = 516,
            /**
             * Passes if source is not equal to the destination.
             */
            NotEqual = 517,
            /**
             * Passes if source is greater than or equal to the destination.
             */
            GreaterEqual = 518,
            /**
             * Comparison always succeeds.
             */
            Always = 519,
        }
        /**
         * WebGL constants used by stencil operations.
         */
        enum StencilOp {
            /**
             * Keep the stencil value.
             */
            Keep = 7680,
            /**
             * Set the stencil value to zero.
             */
            Zero = 0,
            /**
             * Replace the stencil value with the reference value.
             */
            Replace = 7681,
            /**
             * Increase the stencil value by one, wrap if necessary.
             */
            Increase = 7682,
            /**
             * Increase the stencil value by one, clamp if necessary.
             */
            IncreaseSaturate = 34055,
            /**
             * Decrease the stencil value by one, wrap if necessary.
             */
            Decrease = 7683,
            /**
             * Decrease the stencil value by one, clamp if necessary.
             */
            DecreaseSaturate = 34056,
            /**
             * Invert the stencil data (bitwise not).
             */
            Invert = 5386,
        }
        enum DrawBuffer {
            MaxDrawBuffers = 34852,
            DrawBuffer0 = 34853,
            DrawBuffer1 = 34854,
            DrawBuffer2 = 34855,
            DrawBuffer3 = 34856,
            DrawBuffer4 = 34857,
            DrawBuffer5 = 34858,
            DrawBuffer6 = 34859,
            DrawBuffer7 = 34860,
            DrawBuffer8 = 34861,
            DrawBuffer9 = 34862,
            DrawBuffer10 = 34863,
            DrawBuffer11 = 34864,
            DrawBuffer12 = 34865,
            DrawBuffer13 = 34866,
            DrawBuffer14 = 34867,
            DrawBuffer15 = 34868,
            MaxColorAttch = 36063,
            ColorAttach0 = 36064,
            ColorAttach1 = 36065,
            ColorAttach2 = 36066,
            ColorAttach3 = 36067,
            ColorAttach4 = 36068,
            ColorAttach5 = 36068,
            ColorAttach6 = 36070,
            ColorAttach7 = 36071,
            ColorAttach8 = 36072,
            ColorAttach9 = 36073,
            ColorAttach10 = 36074,
            ColorAttach11 = 36075,
            ColorAttach12 = 36076,
            ColorAttach13 = 36077,
            ColorAttach14 = 36078,
            ColorAttach15 = 36079,
        }
        enum QueryParams {
            QueryResult = 34918,
            QueryResultAvailable = 34919,
        }
        enum QueryTarget {
            /**
             * Specifies an occlusion query: these queries detect whether
             * an object is visible (whether the scoped drawing commands pass
             * the depth test and if so, how many samples pass).
             */
            AnySamplesPassed = 35887,
            /**
             * Same as AnySamplesPassed, but less accurate and faster version.
             */
            AnySamplesPassedConservative = 36202,
            /**
             * Number of primitives that are written to transform feedback buffers.
             */
            TransformFeedbackPrimitivesWritten = 35976,
        }
        enum SamplerParameter {
            TextureCompareFunc = 34893,
            TextureCompareMode = 34892,
            TextureMinFilter = 10241,
            TextureMinLOD = 33082,
            TextureMagFilter = 10240,
            TextureMaxLOD = 33083,
            TextureWrapR = 32882,
            TextureWrapS = 10242,
            TextureWrapT = 10243,
        }
        enum SyncCondition {
            GPUCommandsComplete = 37143,
        }
        enum SyncStatus {
            Signaled = 37145,
            Unsignaled = 37144,
        }
        enum SyncType {
            Fence = 37142,
        }
        enum SyncWaitResult {
            ConditionSatisfied = 37148,
            AlreadySignaled = 37146,
            TimeoutExpired = 37147,
            WaitFailed = 37149,
        }
        enum TextureTarget {
            Texture2D = 3553,
            Texture3D = 32879,
            Texture2DArray = 35866,
            TextureCubeMap = 34067,
        }
        enum TextureFilter {
            Nearest = 9728,
            Linear = 9729,
            NearestMMNearest = 9984,
            LinearMMNearest = 9985,
            NearestMMLinear = 9986,
            LinearMMLinear = 9987,
        }
        enum TFMode {
            Interleaved = 35980,
            Separate = 35981,
        }
        enum TFPrimitive {
            Points = 0,
            Lines = 1,
            Triangles = 4,
        }
        enum TFTarget {
            TransformFeedback = 36386,
        }
        enum UsageType {
            StaticDraw = 35044,
            DynamicDraw = 35048,
            StreamDraw = 35040,
            StaticRead = 35045,
            DynamicRead = 35049,
            StreamRead = 35041,
            StaticCopy = 35049,
            DynamicCopy = 35050,
            StreamCopy = 35042,
        }
        enum WrapMode {
            Clamp2Edge = 33071,
            Repeat = 10497,
            MirroredRepeat = 33648,
        }
        enum BlendingMode2 {
            None = 0,
            Normal = 1,
            Additive = 2,
            Substractive = 3,
            Multiply = 4,
            Custom = 5,
        }
        enum CompressedTex {
            /**
             * One-channel (red) unsigned format compression.
             * @type {number}
             */
            R11EAC = 37488,
            /**
             * One-channel (red) signed format compression.
             * @type {number}
             */
            SignedR11EAC = 37489,
            /**
             * Two-channel (red and green) unsigned format compression.
             * @type {number}
             */
            RG11EAC = 37490,
            /**
             * Two-channel (red and green) signed format compression.
             * @type {number}
             */
            SignedRG11EAC = 37491,
            /**
             * Compresses RBG8 data with no alpha channel.
             * @type {number}
             */
            RGB8ETC2 = 37492,
            /**
             * Compresses RGBA8 data. The RGB part is encoded the same as RGB8ETC2,
             *     but the alpha part is encoded separately.
             * @type {number}
             */
            SRGB8ETC2 = 37493,
            /**
             * Compresses sRBG8 data with no alpha channel.
             * @type {number}
             */
            RGB8PunchAlphaETC2 = 37494,
            /**
             * Compresses sRBG8 data with no alpha channel.
             * @type {number}
             */
            SRGB8PunchAlphaETC = 37495,
            /**
             * Similar to RGB8ETC2, but with ability to punch through the alpha channel,
             *     which means to make it completely opaque or transparent.
             * @type {number}
             */
            RGBA8ETC2EAC = 37496,
            /**
             * Similar to SRGB8ETC2, but with ability to punch through the alpha channel,
             *     which means to make it completely opaque or transparent.
             * @type {number}
             */
            SRGBA8ETC2EAC = 37497,
        }
        enum ShadingMode {
            None = 0,
            Smooth = 1,
            Flat = 2,
        }
        enum KeyState {
            Delete = 8,
            Tab = 9,
            Enter = 13,
            Left_Shift = 16,
            Left_Control = 17,
            Alt = 18,
            Esc = 27,
            Space = 32,
            Left = 37,
            Up = 38,
            Right = 39,
            Down = 40,
            Zero = 48,
            One = 49,
            Two = 50,
            Three = 51,
            Four = 52,
            Five = 53,
            Six = 54,
            Seven = 55,
            Eight = 56,
            Nine = 57,
            A = 65,
            B = 66,
            C = 67,
            D = 68,
            E = 69,
            F = 70,
            G = 71,
            H = 72,
            I = 73,
            J = 74,
            K = 75,
            L = 76,
            M = 77,
            N = 78,
            O = 79,
            P = 80,
            Q = 81,
            R = 82,
            S = 83,
            T = 84,
            U = 85,
            V = 86,
            W = 87,
            X = 88,
            Y = 89,
            Z = 90,
            Num0 = 96,
            Num1 = 97,
            Num2 = 98,
            Num3 = 99,
            Num4 = 100,
            Num5 = 101,
            Num6 = 102,
            Num7 = 103,
            Num8 = 104,
            Num9 = 105,
            F1 = 112,
            F2 = 113,
            F3 = 114,
            F4 = 115,
            F5 = 116,
            F6 = 117,
            F7 = 118,
            F8 = 119,
            F9 = 120,
            F10 = 121,
            F11 = 122,
            F12 = 123,
            LastKeyCode = 222,
        }
        enum MouseButton {
            Left = 0,
            Middle = 1,
            Right = 2,
        }
    }
}

declare namespace MB {
    /**
     * BufferAttribute class
     * @class BufferAttribute
     */
    class BufferAttribute {
        protected _arr: ArrayLike<number>;
        protected _size: number;
        /**
         * BufferAttribute constructor
         * @param {ArrayLike<number>} arr  [description]
         * @param {number}            size [description]
         */
        constructor(arr: ArrayLike<number>, size: number);
        /**
         * Return buffer attribute inner array
         * @return {ArrayLike<number>} [description]
         */
        array: ArrayLike<number>;
        /**
         * Return how many items of the inner array are
         *     associated with a particular vect[size].
         * @return {number} [description]
         */
        size: number;
        /**
         * Return total buffer number of elements in the inner array.
         * @return {number} [description]
         */
        count: number;
        /**
         * Return x value from specifies vect[size] index
         * @param  {number} index [description]
         * @return {number}       [description]
         */
        getX(index: number): number;
        /**
         * Return y value from specifies vect[size] index
         * @param  {number} index [description]
         * @return {number}       [description]
         */
        getY(index: number): number;
        /**
         * Return z value from specifies vect[size] index
         * @param  {number} index [description]
         * @return {number}       [description]
         */
        getZ(index: number): number;
        /**
         * Return w value from specifies vect[size] index
         * @param  {number} index [description]
         * @return {number}       [description]
         */
        getW(index: number): number;
        /**
         * Return [x, y] values from specifies vect[size] index
         * @param  {number}        index [description]
         * @return {ArrayLike<number>}       [description]
         */
        getXY(index: number): ArrayLike<number>;
        /**
         * Return [x, y, z] values from specifies vect[size] index
         * @param  {number}        index [description]
         * @return {ArrayLike<number>}       [description]
         */
        getXYZ(index: number): ArrayLike<number>;
        /**
         * Return [x, y, z, w] values from specifies vect[size] index
         * @param  {number}        index [description]
         * @return {ArrayLike<number>}       [description]
         */
        getXYZW(index: number): ArrayLike<number>;
        /**
         * Sets the x value from specifies vect[size] index
         * @param {number} index [description]
         * @param {number} value [description]
         */
        setX(index: number, value: number): void;
        /**
         * Sets the y value from specifies vect[size] index
         * @param {number} index [description]
         * @param {number} value [description]
         */
        setY(index: number, value: number): void;
        /**
         * Sets the z value from specifies vect[size] index
         * @param {number} index [description]
         * @param {number} value [description]
         */
        setZ(index: number, value: number): void;
        /**
         * Sets the w value from specifies vect[size] index
         * @param {number} index [description]
         * @param {number} value [description]
         */
        setW(index: number, value: number): void;
        /**
         * Sets the x and y values from specifies vect[size] index
         * @param {number} index  [description]
         * @param {number} xValue [description]
         * @param {number} yValue [description]
         */
        setXY(index: number, xValue: number, yValue: number): void;
        /**
         * Sets the x, y and z values from specifies vect[size] index
         * @param {number} index  [description]
         * @param {number} xValue [description]
         * @param {number} yValue [description]
         * @param {number} zValue [description]
         */
        setXYZ(index: number, xValue: number, yValue: number, zValue: number): void;
        /**
         * Sets the x, y, z and w values from specifies vect[size] index
         * @param {number} index  [description]
         * @param {number} xValue [description]
         * @param {number} yValue [description]
         * @param {number} zValue [description]
         * @param {number} wValue [description]
         */
        setXYZW(index: number, xValue: number, yValue: number, zValue: number, wValue: number): void;
    }
}

declare namespace MB {
    /**
     * Capabilities namespace
     * @namespace Capabilities
     */
    namespace Capabilities {
        /**
         * Returns the maximum anisotropy value from current WebGL implementation.
         * @param {GLContext} context [description]
         * @return {number} Maximum anisotropy value.
         */
        function getMaxAnisotropy(context: GLContext): number;
        /**
         * Returns the maximum number of textures permitted.
         * @param {GLContext} context [description]
         * @return {number} Maximum textures permitted.
         */
        function getMaxTextures(context: GLContext): number;
        /**
         * Returns the maximum vertex textures permitted.
         * @param {GLContext} context [description]
         * @return {number} Maximum vertex textures permitted.
         */
        function getMaxVertexTextures(context: GLContext): number;
        /**
         * Returns the maximum texture size permitted.
         * @param {GLContext} context [description]
         * @return {number} Maximum textures permitted.
         */
        function getMaxTextureSize(context: GLContext): number;
        /**
         * Returns the maximum cubemap texture size permitted.
         * @param {GLContext} context [description]
         * @return {number} Maximum cubemap texture size permitted.
         */
        function getMaxCubemapSize(context: GLContext): number;
        /**
         * Returns WebGL shading precision.
         * @param {GLContext} context [description]
         * @return {string}
         */
        function getMaxPrecision(context: GLContext): string;
        /**
         * Returns the maximum draw buffers permitted.
         * @param {GLContext} context [description]
         * @return {number} Maximum draw buffers permitted.
         */
        function getMaxDrawBuffers(context: GLContext): number;
        /**
         * Returns the maximum color attachment permitted.
         * @param {GLContext} context [description]
         * @return {number} Maximum color attachment permitted.
         */
        function getMaxColorAttachments(context: GLContext): number;
        /**
         * Returns false if gl.LINEAR is not supported as a texture
         *     filter mode for textures of type gl.FLOAT.
         * @param {GLContext} context [description]
         * @return {boolean} [description]
         */
        function canUseFloatingPointTextures(context: GLContext): boolean;
        function canUseFloatingPointLinearFiltering(context: GLContext): boolean;
        /**
         * Returns false if gl.HALF_FLOAT_OES is not supported as a
         *     texture type.
         * WebGL2 supports this without extension.
         * @param {GLContext} context [description]
         * @return {boolean} [description]
         */
        function canUseHalfFloatingPointTextures(context: GLContext): boolean;
        /**
         * Returns false if gl.LINEAR is not supported as a texture
         *     filter mode for textures of type gl.HALF_FLOAT_OES.
         * WebGL2 supports this without extension.
         * @param {GLContext} context [description]
         * @return {boolean} [description]
         */
        function canUseHalfFloatingPointLinearFiltering(context: GLContext): boolean;
        function canUseLogarithmDepthBuffer(context: GLContext): boolean;
    }
}

declare namespace MB {
    /**
     * Color3 class
     * @class Color3
     */
    class Color3 {
        toVec3(): MB.Vect3;
        /**
         * Internal array that identifies the color values
         */
        protected _color: MB.Vect3;
        /**
         * Color3 constructor
         * @param {number} r Red channel
         * @param {number} g Green channel
         * @param {number} b Blue channel
         */
        constructor(r: number, g: number, b: number);
        /**
         * Check if another color is equals than current color.
         * @param  {Color3}  c Another color
         * @return {boolean}
         */
        isEquals(c: Color3): boolean;
        /**
         * [clone description]
         * @return {Color3} [description]
         */
        clone(): Color3;
        /**
         * [copy description]
         * @param  {Color3} c [description]
         * @return {Color3}   [description]
         */
        copy(c: Color3): Color3;
        /**
         * Return red channel
         * @return {number}
         */
        /**
         * Set red channel
         * @param {number} r New red channel value.
         */
        r: number;
        /**
         * Return green channel
         * @return {number}
         */
        /**
         * Set green channel
         * @param {number} g New green channel value.
         */
        g: number;
        /**
         * Return blue channel
         * @return {number}
         */
        /**
         * Set blue channel
         * @param {number} b New blue channel value.
         */
        b: number;
        /**
         * Create color for RGB value.
         * @param  {number} r Red channel value.
         * @param  {number} g Green channel value.
         * @param  {number} b Blue channel value.
         * @return {Color3}    New color
         */
        setRGB(r: number, g: number, b: number): Color3;
        /**
         * Lerp color between two colors using alpha value.
         * The parameter alpha is clamped to the range [0, 1].
         * @param  {Color3} minColor Minimum color.
         * @param  {Color3} maxColor Maximum color.
         * @param  {number} alpha    Alpha. Clamped to the range [0, 1].
         * @return {Color3}          New color generated.
         */
        static lerp(minColor: Color3, maxColor: Color3, alpha: number): Color3;
        /**
         * Create new color using hexadecimal value.
         * @param  {number} hex Hexadecimal value.
         * @return {Color3}          New color generated.
         */
        static createFromHex(hex: number): Color3;
        /**
         * Create random color
         * @return {Color3} New color generated.
         */
        static getRandomColor(): Color3;
        /**
         * Convert current color from gamma to linear range.
         * @param  {number = 2.2} gammaFactor Gamma factor value
         * @return {Color3}          New color generated.
         */
        gammaToLinear(gammaFactor?: number): Color3;
        /**
         * Convert current color from linear to gamma range.
         * @param  {number = 2.2}         gammaFactor Gamma factor value
         * @return {Color3}          New color generated.
         */
        linearToGamma(gammaFactor?: number): Color3;
        /**
         * Return hexadecimal value from current color.
         * @return {number} Hexadecimal representation of current color.
         */
        getHexadecimal(): number;
        /**
         * Convert current color to HSL representation.
         * @return {Color3} New color using HSL representation.
         */
        toHSL(): Color3;
        toHSV(): Color3;
        static fromColor4(color: Color4): Color3;
        /**
         * Aqua color
         * @param {Color3} 0x00FFFF
         */
        static Aqua: Color3;
        /**
         * Beige color
         * @param {Color3} 0xF5F5DC
         */
        static Beige: Color3;
        /**
         * Black color
         * @param {Color3} 0x000000
         */
        static Black: Color3;
        /**
         * Blue color
         * @param {Color3} 0x0000FF
         */
        static Blue: Color3;
        /**
         * Brown color
         * @param {Color3} 0xA52A2A
         */
        static Brown: Color3;
        /**
         * Cyan color
         * @param {Color3} 0x00FFFF
         */
        static Cyan: Color3;
        /**
         * Gold color
         * @param {Color3} 0xFFD700
         */
        static Gold: Color3;
        /**
         * Indigo color
         * @param {Color3} 0x4B0082
         */
        static Indigo: Color3;
        /**
         * Lavender color
         * @param {Color3} 0xE6E6FA
         */
        static Lavender: Color3;
        /**
         * Orange color
         * @param {Color3} 0xFFA500
         */
        static Orange: Color3;
        /**
         * Pink color
         * @param {Color3} 0xFFC0CB
         */
        static Pink: Color3;
        /**
         * Purple color
         * @param {Color3} 0x800080
         */
        static Purple: Color3;
        /**
         * Red color
         * @param {Color3} 0xFF0000
         */
        static Red: Color3;
        /**
         * Yellow color
         * @param {Color3} 0xFFFF00
         */
        static Yellow: Color3;
        /**
         * White color
         * @param {Color3} 0xFFFFFF
         */
        static White: Color3;
    }
}

declare namespace MB {
    /**
     * Color4 class
     * @class Color4
     */
    class Color4 {
        /**
         * Internal array that identifies the color values
         */
        protected _color: Vect4;
        /**
         * Color4 constructor
         * @param {number} r Red channel
         * @param {number} g Green channel
         * @param {number} b Blue channel
         * @param {number} a Alpha channel
         */
        constructor(r: number, g: number, b: number, a: number);
        /**
         * Check if another color is equals than current color.
         * @param  {Color4}  c Another color
         * @return {boolean}
         */
        isEquals(c: Color4): boolean;
        /**
         * [clone description]
         * @return {Color4} [description]
         */
        clone(): Color4;
        /**
         * [copy description]
         * @param  {Color4} c [description]
         * @return {Color4}   [description]
         */
        copy(c: Color4): Color4;
        /**
         * Return red channel
         * @return {number}
         */
        /**
         * Set blue channel
         * @param {number} r New red channel value.
         */
        r: number;
        /**
         * Return green channel
         * @return {number}
         */
        /**
         * Set blue channel
         * @param {number} g New green channel value.
         */
        g: number;
        /**
         * Return blue channel
         * @return {number}
         */
        /**
         * Set blue channel
         * @param {number} b New blue channel value.
         */
        b: number;
        /**
         * Return alpha channel
         * @return {number}
         */
        /**
         * Set alpha channel
         * @param {number} a New alpha channel value.
         */
        a: number;
        /**
         * Lerp color between two colors using alpha value.
         * The parameter alpha is clamped to the range [0, 1].
         * @param  {Color4} minColor Minimum color.
         * @param  {Color4} maxColor Maximum color.
         * @param  {number} alpha    Alpha. Clamped to the range [0, 1].
         * @return {Color4}          New color.
         */
        static lerp(minColor: Color4, maxColor: Color4, alpha: number): Color4;
        /**
         * Create color for RGBA value
         * @param  {number} r Red channel value
         * @param  {number} g Green channel value
         * @param  {number} b Blue channel value
         * @param  {number} a Alpha channel value
         * @return {Color4}    New color
         */
        setRGBA(r: number, g: number, b: number, a: number): Color4;
        /**
         * Convert current color to HSL representation.
         * @return {Color4} New color using HSL representation.
         */
        toHSL(): Color4;
        static fromColor3(color: Color3): Color4;
    }
}

declare namespace MB {
    class DOMElement {
        protected _domElem: HTMLElement;
        protected _matrix: Float32Array;
        constructor(domElem?: HTMLElement);
        render(camera: Camera2): void;
    }
}

declare namespace MB {
    /**
     * Encodings namespace
     * @namespace Encodings
     */
    namespace Encodings {
        /**
         * Converts RGB bytes to float.
         * @param {[type]} srcArr [description]
         * @param {[type]} srcOff [description]
         * @param {[type]} dstArr [description]
         * @param {[type]} dstOff [description]
         */
        function RGBByte2Float(srcArr: any, srcOff: any, dstArr: any, dstOff: any): void;
        /**
         * Converts RGB bytes to half float.
         * @param {[type]} srcArr [description]
         * @param {[type]} srcOff [description]
         * @param {[type]} dstArr [description]
         * @param {[type]} dstOff [description]
         */
        function RGBByte2Half(srcArr: any, srcOff: any, dstArr: any, dstOff: any): void;
    }
}

declare namespace MB {
    class Extensions {
        /**
         * Cache extensions
         */
        protected static _extensions: {};
        /**
         * Return a specific extension.
         * @param {GLContext} context [description]
         * @param {string} name Extension name
         * @return {any} Extension (null if undefined)
         */
        static get(context: GLContext, name: string): any;
    }
}

declare namespace MB {
    /**
     * Framebuffer class
     * @class Framebuffer
     *
     * A framebuffer is a collection of buffers that can be
     * used as the destination for rendering.
     */
    class Framebuffer {
        /**
         * Framebuffer size.
         * @type {MB.Vect2}
         */
        protected _size: MB.Vect2;
        /**
         * Framebuffer internal handler.
         * @type {WebGLFramebuffer}
         */
        protected _handler: WebGLFramebuffer;
        protected _attachments: Array<MB.Texture>;
        _renderBuffer: MB.RenderBufferTexture;
        _depth: MB.Texture2D;
        protected _valid: boolean;
        protected _context: GLContext;
        constructor(context: GLContext, textures: Array<MB.Texture>, size: MB.Vect2, depth?: boolean, stencil?: boolean, options?: {});
        /**
         * Enable default framebuffer
         * @param {GLContext} context [description]
         */
        static RestoreDefaultFBO(context: GLContext): void;
        /**
         * Replace a texture on the other in an existing framebuffer attachment
         * @param {MB.Texture} tex    New texture
         * @param {number}  attach Attachment index [0, 15]
         */
        replaceTexture(tex: MB.Texture, attach: number): void;
        /**
         * Check if framebuffer is valid
         * @return {boolean} True if correct framebuffer
         */
        isValid(): boolean;
        /**
         * Return framebuffer status
         * @param {number} status
         */
        private checkStatus(status);
        /**
         * Bind (active) this framebuffer
         */
        bind(): void;
        /**
         * Bind (active) all textures asociated to this framebuffer
         */
        onlyBindTextures(): void;
        /**
         * Unbind (disable) this framebuffer.
         * Enable default framebuffer
         */
        unbind(): void;
        /**
         * Rebuild framebuffer base in a new size
         * @param {MB.Vect2} size New framebuffer size
         */
        rebuild(size: MB.Vect2): void;
        /**
         * Destroy framebuffer and asociated textures.
         */
        destroy(): void;
    }
}

declare namespace MB {
    /**
     * GeometryFunctions namespace
     * @namespace GeometryFunctions
     */
    namespace GeometryFunctions {
        /**
         * Returns triangle centroid (geometry center).
         * @param  {Float32Array} v1 First triangle vertex.
         * @param  {Float32Array} v2 Second triangle vertex.
         * @param  {Float32Array} v3 Third triangle vertex.
         * @return {Float32Array}    Centroid position of given triangle
         */
        function triangleCentroid(v1: Float32Array, v2: Float32Array, v3: Float32Array): Float32Array;
        /**
         * Returns triangle incenter.
         * @param  {Float32Array} v1 First triangle vertex.
         * @param  {Float32Array} v2 Second triangle vertex.
         * @param  {Float32Array} v3 Third triangle vertex.
         * @return {Float32Array}    Incenter position of given triangle
         */
        function triangleIncenter(v1: Float32Array, v2: Float32Array, v3: Float32Array): Float32Array;
        /**
         * Returns a new vertices and indices list removed orphan vertices
         * @param  {Array<Array<number>>} indices   Indices list
         * @param  {Array<Array<number>>} positions Positions list
         * @return {Object}                         New indices (indices)
         *                                              and positions (positions)
         */
        function removeOrphanVertices(indices: Array<Array<number>>, positions: Array<Array<number>>): Object;
        /**
         * Export quad faces to triangle faces
         * @param  {Array<Array<number>>} faces [description]
         * @return {Array}                      [description]
         */
        function triangulateQuadFace(faces: Array<Array<number>>): Array<Array<number>>;
        function removeDegerateIndices(indices: number[][]): number[][];
        function removeDegerateIndicesWithVertices(indices: number[][], vertices: number[][]): number[][];
    }
}

declare namespace MB {
    interface ContextParams {
        alpha?: boolean;
        antialias?: boolean;
        depth?: boolean;
        stencil?: boolean;
        premultipliedAlpha?: boolean;
        preserveDrawingBuffer?: boolean;
    }
    abstract class GLContext {
        protected _canvas: HTMLCanvasElement;
        protected _gl: WebGL2RenderingContext;
        protected _state: GlobalState;
        protected _version: number;
        version: number;
        protected _vendor: string;
        vendor: string;
        protected _renderer: string;
        renderer: string;
        static isSupported(): boolean;
        constructor(canvas: HTMLCanvasElement);
        protected _init(glVersion: string, numVersion: number, params?: ContextParams): void;
        protected _onContextLost(ev: Event): void;
        gl: WebGL2RenderingContext;
        canvas: HTMLCanvasElement;
        state: GlobalState;
        protected _getVendors(): void;
        protected pp: MB.PostProcess;
        getPP(): PostProcess;
        forceGLLost(): void;
    }
}

declare namespace MB {
    class GLContextW1 extends GLContext {
        constructor(canvas: HTMLCanvasElement, params?: ContextParams);
    }
}

declare namespace MB {
    class GLContextW2 extends GLContext {
        constructor(canvas: HTMLCanvasElement, params?: ContextParams);
    }
}

declare namespace MB {
    class CullingState {
        protected _context: GLContext;
        constructor(context: GLContext);
        protected _currentFrontFace: ctes.FaceDir;
        protected _cullingEnabled: boolean;
        protected _cullingFaceMode: ctes.FaceSide;
        /**
         * Cull face enable/disable
         * @param {boolean} enabled True if cull face enable
         */
        setStatus(enabled: boolean): void;
        setFlipSided(flipSided: ctes.FaceDir): void;
        /**
         * Get current cullFace mode
         * @return {MB.ctes.FaceSide}: Current cullFace mode
         */
        getMode(): MB.ctes.FaceSide;
        /**
         * Specify whether front/back-facing facets can be culled.
         * @param {MB.ctes.FaceSide} mode: Cull face mode
         */
        setMode(mode: MB.ctes.FaceSide): void;
        /**
         * Checks if cullFace is activated
         * @return {boolean}: True if activated
         */
        isEnabled(): boolean;
        resetCulling(): void;
    }
    class DepthState {
        protected _context: GLContext;
        constructor(context: GLContext);
        protected _depthEnabled: boolean;
        protected _currentDepthMask: boolean;
        protected _currentDepthFunc: ctes.ComparisonFunc;
        protected _currentDepthClear: any;
        protected _znear: number;
        protected _zfar: number;
        /**
         * Checks if depth test is activated
         * @return {boolean}: True if activated
         */
        isEnabled(): boolean;
        isMask(): boolean;
        getCurrentComparisonFunc(): ctes.ComparisonFunc;
        /**
         * Specify the mode used for depth buffer comparisons.
         * @param {MB.ctes.ComparisonFunc} compFunc: Comparisor mode.
         */
        setFunc(depthFunc: ctes.ComparisonFunc): void;
        setStatus(enabled: boolean): void;
        setMask(mask: boolean): void;
        setClear(depth: number): void;
        /**
         * Clear depth buffer.
         */
        clearBuffer(): void;
        reset(): void;
        /**
         * Specify mapping of depth values from normalized device coordinates to window coordinates.
         * @param {number = 0.0} znear: Specifies the mapping of the near clipping plane to window coordinates.
         * @param {number = 1.0} zfar: Specifies the mapping of the far clipping plane to window coordinates.
         */
        depthRange(znear?: number, zfar?: number): void;
    }
    class ColorState {
        protected _context: GLContext;
        constructor(context: GLContext);
        protected _currentColorMask: Vector4<boolean>;
        protected _currentColorClear: Color4;
        setMask(colorMask: MB.Vector4<boolean>): void;
        setClear(r: number, g: number, b: number, a: number): void;
        /**
         * Set new clear color value.
         * @param {Color4} bgColor: New clear color.
         */
        setClearColor(bgColor: Color4): void;
        reset(): void;
        /**
         * Clear color values
         */
        clearBuffer(): void;
    }
    class ScissorsState {
        protected _context: GLContext;
        protected _scissorsEnabled: boolean;
        protected _scissorsBox: MB.Box2D;
        constructor(context: GLContext);
        status: boolean;
        /**
         * Define the scissor box.
         * @param {number} x: Specifying the horizontal coordinate for the lower left corner of the box.
         * @param {number} y: Specifying the vertical coordinate for the lower left corner of the box.
         * @param {number} width: Specifying the width of the scissor box.
         * @param {number} height: Specifying the height of the scissor box.
         */
        setRectangle(x: number, y: number, width: number, height: number): void;
        /**
         * Define the scissor box.
         * @param {number} x: Specifying the horizontal coordinate for the lower left corner of the box.
         * @param {number} y: Specifying the vertical coordinate for the lower left corner of the box.
         * @param {number} width: Specifying the width of the scissor box.
         * @param {number} height: Specifying the height of the scissor box.
         */
        setRectangleBox2D(b: MB.Box2D): void;
        /**
         * Get scissor rectangle in use.
         * @return {MB.Box2D}: Scissor box size
         */
        getRectangle(): MB.Box2D;
        /**
         * Checks if scissor test is activated
         * @return {boolean}: True if activated
         */
        isEnabled(): boolean;
    }
    class StencilState {
        protected _context: GLContext;
        protected _stencilEnabled: boolean;
        protected _currentStencilMask: number;
        protected _currentStencilFunc: MB.ctes.ComparisonFunc;
        protected _currentStencilRef: number;
        protected _currentStencilFuncMask: number;
        protected _currentStencilFail: MB.ctes.StencilOp;
        protected _currentStencilZFail: MB.ctes.StencilOp;
        protected _currentStencilZPass: MB.ctes.StencilOp;
        protected _currentStencilClear: number;
        constructor(context: GLContext);
        setTest(enabled: boolean): void;
        /**
         * Control the front and back writing of individual bits in the stencil planes
         * @param {number} mask Specifies a bit mask to enable and disable writing of
         *    individual bits in the stencil planes.
         */
        setMaskValue(mask: number): void;
        /**
         * Set front and back function and reference value for stencil testing
         * @param {MB.ctes.ComparisonFunc} compFunc Specifies the test function.
         * @param {number} ref Specifies the reference value for the stencil test
         * @param {number} mask Specifies a mask that is ANDed with both the
         *    reference value and the stored stencil value when the test is done.
         */
        setFunc(compFun: MB.ctes.ComparisonFunc, ref: number, mask: number): void;
        /**
         * Set front and back stencil test actions.
         * @param {MB.ctes.StencilOp} fail Action to take when the stencil test fails.
         * @param {MB.ctes.StencilOp} zfail Stencil action when the stencil test passes,
         *    but the depth test fails.
         * @param {MB.ctes.StencilOp} zpass Specifies the stencil action when both the stencil
         *    and depth test passes.
         */
        setOp(fail: MB.ctes.StencilOp, zfail: MB.ctes.StencilOp, zpass: MB.ctes.StencilOp): void;
        getMaskValue(mask: number): number;
        setClear(s: number): void;
        reset(): void;
        /**
         * Control the front and/or back writing of individual bits in the stencil planes
         * @param {MB.ctes.FaceSide} face Specifies whether the front and/or back stencil writemask is updated
         * @param {number} mask Specifies a bit mask to enable and disable writing of individual
         *    bits in the stencil planes.
         */
        setMaskFace(face: MB.ctes.FaceSide, mask: number): void;
        /**
         * Get front write mask.
         * @return {number}
         */
        getFrontWriteMask(): number;
        /**
         * Get back write mask.
         * @return {number}
         */
        getBackWriteMask(): number;
        /**
         * Get stencil bits.
         * @return {number}
         */
        getBits(): number;
        /**
         * Clear stencil values.
         */
        clearBuffer(): void;
        /**
         * Checks if stencil test is activated.
         * @return {boolean} True if activated.
         */
        isEnabled(): boolean;
    }
    class BlendingState {
        protected _context: GLContext;
        protected _modeRGB: MB.ctes.BlendingEq;
        protected _modeAlpha: MB.ctes.BlendingEq;
        protected _color: MB.Vect4;
        constructor(context: GLContext);
        protected _blendingEnabled: boolean;
        /**
         * Change blending status (eables or disabled)
         * @param {boolean} enabled Enable/disable blending
         */
        setStatus(enabled: boolean): void;
        /**
         * Specify the equation used for both the RGB blend equation and
         *     the Alpha blend equation.
         * @param {MB.ctes.BlendingEq} mode Specifies how source and destination
         *     colors are combined.
         */
        setEquation(mode: MB.ctes.BlendingEq): void;
        /**
         * Set the RGB blend equation and the alpha blend equation separately
         * @param {MB.ctes.BlendingEq} modeRGB Specifies the RGB blend equation,
         *      how thered, green, and blue components of the source and
         *      destination colors are combined.
         * @param {MB.ctes.BlendingEq} modeAlpha Specifies the alpha blend equation,
         *      how the alpha component of the source and destination colors
         *      are combined.
         */
        setEquationSeparate(modeRGB: MB.ctes.BlendingEq, modeAlpha: MB.ctes.BlendingEq): void;
        getquationRGB(): MB.ctes.BlendingEq;
        getEquationAlpha(): MB.ctes.BlendingEq;
        /**
         * Set the source and destination blending factors.
         * @param {number = 0.0} red
         * @param {number = 0.0} green
         * @param {number = 0.0} blue
         * @param {number = 0.0} alpha
         */
        setColor(red?: number, green?: number, blue?: number, alpha?: number): void;
        getColor(): MB.Vect4;
        /**
         * Specify pixel arithmetic.
         * @param {MB.ctes.BlendingMode = MB.ctes.BlendingMode.One} sfactor Specifies how the red,
         *     green, blue, and alpha source blending factors are computed.
         * @param {MB.ctes.BlendingMode = MB.ctes.BlendingMode.Zero} dfactor Specifies how the red,
         *     green, blue, and alpha destination blending factors are computed.
         */
        setFunc(sfactor?: MB.ctes.BlendingMode, dfactor?: MB.ctes.BlendingMode): void;
        /**
         * Specify pixel arithmetic for RGB and alpha components separately.
         * @param {MB.ctes.BlendingMode = MB.ctes.BlendingMode.One} rcRGB Specifies how the red, green,
         *      and blue blending factors are computed.
         * @param {MB.ctes.BlendingMode = MB.ctes.BlendingMode.Zero} dstRGB Specifies how the red, green,
         *      and blue destination blending factors are computed.
         * @param {MB.ctes.BlendingMode = MB.ctes.BlendingMode.One} srcAlpha Specified how the alpha source
         *      blending factor is computed.
         * @param {MB.ctes.BlendingMode = MB.ctes.BlendingMode.Zero} dstAlpha Specified how the alpha destination
         *      blending factor is computed.
         */
        setFuncSeparate(srcRGB?: MB.ctes.BlendingMode, dstRGB?: MB.ctes.BlendingMode, srcAlpha?: MB.ctes.BlendingMode, dstAlpha?: MB.ctes.BlendingMode): void;
        /**
         * Checks if blending is activated
         * @return {boolean} True if activated
         */
        isEnabled(): boolean;
        protected _currentBlending: ctes.BlendingMode2;
        set(blend: MB.ctes.BlendingMode2): void;
    }
    /**
     * GlobalState class
     * @class GlobalState
     *
     * This class is used to manage the WebGL state
     *     machine through a common API.
     */
    class GlobalState {
        protected _context: GLContext;
        constructor(context: GLContext);
        depth: DepthState;
        culling: CullingState;
        color: ColorState;
        stencil: StencilState;
        blending: BlendingState;
        _currentLineWidth: number;
        setLineWidth(width: number): void;
        protected _viewport: Vector4<number>;
        protected _poligonOffsetEnable: boolean;
        protected _currentPolygonOffsetFactor: number;
        protected _currentPolygonOffsetUnits: number;
        setViewport(viewport: Vector4<number>): void;
        /**
         * Specifies the scale factors and units to calculate depth values.
         * The offset is added before the depth test is performed and
         *     before the value is written into the depth buffer.
         * @param {boolean} enable [description]
         * @param {number}  factor [description]
         * @param {number}  units  [description]
         */
        setPolygonOffset(enable: boolean, factor: number, units: number): void;
        clearBuffers(): void;
        clearAllBuffers(): void;
        enable(cap: number): void;
        disable(cap: number): void;
        protected _capabilites: {
            [key: number]: boolean;
        };
    }
}

declare namespace MB {
    /**
    * This class wrap Input
    * @class Input
    */
    class Input {
        constructor();
        /**
         * Initialize input
         */
        static initialize(): void;
        /**
         * Update event
         */
        static update(): void;
        /**
         * Returns if given input key is pressed.
         * @param {MB.ctes.KeyState} keycode Key code.
         * @return {boolean}
         */
        static isKeyPressed(keycode: MB.ctes.KeyState): boolean;
        /**
         * Returns if given input key is clicked.
         * @param {MB.ctes.KeyState} keycode Key code.
         * @return {boolean}
         */
        static isKeyClicked(keycode: MB.ctes.KeyState): boolean;
        /**
         * Returns if given input button is pressed.
         * @param  {MB.ctes.MouseButton}  button Button code.
         * @return {boolean}
         */
        static isButtonPressed(button: MB.ctes.MouseButton): boolean;
        /**
         * Returns if given input button is clicked.
         * @param  {MB.ctes.MouseButton}  button Button code.
         * @return {boolean}
         */
        static isButtonClicked(button: MB.ctes.MouseButton): boolean;
        /**
         * Returns current mouse X position.
         * @return {number} Mouse X position.
         */
        static getMousePosX(): number;
        /**
         * Returns current mouse Y position
         * @return {number} Mouse Y position.
         */
        static getMousePosY(): number;
        protected static _buttonPreviousState: Array<boolean>;
        protected static _isButtonPressed: Array<boolean>;
        protected static _isButtonClicked: Array<boolean>;
        protected static _mousePosX: number;
        protected static _mousePosY: number;
        protected static _keyPreviusState: Array<boolean>;
        protected static _isKeyPressed: Array<boolean>;
        protected static _isKeyClicked: Array<boolean>;
        private static _instance;
        /**
         * OnKeyDown canvas callback
         * @param {KeyboardEvent} ev [description]
         */
        protected static _onKeyDown(ev: KeyboardEvent): void;
        /**
         * OnKeyUp canvas callback
         * @param {KeyboardEvent} ev [description]
         */
        protected static _onKeyUp(ev: KeyboardEvent): void;
        /**
         * OnMouseMove canvas callback
         * @param {KeyboardEvent} ev [description]
         */
        protected static _onMouseMove(ev: MouseEvent): boolean;
        /**
         * OnMouseDown canvas callback
         * @param {KeyboardEvent} ev [description]
         */
        protected static _onMouseDown(ev: MouseEvent): void;
        /**
         * OnMouseUp canvas callback
         * @param {KeyboardEvent} ev [description]
         */
        protected static _onMouseUp(ev: MouseEvent): void;
        protected static _onMouseScroll(ev: MouseEvent): void;
    }
}

declare namespace MB {
    /**
     * InstancedInterleavedBuffer class
     * @class InstancedInterleavedBuffer
     */
    class InstancedInterleavedBuffer extends BufferAttribute {
        protected _meshPerAttr: number;
        constructor(arr: ArrayLike<number>, stride: number, meshPerAttr?: number);
        meshPerAttr: number;
    }
}

declare namespace MB {
    /**
     * Noise namespace
     * @namespace Noise
     */
    namespace Noise {
        namespace fractal {
            function noise(x: number, y: number, z: number, octaves: number, noiseCallback: (x: number, y: number, z: number) => number): number;
        }
        namespace worley {
            function setSeed(seed: number): void;
            function Euclidean(x: any, y: any, z: any): number[];
            function Manhattan(x: any, y: any, z: any): number[];
        }
        namespace perlin {
            function setSeed(seed: number): void;
            function noise(x: number, y: number, z: number): number;
        }
        namespace simplex {
            function setSeed(seed: any): void;
            function noise(x: any, y: any, z: any): number;
        }
    }
}

declare namespace MB {
    /**
    * This class wrap PostProcess effects
    * @class PostProcess
    */
    class PostProcess {
        protected _context: GLContext;
        constructor(context: GLContext);
        /**
         *
         */
        bind(): void;
        /**
         *
         */
        render(): void;
        /**
         * [_planeVAO description]
         * @type {VertexArray}
         */
        protected _planeVAO: MB.VertexArray;
        /**
         * [_planeVertexVBO description]
         * @type {VertexBuffer}
         */
        protected _planeVertexVBO: MB.VertexBuffer;
    }
}

declare namespace MB {
    interface IAttr {
        name: string;
        id: number;
        type: string;
    }
    interface IUnif {
        name: string;
        id: number;
        type: string;
    }
    interface ICachedUnifAttr {
        attributes: Array<IAttr>;
        uniforms: Array<IUnif>;
    }
    /**
     * Program class
     * @class Program
     */
    class Program {
        protected _context: GLContext;
        /**
         * Program constructor
         */
        constructor(context: GLContext);
        /**
         * Program internal handler.
         * @type {WebGLProgram}
         */
        private _handler;
        /**
         * Shaders vector.
         * @type {Array<WebGLShader>}
         */
        private _shaders;
        /**
         * Program status.
         * @type {boolean}
         */
        private _isLinked;
        /**
         * Vertex shader raw code.
         * @type {string}
         */
        _vertexSource: string;
        /**
         * Fragment shader raw code.
         * @type {string}
         */
        _fragmentSource: string;
        /**
         * Program cacheable uniforms
         * @type { [key: string]: WebGLUniformLocation; }
         */
        uniformLocations: {
            [key: string]: WebGLUniformLocation;
        };
        /**
         * Program cacheable attributes
         * @type { [key: string]: number; }
         */
        attribLocations: {
            [key: string]: number;
        };
        /**
         * Caches a list of attributes using varying arguments
         * @param {string[]} ...attrs Attributes names
         */
        addAttributesArgs(...attrs: string[]): void;
        /**
         * Caches a list of attributes using array of strings
         * @param {Array<string>} attrs Array of string that contains attributes names
         */
        addAttributes(attrs: Array<string>): void;
        /**
         * Caches a list of uniforms using varying arguments
         * @param {string[]} ...unifs Uniforms names
         */
        addUniformsArgs(...unifs: string[]): void;
        /**
         * Caches a list of uniforms using array of strings
         * @param {Array<string>} unifs Array of string that contains uniforms names
         */
        addUniforms(unifs: Array<string>): void;
        loadsFromScript(vsShaderID: string, fsShaderID: string): void;
        load(vsShaderCode: string, fsShaderCode: string): void;
        loadWithTF(vsShaderCode: string, fsShaderCode: string, varyings: Array<string>, mode: MB.ctes.TFMode): void;
        /**
         * Return internal program identifier
         * @return {WebGLProgram} [description]
         */
        id(): WebGLProgram;
        /**
         * Attach a new shader to this program.
         * @param {string}                 shader_ String that contains file route, script id or raw shader code.
         * @param {MB.ctes.ProgramCte.shader_type} type    Shader type (Vertex or Fragment).
         * @param {MB.ctes.ProgramCte.mode}        _mode   Shader read mode (from file, from script or raw mode).
         */
        addShader(shader_: string, type: MB.ctes.ShaderType, _mode: MB.ctes.ReadMode): void;
        /**
         * Create shader program and attach vertex and fragment shader.
         */
        _compile(): void;
        /**
         * Link program to current WebGLRenderingContext.
         * @return {boolean} True if linked correctly. False otherwise.
         */
        _link(): boolean;
        compileWithTF(varyings: Array<string>, mode: MB.ctes.TFMode): void;
        /**
         * Compile and link program
         * @return {boolean}: True if not errors
         */
        compile(): boolean;
        complete(): void;
        /**
         * Create shader from file route.
         * @param {string} filePath   File route.
         * @param {number} shaderType Shader type.
         */
        private loadAndCompileWithFile(filePath, shaderType);
        /**
         * Create shader from raw code.
         * @param {string} shaderSource Raw shader code.
         * @param {number} shaderType   Shader type.
         */
        private loadAndCompileFromText(shaderSource, shaderType);
        /**
         * Create shader from HTML shader script
         * @param {string} id         HTML script ID.
         * @param {number} shaderType Shader type.
         */
        private loadAndCompile(id, shaderType);
        protected _processImports(src: string): string;
        /**
         * Compile shader from shader source.
         * @param {string} shaderSource Raw shader code.
         * @param {number} shaderType   Shader type.
         */
        private compileShader(shaderSource, shaderType);
        /**
         * Active program.
         */
        use(): void;
        /**
         * Destroy program.
         */
        destroy(): void;
        /**
         * Send uniform float value.
         * @param {string} name  Uniform name.
         * @param {number} value Float value.
         */
        sendUniform1f(name: string, value: number): void;
        /**
         * Send uniform integer value.
         * @param {string} name  Uniform name.
         * @param {number} value Integer value.
         */
        sendUniform1i(name: string, value: number): void;
        /**
         * Send uniform boolean value.
         * @param {string} name  Uniform name.
         * @param {boolean} value Boolean value.
         */
        sendUniform1b(name: string, value: boolean): void;
        /**
         * Send uniform unsigned integer value.
         * @param {string} name  Uniform name.
         * @param {number} value Unsigned integer value.
         */
        sendUniform1u(name: string, value: number): void;
        /**
         * Send two separated uniform floats value.
         * @param {string} name  Uniform name.
         * @param {number} x    First float value.
         * @param {number} y    Second float value.
         */
        sendUniform2f(name: string, x: number, y: number): void;
        /**
         * Send three separated uniform floats value.
         * @param {string} name  Uniform name.
         * @param {number} x    First float value.
         * @param {number} y    Second float value.
         * @param {number} z    Third float value.
         */
        sendUniform3f(name: string, x: number, y: number, z: number): void;
        /**
         * Send four separated uniform floats value.
         * @param {string} name  Uniform name.
         * @param {number} x    First float value.
         * @param {number} y    Second float value.
         * @param {number} z    Third float value.
         * @param {number} w    Fourth float value.
         */
        sendUniform4f(name: string, x: number, y: number, z: number, w: number): void;
        /**
         * Send uniform vector of float with 2 values.
         * @param {string} name  Uniform name.
         * @param {Float32Array | MB.Vect2} value Vector of floats.
         */
        sendUniformVec2(name: string, value: Float32Array | MB.Vect2): void;
        /**
         * Send uniform vector of float with 3 values.
         * @param {string} name  Uniform name.
         * @param {Float32Array | MB.Vect3} value Vector of floats.
         */
        sendUniformVec3(name: string, value: Float32Array | MB.Vect3): void;
        /**
         * Send uniform vector of float with 4 values.
         * @param {string} name  Uniform name.
         * @param {Float32Array | MB.Vect4} value Vector of floats.
         */
        sendUniformVec4(name: string, value: Float32Array | MB.Vect4): void;
        /**
         * Send uniform mat2.
         * @param {string} name  Uniform name.
         * @param {Float32Array | MB.Mat2} value mat2.
         * @param {boolean = false} transpose Transpose mat2.
         */
        sendUniformMat2(name: string, value: Float32Array | MB.Mat2, transpose?: boolean): void;
        /**
         * Send uniform mat3.
         * @param {string} name  Uniform name.
         * @param {Float32Array | MB.Mat3} value mat3.
         * @param {boolean = false} transpose Transpose mat3.
         */
        sendUniformMat3(name: string, value: Float32Array | MB.Mat3, transpose?: boolean): void;
        /**
         * Send uniform mat4.
         * @param {string} name  Uniform name.
         * @param {Float32Array | MB.Mat4} value mat4.
         * @param {boolean = false} transpose Transpose mat4.
         */
        sendUniformMat4(name: string, value: Float32Array | MB.Mat4, transpose?: boolean): void;
        protected static GL_TO_GLSL_TYPES: {
            "FLOAT": string;
            "FLOAT_VEC2": string;
            "FLOAT_VEC3": string;
            "FLOAT_VEC4": string;
            "INT": string;
            "INT_VEC2": string;
            "INT_VEC3": string;
            "INT_VEC4": string;
            "BOOL": string;
            "BOOL_VEC2": string;
            "BOOL_VEC3": string;
            "BOOL_VEC4": string;
            "FLOAT_MAT2": string;
            "FLOAT_MAT3": string;
            "FLOAT_MAT4": string;
            "SAMPLER_2D": string;
            "SAMPLER_CUBE": string;
            "FLOAT_MAT2x3": string;
            "FLOAT_MAT2x4": string;
            "FLOAT_MAT3x2": string;
            "FLOAT_MAT3x4": string;
            "FLOAT_MAT4x2": string;
            "FLOAT_MAT4x3": string;
            "UNSIGNED_INT": string;
            "UNSIGNED_INT_VEC2": string;
            "UNSIGNED_INT_VEC3": string;
            "UNSIGNED_INT_VEC4": string;
            "UNSIGNED_INT_SAMPLER_2D": string;
            "UNSIGNED_INT_SAMPLER_3D": string;
            "UNSIGNED_INT_SAMPLER_2D_ARRAY": string;
            "UNSIGNED_INT_SAMPLER_CUBE": string;
            "INT_SAMPLER_2D": string;
            "INT_SAMPLER_3D": string;
            "INT_SAMPLER_2D_ARRAY": string;
            "INT_SAMPLER_CUBE": string;
        };
        protected static GL_TABLE: any;
        /**
         * Return uniform or attribute human readable type.
         * @param  {WebGL2RenderingContext} gl   WebGLRenderingContext
         * @param  {number} type WebGL internal uniform/attribute type.
         * @return {string}
         */
        static getType(gl: WebGL2RenderingContext, type: number): string;
        ubos: {
            [key: string]: VertexUBO;
        };
        /**
         * Caches a list of ubos using array of any (name, id)
         * @param {Array<any>} attrs Array of string that contains ubos names
         */
        addUbos(ubos: Array<any>): void;
        /**
         * Autocatching all actives uniforms and attributes for program.
         */
        autocatching(): void;
        /**
         * Return a object that contains active attributes and uniforms in program.
         * @return {ICachedUnifAttr}
         */
        unifAndAttribs(): ICachedUnifAttr;
        /**
         * Return if program is linked
         * @return {boolean}
         */
        isLinked(): boolean;
        /**
         * Attach transform feedback varying to this program.
         * Only call this before linking program.
         * @param {Array<string>} varyings Array of string that contains varying attributes.
         * @param {MB.ctes.TFMode}        mode     Transform Feedback mode (record mode).
         */
        feedbackVarying(varyings: Array<string>, mode: MB.ctes.TFMode): void;
        /**
         * Add a foo fragment shader.
         * Useful for transform feedback or shadow techniques.
         */
        setFooFragment(): void;
        debugShaders(): void;
    }
}

declare namespace MB {
    /**
     * Query class.
     * @class Query
     *
     * Query Objects are objects that are used for asynchronous
     *     queries of certain kinds of information.
     */
    class Query {
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
        constructor(context: GLContext);
        /**
         * Delete query object
         */
        destroy(): void;
        /**
         * Start the asynchronous query.
         * @param {MB.ctes.QueryTarget} target Indicate which kind of query to begin.
         */
        begin(target: MB.ctes.QueryTarget): void;
        /**
         * Marks the end of a given query target.
         * @param {MB.ctes.QueryTarget} target Specifying the target of the query.
         */
        end(target: MB.ctes.QueryTarget): void;
        useAnySamples(cb: Function): void;
        useAnySamplesConservative(cb: Function): void;
        useTransfFeedbackPrimWritten(cb: Function): void;
        oneUse(target: MB.ctes.QueryTarget, cb: Function): void;
        /**
         * Return query param
         * @param  {MB.ctes.QueryParams} param [description]
         * @return {any}               [description]
         */
        getParameter(param: MB.ctes.QueryParams): any;
        /**
         * Return a boolean indicating whether or not a query
         *     result is available.
         * @return {boolean} Query has result now.
         */
        isResultAvailable(): boolean;
        /**
         * Return a number containing the query result.
         * @return {number} Query result (0 or 1)
         */
        getResult(): number;
    }
}

declare namespace MB {
    /**
     * RandomGenerator namespace
     * @namespace RandomGenerator
     *
     * Examples:
     *
     *     // Real random [0, 1) (Same interval as Math.random)
     *     - RandomGenerator.random();
     *     // [0, 4294967295]
     *     - RandomGenerator.randomInt();
     *     // [0,1]
     *     - RandomGenerator.randomIncl();
     *     // (0,1)
     *     - RandomGenerator.randomExcl();
     *     // [0,1) with 53-bit resolution
     *     - RandomGenerator.randomLong();
     *     // [0, 2147483647]
     *     - RandomGenerator.randomInt31();
     */
    namespace RandomGenerator {
        /**
         * Init RandomGenerator with custom seed
         * @param {number} seed New seed number generator
         */
        function setSeed(seed: number): void;
        /**
         * Generates a random number on [0, 0xffffffff]-interval
         * @return {number}
         */
        function randomInt(): number;
        /**
         * Generates a random number on [0, 0x7fffffff]-interval
         * @return {number}
         */
        function randomInt31(): number;
        /**
         * Generates a random number on [0, 1]-real-interval
         * @return {number}
         */
        function randomIncl(): number;
        function random(): number;
        /**
         * Generates a random number on (0,1)-real-interval
         * @return {number}
         */
        function randomExcl(): number;
        /**
         * Generates a random number on [0,1) with 53-bit resolution
         * @return {number}
         */
        function randomLong(): number;
        function randomGaussian(mean?: number, stdev?: number): number;
    }
}

declare namespace MB {
    interface SamplerParams {
        minFilter?: number;
        magFilter?: number;
        wrapS?: number;
        wrapT?: number;
        wrapR?: number;
        minLOD?: number;
        maxLOD?: number;
        compareFunc?: number;
        compareMode?: number;
        anisotropic?: number;
        maxLevel?: number;
        baseLevel?: number;
    }
    /**
     * Sampler class.
     * @class Sampler
     *
     * Sampler Object are objects that stores the sampling
     *     parameters for a Texture access inside of a shader.
     */
    class Sampler {
        _handler: WebGLSampler;
        protected _context: GLContext;
        /**
         * [constructor description]
         * @param {GLContext} context [description]
         */
        constructor(context: GLContext);
        /**
         * Set a list of texture parameters (filters, wraps, LOD, ...).
         * @param {SamplerParams} params SamplerParams interface.
         */
        setParams(params: SamplerParams): void;
        /**
         * Bind (active) sampler.
         * @param {number} unit Specifying the index of the texture
         *                       to which to bind the sampler.
         */
        bind(unit: number): void;
        /**
         * Unbind (disable) sampler.
         * @param {number} unit Specifying the index of the texture
         *                       to which to unbind the sampler.
         */
        unbind(unit: number): void;
        /**
         * Set a unique texture parameter.
         * @param {ctes.SamplerParameter} name  Parameter name.
         * @param {number} param Parameter value.
         */
        parameteri(name: ctes.SamplerParameter, param: number): void;
        /**
         * Set a unique texture parameter.
         * @param {ctes.SamplerParameter} name  Parameter name.
         * @param {number} param Parameter value.
         */
        parameterf(name: ctes.SamplerParameter, param: number): void;
        /**
         * Return parameter for this sampler object.
         * @param {ctes.SamplerParameter} name  Parameter name.
         */
        getParameter(name: ctes.SamplerParameter): any;
        /**
         * Destroy sampler object.
         */
        destroy(): void;
        /**
         * Return if this sampler is a valid sampler.
         * @return {boolean}
         */
        isValid(): boolean;
    }
}

declare namespace MB {
    /**
     * Sync class
     * @class Sync
     *
     * Sync Objects are objects that are used to synchronize
     * the activity between the GPU and the application.
     * glFinish​ is a start to synchronization,
     * but sync objects allow for much finer grained control.
     */
    class Sync {
        protected _handler: WebGLSync;
        protected _context: GLContext;
        /**
         * Sync constructor.
         * @param {GLContext} context [description]
         * @param {ctes.SyncCondition = ctes.SyncCondition.GPUCommandsComplete} condition Sync condition.
         */
        constructor(context: GLContext, condition?: ctes.SyncCondition);
        clientWait(timeout: number): ctes.SyncWaitResult;
        /**
         * Destroy sync object.
         */
        destroy(): void;
        /**
         * Return if sync object is a valid sync.
         * @return {boolean} True if sync object is valid.
         */
        isValid(): boolean;
        /**
         * Instruct the server to block until the sync object becomes signaled.
         * @param {number = -1} timeout Specifies the timeout that the server
         *                  should wait before continuing.
         */
        wait(timeout?: number): void;
        /**
         * Returns current sync status.
         * @return {ctes.SyncStatus} Current sync status.
         */
        status(): ctes.SyncStatus;
        /**
         * Returns current sync condition.
         * @return {ctes.SyncStatus} Current sync condition.
         */
        condition(): ctes.SyncCondition;
        /**
         * Returns current sync type.
         * @return {ctes.SyncStatus} Current sync type.
         */
        type(): ctes.SyncType;
        /**
         * Checks if sync is signaled.
         * @return {boolean}
         */
        isSignaled(): boolean;
        /**
         * Returns current sync status.
         * @return {ctes.SyncStatus}
         */
        signaled: ctes.SyncStatus;
    }
}

declare namespace MB {
    /**
     * Timer namespace
     * @namespace Timer
     */
    namespace Timer {
        /**
         * Update timer
         */
        function update(): void;
        /**
         * Return the seconds passed since the last update
         * @return {number} Delta time
         */
        function deltaTime(): number;
    }
}

declare namespace MB {
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
    class TransformFeedback {
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
        constructor(context: GLContext);
        /**
         * Delete TransformFeedback object.
         */
        destroy(): void;
        /**
         * Bind this TransformFeedback object to current GL state.
         */
        bind(): void;
        /**
         * Unbind this TransformFeedback object to current GL state.
         */
        unbind(): void;
        /**
         * Init TransformFeedback operation using given mode.
         * @param {MB.ctes.TFPrimitive} mode TransformFeedback mode.
         */
        begin(mode: MB.ctes.TFPrimitive): void;
        /**
         * Init TransformFeedback operation using point mode.
         */
        beginPoints(): void;
        /**
         * Init TransformFeedback operation using line mode.
         */
        beginLines(): void;
        /**
         * Init TransformFeedback operation using triangle mode.
         */
        beginTriangles(): void;
        /**
         * Finish TransformFeedback operation.
         */
        end(): void;
        /**
         * Pause TransformFeedback operation.
         */
        pause(): void;
        /**
         * Resume TransformFeedback operation.
         */
        resume(): void;
        /**
         * Specifies values to record in TransformFeedback buffers.
         * @param {GLContext} context [description]
         * @param {Program}       program    Program targe object.
         * @param {Array<string>} varyings   [description]
         * @param {ctes.TFMode}        bufferMode [description]
         */
        static varyings(context: GLContext, program: Program, varyings: Array<string>, bufferMode: ctes.TFMode): void;
        /**
         * Return information about varying variables specifies in the previous
         *     call to "varyings" method.
         * @param  {Program}         program [description]
         * @param  {number}          idx     [description]
         * @return {VaryingInfo}         [description]
         */
        getVarying(program: Program, idx: number): VaryingInfo;
        /**
         * Return true if this object is a valid TransformFeedback object.
         * @return {boolean} [description]
         */
        isValid(): boolean;
        /**
         * Returns current data from transform feedback buffer.
         * @param  {number}         numElems [description]
         * @return {Float32Array}         [description]
         */
        extractData(numElems: number): Float32Array;
    }
    /**
     * Contains type and name attributes for transform feedback.
     * @interface VaryingInfo
     */
    interface VaryingInfo {
        name: string;
        type: string;
    }
}

declare namespace MB {
    namespace Utils {
        /**
         * Concat two Uint8Array's.
         * @param  {Uint8Array} first  First operand.
         * @param  {Uint8Array} second Second operand.
         * @return {Uint8Array}        New Uint8Array with both
         *                                 operands concatenated.
         */
        function Uint8Concat(first: Uint8Array, second: Uint8Array): Uint8Array;
        /**
         * Concat two Uint16Array's.
         * @param  {Uint16Array} first  First operand.
         * @param  {Uint16Array} second Second operand.
         * @return {Uint16Array}        New Uint16Array with both
         *                                  operands concatenated.
         */
        function Uint16Concat(first: Uint16Array, second: Uint16Array): Uint16Array;
        /**
         * Concat two Uint32Array's.
         * @param  {Uint32Array} first  First operand.
         * @param  {Uint32Array} second Second operand.
         * @return {Uint32Array}        New Uint32Array with both
         *                                  operands concatenated.
         */
        function Uint32Concat(first: Uint32Array, second: Uint32Array): Uint32Array;
        /**
         * Concat two Int8Array's.
         * @param  {Int8Array} first  First operand.
         * @param  {Int8Array} second Second operand.
         * @return {Int8Array}        New Int8Array with both
         *                                operands concatenated.
         */
        function Int8Concat(first: Int8Array, second: Int8Array): Int8Array;
        /**
         * Concat two Int16Array's.
         * @param  {Int16Array} first  First operand.
         * @param  {Int16Array} second Second operand.
         * @return {Int16Array}        New Int16Array with both
         *                                 operands concatenated.
         */
        function Int16Concat(first: Int16Array, second: Int16Array): Int16Array;
        /**
         * Concat two Int32Array's.
         * @param  {Int32Array} first  First operand.
         * @param  {Int32Array} second Second operand.
         * @return {Int32Array}        New Int32Array with both
         *                                 operands concatenated.
         */
        function Int32Concat(first: Int32Array, second: Int32Array): Int32Array;
        /**
         * Concat two Float32Array's.
         * @param  {Float32Array} first  First operand.
         * @param  {Float32Array} second Second operand.
         * @return {Float32Array}        New Float32Array with both
         *                                   operands concatenated.
         */
        function Float32Concat(first: Float32Array, second: Float32Array): Float32Array;
        /**
         * Concat two Float64Array's.
         * @param  {Float64Array} first  First operand.
         * @param  {Float64Array} second Second operand.
         * @return {Float64Array}        New Float64Array with both
         *                                   operands concatenated.
         */
        function Float64Concat(first: Float64Array, second: Float64Array): Float64Array;
        /**
         * Download canvas image.
         * @param {HTMLCanvasElement} canvas Canvas to download image.
         * @param {string = "file.png"}  name Image name (with extension).
         */
        function downloadCanvasImage(canvas: HTMLCanvasElement, name?: string): void;
        function arrayToVector(elements: Array<number>): any;
        function readScriptShader(script: string): string;
        /**
         * Take input array and return flattened single-dim array
         * @param  {Array<any>}    arr [description]
         * @return {Array<number>}     [description]
         */
        function flattenArray(arr: Array<any>): Array<number>;
    }
}

declare namespace MB {
    class VertexArray {
        protected _context: GLContext;
        /**
         * [_handler description]
         * @type {WebGLVertexArrayObject}
         */
        protected _handler: WebGLVertexArrayObject;
        /**
         * Vertex array constructor.
         * @param {GLContext} context [description]
         * @param {WebGLVertexArrayObject} vao [description]
         */
        constructor(context: GLContext);
        /**
         * [wrap description]
         * @param {WebGLVertexArrayObject} vao [description]
         */
        static wrap(vao: any): VertexArray;
        /**
         * [bind description]
         */
        bind(): void;
        /**
         * [unbind description]
         */
        unbind(): void;
        /**
         * Destroy vertex array.
         */
        destroy(): void;
        /**
         * Check if current context supports VertexArray.
         * @param {GLContext} context [description]
         * @return {boolean} True if current context supports VertexArray
         */
        static isSupported(context: GLContext): boolean;
    }
}

declare namespace MB {
    /**
     * VertexBuffer class
     * @class VertexBuffer
     */
    class VertexBuffer {
        /**
         * VertexBuffer internal buffer handler.
         * @type {WebGLBuffer}
         */
        protected _handler: WebGLBuffer;
        protected _context: GLContext;
        /**
         * VertexBuffer internal type.
         * @type {ctes.BufferType}
         */
        protected _type: ctes.BufferType;
        /**
         * Vertex buffer constructor.
         * @param {GLContext} context [description]
         * @param {ctes.BufferType = ctes.BufferType.Array}
         */
        constructor(context: GLContext, type?: ctes.BufferType);
        /**
         * Bind vertex buffer.
         * @param {MB.ctes.BufferType} type
         */
        bind(type?: MB.ctes.BufferType): void;
        /**
         * Unbind vertex buffer.
         */
        unbind(): void;
        /**
         * Returns interla buffer type.
         * @return {ctes.BufferType}
         */
        getBufferType(): ctes.BufferType;
        /**
         * Returns internal buffer handler.
         * @return {WebGLBuffer}
         */
        getBuffer(): WebGLBuffer;
        /**
         * [destroy description]
         */
        destroy(): void;
        /**
         * [bufferData description]
         * @param {Float32Array | Uint16Array | number}          data  [description]
         * @param {ctes.UsageType =B.ctes.UsageType.StaticDraw} usage [description]
         */
        bufferData(data: Float32Array | Uint16Array | number, usage?: MB.ctes.UsageType): void;
        /**
         * [attribDivisor description]
         * @param {number}    position [description]
         * @param {number}    length   [description]
         * @param {number}    divisor  [description]
         * @param {number =        0}           stride [description]
         */
        attribDivisor(position: number, length: number, divisor: number, stride?: number): void;
        /**
         * [vertexAttribPointer description]
         * @param {number}     attribLocation [description]
         * @param {number}     numElems       [description]
         * @param {number}     type           [description]
         * @param {boolean =              false}       normalized [description]
         * @param {number  =              0}           offset     [description]
         */
        vertexAttribPointer(attribLocation: number, numElems: number, type: number, normalized?: boolean, offset?: number): void;
        /**
         * [copySub description]
         * @param {number}     readTarget [description]
         * @param {number}     writeTarget [description]
         * @param {number}     readOffset [description]
         * @param {number}     writeOffset [description]
         * @param {number}     size [description]
         */
        copySub(readTarget: number, writeTarget: number, readOffset: number, writeOffset: number, size: number): void;
        bindBufferBase(target: number, index?: number): void;
    }
}

declare namespace MB {
    namespace VBType {
        const VBVertices: string;
        const VBNormals: string;
        const VBTexCoord: string;
    }
    /**
     * VertexBufferGeometry class
     * @class VertexBufferGeometry
     */
    class VertexBufferGeometry {
        protected _indices: Uint16Array;
        /**
         * Hashmap with key as attribute ID and value a BufferGeometry instance
         * @type {string[BufferAttribute]}
         */
        protected _attrs: {
            [key: string]: BufferAttribute;
        };
        /**
         * Add an attribute to this VertexBufferGeometry.
         * @param {string}          type      [description]
         * @param {BufferAttribute} attribute [description]
         */
        addAttr(type: string, attribute: BufferAttribute): void;
        /**
         * Return attribute with given specified name
         * @param {string} name Attribute name
         */
        getAttr(name: string): BufferAttribute;
        /**
         * Remove attribute with given specified name
         * @param {string} type [description]
         */
        removeAttr(type: string): void;
        setIndex(indices: Uint16Array): void;
        indices: Uint16Array;
        normalizeNormals(): void;
        toNotIndexed(): VertexBufferGeometry;
        merge(geom2: VertexBufferGeometry, offset?: number): VertexBufferGeometry;
        /**
         * Compute the bounding box of the geometry
         * @return {MB.Box3D} BoundingBox
         */
        computingBoundingBox(): MB.Box3D;
    }
}

declare namespace MB {
    /**
     * VertexUBO class
     * @class VertexUBO
     *
     * Such buffers can send information to programs (in block form)
     * more efficiently than variables uniform manner.
     */
    class VertexUBO {
        /**
         * Uniform Buffer Object handler.
         * @type {WebGLBuffer}
         */
        protected _handle: WebGLBuffer;
        protected _context: GLContext;
        protected _index: number;
        constructor(context: GLContext, program: Program, name: string, blockBindIdx: number);
        /**
         * Bind Uniform Buffer Object.
         */
        bind(): void;
        /**
         * Update UBO values.
         * @param {Float32Array} data [description]
         */
        update(data: Float32Array): void;
        /**
         * Unbind Uniform Buffer Object.
         */
        unbind(): void;
        /**
         * Destroy UBO object.
         */
        destroy(): void;
        /**
         * Returns if the current context allows use UBO.
         * @param {GLContext} context [description]
         * @return {boolean} True if allows use UBO.
         */
        static isSupported(context: GLContext): boolean;
    }
}

declare namespace MB {
    interface WorkerReduceOptions {
        reduceFunc: Function;
        initialValue?: any;
        onComplete: Function;
    }
    class WorkerGroup {
        protected _workers: Array<Worker>;
        protected _configs: any;
        constructor(filename: string, n: number);
        map(cb: Function): void;
        reduce(opt: WorkerReduceOptions): void;
    }
}

declare namespace MBX {
    class Axis extends MB.Drawable {
        indices: number[];
        colors: number[];
        constructor(context: MB.GLContext, dim?: number);
        private _createVertices(dim);
        render(): void;
    }
}

declare namespace MBX {
    /**
     * BillboardOpts interface.
     * @interface BillboardOpts
     */
    interface BillboardOpts {
        texture: MB.Texture2D;
        hi?: Array<number>;
        lo?: Array<number>;
        width?: number;
        height?: number;
        model?: Float32Array;
        view?: Float32Array;
        projection?: Float32Array;
    }
    /**
     * Billboard class.
     * @class Billboard
     */
    class Billboard {
        static mesh: MB.CustomModel;
        static program: MB.Program;
        static initialize(context: MB.GLContext): void;
        static bind(): void;
        static draw(position: Float32Array, opts: BillboardOpts): void;
        static unbind(): void;
    }
}

declare namespace MB {
    /**
     * Cloc_k class
     * @class Clock
     */
    class Clock {
        protected _autostart: boolean;
        /**
         * Keeps track whether the clock is running or not.
         * @type {boolean}
         */
        protected _running: boolean;
        /**
         * Hold the start time of the clock.
         * @type {number}
         */
        protected _startTime: number;
        /**
         * Hold the previous time from a update.
         * @type {number}
         */
        protected _oldTime: number;
        /**
         * Hold the time elapsed between the start
         *     of the clock to the previous update.
         * @type {number}
         */
        protected _elapsed: number;
        /**
         * Clock constructor.
         * Used for keeping track of time.
         * @param {boolean = true} autostart Automatically start the clock.
         */
        constructor(_autostart?: boolean);
        /**
         * Starts clock.
         */
        start(): void;
        /**
         * Stop clock
         */
        stop(): void;
        /**
         * Returns the seconds passed since the clock started.
         * @return {number} Elapsed time.
         */
        elapsedTime(): number;
        /**
         * Returns the seconds passed since the last call of this method (Call this onRenderLoop)
         * @return {number} Delta time.
         */
        delta(): number;
    }
}

declare namespace MB {
    /**
     * CustomPingPong class.
     * This class may be used, for example, for purposes that require
     *   a previous step, as the Path Tracing algorithm, swap functions,
     *   swap textures, ...
     * @class CustomPingPong
     */
    class CustomPingPong<T> {
        protected _elems1: T;
        protected _elems2: T;
        protected _callback: Function;
        /**
         * CustomPingPong<T> constructor.
         * @param {T} elem1 First element.
         * @param {T} elem2 Second element.
         */
        constructor(elem1: T, elem2: T);
        setCB(cb: Function): void;
        /**
         * Swap ping pong inner objects.
         */
        swap(cb?: Function): void;
        /**
         * Returns first object.
         * @return {T}
         */
        first(): T;
        /**
         * Returns last object.
         * @return {T}
         */
        last(): T;
    }
}

declare namespace MBX {
    /**
     * This namespace includes various methods of easing values.
     * @namespace Easing
     */
    namespace Easing {
        namespace sine {
            /**
             * Easing equation for a sinusoidal (sin(t)) ease-in,
             * accelerating from zero velocity.
             * @param  {number} t Time
             * @return {number}
             */
            function easeIn(t: number): number;
            /**
             * Easing equation for a sinusoidal (sin(t)) ease-out,
             *     decelerating from zero velocity.
             * @param  {number} t Time
             * @return {number}
             */
            function easeOut(t: number): number;
            /**
             * Easing equation for a sinusoidal (sin(t)) ease-in/out,
             *     accelerating until halfway, then decelerating.
             * @param  {number} t Time
             * @return {number}
             */
            function easeInOut(t: number): number;
        }
        namespace quad {
            /**
             * Easing equation for a quadratic (t^2) ease-in,
             *     accelerating from zero velocity.
             * @param  {number} t Time
             * @return {number}
             */
            function easeIn(t: number): number;
            /**
             * Easing equation for a quadratic (t^2) ease-out,
             *     decelerating to zero velocity.
             * @param  {number} t Time
             * @return {number}
             */
            function easeOut(t: number): number;
            /**
             * Easing equation for a quadratic (t^2) ease-in/out,
             *     accelerating until halfway, then decelerating.
             * @param  {number} t Time
             * @return {number}
             */
            function easeInOut(t: number): number;
        }
        namespace cubic {
            /**
             * Easing equation function for a cubic (t^3) ease-in,
             *     accelerating from zero velocity.
             * @param  {number} t Time
             * @return {number}
             */
            function easeIn(t: number): number;
            /**
             * Easing equation for a cubic (t^3) ease-out,
             * decelerating to zero velocity.
             * @param  {number} t Time
             * @return {number}
             */
            function easeOut(t: number): number;
            /**
             * Easing equation for a cubic (t^3) ease-in/out,
             *     accelerating until halfway, then decelerating.
             * @param  {number} t Time
             * @return {number}
             */
            function easeInOut(t: number): number;
        }
        namespace quart {
            /**
             * Easing equation for a quartic (t^4) ease-in,
             * accelerating from zero velocity.
             * @param  {number} t Time
             * @return {number}
             */
            function easeIn(t: number): number;
            /**
             * Easing equation for a quartic (t^4) ease-out,
             *     decelerating to zero velocity.
             * @param  {number} t Time
             * @return {number}
             */
            function easeOut(t: number): number;
            /**
             * Easing equation for a quartic (t^4) ease-in/out,
             * accelerating until halfway, then decelerating.
             * @param  {number} t Time
             * @return {number}
             */
            function easeInOut(t: number): number;
        }
        namespace quint {
            /**
             * Easing equation function for a quintic (t^5) ease-in,
             *     accelerating from zero velocity.
             * @param  {number} t Time
             * @return {number}
             */
            function easeIn(t: number): number;
            /**
             * Easing equation for a quintic (t^5) ease-out,
             *     decelerating to zero velocity..
             * @param  {number} t Time
             * @return {number}
             */
            function easeOut(t: number): number;
            /**
             * Easing equation for a quintic (t^5) ease-in/out,
             *     accelerating until halfway, then decelerating.
             * @param  {number} t Time
             * @return {number}
             */
            function easeInOut(t: number): number;
        }
        namespace expo {
            /**
             * Easing equation for an exponential (2^t) ease-in,
             *     accelerating from zero velocity.
             * @param  {number} t Time
             * @return {number}
             */
            function easeIn(t: number): number;
            /**
             * Easing equation for an exponential (2^t) ease-out,
             *     decelerating from zero velocity.
             * @param  {number} t Time
             * @return {number}
             */
            function easeOut(t: number): number;
            /**
             * Easing equation for an exponential (2^t) ease-in/out,
             *     accelerating until halfway, then decelerating.
             * @param  {number} t Time
             * @return {number}
             */
            function easeInOut(t: number): number;
        }
        namespace circ {
            /**
             * Easing equation for a circular (sqrt(1-t^2)) ease-in,
             *     accelerating from zero velocity.
             * @param  {number} t Time
             * @return {number}
             */
            function easeIn(t: number): number;
            /**
             * Easing equation for a circular (sqrt(1-t^2)) ease-out,
             *     decelerating from zero velocity.
             * @param  {number} t Time
             * @return {number}
             */
            function easeOut(t: number): number;
            /**
             * Easing equation for a circular (sqrt(1-t^2)) ease-in/out,
             *     accelerating until halfway, then decelerating.
             * @param  {number} t Time
             * @return {number}
             */
            function easeInOut(t: number): number;
        }
        namespace back {
            /**
             * Easing equation for a back (overshooting cubic easing:
             *     (s+1)*t^3 - s*t^2) ease-in, accelerating from zero velocity.
             * @param  {number} t Time
             * @return {number}
             */
            function easeIn(t: number): number;
            /**
             * Easing equation for a back (overshooting cubic easing:
             *     (s+1)*t^3 - s*t^2) ease-out, decelerating from zero velocity.
             * @param  {number} t Time
             * @return {number}
             */
            function easeOut(t: number): number;
            /**
             *  Easing equation for a back (overshooting cubic easing:
             *      (s+1)*t^3 - s*t^2) ease-in/out, accelerating until halfway,
             *      then decelerating.
             * @param  {number} t Time
             * @return {number}
             */
            function easeInOut(t: number): number;
        }
        namespace elastic {
            /**
             * Easing equation for an elastic (exponentially decaying
             *     sine wave) ease-in, accelerating from zero velocity.
             * @param  {number} t Time
             * @return {number}
             */
            function easeIn(t: number): number;
            /**
             * Easing equation for an elastic (exponentially decaying
             *     sine wave) ease-out, decelerating from zero velocity.
             * @param  {number} t Time
             * @return {number}
             */
            function easeOut(t: number): number;
            /**
             * Easing equation for an elastic (exponentially decaying
             *     sine wave) ease-out/in, decelerating until halfway,
             *     then accelerating.
             * @param  {number} t Time
             * @return {number}
             */
            function easeInOut(t: number): number;
        }
        namespace bounce {
            /**
             * Easing equation for a bounce (exponentially decaying parabolic
             *     bounce) ease-in, accelerating from zero velocity.
             * @param  {number} t Time
             * @return {number}
             */
            function easeIn(t: number): number;
            /**
             * Easing equation for a bounce (exponentially decaying parabolic
             *     bounce) ease-out, decelerating from zero velocity.
             * @param  {number} t Time
             * @return {number}
             */
            function easeOut(t: number): number;
            /**
             * Easing equation for a bounce (exponentially decaying parabolic
             *     bounce) ease-in/out, accelerating until halfway, then decelerating.
             * @param  {number} t Time
             * @return {number}
             */
            function easeInOut(t: number): number;
        }
    }
}

declare namespace MBX {
    interface Event {
        type: string;
        target?: any;
    }
    interface EventListener {
        (ev: MBX.Event): void;
    }
    class EventDispatcher {
        addEventListener(eventType: string, cb: MBX.EventListener): void;
        removeEventListener(eventType: string, cb: MBX.EventListener): void;
        dispatchEvent(ev: MBX.Event): void;
        hasEvent(eventType: string, cb: MBX.EventListener): boolean;
        protected _callbacks: {
            [eventType: string]: [MBX.EventListener];
        };
    }
}

declare namespace MBX {
    /**
     * GBuffer class
     * This class lets you use deferred shading technique.
     * @class GBuffer
     */
    class GBuffer {
        /**
         * Framebuffer handler
         * @type {Framebuffer}
         */
        protected Framebuffer: MB.Framebuffer;
        /**
         * GBuffer constructor.
         * @param {GLContext} context [description]
         * @param {MB.Vect2} size GBuffer size
         */
        constructor(context: MB.GLContext, size: MB.Vect2);
        /**
         * Bind GBuffer for reading (postpass)
         */
        bindForReading(): void;
        /**
         * Bind GBuffer for writing (prepass)
         */
        bindForWriting(): void;
        /**
         * Destroy GBuffer
         */
        destroy(): void;
        /**
         * Rebuild GBuffer
         * @param {Vect2} size New GBuffer size
         */
        rebuild(size: MB.Vect2): void;
    }
}

declare namespace MB {
    /**
     * PingPong class.
     * This class may be used, for example, for purposes that require
     *   a previous step, as the Path Tracing algorithm.
     * @class PingPong
     */
    class PingPong {
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
        constructor(context: GLContext, size: MB.Vect2);
        /**
         * Replace textures.
         */
        pingpong(): void;
        /**
         * Resize ping pong texture
         * @param {MB.Vect2} size New size
         */
        resize(size: MB.Vect2): void;
    }
}

declare namespace MBX {
    /**
     * PointCloud class
     * @class PointCloud
     */
    class PointCloud {
    }
}

declare namespace MBX {
    /**
     * Ray class
     * @class Ray
     */
    class Ray {
        protected _origin: MB.Vect3;
        protected _direction: MB.Vect3;
        /**
         * Ray constructor.
         * @param {MB.Vect3 = new MB.Vect3()} origin: Ray origin point.
         * @param {MB.Vect3 = new MB.Vect3()} direction: Ray direction.
         */
        constructor(origin?: MB.Vect3, direction?: MB.Vect3);
        /**
         * Get ray origin point.
         * @return {MB.Vect3}
         */
        /**
         * Set ray origin point.
         * @param {MB.Vect3} origin New origin point.
         */
        origin: MB.Vect3;
        /**
         * Get ray direction.
         * @return {MB.Vect3}
         */
        /**
         * Set ray direction.
         * @param {MB.Vect3} origin New direction point.
         */
        direction: MB.Vect3;
        /**
         * Evaluate ray at t position.
         * @param  {number} t Position to evaluate.
         * @return {MB.Vect3}    New position at t.
         */
        at(t: number): MB.Vect3;
        /**
         * Change the viewing direction of the ray.
         * @param {MB.Vect3} v Object to look.
         */
        lookAt(v: MB.Vect3): void;
    }
}

declare namespace MBX {
    /**
     * Skybox class
     * @class Skybox
     */
    class Skybox {
        /**
         * Internal MB.VertexArray
         * @type {MB.VertexArray}
         */
        protected _VertexArray: MB.VertexArray;
        /**
         * Internal MB.VertexBuffer
         * @type {MB.VertexBuffer}
         */
        protected _VertexBuffer: MB.VertexBuffer;
        /**
         * Internal material that draw skybox
         * @type {MB.ShaderMaterial}
         */
        protected _prog: MB.ShaderMaterial;
        /**
         * Internal CubeMap texture
         * @type {MB.CubeMapTexture}
         */
        protected _cubeMapTexture: MB.CubeMapTexture;
        /**
         * Return internal CubeMap texture
         * @return {MB.CubeMapTexture}
         */
        texture: MB.CubeMapTexture;
        protected _context: MB.GLContext;
        /**
         * Skybox constructor
         * @param {MB.GLContext} context [description]
         * @param {string} dir Skybox directory (without "/")
         * @param {boolean = true} isWebGL2 [description]
         */
        constructor(context: MB.GLContext, dir: string);
        /**
         * Render skybox using given view and projetion mat4
         * @param {MB.Mat4} view       View matrix
         * @param {MB.Mat4} projection Projection matrix
         */
        render(view: MB.Mat4, projection: MB.Mat4): void;
        /**
         * Destroy skybox.
         */
        destroy(): void;
        /**
         * Loads all cubemaps faces.
         * @param {Array<string>} faces Array of image routes.
         */
        protected _loadCubemap(faces: Array<string>): void;
    }
}

declare namespace MBX {
    /**
     * Sprite class
     * @class Sprite
     */
    class Sprite {
        protected _geometry: MB.VertexBufferGeometry;
        constructor();
        setPosition(pos: MB.Vect3): void;
    }
}

declare namespace MB {
    /**
     * Light abstract class
     * @class Light
     */
    abstract class Light {
        /**
         * Light source intensity [0, 1]
         * @type {number}
         */
        protected _intensity: number;
        /**
         * Light diffuse color.
         * @type {MB.Color3}
         */
        protected _color: MB.Color3;
        /**
         * Light specular color.
         * @type {MB.Color3}
         */
        protected _specColor: MB.Color3;
        protected _enable: boolean;
        /**
         * Attenuations light constants
         * @type {MB.Vect3}
         */
        protected _attenuation: MB.Vect3;
        /**
         * Light constructor
         */
        constructor();
        /**
         * Set constant attenuation value.
         * @param {number} v: Constant attenuation value.
         */
        setConstantAtt(value: number): void;
        /**
         * Set linear attenuation value.
         * @param {number} v Linear attenuation value.
         */
        setLinearAtt(value: number): void;
        /**
         * Set quadratic attenuation value.
         * @param {number} v Quadratic attenuation value.
         */
        setQuadraticAtt(value: number): void;
        /**
         * Return light attenuation value.
         * @return {MB.Vect3}
         */
        attenuation: MB.Vect3;
        /**
         * Get light intensity.
         * @return {number}
         */
        /**
         * Set light intensity.
         * @param {number} intensity Light intensity.
         */
        intensity: number;
        /**
         * Return light diffuse color.
         * @return {MB.Color3}
         */
        /**
         * Set light diffuse color
         * @param {MB.Color3} color Color value
         */
        color: MB.Color3;
        /**
         * Return light specular color.
         * @return {MB.Color3}
         */
        /**
         * Set light specular color
         * @param {MB.Color3} color Color value
         */
        specularColor: MB.Color3;
    }
}

declare namespace MB {
    /**
     * Ambient light class
     *
     * Ambient light is the light that permeates the scene;
     * it's non-directional and affects every face in the scene
     * equally, regardless of which direction it's facing.
     * @class AmbientLight
     */
    class AmbientLight extends Light {
        /**
         * Ambient light constructor
         */
        constructor();
    }
}

declare namespace MB {
    /**
     * Directional light class
     *
     * Directional light is light that is emitted from a
     * specific direction.
     * This is light that's coming from so far away that every
     * photon is moving parallel to every other photon.
     * Sunlight, for example, is directional light.
     * @class DirectionalLight
     */
    class DirectionalLight extends Light {
        /**
         * Vector pointing from the surface to the light source.
         * @type {MB.Vect3}
         */
        protected _direction: MB.Vect3;
        /**
         * Directional light constructor
         * @param {MB.Vect3 = new MB.Vect3(0.0, 0.0, 0.0)} direction [description]
         */
        constructor(direction?: MB.Vect3);
        /**
         * Return light direction
         * @return {MB.Vect3}
         */
        /**
         * Set light direction
         * @param {MB.Vect3} New light direciton
         */
        direction: MB.Vect3;
    }
}

declare namespace MB {
    /**
     * Hemispheric light class
     *
     * Hemispheric light represents a simple and easy way to
     *     simulate realistic ambient light.
     * An hemispheric light is defined by a direction to the
     *     sky and by 3 colors: one for the diffuse (the sky color),
     *     one for the ground (the color when the pixel is not towards
     *     the sky) and one for the specular.
     * @class HemisphericLight
     */
    class HemisphericLight extends Light {
        /**
         * Vector pointing from the surface to the light source.
         * @type {MB.Vect3}
         */
        protected _direction: MB.Vect3;
        /**
         * HemisphericLight ground color
         * @type {MB.Color3}
         */
        protected _groundColor: MB.Color3;
        /**
         * Hemispheric light constructor
         * @param {MB.Vect3 = new MB.Vect3(0.0, 0.0, 0.0)} direction Light direction
         */
        constructor(direction?: MB.Vect3);
        /**
         * Return light direction
         * @return {MB.Vect3}
         */
        /**
         * Set light direction
         * @param {MB.Vect3} direction New light direction
         */
        direction: MB.Vect3;
        /**
         * Return light ground color
         * @return {MB.Color3}
         */
        /**
         * Set light ground color
         * @param {MB.Color3} color New ground color
         */
        groundColor: MB.Color3;
    }
}

declare namespace MB {
    /**
     * Point light class
     *
     * Point light is light that is being emitted from a point,
     * radiating in all directions. This is how many real-world
     * light sources usually work. A light bulb emits light
     * in all directions, for example.
     * @class PointLight
     */
    class PointLight extends Light {
        /**
         * Light source position.
         * @type {MB.Vect3}
         */
        protected _position: MB.Vect3;
        /**
         * Point light constructor
         * @param {MB.Vect3 = new MB.Vect3(0.0, 0.0, 0.0)} position
         */
        constructor(position?: MB.Vect3);
        /**
         * Return light source position
         * @return {MB.Vect3}
         */
        /**
         * Set light source position
         * @param {MB.Vect3} position
         */
        position: MB.Vect3;
        /**
         * Increment position from current position
         * @param {number = 0.0} x
         * @param {number = 0.0} y
         * @param {number = 0.0} z
         */
        addTransform(x?: number, y?: number, z?: number): void;
    }
}

declare namespace MB {
    /**
     * Spot light class
     *
     * A spotlight is a light source that is located somewhere
     * in the environment that, instead of shooting light rays
     * in all directions, only shoots them in a specific direction.
     * The result is that only the objects within a certain radius of
     * the spotlight's direction are lit and everything else stays dark.
     * A good example of a spotlight would be a street lamp or a flashlight.
     * @class SpotLight
     */
    class SpotLight extends Light {
        /**
         * Light source position.
         * @type {MB.Vect3}
         */
        protected _position: MB.Vect3;
        /**
         * Vector pointing from the surface to the light source.
         * @type {MB.Vect3}
         */
        protected _direction: MB.Vect3;
        /**
         * Specifies the spotlight´s radius. Everything outside
         * this angle is not lit by the spotlight.
         * @type {number}
         */
        protected _cutOff: number;
        /**
         * SpotLight constructor
         * @param {MB.Vect3 = new MB.Vect3(0.0, 0.0, 0.0)} position  SpotLight position
         * @param {MB.Vect3 = new MB.Vect3(0.0, 0.0, 0.0)} direction Spotlight direction
         * @param {number = 1.0} cuttoff Spotlight radius
         */
        constructor(position?: MB.Vect3, direction?: MB.Vect3, cuttoff?: number);
        /**
         * Return spotlight´s radius.
         * @return {number}
         */
        /**
         * Edit spotlight´s radius.
         * @param {number} v New spotlight radius
         */
        cutoff: number;
        /**
         * Return light source position
         * @return {MB.Vect3}
         */
        /**
         * Set light source position
         * @param {MB.Vect3} New light position
         */
        position: MB.Vect3;
        /**
         * Return light direction
         * @return {MB.Vect3}
         */
        /**
         * Set light direction
         * @param {MB.Vect3} New light direciton
         */
        direction: MB.Vect3;
    }
}

declare namespace MB {
    /**
     * Box class
     * @class Box
     */
    class Box extends Drawable {
        /**
         * Box constructor.
         * @param {GLContext} context [description]
         * @param {number =       1.0}         width     [description]
         * @param {number =       1.0}         height    [description]
         * @param {number =       1.0}         depth     [description]
         * @param {number =       1}           widthSub  [description]
         * @param {number =       1}           heightSub [description]
         * @param {number =       1}           depthSub  [description]
         */
        constructor(context: GLContext, width?: number, height?: number, depth?: number, widthSub?: number, heightSub?: number, depthSub?: number);
    }
}

declare namespace MB {
    /**
     * Capsule class
     * @class Capsule
     */
    class Capsule extends Drawable {
        protected _radius: number;
        protected _height: number;
        protected _subHeight: number;
        protected _numSegm: number;
        /**
         * Capsule constructor
         * @param {GLContext} context [description]
         * @param {number = 0.5} radius Capsule radius
         * @param {number = radius * 2} height Capsule height
         * @param {number = 12} subHeight Capsule height subdivision
         * @param {number = 12} numSegm Capsule num segments
         */
        constructor(context: GLContext, radius?: number, height?: number, subHeight?: number, numSegm?: number);
    }
}

declare namespace MB {
    /**
     * Cube class
     * @class Cube
     */
    class Cube extends Drawable {
        protected _side: number;
        /**
         * Cube constructor.
         * @param {GLContext} context [description]
         * @param {number = 1.0} side: Size length
         */
        constructor(context: GLContext, side?: number);
    }
}

declare namespace MB {
    /**
     * Cuboctahedron class
     * @class Cuboctahedron
     */
    class Cuboctahedron extends Polyhedron {
        /**
         * Cuboctahedron constructor.
         * @param {GLContext} context [description]
         * @param {number} radius: Cuboctahedron radius
         * @param {number} subdivisions: Cuboctahedron subdivisions from base icosphere
         */
        constructor(context: GLContext, radius?: number, subdivisions?: number);
    }
}

declare namespace MB {
    /**
     * ICustomModel interface
     * @interface ICustomModel
     */
    interface ICustomModel {
        indices: Array<number>;
        vertices: Array<number>;
        normals?: Array<number>;
        texCoords?: Array<number>;
    }
    /**
     * CustomModel class
     * @class CustomModel
     */
    class CustomModel extends Drawable {
        /**
         * CustomModel constructor.
         * @param {GLContext} context [description]
         * @param {ICustomModel} model: Model data
         */
        constructor(context: GLContext, model: ICustomModel);
        vertices: Array<number>;
        faces: Array<number>;
        recalculateNormals(): void;
    }
}

declare namespace MB {
    /**
     * Cylinder class
     * @class Cylinder
     */
    class Cylinder extends Cone {
        /**
         * Cylinder constructor.
         * @param {GLContext} context [description]
         * @param {number} radius: Cylinder radius
         * @param {number} height: Cylinder height
         * @param {number = 15.0} radialSubDiv: Radial subdivisions around Cylinder
         * @param {number = 1.0} heightSubDiv Height subdivisions
         * @param {boolean = true} createTopBase: Create top base
         * @param {boolean = true} createBottomBase: Create bottom base
         */
        constructor(context: GLContext, radius: number, height: number, radialSubDiv?: number, heightSubDiv?: number, createTopBase?: boolean, createBottomBase?: boolean);
    }
}

declare namespace MB {
    /**
     * Disc class
     * @class Disc
     */
    class Disc extends Drawable {
        /**
         * Disc constructor.
         * @param {GLContext} context [description]
         * @param {number} radius: Disc radius
         * @param {number} divisions: Disc base subdivison (num. of triangles)
         * @param {number = 1.0} stacks: Radial subdivisions around disc.
         * @param {number = 0.0} innerRadius: Inner radius of disc
         * @param {number = 0.0} stackInc: Width inc/dec around center.
         */
        constructor(context: GLContext, radius: number, divisions: number, stacks?: number, innerRadius?: number, stackInc?: number);
    }
}

declare namespace MB {
    /**
     * Dodecahedron class
     * @class Dodecahedron
     */
    class Dodecahedron extends Polyhedron {
        /**
         * Dodecahedron constructor.
         * @param {GLContext} context [description]
         * @param {number} radius: Dodecahedron radius
         * @param {number} subdivisions: Dodecahedron subdivisions from base dodecahedron.
         */
        constructor(context: GLContext, radius: number, subdivisions: number);
    }
}

declare namespace MB {
    /**
     * Floor class
     * @class Floor
     */
    class Floor extends Drawable {
        /**
         * Floor constructor.
         * @param {GLContext} context [description]
         * @param {number = 80} dim [description]
         * @param {number = 2}  e   [description]
         */
        constructor(context: GLContext, dim?: number, e?: number);
    }
}

declare namespace MB {
    /**
     * Icosahedron class
     * @class Icosahedron
     */
    class Icosahedron extends Polyhedron {
        /**
         * Icosahedron constructor.
         * @param {GLContext} context [description]
         * @param {number} radius: Icosahedron radius
         * @param {number} subdivisions: Icosahedron subdivisions from base icosphere
         */
        constructor(context: GLContext, radius?: number, subdivisions?: number);
    }
}

declare namespace MB {
    /**
     * Lathe class.
     *
     * This class is using for generating meshes with axial symetry.
     * Examples: Vases, pipes, ...
     * @class Lathe
     */
    class Lathe extends Drawable {
        /**
         * Lathe constructor.
         * @param {GLContext} context [description]
         * @param {ArrayLike<MB.Vect3>} points List of points that define the lathe model.
         * @param {number} segments [description] Num. of segments.
         * @param {number = 0} phiInit [description]
         * @param {number = 2 * Math.PI} phiRadius [description]
         */
        constructor(context: GLContext, points: ArrayLike<MB.Vect3>, segments: number, phiInit?: number, phiRadius?: number);
    }
}

declare namespace MB {
    /**
     * Mesh class
     * @class Mesh
     */
    class Mesh extends Drawable {
        /**
         * Mesh definition.
         * @param {GLContext} context [description]
         * @param {string} fileRoute: JSON file route
         */
        constructor(context: GLContext, fileRoute: string);
        /**
         * Vao construction
         * @param {[type]} model: Model object in JSON format
         * @param {[type]} el: Indices array
         */
        private createVAO(model, el);
        /**
         * Read JSON file
         * @param {string} url: JSON file route
         */
        private loadJSON(url);
    }
}

declare namespace MB {
    class MyMesh {
        constructor(geom: MB.VertexBufferGeometry);
    }
}

declare namespace MB {
    /**
     * Octahedron class
     * @class Octahedron
     */
    class Octahedron extends Polyhedron {
        /**
         * Octahedron constructor.
         * @param {GLContext} context [description]
         * @param {number} radius: Octahedron radius.
         * @param {number} subdivisions: Octahedron subdivisions from base octahedron.
         */
        constructor(context: GLContext, radius: number, subdivisions: number);
    }
}

declare namespace MB {
    /**
     * ParametricGeom class
     * @class ParametricGeom
     */
    class ParametricGeom extends Drawable {
        protected _slices: number;
        protected _stacks: number;
        protected _func: (u: number, v: number) => MB.Vect3;
        /**
         * ParametricGeom constructor
         * @param {GLContext} context [description]
         * @param {number) => MB.Vect3} func Function generator (u, v) => MB.Vect3
         * @param {number} slices Number of slices
         * @param {number} stacks Number of stacks
         */
        constructor(context: GLContext, func: (u: number, v: number) => MB.Vect3, slices: number, stacks: number);
    }
}

declare namespace MB {
    /**
     * Plane class
     * @class Plane
     */
    class Plane extends Drawable {
        /**
         * Plane constructor.
         * @param {GLContext} context [description]
         * @param {number} xsize: Width plane size
         * @param {number} zsize: Height plane size
         * @param {number} xdivs: Width plane subdivisions
         * @param {number} zdivs: Height plane subdivisions
         * @param {number = 1.0} smax: Width texCoord subdivision
         * @param {number = 1.0} tmax  Height texCoord subdivision
         */
        constructor(context: GLContext, xsize: number, zsize: number, xdivs: number, zdivs: number, smax?: number, tmax?: number);
    }
}

declare namespace MB {
    /**
     * Prism class
     * @class Prism
     */
    class Prism extends Cone {
        /**
         * Prism constructor.
         * @param {GLContext} context [description]
         * @param {number} radius: Prism radius
         * @param {number} height: Prism height
         * @param {number = 1.0} sides: Number of sides of the prism
         * @param {number = 1.0} heightSubDiv Height subdivisions
         * @param {boolean = true} createTopBase: Create top base
         * @param {boolean = true} createBottomBase: Create bottom base
         */
        constructor(context: GLContext, radius: number, height: number, sides: number, heightSubDiv?: number, topCap?: boolean, bottomCap?: boolean);
    }
}

declare namespace MB {
    class RenderableGeometry {
        protected _indices: Uint16Array;
        protected _attrs: {
            [key: string]: BufferAttribute;
        };
        addAttr(type: string, attribute: BufferAttribute): void;
        getAttr(name: string): BufferAttribute;
        removeAttr(type: string): void;
        indices: Uint16Array;
    }
}

declare namespace MB {
    /**
     * Sphere class
     * @class Sphere
     */
    class Sphere extends Drawable {
        protected _radius: number;
        protected _slices: number;
        protected _stacks: number;
        /**
         * Sphere constructor.
         * @param {GLContext} context [description]
         * @param {number} radius [description]
         * @param {number} slices: Number of steps around sphere.
         * @param {number} stacks: Number of vertically on the sphere.
         */
        constructor(context: GLContext, radius: number, slices?: number, stacks?: number);
    }
}

declare namespace MB {
    /**
     * Tetrahedron class
     * @class Tetrahedron
     */
    class Tetrahedron extends Polyhedron {
        /**
         * Tetrahedron constructor.
         * @param {GLContext} context [description]
         * @param {number} radius: Tetrahedron radius
         * @param {number} subdivisions: Tetrahedron subdivisions from base tetrahedron.
         */
        constructor(context: GLContext, radius: number, subdivisions: number);
    }
}

declare namespace MB {
    /**
     * Torus class
     * @class Torus
     */
    class Torus extends Drawable {
        protected _outerRadius: number;
        protected _innerRadius: number;
        protected _sides: number;
        protected _rings: number;
        /**
         * Torus constructor.
         * @param {GLContext} context [description]
         * @param {number = 1.0} outerRadius: Outer ring radius
         * @param {number = 0.5} innerRadius: Inner ring radius
         * @param {number = 4}   sides: Number of sides
         * @param {number = 10}  rings: Number of rings
         */
        constructor(context: GLContext, outerRadius?: number, innerRadius?: number, sides?: number, rings?: number);
    }
}

declare namespace MB {
    class Tube extends MB.Drawable {
        constructor(context: MB.GLContext, path: MB.Path);
        protected _path: MB.Path;
        protected _generateSegment(t: number): void;
    }
}

declare namespace MB {
    namespace Loaders {
        /**
         * [VertexBufferGeometryLoader description]
         * @param {string} src [description]
         */
        function VertexBufferGeometryLoader(src: string): void;
        /**
         * Get alias from src resource
         * @param  {string} src: Src name
         * @param  {string = ""} alias: Optional alias
         * @return {string}: Src if alias undefined. Otherwise, alias.
         */
        function _getAlias(src: string, alias?: string): string;
        /**
         * [unloadImage description]
         * @param {string} imageSrc [description]
         */
        function unloadImage(imageSrc: string): void;
        function loadBinaryFileRAW(imageSrc: string, alias?: string): void;
        /**
         * [loadHDRImage description]
         * @param {string}    imageSrc [description]
         * @param {string =        ""}          alias [description]
         */
        function loadHDRImage(imageSrc: string, alias?: string): void;
        /**
         * [unloadHDRImage description]
         * @param {string} imageSrc [description]
         */
        function unloadHDRImage(imageSrc: string): void;
    }
}

declare namespace MB {
    namespace ObjLoader {
        function loadMTL(filename: string): Object;
        function loadObj(filename: string): Object;
    }
}

declare namespace MB {
    interface ProgramCallback {
        (): Program;
    }
    interface ProgramUseCallback {
        (prog: Program): void;
    }
    /**
     * Program manager class
     * @class ProgramManager
     */
    class ProgramManager {
        /**
         * Program cache dictionary
         */
        static _progDictionary: {
            [key: string]: MB.Program;
        };
        /**
         * Return cached program from name
         * @param  {string} name: Program name
         * @return {Program}
         */
        static get(name: string): Program;
        /**
         * Execute a callback function using the specified program (name).
         * @param  {string} name: Program name
         * @param {ProgramUseCallback}: Function to execute
         */
        static getCB(name: string, cb: ProgramUseCallback): void;
        /**
         * Add a new MB.Program with his name and a function that creates the program.
         * @param {string} name: MB.Program name
         * @param {ProgramCallback}: Function that creates the program
         *                                    (return program)
         */
        static addWithFun(name: string, fn: ProgramCallback): void;
        /**
         * Add a existing MB.Program with his name and the MB.Program.
         * @param {string} name: MB.Program name.
         * @param {MB.Program} prog: Existing program.
         */
        static add(name: string, prog: MB.Program): void;
        /**
         * Destroy all programs and clear cache.
         */
        static destroy(): void;
    }
}

declare namespace MB {
    namespace ResourceMap {
        class MapEntry {
            protected _asset: string;
            protected _refCount: number;
            /**
             * MapEntry constructor
             * @param {string} resName Resource name
             */
            constructor(resName: string);
            /**
             * Return asset name
             * @return {string} [description]
             */
            getAsset(): string;
            /**
             * Set asset name
             * @param {string} name New asset name
             */
            setAsset(name: string): void;
            /**
             * Return asset counter
             * @return {number} Number of uses of this asset
             */
            count(): number;
            /**
             * Increment asset counter.
             */
            incCount(): void;
            /**
             * Decrement asset counter.
             */
            decCount(): void;
        }
        /**
         * [MapEntry description]
         * @type {[key: string]: MapEntry;}
         */
        let _ResourceMap: {
            [key: string]: MapEntry;
        };
        /**
         * Create an asynchronous request to load a resource.
         * @param {string} resName Resource name.
         */
        function asyncLoadRequested(resName: string): void;
        /**
         * Ends resource load with failed.
         * @param {string} resName Resource name.
         */
        function asyncLoadFailed(resName: string): void;
        /**
         * Calling this function when the resource is loaded correctly.
         * @param {string} resName     Resource name.
         * @param {any} loadedAsset Resource object.
         */
        function asyncLoadCompleted(resName: string, loadedAsset: any): void;
        /**
         * Set callback function that called when all assets
         *     have finished loading.
         * @param {Function}
         */
        function setLoadCompleteCallback(fn: any): void;
        /**
         * Return asset from alias/name
         * @param  {string} resName [description]
         * @return {any}
         */
        function retrieveAsset(resName: string): any;
        /**
         * Check whether the resource has already been loaded.
         * @param  {string} resName: Resource name
         * @return {boolean}: True if resource exist
         */
        function isAssetLoaded(resName: string): boolean;
        /**
         * @param {string}
         */
        function incAssetRefCount(resName: string): void;
        /**
         * Unload a existing resource.
         * @param {string}
         */
        function unloadAsset(resName: string): number;
    }
}

declare namespace MB {
    /**
     * ResourceShader class
     * @class ResourceShader
     */
    class ResourceShader {
        private static _files;
        /**
         * Add data to cache
         * @param {string} key: Key name
         * @param {any} value: Value
         */
        static add(key: string, value: string): void;
        /**
         * Get value from cache
         * @param {string} key: Key name
         * @return {any}: Null if key undefined
         */
        static get(key: string): string;
        static exist(key: string): boolean;
        /**
         * Remove cache value
         * @param {string} key: Key name
         */
        static remove(key: string): void;
        /**
         * Remove all data from cache
         */
        static clear(): void;
    }
}
declare function loadShader(alias: string, filePath: string): any;
declare function loadShaderFromText(alias: string, shaderSource: string): void;
declare function _processImports(src: string): string;

declare namespace MB {
    namespace Loaders {
        /**
         * Loads an audio file from route.
         * @param {string}    clipRoute Audio route
         * @param {string =v""}          alias Auxiliar alias.
         */
        function loadAudio(clipRoute: string, alias?: string): void;
        /**
         * Unloads an audio.
         * @param {string} clipName [description]
         */
        function unloadAudio(clipName: string): void;
    }
}

declare namespace MB {
    namespace Loaders {
        /**
         * Loads cubemap images from a directory.
         *     The required files are:
         *         -back.jpg
         *         -bottom.jpg
         *         -front.jpg
         *         -left.jpg
         *         -right.jpg
         *         -top.jpg
         * @param {string} directorySrc Cubemap images directory.
         */
        function loadCubeMap(directorySrc: string): void;
    }
}

declare namespace MB {
    namespace Loaders {
        /**
         * [loadFont description]
         * @param {string}    fontSrc [description]
         * @param {string =       ""}          alias [description]
         */
        function loadFont(fontSrc: string, alias?: string): void;
        /**
         * [unloadFont description]
         * @param {string} imageSrc [description]
         */
        function unloadFont(fontSrc: string): void;
    }
}

declare namespace MB {
    namespace Loaders {
        /**
         * [loadImage description]
         * @param {string}    imageSrc [description]
         * @param {string =        ""}          alias [description]
         */
        function loadImage(imageSrc: string, alias?: string): void;
    }
}

declare namespace MB {
    namespace Loaders {
        /**
         * [loadJSON description]
         * @param {string}    jsonSrc [description]
         * @param {string =        ""}          alias [description]
         */
        function loadJSON(jsonSrc: string, alias?: string): void;
    }
}

declare namespace MB {
    namespace Loaders {
        /**
         * [loadVideo description]
         * @param {string}    videoSrc [description]
         * @param {string =        ""}          alias [description]
         */
        function loadVideo(videoSrc: string, alias?: string): void;
        /**
         * [unloadVideo description]
         * @param {string} imageSrc [description]
         */
        function unloadVideo(videoSrc: string): void;
    }
}

declare namespace MB {
    namespace Loaders {
        /**
         * [loadWebCam description]
         */
        function loadWebCam(): void;
    }
}

declare namespace MB {
    namespace Loaders {
        /**
         * [xhrLoader description]
         * @param {string}     url     [description]
         * @param {boolean =       true}          sync         [description]
         * @param {string  =       "arraybuffer"} responseType [description]
         * @param {[type]}     onLoad  [description]
         * @param {[type]}     onError =               ()           =>            {  } [description]
         */
        function xhrLoader(url: string, sync: boolean, responseType: string, onLoad: any, onError?: () => void): void;
    }
}

declare namespace MB {
    interface TexOptions {
        internalFormat?: ctes.PixelFormat;
        format?: ctes.PixelFormat;
        minFilter?: ctes.TextureFilter;
        magFilter?: ctes.TextureFilter;
        type?: ctes.DataType;
        level?: number;
        flipY?: number;
        unpackAlignment?: number;
        wrapS?: ctes.WrapMode;
        wrapT?: ctes.WrapMode;
        wrapR?: ctes.WrapMode;
        minLOD?: number;
        maxLOD?: number;
        autoMipMap?: boolean;
        border?: number;
        compressed?: boolean;
        anisotropic?: number;
        offsets?: Array<number>;
    }
    abstract class Texture {
        protected _handler: WebGLTexture;
        protected _target: ctes.TextureTarget;
        protected _context: GLContext;
        protected _level: number;
        protected _border: number;
        protected _internalFormat: MB.ctes.PixelFormat;
        protected _format: MB.ctes.PixelFormat;
        protected _type: MB.ctes.DataType;
        protected _wrapS: MB.ctes.WrapMode;
        protected _wrapT: MB.ctes.WrapMode;
        protected _wrapR: MB.ctes.WrapMode;
        protected _minFilter: MB.ctes.TextureFilter;
        protected _magFilter: MB.ctes.TextureFilter;
        protected _flipY: number;
        protected _unpackAlignment: number;
        constructor(context: GLContext, target: ctes.TextureTarget, options?: TexOptions);
        bind(slot?: number): void;
        unbind(): void;
        destroy(): void;
        target: ctes.TextureTarget;
        handler: WebGLTexture;
        resize(size: MB.Vect2): void;
    }
}

declare namespace MBX {
    /**
     * CanvasTexture class
     * @class CanvasTexture
     *
     * This class uses an canvas image like texture
     */
    class CanvasTexture extends MB.Texture {
        /**
         * Canvas that contains the image texture
         * @type {HTMLCanvasElement}
         */
        protected _domCanvas: HTMLCanvasElement;
        /**
         * CanvasTexture constructor.
         * @param {GLContext} context [description]
         * @param {MB.Vect2} size: Texture size
         * @param {TexOptions = {}} options: Texture options
         * @param {() => void = null} onSuccess Optional callback that runs when creating CanvasTexture.
         */
        constructor(context: MB.GLContext, domCanvas: HTMLCanvasElement, options?: MB.TexOptions, onSuccess?: () => void);
        /**
         * Updates the texture based on the current image of the canvas
         *     that was referenced in the class constructor.
         */
        update(): void;
    }
}

declare namespace MB {
    /**
     * CubeMapTexture class
     * @class CubeMapTexture
     */
    class CubeMapTexture extends Texture {
        protected _finished: boolean;
        /**
         * Returns if the cubemap is completed.
         * @return {boolean}
         */
        isFinished(): boolean;
        /**
         * CubeMapTexture constructor.
         * @param {GLContext} context [description]
         * @param {TexOptions = {}} options: Texture options
         */
        constructor(context: GLContext, options?: TexOptions);
        /**
         * Add new image to cubemap
         * @param {number} i    Index
         * @param {any} data Image or buffer data.
         */
        addImage(i: number, data: any): void;
        /**
         * Finalize cubemap texture
         */
        finishTex(): void;
    }
}

declare namespace MB {
    abstract class RenderBuffer {
        /**
         * Renderbuffer interla handler
         * @type {WebGLRenderbuffer}
         */
        protected _handler: WebGLRenderbuffer;
        /**
         * Renderbuffer size (width and height).
         * @type {MB.Vect2}
         */
        protected _size: MB.Vect2;
        /**
         * Rendebuffer samples
         * @type {number}
         */
        protected _samples: number;
        /**
         * Renderbuffer internal format.
         * @type {number}
         */
        protected _format: number;
        /**
         * Renderbuffer attachment point (p.e. COLOR_ATTACHMENT or DEPTH_STENCL_ATTACHMENT)
         * @type {number}
         */
        protected _attachment: number;
        protected _context: GLContext;
        constructor(context: GLContext, size: MB.Vect2, format: number, attachment: number, samples?: number);
        /**
         * Bind renderbuffer.
         */
        bind(): void;
        /**
         * Unbind render buffer.
         */
        unbind(): void;
        /**
         * Destroy renderbuffer texture.
         */
        destroy(): void;
        abstract resize(size: MB.Vect2): any;
    }
}

declare namespace MB {
    class RenderBufferMultisampleTexture extends RenderBuffer {
        constructor(context: GLContext, size: MB.Vect2, format: number, attachment: number, samples?: number);
        resize(size: MB.Vect2): void;
    }
}

declare namespace MB {
    class RenderBufferTexture extends RenderBuffer {
        constructor(context: GLContext, size: MB.Vect2, format: number, attachment: number);
        /**
         * Resize renderbuffer size
         * @param {MB.Vect2} size New size
         */
        resize(size: MB.Vect2): void;
    }
}

declare namespace MB {
    interface ITexture2D {
        pixels?: any;
        width: number;
        height: number;
    }
    class Texture2D extends Texture {
        constructor(context: GLContext, data: string, options: TexOptions, onSuccess?: () => void);
        constructor(context: GLContext, data: HTMLImageElement, options: TexOptions, onSuccess?: () => void);
        constructor(context: GLContext, data: ITexture2D, options: TexOptions, onSuccess?: () => void);
        setSubImage(offsetX: number, offsetY: number, data: HTMLImageElement): any;
        setSubImage(offsetX: number, offsetY: number, data: ITexture2D): any;
        update(data: HTMLImageElement): any;
        update(data: ITexture2D): any;
    }
}

declare namespace MB {
    interface ITexture2DArray {
        pixels: Array<any>;
        width: number;
        height: number;
    }
    class Texture2DArray extends Texture {
        /**
         * [constructor description]
         * @param {GLContext} context [description]
         * @param {Vector2<number>} size   [description]
         * @param {Array<any>}    images [description]
         * @param {TexOptions =      {}}        options [description]
         * @param {() => void = null} onSuccess Optional callback that runs when creating Texture2DArray.
         */
        constructor(context: GLContext, data: ITexture2DArray, options?: TexOptions, onSuccess?: () => void);
    }
}

declare namespace MB {
    interface ITexture3D extends ITexture2D {
        depth: number;
    }
    class Texture3D extends Texture {
        /**
         * [constructor description]
         * @param {GLContext} context [description]
         * @param {[type]}        data [description]
         * @param {MB.Vect3}         size [description]
         * @param {TexOptions =    {}}        options [description]
         * @param {() => void = null} onSuccess Optional callback that runs when creating Texture3D.
         */
        constructor(context: GLContext, data: ITexture3D, options?: TexOptions, onSuccess?: () => void);
        setSubImage(offsetX: number, offsetY: number, offsetZ: number, data: ITexture3D): void;
    }
}

declare namespace MBX {
    /**
     * VideoTexture class
     * @class VideoTexture
     */
    class VideoTexture extends MB.Texture {
        protected _video: HTMLVideoElement;
        /**
         * [constructor description]
         * @param {GLContext} context [description]
         * @param {string | HTMLVideoElement} video [description]
         * @param {boolean = true} loop [description]
         * @param {number = 15} frameTime [description]
         * @param {() => void = null} onSuccess Optional callback that runs when creating VideoTexture.
         */
        constructor(context: MB.GLContext, video: string);
        constructor(context: MB.GLContext, video: HTMLVideoElement);
        update(): void;
        destroy(): void;
    }
}

declare namespace MBX {
    /**
     * WebcamTexture class
     * @class WebcamTexture
     */
    class WebcamTexture extends VideoTexture {
        /**
         * WebcamTexture constructor.
         * @param {GLContext} context [description]
         * @param {MB.Vect2 = [320, 320]} size Webcam viewport size.
         * @param {() => void = null} onSuccess Optional callback that runs when creating WebcamTexture.
         */
        constructor(context: MB.GLContext, size?: MB.Vect2, onSuccess?: () => void);
    }
}

declare namespace MB {
    abstract class Material {
        id: string;
        backFaceCull: boolean;
        sideOrientation: ctes.FaceDir;
        depthTest: boolean;
        visible: boolean;
        protected _context: MB.GLContext;
        protected _state: MB.GlobalState;
        constructor(context: MB.GLContext);
        use(): void;
    }
}

declare namespace MB {
    enum UniformType {
        Float = 0,
        Integer = 1,
        Unsigned = 2,
        Boolean = 3,
        Vector2 = 4,
        Vector3 = 5,
        Vector4 = 6,
        Matrix2 = 7,
        Matrix3 = 8,
        Matrix4 = 9,
    }
    interface IUniformMaterial {
        type: UniformType;
        value?: any;
    }
    interface ShaderMaterialParams {
        name: string;
        uniforms?: {
            [key: string]: MB.IUniformMaterial;
        };
        vertexShader: string;
        fragmentShader: string;
    }
    class ShaderMaterial extends MB.Material {
        protected _uniforms: {
            [key: string]: MB.Uniform;
        };
        protected _program: MB.Program;
        constructor(context: MB.GLContext, params: MB.ShaderMaterialParams);
        uniforms: {
            [key: string]: MB.IUniformMaterial;
        };
        render(model: MB.Drawable): void;
        render2(model: MB.Drawable): void;
        render3(model: MB.Drawable): void;
        use(): void;
    }
}

declare namespace MB {
    class NormalMaterial extends MB.Material {
        protected _uniforms: {
            [key: string]: MB.Uniform;
        };
        protected _program: MB.Program;
        constructor(context: MB.GLContext);
        uniforms: {
            [key: string]: MB.IUniformMaterial;
        };
        render(model: MB.Drawable): void;
        render2(model: MB.Drawable): void;
        render3(model: MB.Drawable): void;
        use(): void;
    }
}

declare namespace MB {
    interface PostProcessMaterialParams {
        name: string;
        uniforms?: {
            [key: string]: MB.IUniformMaterial;
        };
        fragmentShader: string;
    }
    class PostProcessMaterial extends MB.ShaderMaterial {
        constructor(context: MB.GLContext, params: MB.PostProcessMaterialParams);
        renderPP(): void;
    }
}

declare namespace MBS {
}

declare namespace MB {
    class SimpleShadingMaterial extends MB.Material {
        protected _uniforms: {
            [key: string]: MB.Uniform;
        };
        protected _program: MB.Program;
        constructor(context: MB.GLContext);
        uniforms: {
            [key: string]: MB.IUniformMaterial;
        };
        render(model: MB.Drawable): void;
        render2(model: MB.Drawable): void;
        render3(model: MB.Drawable): void;
        use(): void;
    }
}

declare namespace MB {
    interface TFMaterialParams {
        name: string;
        uniforms?: {
            [key: string]: MB.IUniformMaterial;
        };
        tfs: {
            varying: Array<string>;
            mode: MB.ctes.TFMode;
        };
        vertexShader: string;
        fragmentShader: string;
    }
    class TFMaterial extends MB.Material {
        protected _uniforms: {
            [key: string]: MB.Uniform;
        };
        protected _program: MB.Program;
        program: MB.Program;
        constructor(context: MB.GLContext, params: MB.TFMaterialParams);
        uniforms: {
            [key: string]: MB.IUniformMaterial;
        };
        render(model: MB.Drawable): void;
        render2(model: MB.Drawable): void;
        render3(model: MB.Drawable): void;
        use(): void;
    }
}

declare namespace MB {
    class Uniform {
        isDirty: boolean;
        _type: UniformType;
        _value: any;
        constructor(type: UniformType, value: any);
        type: UniformType;
        value: any;
    }
}

declare namespace MBX {
    namespace UniformMaterials {
        function bumpMapping(): {
            [key: string]: MB.IUniformMaterial;
        };
        function normalMapping(): {
            [key: string]: MB.IUniformMaterial;
        };
        function texture(): {
            [key: string]: MB.IUniformMaterial;
        };
        function fog(): {
            [key: string]: MB.IUniformMaterial;
        };
    }
}

declare namespace MB {
    class VolumetricMaterial extends MB.Material {
        protected _uniforms: {
            [key: string]: MB.Uniform;
        };
        protected _program: MB.Program;
        protected _tex3D: MB.Texture3D;
        constructor(context: MB.GLContext, tex3D: MB.Texture3D);
        uniforms: {
            [key: string]: MB.IUniformMaterial;
        };
        render(model: MB.Drawable): void;
        use(): void;
    }
}

declare namespace MBS {
    class Engine {
        _scenes: Array<Scene>;
        protected _context: MB.GLContext;
        private _onFullScreenChange;
        context: MB.GLContext;
        setViewport(vp: MB.Vector4<number>): void;
        constructor(context: MB.GLContext, options?: {});
        run(loop: Function): void;
        resize(): void;
    }
}

declare namespace MBS {
    class EngineApp {
        camera: any;
        light: any;
        private _engine;
        private _scene;
        constructor(context: MB.GLContext);
        run(): void;
    }
}

declare namespace MBSS {
    class Transform {
        private _parent;
        private _parentMatrix;
        private _pos;
        private _rot;
        private _scale;
        private _oldPos;
        private _oldRot;
        private _oldScale;
        constructor();
        position: MB.Vect3;
    }
    abstract class GameComponent {
        update(dt: number): void;
    }
    class MeshRenderer extends GameComponent {
        protected _mesh: MB.Drawable;
        protected _material: MB.Material;
        constructor(mesh: MB.Drawable, material: MB.Material);
        update(dt: number): void;
    }
    class GameObject {
        private _children;
        private _components;
        private _transform;
        constructor();
        addChild(child: MBSS.GameObject): void;
        updateAll(dt: number): void;
        update(dt: number): void;
        transform: MBSS.Transform;
    }
}

declare namespace MBS {
    class Node {
        _scene: Scene;
        _parentNode: Node;
        _children: Array<Node>;
        _position: MB.Vect3;
        _rotation: MB.EulerAngle;
        _quaternion: MB.Quat;
        _scale: MB.Vect3;
        hasParent(): boolean;
        protected _translateFromAxis(axis: MB.Vect3, dist: number): void;
        TranslateX(dist: number): void;
        TranslateY(dist: number): void;
        TranslateZ(dist: number): void;
        protected _rotateFromAxis(axis: MB.Vect3, angle: number): void;
        RotateX(angle: number): void;
        RotateY(angle: number): void;
        RotateZ(angle: number): void;
        position: MB.Vect3;
        rotation: MB.EulerAngle;
        quaternion: MB.Quat;
        scale: MB.Vect3;
        LocalToWorld(v: MB.Vect3): MB.Vect3;
        WorldToLocal(v: MB.Vect3): MB.Vect3;
        protected _name: string;
        protected _id: string;
        protected _isEnabled: boolean;
        isEnabled(): boolean;
        setEnabled(v: boolean): void;
        constructor(name: string, scene: Scene);
        parent: Node;
        getScene(): Scene;
        protected _generateUUID(): string;
        add(object: MBS.Node): this;
        remove(object: MBS.Node): void;
        protected _matrix: MB.Mat4;
        model: MB.Mat4;
        updateMatrix(): void;
        addChild(elem: any): void;
        removeChild(elem: any): void;
        removeAll(): void;
        searchElem(name: string, elem?: this): MBS.Node;
    }
}

declare namespace MBS {
    class PostProcess {
        _width: number;
        _height: number;
        _clearColor: MB.Color4;
        _scene: MBS.Scene;
        constructor(scene: MBS.Scene);
        active(camera: MB.Camera2, srcTex?: MB.Texture2D): void;
        destroy(): void;
        apply(): void;
    }
}

declare namespace MBS {
    class Scene {
        protected _clearColor: MB.Color3;
        protected _lights: MB.Light[];
        protected _engine: Engine;
        protected _fogEnabled: boolean;
        protected _fogColor: MB.Color3;
        fogEnabled: boolean;
        fogColor: MB.Color3;
        protected _sceneGraph: MBS.Node;
        root: MBS.Node;
        addModel(m: any): void;
        addLight(lg: MB.Light): void;
        protected _postProcess: MBS.PostProcess;
        protected _name: string;
        constructor(name: string, engine: Engine);
        getEngine(): Engine;
        render(dt: number): void;
        clearColor: MB.Color3;
        protected _totalMeshes: number;
        protected _totalVertices: number;
        protected _drawCalls: number;
        protected _totalIndices: number;
        camera: MB.Camera2;
        autoClear: boolean;
        autoClearColor: boolean;
        autoClearDepth: boolean;
        autoClearStencil: boolean;
        protected clear(clearColor?: boolean, clearDepth?: boolean, clearStencil?: boolean): void;
        clearColor_(): void;
        clearDepth_(): void;
        clearStencil_(): void;
        protected _beforeRender: Array<Function>;
        protected _afterRender: Array<Function>;
        registerBeforeRender(cb: Function): void;
        registerAfterRender(cb: Function): void;
    }
}
