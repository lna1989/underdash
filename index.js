class Underdash {
    /**
     * Creates an array of elements split into groups the length of size.
     * If array can't be split evenly, the final chunk will be the remaining elements.
     * @param array
     * @param counter
     * @returns {*[]}
     */
    static chunk(array = [], counter = 1) {
        return array.reduce((previousValue, currentValue, index) => {
            if (index % counter === 0) {
                return [...previousValue, [currentValue]];
            }
            return [...previousValue.slice(0, -1), [...previousValue.slice(-1)[0], currentValue]];
        }, []);
    }

    /**
     * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
     * @param array
     * @returns {*[]}
     */
    static compact(array = []) {
        return Array.isArray(array) ? array.filter(Boolean) : [];
    }

    /**
     * Creates a new array concatenating array with any additional arrays and/or values.
     * @param array
     * @param values
     * @returns {*[]}
     */
    static concat(array = [], ...values) {
        return Array.isArray(array) ? array.concat(...values) : [].concat(...values);
    }

    /**
     * Creates a slice of array with n elements dropped from the beginning.
     * @param array
     * @param count
     * @returns {*[]}
     */
    static drop(array = [], count = 1) {
        return array.slice(count);
    }

    /**
     * Creates a slice of array with n elements dropped from the end.
     * @param array
     * @param count
     * @returns {*[]}
     */
    static dropRight(array = [], count = 1) {
        return array.slice(0, -count);
    }

    constructor() {
    }
}