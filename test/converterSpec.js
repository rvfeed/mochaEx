var expect = require("chai").expect;
var conv = require("../app/converter");
describe("Adding to given numbers", function(){
	it("add to provided numbers", function(){
		var ext = conv.add(1, 2);
		expect(ext).to.equal(3);
	});
});