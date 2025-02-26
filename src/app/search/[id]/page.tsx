import Container from "@/components/Container";
import SearchMovie from "@/components/SearchFilm";

export default async function SearchFilm({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const search = (await params).id;

  return (
    <Container className="pt-[80px]">
      <SearchMovie search={search} />
    </Container>
  );
}
