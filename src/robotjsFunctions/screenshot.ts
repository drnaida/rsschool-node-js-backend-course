import robot from 'robotjs';
import { mouse_position } from './mouse_position';
import Jimp from 'jimp';
export const makeScreenshot = () => {
    const {currX, currY} = mouse_position();
        let size = 200;
        const centerX = currX - size/2;
        const centerY = currY - size/2;
        let rimg = robot.screen.capture(centerX, centerY, size, size);
        let jimg = new Jimp(size, size);
        for (var x=0; x<size; x++) {
            for (var y=0; y<size; y++) {
                const hex = rimg.colorAt(x, y);
                const num = parseInt(hex+"ff", 16);
                jimg.setPixelColor(num, x, y);
            }
        }
    return jimg;
}