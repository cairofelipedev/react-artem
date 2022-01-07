import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <a>cairo.dev.br</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/news">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
