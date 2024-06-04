import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <div className="p-20">
      <p>Hello</p>
      <Link href="/register">Register Page</Link>
      <Link href="/login">Login Page</Link>
   </div>
  )
}
