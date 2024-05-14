import Styles from "./Table.module.scss";
import { Avatar, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, PresenceBadgeStatus, Table, TableBody, TableCell, TableCellLayout, TableHeader, TableHeaderCell, TableRow } from "@fluentui/react-components";
import { IEmployee } from "../../../Models";
import { useSelector } from "react-redux";
import moment from "moment";
import { MoreVerticalFilled } from "@fluentui/react-icons";
const columns = [
    { columnKey: "name", label: "Name" },
    { columnKey: "position", label: "Position" },
    { columnKey: "phoneNumber", label: "Phone No." },
    { columnKey: "shift", label: "Shift" },
    { columnKey: "workTiming", label: "Work timing" },
    { columnKey: "action", label: "" },
];


const TeamsTable = () => {
    const teams = useSelector((state: any) => state.team.employees);
    console.log(teams);
    return (
        <div className={Styles.Container}>
            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map((column) => (
                            <TableHeaderCell className={`!text-gray-700 !font-semibold !text-center text-lg ${column.columnKey === "action" && `w-14`} ${column.columnKey === "name" && `!pl-5`}`} key={column.columnKey}>
                                {column.label}
                            </TableHeaderCell>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {teams && teams.map((item: IEmployee) => (
                        <TableRow>
                            <TableCell>
                                <TableCellLayout
                                    media={
                                        <Avatar
                                            aria-label={item.name}
                                            name={item.name}
                                            badge={{
                                                status: item.isLoggedIn as PresenceBadgeStatus,
                                            }}
                                        />
                                    }
                                >
                                    {item.name}
                                </TableCellLayout>
                            </TableCell>
                            <TableCell>{item.position}</TableCell>
                            <TableCell>{item.phoneNumber}</TableCell>
                            <TableCell>{item.shift}</TableCell>
                            <TableCell>{(item.loggedOut === "" && item.loggedAt === "") ? "Out of office" : `${moment(item.loggedAt).format("HH:mm:ss A")} to ${item.loggedOut ? moment(item.loggedOut).format("HH:mm:ss A") : "Available"}`}</TableCell>
                            <TableCell className="text-center">
                                <Menu>
                                    <MenuTrigger disableButtonEnhancement>
                                        <MoreVerticalFilled fontSize={20} />
                                    </MenuTrigger>
                                    <MenuPopover>
                                        <MenuList>
                                            <MenuItem>Edit</MenuItem>
                                            <MenuItem>Delete</MenuItem>
                                        </MenuList>
                                    </MenuPopover>
                                </Menu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );

}
export default TeamsTable;


