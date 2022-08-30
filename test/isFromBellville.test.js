import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe('The isFromBellville function', function() {

    it('should check if car is FromBellville', function() {
        assert.equal(true, isFromBellville('CY1745L'));
    });
    //it('should greet Karen correctly', function() {
    //this test will fail - can you fix it ?
    //assert.equal('Hello, Karen', greet('Karen'));
    //});
});