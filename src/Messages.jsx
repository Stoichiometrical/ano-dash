import TabbedMessages, {Notification} from "./components/TabbedMessages.jsx";
import Sidebar from "./components/Sidebar.jsx";




const notifications = [
    { type: "New Registration", message: "New user has registered" },
    { type: "Payment Made", message: "Payment has been made" },
    { type: "New Incident", message: "New incident reported" },
    { type: "New Registration", message: "Another user has registered" }
];

export default function Messages() {
    return (
        <div className="flex flex-col w-full gap-2 bg-purple-300 h-[100vh]">
            <div className="">
                <div className="text-xl font-bold text-purple-700 p-4">Mhanya</div>
            </div>
            <div className="flex gap-2 h-full ml-2">
                <Sidebar />
                <TabbedMessages className="w-2/4" />
                <div className="bg-white w-2/4 p-3">
                    <div className="font-bold text-2xl">Notifications</div>
                    <div className="flex flex-col gap-2">
                        {notifications.map((notification, index) => (
                            <Notification key={index} type={notification.type} message={notification.message} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
