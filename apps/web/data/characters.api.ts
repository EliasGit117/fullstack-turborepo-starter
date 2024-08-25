
export const fetchCharacter = async (id: string) => {
  return await fetch(`https://swapi.dev/api/people/${id}`).then(res => res.json());
};
