"use client";

import { useQuery } from '@tanstack/react-query';
import { fetchCharacter } from '../data/characters.api';

export default function CharacterDetails({ id, defaultData }: { id: string, defaultData?: any }) {
  const { isLoading, refetch, error, data } = useQuery({
    queryFn: () => fetchCharacter(id),
    queryKey: ['character-by-id', id],
    initialData: defaultData
  });

  if (isLoading) {
    return (
      <main>
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <div>
      {
        data ?
          <>
            <p>{data.name}</p>
            <p>{data.birth_year}</p>
            <p>{data.gender}</p>
          </>
          :
          <p>Not found</p>

      }
      <button onClick={() => refetch()}>
        Reload
      </button>
    </div>
  );
}
