import {
  TextAppearancesShowcase,
  TextCategoriesShowcase,
  TextStatusesShowcase,
} from './examples';

export const TextDemoTypes = [
  {
    title: 'Text Categories',
    description:
      'Text has pre-defined set of styles for headings, subtitles, paragraphs, and more.',
    component: TextCategoriesShowcase,
  },
  {
    title: 'Text Appearances',
    description: 'Text can have different appearances. Primary is the default one.',
    component: TextAppearancesShowcase,
  },
  {
    title: 'Text Statuses',
    description: 'Text can have different statuses.',
    component: TextStatusesShowcase,
  },
];
