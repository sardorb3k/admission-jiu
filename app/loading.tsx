export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
                <div className="w-full max-w-md mx-auto [text-align-last:center]">
                    <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}