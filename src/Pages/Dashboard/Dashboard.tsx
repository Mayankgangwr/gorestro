import { Avatar, Badge, PresenceBadgeStatus, Tab, TabList, TableCellLayout } from "@fluentui/react-components";
import { Button, Container, CurrentOrderCard, Flex, InputField, MobileOverviewCard, StatusCard, TeamsTable } from "../../Components";
import { AlignItems, FlexDirection, JustifyContent } from "../../Components/Flex/Flex";
import { IStatusCard } from "../../Components/OrderCards/StatusCard/StatusCard";
import Styles from "./Dashboard.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import ProfileCard from "../../Components/Card/ProfileCard/ProfileCard";
import { IEmployee } from "../../Models";
const overviewCards = [
    {
        isActive: true,
        progress: {
            isUp: true,
            value: 56,
        },
        headerTitle: "Pending Orders",
        contentTitle: "234",
        contentDescription: "Orders waiting to be processed"
    },
    {
        isActive: false,
        progress: {
            isUp: true,
            value: 25,
        },
        headerTitle: "In Progress Orders",
        contentTitle: "345",
        contentDescription: "Orders currently being processed"
    },
    {
        isActive: false,
        progress: {
            isUp: true,
            value: 15,
        },
        headerTitle: "Completed Orders",
        contentTitle: "832",
        contentDescription: "Orders marked as completed"
    },
    {
        isActive: true,
        progress: {
            isUp: false,
            value: 34,
        },
        headerTitle: "Total Orders",
        contentTitle: "756",
        contentDescription: "All running and delivered orders"
    }
];

const OrderStatusCards: IStatusCard[] = [
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
    },
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
    }, {
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
    const teams = useSelector((state: any) => state.team.employees);
    const products = useSelector((state: any) => state.product.products);
    const [orderStatus, setOrderStatus] = useState("");
    const [showTable, setShowTable] = useState("teams");
    const [filteredOrderStatusCards, setFilteredOrderStatusCards] = useState<IStatusCard[]>(OrderStatusCards);
    const getFilteredOrderStatusCards = (status: string) => {
        if (status === "") {
            return OrderStatusCards;
        }
        const orderStatusCards = OrderStatusCards.filter(item => item.status === status);
        return orderStatusCards;
    }
    const getTeams = () => {
        let teamsData: any[] = [];
        teams.map((item: any) => {
            const columns = {
                id: item.id,
                name: <TableCellLayout
                    media={
                        <Avatar
                            aria-label={item.name}
                            name={item.name}
                            size={40}
                            badge={{
                                status: item.isLoggedIn as PresenceBadgeStatus,
                            }}
                            image={{
                                src: "https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg",
                            }}
                        />
                    }
                >
                    <Flex direction={FlexDirection.COLUMN} justifyContent={JustifyContent.START} alignItems={AlignItems.START}>
                        <span className="text-lg text-gray-700 font-semibold leading-4">{item.name}</span>
                        <span className="text-sm text-gray-600 font-normal">{item.position}</span>
                    </Flex>
                </TableCellLayout>,
                phoneNumber: item.phoneNumber,
                shift: item.shift,
                workTiming: (item.loggedOut === "" && item.loggedAt === "") ? "Out of office" : `${moment(item.loggedAt).format("HH:mm:ss A")} to ${item.loggedOut ? moment(item.loggedOut).format("HH:mm:ss A") : "Available"}`,
            };
            teamsData.push(columns);
        })
        return teamsData;
    }
    const getProducts = () => {
        let productsData: any[] = [];
        products.map((product: any) => {
            const columns = {
                id: product.id,
                name: <TableCellLayout
                    media={
                        <Avatar
                            aria-label={product.name}
                            name={product.name}
                            size={64}
                        />
                    }
                >
                    <Flex direction={FlexDirection.COLUMN} justifyContent={JustifyContent.START} alignItems={AlignItems.START}>
                        <span className="text-lg text-gray-700 font-semibold">{product.name}</span>
                        <span className="text-sm text-gray-600 font-normal leading-4">{product.description}</span>
                    </Flex>
                </TableCellLayout>,
                category: product.category,
                price: `$${product.price}`,
                status: product.status ? <Badge appearance="filled" color="brand">Available</Badge> : <Badge appearance="filled" color="danger">Not Available</Badge>,
            };
            productsData.push(columns);
        })
        return productsData;
    }
    useEffect(() => {
        const orderStatusCards = getFilteredOrderStatusCards(orderStatus);
        setFilteredOrderStatusCards(orderStatusCards);
    }, [orderStatus]);
    return (
        <Container>
            <Flex className="gap-1 md:gap-2 lg:gap-3 xl:gap-4 bg-[#eff3f4]" alignItems={AlignItems.START}>
                <div className="w-full lg:w-[60%] xl:w-[75%] ">
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-1 md:gap-2 lg:gap-3 xl:gap-4 w-full ">
                        {overviewCards.filter((item) => item.headerTitle !== "Total Orders").map((item, index) => (
                            <MobileOverviewCard
                                key={index}
                                isActive={item.isActive}
                                headerTitle={item.headerTitle}
                                contentTitle={item.contentTitle}
                                contentDescription={item.contentDescription}
                                progress={item.progress}
                            />
                        ))}
                        <div className="hidden md:block">
                            {overviewCards.filter((item) => item.headerTitle === "Total Orders").map((item, index) => (
                                <MobileOverviewCard
                                    key={index}
                                    isActive={item.isActive}
                                    headerTitle={item.headerTitle}
                                    contentTitle={item.contentTitle}
                                    contentDescription={item.contentDescription}
                                    progress={item.progress}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={Styles.OrderStatus}>
                        <TabList className="pt-3 pb-2" defaultSelectedValue="total" onTabSelect={(event: any, data: any) => {
                            console.log(event)
                            const value = data.value !== "total" ? data.value : "";
                            setOrderStatus(value);
                        }}>
                            <Tab className={Styles.Tabs} value="total">{`Total(${OrderStatusCards.length})`}</Tab>
                            <Tab className={Styles.Tabs} value="pending">{`Pending(${OrderStatusCards.filter(el => el.status === "pending").length})`}</Tab>
                            <Tab className={Styles.Tabs} value="progress">{`Progress(${OrderStatusCards.filter(el => el.status === "progress").length})`}</Tab>
                            <Tab className={Styles.Tabs} value="completed">{`Completed(${OrderStatusCards.filter(el => el.status === "completed").length})`}</Tab>
                        </TabList>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-1 md:gap-2 lg:gap-3 xl:gap-4 w-full">
                        {filteredOrderStatusCards.map((card: IStatusCard) => (
                            <StatusCard
                                id={card.id}
                                username={card.username}
                                tableNo={card.tableNo}
                                items={card.items}
                                amount={card.amount}
                                status={card.status}
                                acceptedBy={card.acceptedBy}
                            />
                        ))}
                    </div>

                    <div className={Styles.TeamsTable}>
                        <Flex>
                            <TabList defaultSelectedValue="teams" onTabSelect={(event: any, data: any) => {
                                console.log(event)
                                setShowTable(data.value);
                            }}>
                                <Tab defaultChecked={true} className={Styles.Tabs} value="teams">{`Teams(43)`}</Tab>
                                <Tab className={Styles.Tabs} value="orders">{`Orders(30)`}</Tab>
                                <Tab className={Styles.Tabs} value="products">{`Products(47)`}</Tab>
                            </TabList>

                            <Flex className="gap-3" justifyContent={JustifyContent.START}>
                                <InputField
                                    className={Styles.SearchField}
                                    type="search"
                                    name={"search"}
                                    value={""}
                                    placeholder="Search by Name or Position"
                                    setValue={() => { }}
                                />
                                <Button
                                    children="Add Member"
                                    className={Styles.AddMember}
                                    onClick={() => alert("Member add successfully...")}
                                    shape="rounded"
                                    size="medium"
                                    color="#ffc107"
                                    appearance="primary"
                                />
                            </Flex>
                        </Flex>
                        {showTable === "teams" &&
                            <TeamsTable
                                columns={[
                                    { columnKey: "name", label: "Name" },
                                    { columnKey: "phoneNumber", label: "Phone No." },
                                    { columnKey: "shift", label: "Shift" },
                                    { columnKey: "workTiming", label: "Work timing" },
                                    { columnKey: "action", label: "" }
                                ]}
                                items={getTeams()}
                            />
                        }
                        {showTable === "products" &&
                            <TeamsTable
                                columns={[
                                    { columnKey: "name", label: "Name" },
                                    { columnKey: "category", label: "Category" },
                                    { columnKey: "price", label: "Price" },
                                    { columnKey: "status", label: "Status" },
                                    { columnKey: "action", label: "" },
                                ]}
                                items={getProducts()}
                            />
                        }
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 mt-1 md:mt-2 lg:hidden">
                        {teams.map((item: IEmployee) => (
                            <ProfileCard
                                name={item.name}
                                postion={item.position}
                                phoneNumber={item.phoneNumber}
                                image={"https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg"} />
                        ))}
                    </div>
                </div>
                <div className="justify-center items-center flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4  hidden lg:flex lg:w-[40%] xl:w-[25%]">
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