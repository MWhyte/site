export const SITE_METADATA = {
  title: `mwhyte.dev - software engineering blog`,
  author: 'Michael Whyte',
  headerTitle: `mwhyte.dev`,
  description:
    'Here, I share my thoughts, tips and experiences on software development, methodologies, design patterns, and best practices. I aim to help software engineers of all levels improve their skills and knowledge.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.mwhyte.dev',
  siteRepo: 'https://github.com/MWhyte',

  // TODO HERE - Update the following values to match your site
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.jpg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.jpeg`,

  // DONE
  email: 'mwhyte_dev@gmail.com',
  github: 'https://github.com/MWhyte',
  x: 'https://x.com/mwhyte_dev',
  youtube: 'https://www.youtube.com/@mwhyte_dev',
  linkedin: 'https://www.linkedin.com/in/mrmwhyte',
  locale: 'en-US',
  stickyNav: true,

  // TODO HERE - Update the following values to match your site
  goodreadsBookshelfUrl: 'https://www.goodreads.com/review/list/179720035-leo-huynh',
  goodreadsFeedUrl: 'https://www.goodreads.com/review/list_rss/179720035',
  imdbRatingsList: 'https://www.imdb.com/user/ur154483197/ratings/?view=grid',
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
      shareUrl: 'https://analytics.leohuynh.dev/share/c9ErglxqzY5CQJ8g/leohuynh.dev',
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
  support: {
    buyMeACoffee: 'https://www.buymeacoffee.com/leohuynh.dev',
    paypal: 'https://paypal.me/hta218?country.x=VN&locale.x=en_US',
    kofi: 'https://ko-fi.com/hta218',
  },
}
