import robot from 'robotjs';
import { mouse_position } from './mouse_position';
export const makeScreenshot = () => {
    const {currX, currY} = mouse_position();
    const size = 200;
    const img = robot.screen.capture(currX, currY, size, size);
    return img.image;
}