import MainLayout from "./components/MainLayout.jsx";
import UsersManagement from "./components/users-table/UsersTable.jsx";

export default function UserManagement(){
    return(
        <div className="">
            <MainLayout>
                <div className="font-bold text-2xl m-2">Users</div>
                <UsersManagement/>
            </MainLayout>

        </div>
    )
}