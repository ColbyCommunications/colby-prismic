// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AcademicPageDocumentDataSlicesSlice = never;

/**
 * Content for Academic Page documents
 */
interface AcademicPageDocumentData {
  /**
   * Slice Zone field in *Academic Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: academic_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AcademicPageDocumentDataSlicesSlice> /**
   * Meta Title field in *Academic Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: academic_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Academic Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: academic_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Academic Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: academic_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Academic Page document from Prismic
 *
 * - **API ID**: `academic_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AcademicPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<AcademicPageDocumentData>,
    "academic_page",
    Lang
  >;

type AlumniEventsDocumentDataSlicesSlice = ParagraphSlice;

/**
 * Content for Alumni Events documents
 */
interface AlumniEventsDocumentData {
  /**
   * Name field in *Alumni Events*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alumni_events.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Slice Zone field in *Alumni Events*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: alumni_events.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AlumniEventsDocumentDataSlicesSlice>;
}

/**
 * Alumni Events document from Prismic
 *
 * - **API ID**: `alumni_events`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AlumniEventsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<AlumniEventsDocumentData>,
    "alumni_events",
    Lang
  >;

type AlumniPageDocumentDataSlicesSlice = RichTextSlice | ParagraphSlice;

/**
 * Content for Alumni Page documents
 */
interface AlumniPageDocumentData {
  /**
   * Slice Zone field in *Alumni Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: alumni_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AlumniPageDocumentDataSlicesSlice> /**
   * Meta Title field in *Alumni Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: alumni_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Alumni Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: alumni_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Alumni Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: alumni_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Alumni Page document from Prismic
 *
 * - **API ID**: `alumni_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AlumniPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<AlumniPageDocumentData>,
    "alumni_page",
    Lang
  >;

type PageDocumentDataSlicesSlice = ParagraphSlice | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Parent Page field in *Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: page.parent_page
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  parent_page: prismic.ContentRelationshipField<"page">;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  meta_description: prismic.RichTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type TestPageDocumentDataSlicesSlice = RichTextSlice | ParagraphSlice;

/**
 * Content for Test Page documents
 */
interface TestPageDocumentData {
  /**
   * Slice Zone field in *Test Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: test_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<TestPageDocumentDataSlicesSlice> /**
   * Meta Title field in *Test Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: test_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Test Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: test_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Test Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: test_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Test Page document from Prismic
 *
 * - **API ID**: `test_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TestPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<TestPageDocumentData>,
    "test_page",
    Lang
  >;

export type AllDocumentTypes =
  | AcademicPageDocument
  | AlumniEventsDocument
  | AlumniPageDocument
  | PageDocument
  | TestPageDocument;

/**
 * Primary content in *Paragraph → Default → Primary*
 */
export interface ParagraphSliceDefaultPrimary {
  /**
   * Content field in *Paragraph → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: paragraph.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;
}

/**
 * Default variation for Paragraph Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ParagraphSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ParagraphSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Paragraph → Paragraph with Large Type → Primary*
 */
export interface ParagraphSliceParagraphWithLargeTypePrimary {
  /**
   * Content field in *Paragraph → Paragraph with Large Type → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: paragraph.paragraphWithLargeType.primary.content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;
}

/**
 * Paragraph with Large Type variation for Paragraph Slice
 *
 * - **API ID**: `paragraphWithLargeType`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ParagraphSliceParagraphWithLargeType = prismic.SharedSliceVariation<
  "paragraphWithLargeType",
  Simplify<ParagraphSliceParagraphWithLargeTypePrimary>,
  never
>;

/**
 * Slice variation for *Paragraph*
 */
type ParagraphSliceVariation =
  | ParagraphSliceDefault
  | ParagraphSliceParagraphWithLargeType;

/**
 * Paragraph Shared Slice
 *
 * - **API ID**: `paragraph`
 * - **Description**: Paragraph
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ParagraphSlice = prismic.SharedSlice<
  "paragraph",
  ParagraphSliceVariation
>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AcademicPageDocument,
      AcademicPageDocumentData,
      AcademicPageDocumentDataSlicesSlice,
      AlumniEventsDocument,
      AlumniEventsDocumentData,
      AlumniEventsDocumentDataSlicesSlice,
      AlumniPageDocument,
      AlumniPageDocumentData,
      AlumniPageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      TestPageDocument,
      TestPageDocumentData,
      TestPageDocumentDataSlicesSlice,
      AllDocumentTypes,
      ParagraphSlice,
      ParagraphSliceDefaultPrimary,
      ParagraphSliceParagraphWithLargeTypePrimary,
      ParagraphSliceVariation,
      ParagraphSliceDefault,
      ParagraphSliceParagraphWithLargeType,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
    };
  }
}
