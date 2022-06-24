import {mouse_up, mouse_down, mouse_right, mouse_left } from './mouse_movements';
import robot from 'robotjs';
const draw_circle = (radius) => {

}

const draw_rectangle = (width, length) => {

}

const draw_square = (length) => {
    robot.mouseToggle("down");
    mouse_up(length);
    mouse_right(length);
    mouse_down(length);
    mouse_left(length);
    robot.mouseToggle("up");
}

export {
    draw_circle,
    draw_rectangle,
    draw_square
}
