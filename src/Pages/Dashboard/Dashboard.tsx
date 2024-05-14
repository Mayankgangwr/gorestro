import { Container, CurrentOrderCard, Flex, OverviewCard, StatusCard, TeamsTable } from "../../Components";
import { AlignItems } from "../../Components/Flex/Flex";
import { IStatusCard } from "../../Components/OrderCards/StatusCard/StatusCard";
import Styles from "./Dashboard.module.scss";
const overviewCards = [
    {
        isActive: true,
        progress: {
            isUp: false,
            value: 34,
        },
        headerTitle: "Total Orders",
        contentTitle: "10,756",
        contentDescription: "All running and delivered orders"
    },
    {
        isActive: false,
        progress: {
            isUp: true,
            value: 56,
        },
        headerTitle: "Pending Orders",
        contentTitle: "1,234",
        contentDescription: "Orders waiting to be processed"
    },
    {
        isActive: true,
        progress: {
            isUp: true,
            value: 25,
        },
        headerTitle: "In Progress Orders",
        contentTitle: "2,345",
        contentDescription: "Orders currently being processed"
    },
    {
        isActive: true,
        progress: {
            isUp: true,
            value: 15,
        },
        headerTitle: "Completed Orders",
        contentTitle: "7,832",
        contentDescription: "Orders marked as completed"
    }
];

const pendingStatusCards: IStatusCard[] = [
    {
        id: "ORD-202405091915",
        username: "John",
        tableNo: 5,
        items: 3,
        amount: "35.99",
        status: "pending",
        acceptedBy: "Chef"
    },
    {
        id: "ORD-202405091915",
        username: "Alice",
        tableNo: 3,
        items: 2,
        amount: "22.49",
        status: "pending",
        acceptedBy: "Cashier"
    },
    {
        id: "ORD-202405091915",
        username: "Bob",
        tableNo: 8,
        items: 1,
        amount: "12.99",
        status: "pending",
        acceptedBy: "Chef"
    },
    {
        id: "ORD-202405091915",
        username: "Emily",
        tableNo: 2,
        items: 4,
        amount: "45.75",
        status: "pending",
        acceptedBy: "Chef"
    },
    {
        id: "ORD-202405091915",
        username: "Sarah",
        tableNo: 7,
        items: 2,
        amount: "18.99",
        status: "pending",
        acceptedBy: "Chef"
    }
];

const progressStatusCards: IStatusCard[] = [
    {
        id: "ORD-202405091915",
        username: "John",
        tableNo: 5,
        items: 3,
        amount: "35.99",
        status: "progress",
        acceptedBy: "Chef"
    },
    {
        id: "ORD-202405091915",
        username: "Alice",
        tableNo: 3,
        items: 2,
        amount: "22.49",
        status: "progress",
        acceptedBy: "Cashier"
    },
    {
        id: "ORD-202405091915",
        username: "Bob",
        tableNo: 8,
        items: 1,
        amount: "12.99",
        status: "progress",
        acceptedBy: "Chef"
    },
    {
        id: "ORD-202405091915",
        username: "Emily",
        tableNo: 2,
        items: 4,
        amount: "45.75",
        status: "progress",
        acceptedBy: "Chef"
    },
    {
        id: "ORD-202405091915",
        username: "Sarah",
        tableNo: 7,
        items: 2,
        amount: "18.99",
        status: "progress",
        acceptedBy: "Chef"
    }
];

const completedStatusCards: IStatusCard[] = [
    {
        id: "ORD-202405091915",
        username: "John",
        tableNo: 5,
        items: 3,
        amount: "35.99",
        status: "completed",
        acceptedBy: "Chef"
    },
    {
        id: "ORD-202405091915",
        username: "Alice",
        tableNo: 3,
        items: 2,
        amount: "22.49",
        status: "completed",
        acceptedBy: "Cashier"
    },
    {
        id: "ORD-202405091915",
        username: "Bob",
        tableNo: 8,
        items: 1,
        amount: "12.99",
        status: "completed",
        acceptedBy: "Chef"
    },
    {
        id: "ORD-202405091915",
        username: "Emily",
        tableNo: 2,
        items: 4,
        amount: "45.75",
        status: "completed",
        acceptedBy: "Chef"
    },
    {
        id: "ORD-202405091915",
        username: "Sarah",
        tableNo: 7,
        items: 2,
        amount: "18.99",
        status: "completed",
        acceptedBy: "Chef"
    }
];




const Dashboard = () => {
    return (
        <Container>
            <Flex className="gap-5 bg-[#eff3f4]" alignItems={AlignItems.START}>
                <div className="w-[75%]">
                    <div className="grid sm::grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full ">
                        {overviewCards.map((item, index) => (
                            <OverviewCard
                                key={index}
                                isActive={item.isActive}
                                headerTitle={item.headerTitle}
                                contentTitle={item.contentTitle}
                                contentDescription={item.contentDescription}
                                progress={item.progress}
                            />
                        ))}
                    </div>
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-5 w-full">
                        <div className={Styles.PendingOrders}>
                            <span className={`${Styles.OrderStatus}`}>Pending Orders</span>
                            {pendingStatusCards.map((statusCard: IStatusCard) => (
                                <StatusCard
                                    id={statusCard.id}
                                    username={statusCard.username}
                                    tableNo={statusCard.tableNo}
                                    items={statusCard.items}
                                    amount={statusCard.amount}
                                    status={statusCard.status}
                                    acceptedBy={statusCard.acceptedBy}
                                />
                            ))}
                        </div>
                        <div className={Styles.ProgressOrders}>
                            <span className={`${Styles.OrderStatus} text-orange-400`}>Progress Orders</span>
                            {progressStatusCards.map((statusCard: IStatusCard) => (
                                <StatusCard
                                    id={statusCard.id}
                                    username={statusCard.username}
                                    tableNo={statusCard.tableNo}
                                    items={statusCard.items}
                                    amount={statusCard.amount}
                                    status={statusCard.status}
                                    acceptedBy={statusCard.acceptedBy}
                                />
                            ))}
                        </div>
                        <div className={Styles.CompletedOrders}>
                            <span className={`${Styles.OrderStatus} text-[#738ef8]`}>Completed Orders</span>
                            {completedStatusCards.map((statusCard: IStatusCard) => (
                                <StatusCard
                                    id={statusCard.id}
                                    username={statusCard.username}
                                    tableNo={statusCard.tableNo}
                                    items={statusCard.items}
                                    amount={statusCard.amount}
                                    status={statusCard.status}
                                    acceptedBy={statusCard.acceptedBy}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={Styles.TeamsTable}>
                        <TeamsTable/>
                    </div>
                </div>
                <div className="flex justify-center items-center flex-col gap-5 w-[25%]">
                    <CurrentOrderCard
                        id="ORD-202405091915"
                        username="Mayank Gangwar"
                        tableNo={"10"}
                        items={[]}
                        amount={"1,200"}
                        status={"Preparing"}
                        acceptedBy={"Rahul Kumar"}
                    />
                </div>
            </Flex>

        </Container>
    );

};
export default Dashboard;