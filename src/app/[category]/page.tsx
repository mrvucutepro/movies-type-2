import Container from "@/components/Container";
import ListFilmCategory from "@/components/ListFilmCategory";

export default async function Category({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;
  return (
    <Container className="pt-[80px]">
      <ListFilmCategory category={category} />
    </Container>
  );
}
