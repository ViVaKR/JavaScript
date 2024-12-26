type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await Promise.resolve(params);
  return (
    <div>
      <h1>Update {id}</h1>
    </div>
  );
}
