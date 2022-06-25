import {mouse_up, mouse_down, mouse_right, mouse_left } from './mouse_movements';
import { mouse_position } from './mouse_position';
import robot from 'robotjs';
const draw_circle = (radius: number) => {
    robot.mouseToggle("down")
    robot.setMouseDelay(2);
    const {currX, currY} = mouse_position();
    const centerX: number = currX + radius;
    const centerY: number = currY;
    for (let x = currX; x < (currX + (2 * radius) + 1); x++) {
        let y: number;
        if (radius ** 2 - ((x - centerX)**2) < 0) {
            y = -1 * Math.sqrt(Math.abs(radius ** 2 - ((x - centerX)**2))) + centerY;
        } else {
            y = Math.sqrt(radius ** 2 - ((x - centerX)**2)) + centerY;
        }
        robot.moveMouse(x, y);
    }
    for (let x = currX + (2 * radius); x > currX - 1; x--) {
        let y: number;
        if (radius ** 2 - ((x - centerX)**2) < 0) {
            y = centerY + Math.sqrt(Math.abs(radius ** 2 - ((x - centerX)**2)));
        } else {
            y = centerY - Math.sqrt(radius ** 2 - ((x - centerX)**2));
        }
        robot.moveMouse(x, y);
    }
    robot.mouseToggle("up");
}

const draw_rectangle = (width: number, length: number) => {
    robot.mouseToggle("down");
    mouse_right(width);
    mouse_down(length);
    mouse_left(width);
    mouse_up(length);
    robot.mouseToggle("up");
}

const draw_square = (length: number) => {
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
