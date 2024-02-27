import { join } from 'path'
import type { Config } from 'tailwindcss'

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin'

const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    // 3. Append the path to the Skeleton package
    join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],
  theme: {
    extend: {}
  },
  plugins: [
    // 4. Append the Skeleton plugin (after other plugins)
    skeleton({
      themes: {
        preset: [
          { name: 'skeleton', enhancements: true },
          { name: 'modern', enhancements: true },
          { name: 'seafoam', enhancements: true },
          { name: 'sahara', enhancements: true },
          { name: 'gold-nouveau', enhancements: true },
          { name: 'wintry', enhancements: true },
          { name: 'rocket', enhancements: true },
          { name: 'vintage', enhancements: true },
          { name: 'hamlindigo', enhancements: true },
          { name: 'crimson', enhancements: true }
        ]
      }
    })
  ]
} satisfies Config

export default config
