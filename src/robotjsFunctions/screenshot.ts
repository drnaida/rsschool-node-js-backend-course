import robot from 'robotjs';
import { mouse_position } from './mouse_position';
import Jimp from 'jimp';
export const makeScreenshot = () => {
    const {currX, currY} = mouse_position();
        const size: number = 200;
        const centerX: number = currX - size/2;
        const centerY: number = currY - size/2;
        let rimg = robot.screen.capture(centerX, centerY, size, size);
        let jimg = new Jimp(size, size);
        for (let x=0; x<size; x++) {
            for (let y=0; y<size; y++) {
                const hex: string = rimg.colorAt(x, y);
                const num: number = parseInt(hex+"ff", 16);
                jimg.setPixelColor(num, x, y);
            }
        }
    return jimg;
}