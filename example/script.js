
import * as wcanvas from "../wcanvas.js";

window.addEventListener("load", () => {
    const font = new wcanvas.Font("Times New Roman", 12);

    const wrappedCanvas = new wcanvas.wCanvas({
        "onSetup": (canvas) => {
            console.log("WCanvas Version: " + wcanvas.version);
            console.log("Canvas ID: " + canvas.canvas.id);

            canvas.startLoop();
        },
        "onDraw": (canvas, deltaTime) => {
            console.log("Frame Time: " + deltaTime);

            canvas.background();
            
            canvas.fill(0, 0, 255);
            canvas.rect(0, 0, 100, 100, { "noStroke": true });

            canvas.fill();
            canvas.ellipse(50, 50, 50, undefined, { "noStroke": true });
            
            canvas.stroke(255, 0, 0);
            canvas.strokeWeigth(4);
            canvas.line(0, 0, 100, 100);

            canvas.textFont(font);
            canvas.textSize(20);
            canvas.text("This is a cool text", 100, 100);
        }
    });
});
