import assert from "assert";
import isWeekday from "../isWeekday.js";

describe('The  function isWeeday', function() {

    it('should check if  is isWeekday', function() {
        assert.equal(true, isWeekday('sunday'));
    });

});