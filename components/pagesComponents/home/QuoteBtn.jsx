import Link from "next/link"


export const QuoteBtn = () => {
  return (
    <Link href="/quote">
        <button className="bg-yellow-400  text-xl uppercase px-5 py-2 rounded-md">
            contact us
        </button>
    </Link>
  )
}
