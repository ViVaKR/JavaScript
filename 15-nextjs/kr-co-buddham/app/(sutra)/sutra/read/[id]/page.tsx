type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  return (
    <div>
      <h1>Read {id}</h1>
    </div>
  );
}
