
export default function LayoutCenter({ children }: any) {
    return (
        <div className="flex h-full items-center py-16">
            <div className="w-full max-w-md mx-auto p-6">
                <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    {children}
                </div>
            </div>
        </div>
    )
}