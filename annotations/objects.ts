const profile = {
  name: "mahesh",
  age: 25,
  coords: {
    lat: 0,
    long: 15,
  },
  SetAge(age: number): void {
    this.age = age;
  },
};

//ES2015
const { age }: { age: number } = profile;

const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
