'use client'

import HEADER_NAV_LINKS from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import clsx from 'clsx'
import NextImage from 'next/image'
import { usePathname } from 'next/navigation'
import Container from './Container'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'
import ThemeSwitcher from './ThemeSwitcher'
import { AnalyticsLink } from './AnalyticsLink'
import { GrowingUnderline } from './growing-underline'
import { useEffect } from 'react'

let logged = false
function logASCIItext() {
  if (logged) return
  console.info(
    "  _            _                       _          _            \r\n | |          | |                     | |        | |           \r\n | | ___  ___ | |__  _   _ _   _ _ __ | |__    __| | _____   __\r\n | |/ _ \\/ _ \\| '_ \\| | | | | | | '_ \\| '_ \\  / _` |/ _ \\ \\ / /\r\n | |  __/ (_) | | | | |_| | |_| | | | | | | || (_| |  __/\\ V / \r\n |_|\\___|\\___/|_| |_|\\__,_|\\__, |_| |_|_| |_(_)__,_|\\___| \\_/  \r\n                            __/ |                              \r\n                           |___/                               "
  )
  console.log('🧑‍💻 View source:', siteMetadata.siteRepo)
  console.log('🙌 Find me:', siteMetadata.x)
  logged = true
}

function Header() {
  let pathname = usePathname()
  useEffect(logASCIItext, [])

  return (
    <Container
      as="header"
      className={clsx(
        'bg-white/75 py-2 backdrop-blur dark:bg-dark/75',
        'rounded-2xl shadow-sm saturate-100',
        siteMetadata.stickyNav && 'sticky top-2 z-50 lg:top-3'
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/"
          aria-label={siteMetadata.headerTitle}
          className="rounded-xl p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:ring-white/10"
        >
          <NextImage
            src="/static/images/logo.jpg"
            alt={siteMetadata.headerTitle}
            width={100}
            height={100}
            className="h-10 w-10 rounded-xl"
            priority
          />
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden space-x-1.5 sm:block">
            {HEADER_NAV_LINKS.filter((link) => link.href !== '/').map(({ title, href }) => {
              return (
                <Link key={title} href={href} className="px-3 py-1 font-medium">
                  <GrowingUnderline
                    className={clsx(pathname.startsWith(href) && 'bg-[length:100%_50%]')}
                    data-umami-event={`nav-${href.replace('/', '')}`}
                  >
                    {title}
                  </GrowingUnderline>
                </Link>
              )
            })}
          </div>
          <div
            data-orientation="vertical"
            role="none"
            className="h-4 w-px shrink-0 bg-gray-200 dark:bg-gray-600"
          />
          <div className="flex items-center gap-1">
            <ThemeSwitcher />
            <AnalyticsLink />
            <SearchButton />
            <MobileNav />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Header
