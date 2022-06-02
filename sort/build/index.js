"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([-10, 20, 30, 0]);
const charactersCollection = new CharactersCollection_1.CharacterCollection('xaaay');
const sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
const sortCharacter = new Sorter_1.Sorter(charactersCollection);
sortCharacter.sort();
console.log(charactersCollection.data);
