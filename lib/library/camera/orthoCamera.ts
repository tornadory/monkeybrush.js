/// <reference path="camera.ts" />

"use strict";

/**
 * Orthograhic camera class
 * @class OrthoCamera
 */
class OrthoCamera extends Camera {
    /**
     * Update view and projection matrix based on orthographic projection
     */
    public update() {
        const yMin = -this._near * Math.tan(this._fov * Math.PI / 360.0);
        const yMax = -yMin;
        const xMin = yMin + this.getAspectRatio();
        const xMax = yMax + this.getAspectRatio();
        this._projection = mat4.ortho(this._projection, xMin, xMax, yMin, 
            yMax, this._near, this._far);
        this._view = mat4.lookAt(this._view, this.position, this._look, this._up);
        // target: vec3.add(vec3.create(), this.position, this._front) /* 
    }
}