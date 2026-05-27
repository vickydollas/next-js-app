import SideNavigation from "../_components/SideNavigation"
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-10 gap-x-10 min-h-screen">
            <div className="col-span-2"><SideNavigation /></div>
            <div className="col-span-8">{children}</div>
        </div>
    )
}