import assert from "assert";
import yearsAgo from "../yearAgo.js";

describe('The  function yearAgo', function() {

    it('should check return a current year ', function() {
        assert.equal(11, yearsAgo('2011'));
    });

});