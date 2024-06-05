
export default function Layout({children}:{children: React.ReactNode}){
    return (
        <div>
            <div className="border-b p-2 text-center">
                20% off if you signup till next week
            </div>
            {children}
        </div>
    )
}