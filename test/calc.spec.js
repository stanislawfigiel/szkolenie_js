const {Calculator} = require('../src/calc');

const assert = require('assert');

describe('calcul', () => {

    it('should add numbers', () => {
            assert.equal(Calculator.add(2, 2), 4)
        }
    )

})
