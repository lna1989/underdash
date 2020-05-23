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

    /**
     * Fills elements of array with value from start up to, but not including, end.
     * @param array
     * @param value
     * @param startIndex
     * @param endIndex
     * @returns {*[]}
     */
    static fill(array, value = '', startIndex = 0, endIndex = array.length) {
        return array.fill(value, startIndex, endIndex);
    }

    /**
     * Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
     * @param array
     * @param predicate
     * @returns {*|number|bigint}
     */
    static find(array = [], predicate) {
        return array.find(predicate);
    }

    /**
     * Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
     * @param array
     * @param predicate
     * @returns {number}
     */
    static findIndex(array = [], predicate) {
        return array.findIndex(predicate);
    }

    constructor() {
    }
}

