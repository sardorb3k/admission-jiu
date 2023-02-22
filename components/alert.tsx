
export default function Alert({status,message}: any) {
    return (
        <div className={
            `${status} text-sm text-white rounded-md p-4`} role="alert">
            {message}
        </div>
    )
}