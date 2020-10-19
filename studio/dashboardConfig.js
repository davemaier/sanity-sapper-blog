export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8deb9b3eede519ba0711e9',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-q4q1v526',
                  apiId: 'cf519173-b2a3-442b-9a6e-273ca8408786'
                },
                {
                  buildHookId: '5f8deb9b3eede51cd7070346',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-mh8gc6db',
                  apiId: '72d4920e-a191-40ae-830f-bd3293ba3cd8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/davemaier/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-mh8gc6db.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
