test("Exceptions", function () {
	var obj, expression, expected;
	obj = {};

	expression = function() { obj.foo(); };
	expected = "TypeError";
	raises(expression, expected);

	expression = function() { foo.bar; };
	expected = "ReferenceError";
	raises(expression, expected);

	expression = function() { eval("foo = ;"); };
	expected = "SyntaxError";
	raises(expression, expected);
});
