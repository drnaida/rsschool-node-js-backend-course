export const parseArguments = (line) => {
    const [cmd, ...rest] = line.trim().split(' ');
    let ars = rest.join(' ');
    let result = ars.split(' ');
    if (ars.includes('"')) {
        result = ars.split('"').filter((el) => {
            return el !== '';
        });
    }
    return result;
}