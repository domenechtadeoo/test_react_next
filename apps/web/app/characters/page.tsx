import { Button } from "@ds/ui";
import { colors } from "@ds/tokens";

const CharactersPage = async () => {
  return (
    <main className="p-8">
      <Button>Click me</Button>
      <h1 className="text-3xl font-bold mb-6" style={{ color: colors.text }}>Characters</h1>
    </main>
  );
};

export default CharactersPage;