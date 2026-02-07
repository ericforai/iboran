import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import sharp from 'sharp'
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { IndustrySolutions } from './collections/IndustrySolutions'
import { SuccessStories } from './collections/SuccessStories'
import { Resources } from './collections/Resources'
import { Leads } from './collections/Leads'
import { Conversations } from './collections/Conversations'
import { Messages } from './collections/Messages'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { Contact } from './globals/Contact'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const isBuildPhase =
  process.env.npm_lifecycle_event === 'build' ||
  process.env.NEXT_PHASE === 'phase-production-build'
const useSMTPInRuntime =
  process.env.NODE_ENV === 'production' && Boolean(process.env.SMTP_HOST) && !isBuildPhase

export default buildConfig({
  admin: {
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeLogin: ['@/components/BeforeLogin'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeDashboard: ['@/components/BeforeDashboard'],
      beforeNavLinks: ['@/components/AgentConsole/NavLink'],
      views: {
        agentConsole: {
          Component: '@/components/AgentConsole/View',
          path: '/agent-console',
        },
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  collections: [
    Pages,
    Posts,
    Media,
    Categories,
    Users,
    IndustrySolutions,
    SuccessStories,
    Resources,
    Leads,
    Conversations,
    Messages,
  ],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer, Contact],
  plugins,
  email: nodemailerAdapter({
    defaultFromAddress: process.env.SMTP_FROM || 'info@boran.cn',
    defaultFromName: 'Boran Software',
    // Avoid external SMTP auth/latency during Next build.
    skipVerify: isBuildPhase,
    transportOptions: useSMTPInRuntime
      ? {
          host: process.env.SMTP_HOST,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
          port: Number(process.env.SMTP_PORT) || 465,
          secure: Number(process.env.SMTP_PORT) === 465,
          tls: {
            rejectUnauthorized: false,
          },
        }
      : {
          // Keep local/dev requests independent from external SMTP latency/failures.
          streamTransport: true,
          newline: 'unix',
          buffer: true,
      },
  }),
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})
