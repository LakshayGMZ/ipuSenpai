"use client"

import {useEffect} from "react";
import {Gradient} from "whatamesh";

export default function BGGradient() {
    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
        gradient.play();
    }, []);

    return (
        <canvas
            id="gradient-canvas"
            className="fixed inset-0 z-[-10]"
            data-transition-in={true}
        />
    )
}