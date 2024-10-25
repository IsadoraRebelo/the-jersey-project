import { fetchUserCollection } from '@/api/fetch-user-collection';

type CharacterProfileProps = {
  params: {
    collectionId: string;
  };
};

export default async function CharacterProfilePage({
  params,
}: CharacterProfileProps) {
  const { collectionId } = params;
  const { data } = await fetchUserCollection(parseInt(collectionId));

  if (!data) {
    return <div>Collection not found</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.team}</h2>
          <p>{item.type}</p>
        </div>
      ))}
    </div>
  );
}
