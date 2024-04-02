import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentBlockContent extends Schema.Component {
  collectionName: 'components_content_block_contents';
  info: {
    displayName: 'Block Content';
    icon: 'archive';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    content: Attribute.Blocks;
    image: Attribute.Media;
    link: Attribute.Component<'content.link'>;
  };
}

export interface ContentGallery extends Schema.Component {
  collectionName: 'components_content_galleries';
  info: {
    displayName: 'gallery';
    icon: 'grid';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    images: Attribute.Media;
    type: Attribute.Enumeration<['slider', 'grid']> &
      Attribute.Required &
      Attribute.DefaultTo<'slider'>;
  };
}

export interface ContentLink extends Schema.Component {
  collectionName: 'components_content_links';
  info: {
    displayName: 'link';
    icon: 'hashtag';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    external: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
    icon: 'chartCircle';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.block-content': ContentBlockContent;
      'content.gallery': ContentGallery;
      'content.link': ContentLink;
      'seo.seo': SeoSeo;
    }
  }
}
