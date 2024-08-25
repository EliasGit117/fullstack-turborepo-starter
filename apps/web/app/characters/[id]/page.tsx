import CharacterDetails from '../../../components/character-details';
import { fetchCharacter } from '../../../data/characters.api';
import { createQueryClient } from '../../../util/get-query-client';
import { dehydrate, HydrationBoundary, usePrefetchQuery } from '@tanstack/react-query';

interface IPageProps {
  params: {
    id: string;
  };
}


export default async function CharacterDetailsPage({ params }: IPageProps) {
  const queryClient = createQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['character-by-id', params.id],
    queryFn: () => fetchCharacter(params.id)
  });

  const character = await fetchCharacter(params.id);

  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CharacterDetails id={params.id} defaultData={character}/>
      </HydrationBoundary>
    </main>
  );
}
