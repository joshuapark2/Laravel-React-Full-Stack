import { Outlet } from "react-router-dom";

export default function GuestLayout() {
    return (
        <div>
            <div>
                For Guest Only
                <Outlet />
            </div>
        </div>
    )
}