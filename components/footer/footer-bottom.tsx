import { clsx } from 'clsx'
import { AreaChart, Rss } from 'lucide-react'
import { Link } from '~/components/ui/link'
import { SpotifyNowPlaying } from '~/components/ui/now-playing'
import { SITE_METADATA } from '~/data/site-metadata'
import MadeInVietNam from '~/icons/miv.svg'

export function FooterBottom() {
  return (
    <div
      className={clsx([
        'pt-5 md:my-2',
        'flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:gap-16',
        'border-t border-gray-200 dark:border-gray-700',
      ])}
    >
      <div className="flex items-center">mwhyte.dev © {new Date().getFullYear()}</div>
    </div>
  )
}
