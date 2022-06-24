import robot from 'robotjs';
import { mouse_position } from './mouse_position';
const mouse_up = (lengthToMove: number) => {
    const { currX, currY } = mouse_position();
    console.log(currX, currY);
    robot.moveMouse(currX, currY - lengthToMove);
}
const mouse_down = (lengthToMove: number) => {
    const { currX, currY } = mouse_position();
    console.log(currX, currY);
    robot.moveMouse(currX, currY + lengthToMove);
}
const mouse_right = (lengthToMove: number) => {
    const { currX, currY } = mouse_position();
    console.log(currX, currY);
    robot.moveMouse(currX + lengthToMove, currY);
}
const mouse_left = (lengthToMove: number) => {
    const { currX, currY } = mouse_position();
    console.log(currX, currY);
    robot.moveMouse(currX - lengthToMove, currY);
}


export {
    mouse_up,
    mouse_down,
    mouse_left,
    mouse_right
}