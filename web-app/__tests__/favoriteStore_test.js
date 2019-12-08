// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import favoriteStore from '../src/stores/favoriteStore';


test('Test store cleanup', () => {
    favoriteStore.favoriteParagraphs["title0"] = "test";
    favoriteStore.favoriteParagraphs["abstract0"] = "test";
    favoriteStore.favoriteParagraphs["description0"] = "test";
    favoriteStore.favoriteParagraphs["claims0"] = "test";
    favoriteStore.cleanup(true, false, true, false, false);
    expect(favoriteStore.favoriteParagraphs).toEqual({
        "description0": "test",
        "title0": "test"
    })
});
