module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://fascinating-gumption-33d7b6.netlify.app/`,
    // Your Name
    name: 'Bhaskar Bagchi',
    // Main Site Title
    title: `Bhaskar Bagchi`,
    // Description that goes under your name in main bio
    description: `Sr. Software Dev Engineer, AWS`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/bhaskarbagchi`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/bhaskarbagchi/`,
    // Content of the About Me section
    about: `I'm Bhaskar, a Sr. Software Engineer at Amazon Web Services in Seattle. I am from Prayagraj, India. I am currently working in AWS AI org where I build scalable training platform for training state of the art ASR and LLM models. Before this I have worked in Amazon Fulfilment space and helped launch a new AWS Service, Lookout for Equipment.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    // projects: [
    //   {
    //     name: 'Devfolio',
    //     description:
    //       'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    //   {
    //     name: 'ChromeExtensionKit',
    //     description:
    //       'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
    //     link: 'https://chromeextensionkit.com/?ref=devfolio',
    //   },
    //   {
    //     name: 'Another Cool Project',
    //     description:
    //       'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    // ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Amazon Web Services',
        description: 'Sr Software Dev Engineer (October 2021 - Present)',
        link: 'https://docs.aws.amazon.com/transcribe/latest/dg/what-is.html',
      },
      {
        name: 'Amazon Web Services',
        description: 'Software Dev Engineer (April 2018 - September 2021)',
        link: 'https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/what-is.html',
      },
      {
        name: 'Amazon Fulfilment Technology',
        description: 'Software Dev Engineer (July 2015 - March 2018)',
        link: 'https://en.wikipedia.org/wiki/Amazon_Fresh',
      },
      {
        name: 'Tinyowl',
        description: 'Data Science Intern (May 2015 - July 2015)',
        link: 'https://www.linkedin.com/company/tinyowl/?originalSubdomain=in',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Java, Python, C++',
      },
      {
        name: 'Databases',
        description: 'DynamoDB, Aurora',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
