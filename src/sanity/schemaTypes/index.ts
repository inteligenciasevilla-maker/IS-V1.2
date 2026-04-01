import { type SchemaTypeDefinition } from "sanity";
import { postType } from "./postType";
import { caseStudyType } from "./caseStudyType";
import { authorType } from "./authorType";
import { categoryType } from "./categoryType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, caseStudyType, authorType, categoryType],
};
