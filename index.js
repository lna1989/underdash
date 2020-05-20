class Underdash {
    static chunk(array = [], counter = 1) {
        return array.reduce((previousValue, currentValue, index) => {
            if (index % counter === 0) {
                return [...previousValue, [currentValue]];
            }
             return [...previousValue.slice(0, -1), [...previousValue.slice(-1)[0], currentValue]];
        }, []);
    }

    constructor() {
    }
}

console.log(Underdash.chunk(['abs', 'b', 'c', 'd', 'e', 'f'], 2));