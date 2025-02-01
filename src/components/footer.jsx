import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { buttonVariants } from '@/components/ui/button'

import { MaxWidthWrapper } from '@/components/max-width-wrapper'

export function Footer() {
  return (
    <footer className="h-16 border-t-2">
      <MaxWidthWrapper className="flex items-center justify-center gap-2">
        <p className="text-sm text-muted-foreground">Jenish Adhikari</p>
        <Link
          to="https://github.com/jenishxadhikari/github-profile-readme-generator"
          target="_blank"
          className={buttonVariants({ size: 'icon', variant: 'ghost' })}
        >
          <FaGithub />
        </Link>
      </MaxWidthWrapper>
    </footer>
  )
}
