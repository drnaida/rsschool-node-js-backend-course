import robot from 'robotjs';
export const mouse_position = () => {
    const currentPosition = robot.getMousePos();
    const currX: number = currentPosition.x;
    const currY: number = currentPosition.y;
    return {currX, currY};
}