import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsArrow90DegLeft } from "react-icons/bs";
import {ImCancelCircle} from "react-icons/im";

export default function TabbedMessages() {
    return (
        <div className="p-3 bg-white w-full ">
            <div className="font-bold text-2xl mb-4">Messages</div>
            <Tabbed />
        </div>
    );
}

export function Tabbed() {
    const newMessages = [
        { id: 1, user: "Alan Michael", message: "Check my dashboard" },
        { id: 2, user: "Jane Smith", message: "Review the report" },
        { id: 3, user: "John Doe", message: "Meeting at 3 PM" },
    ];

    const archivedMessages = [
        { id: 1, user: "Alice Johnson", message: "Project update required" },
        { id: 2, user: "Bob Brown", message: "Vacation request" },
        { id: 3, user: "Charlie Black", message: "Invoice issue" },
    ];

    const deletedMessages = [
        { id: 1, user: "Dave White", message: "Old meeting notes" },
        { id: 2, user: "Eva Green", message: "Discarded draft" },
        { id: 3, user: "Frank Grey", message: "Outdated schedule" },
    ];

    const tabs = [
        {
            id: "new",
            label: "New Messages",
            content: newMessages.map((msg) => <Message key={msg.id} user={msg.user} message={msg.message} />),
        },
        {
            id: "archived",
            label: "Archived Messages",
            content: archivedMessages.map((msg) => <Message key={msg.id} user={msg.user} message={msg.message} />),
        },
        {
            id: "deleted",
            label: "Deleted Messages",
            content: deletedMessages.map((msg) => <Message key={msg.id} user={msg.user} message={msg.message} />),
        },
    ];

    return (
        <div className="flex w-full flex-col">
            <Tabs aria-label="Dynamic tabs" items={tabs}>
                {(item) => (
                    <Tab key={item.id} title={item.label}>
                        <Card>
                            <CardBody className="flex flex-col gap-2">
                                {item.content}
                            </CardBody>
                        </Card>
                    </Tab>
                )}
            </Tabs>
        </div>
    );
}

export function Message({ user, message }) {
    return (
        <div className="flex gap-4 p-1 rounded-xl bg-purple-100 w-full justify-between items-center">
            <div className="flex flex-row gap-3">
                <div className="text-4xl font-bold text-red-600 p-3">.</div>
                <div className="flex flex-col p-1 gap-1">
                    <div className="text-lg font-semibold">{user}</div>
                    <div className="text-md">{message}</div>
                </div>
            </div>

            <div className="flex gap-2 p-3 ">
                <BsArrow90DegLeft className="text-xl text-blue-500 cursor-pointer"/>
                <RiDeleteBinLine className="text-xl text-red-600 cursor-pointer"/>
            </div>
        </div>
    );
}


const notificationTypes = {
    "New Registration": "text-blue-500",
    "Payment Made": "text-green-500",
    "New Incident": "text-red-500"
};

export function Notification({ type, message }) {
    return (
        <div className="bg-purple-200 rounded-xl p-4 items-center flex gap-2">
            <ImCancelCircle className="text-xl cursor-pointer" />
            <div className={`font-bold text-lg ${notificationTypes[type]}`}>
                {message}
            </div>
        </div>
    );
}
