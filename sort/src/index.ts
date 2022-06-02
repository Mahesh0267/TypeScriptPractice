import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([-10, 20, 30, 0]);
const charactersCollection = new CharacterCollection('xaaay');

const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const sortCharacter = new Sorter(charactersCollection);

sortCharacter.sort();
console.log(charactersCollection.data);

