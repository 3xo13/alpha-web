export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="flex flex-row-center screen">
            <p className="text-6xl mr-10 text-yellow-500">Loading...</p>
            <img src="/assets/icons/loading.png" alt="lodaing" className="w-16 h-16 animate-spin"/>
        </div>
    )
  }