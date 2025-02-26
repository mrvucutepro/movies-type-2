import Container from "@/components/Container";
import DetailMovie from "@/components/DetailFilm";

export default async function Movie({
  params,
}: {
  params: Promise<{ movie: string }>;
}) {
  const movie = (await params).movie;
  return (
    <Container className="pt-[80px]">
      <DetailMovie movie={movie} />
    </Container>
  );
}
