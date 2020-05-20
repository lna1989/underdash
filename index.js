class Underdash {
    /**
     * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
     * @param array
     * @param counter
     * @returns array
     */
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
console.log(Underdash.chunk([], 2));