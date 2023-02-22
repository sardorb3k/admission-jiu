import Link from 'next/link'


export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello world! a
      </h1>
      <Link href="/login">
        Login
      </Link>
    </main>
  )
}
