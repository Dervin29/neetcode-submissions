class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for (let str of strs) {
            // Add:
            // length + '#' + word
            result += str.length + "#" + str;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];

        let i = 0;

        while (i < str.length) {
            // Find '#'
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            // Extract length
            const length = Number(str.slice(i, j));

            // Move after '#'
            j++;

            // Extract word
            const word = str.slice(j, j + length);

            result.push(word);

            // Move pointer to next section
            i = j + length;
        }

        return result;
    }
}
