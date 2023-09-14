import Link from "next/link"
import {v4 as uuidv4} from 'uuid';

export const QuoteBtn = () => {
    return (
        <div key={uuidv4()}>
            <Link href="/quote">
                <button className="bg-yellow-400  text-xl uppercase px-5 py-2 rounded-md">
                    contact us
                </button>
            </Link>
        </div>
    )
}
