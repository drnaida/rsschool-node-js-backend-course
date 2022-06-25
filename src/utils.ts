import {mouse_up, mouse_down, mouse_right, mouse_left } from './robotjsFunctions/mouse_movements';
import {draw_circle, draw_rectangle, draw_square} from './robotjsFunctions/mouse_drawings';

export const parseInputCommand = (data) => {
    const command: string = data.toString().split(' ')[0];
    const value1: number = Number(data.toString().split(' ')[1]);
    const value2: number = Number(data.toString().split(' ')[2]);

    if (command == 'mouse_up') {
        mouse_up(value1);
    } else if (command == 'mouse_down') {
        mouse_down(value1);
    } else if (command == 'mouse_right') {
        mouse_right(value1);
    } else if (command == 'mouse_left') {
        mouse_left(value1);
    } else if (command == 'draw_circle') {
        draw_circle(value1);
    } else if (command == 'draw_square') {
        draw_square(value1);
    } else if (command == 'draw_rectangle') {
        draw_rectangle(value1, value2);
    }
}