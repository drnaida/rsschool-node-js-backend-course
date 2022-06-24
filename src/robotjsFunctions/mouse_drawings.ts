import {mouse_up, mouse_down, mouse_right, mouse_left } from './mouse_movements';
import { mouse_position } from './mouse_position';
import robot from 'robotjs';
import { convertCompilerOptionsFromJson } from 'typescript';
const draw_circle = (radius: number) => {
    robot.mouseToggle("down")
    robot.setMouseDelay(2);
    const {currX, currY} = mouse_position();
    const centerX = currX + radius;
    console.log(centerX);
    const centerY = currY;
    for (let x = currX; x < (currX + (2 * radius) + 1); x++) {
        //Math.sqrt(radius ** 2 - (x - centerX)**2) + centerY
        let y;
        if (radius ** 2 - ((x - centerX)**2) < 0) {
            console.log('negative');
            y = -1 * Math.sqrt(Math.abs(radius ** 2 - ((x - centerX)**2))) + centerY;
        } else {
            console.log('positive');
            y = Math.sqrt(radius ** 2 - ((x - centerX)**2)) + centerY;
        }
        console.log(x, centerX, y, centerY);
        robot.moveMouse(x, y);
    }
    for (let x = currX + (2 * radius); x > currX - 1; x--) {
        //Math.sqrt(radius ** 2 - (x - centerX)**2) + centerY
        let y;
        if (radius ** 2 - ((x - centerX)**2) < 0) {
            console.log('negative');
            y = centerY + Math.sqrt(Math.abs(radius ** 2 - ((x - centerX)**2)));
        } else {
            console.log('positive');
            y = centerY - Math.sqrt(radius ** 2 - ((x - centerX)**2));
        }
        let currentPosition = robot.getMousePos();
        console.log(x, centerX, y, centerY);
        robot.moveMouse(x, y);
    }
    robot.mouseToggle("up");
}

const draw_rectangle = (width, length) => {
    robot.mouseToggle("down");
    mouse_right(width);
    mouse_down(length);
    mouse_left(width);
    mouse_up(length);
    robot.mouseToggle("up");
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
