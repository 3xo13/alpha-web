import Link from 'next/link'

const SubmitionMsg = () => {
  return (
    <div key={uuidv4()} className='w-96 h-100 glassmophsim '>
        <h2 className='text-yellow-400'>
            Thank you for your submition
        </h2>
        <Link href='/' >
            <button>Back To <span className='text-green-200'>HOME</span> Page</button>
        </Link>
    </div>
  )
}

export default SubmitionMsg

// submition meassage styling using tailwind classes
// 