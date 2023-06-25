import { g, auth, config } from '@grafbase/sdk'

const user = g.model('user', {
  name:g.string().length({min:2 ,max: 20}),
  email:g.string().unique(),
  avatarUrl:g.url(),
  description:g.string().optional(),
  githubUrl:g.url().optional(),
  linkdinUrl:g.url().optional(),
  projects:g.relation(()=>Project).list().optional()
})

const Project = g.model('Project',{
  title:g.string().length({min:3}),
  description:g.string().optional(),
  image:g.url(),
  liveSiteUrl: g.url(),
  githubUrl:g.url().optional(),
  category:g.string().search(),
  createdBy: g.relation(()=>user)

})

export default config({
  schema: g
})
