import robot from 'robotjs';
export const mouse_position = () => {
    const currentPosition = robot.getMousePos();
    const currX = currentPosition.x;
    const currY = currentPosition.y;
    return {currX, currY};
}