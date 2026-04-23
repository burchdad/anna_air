import { createLocalBusinessSchema } from "@/lib/seo";

export function LocalBusinessSchema() {
  const schema = createLocalBusinessSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
