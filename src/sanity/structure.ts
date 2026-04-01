import type { StructureResolver } from "sanity/desk";
import { 
  DocumentTextIcon, 
  MasterDetailIcon, 
  UsersIcon, 
  TagsIcon 
} from "@sanity/icons";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Gestión Corporativa")
    .items([
      // 1. Blog & Insights
      S.listItem()
        .title("Blog & Insights")
        .icon(DocumentTextIcon)
        .child(
          S.documentTypeList("post")
            .title("Todos los Artículos")
        ),
      
      // 2. Casos de Éxito
      S.listItem()
        .title("Casos de Éxito")
        .icon(MasterDetailIcon)
        .child(
          S.documentTypeList("caseStudy")
            .title("Portafolio de transformaciones")
        ),

      // Separador visual en el sidebar
      S.divider(),

      // 3. Autores y Equipo
      S.listItem()
        .title("Autores / Equipo")
        .icon(UsersIcon)
        .child(
          S.documentTypeList("author")
            .title("Perfiles de Autores")
        ),

      // 4. Categorías
      S.listItem()
        .title("Categorías")
        .icon(TagsIcon)
        .child(
          S.documentTypeList("category")
            .title("Clasificación de Contenido")
        ),
    ]);
