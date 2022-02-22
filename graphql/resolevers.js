const minna = {
  name: "minna",
  age: 32,
  gender: "female",
};

const resolvers = {
  Query: {
    person: () => minna,
  },
};

export default resolvers;
