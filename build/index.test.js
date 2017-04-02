'use strict';

var _ = require('.');

test('replaces blacklisted workds with asterisks', function () {
	return expect((0, _.sensitiveWords)('The name of the NX will be the Nintendo Switch', ['switch'])).toBe('The name of the NX will be the Nintendo *****');
});

test('replaces multiple instances of blacklisted words', function () {
	return expect((0, _.sensitiveWords)('The name of the NX will be the Nintendo Switch.The Switch will be awesome', ['switch'])).toBe('The name of the NX will be the Nintendo *****.The ***** will be awesome');
});