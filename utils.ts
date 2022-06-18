function checkDataForCreateFunction (username: string, age: number, hobbies: string[]) {
    const isTypeThreshold = (currentValue) => typeof currentValue === 'string';
    if (typeof username === 'string' && typeof age === 'number' && hobbies) {
        if (hobbies.every(isTypeThreshold) || hobbies.length == 0) {
            return true;
        }
        
    } else {
        return false;
    }
}

export {
    checkDataForCreateFunction
}