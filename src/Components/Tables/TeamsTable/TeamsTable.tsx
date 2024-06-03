import Styles from "./Table.module.scss";
import { Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "@fluentui/react-components";
import { MoreVerticalFilled } from "@fluentui/react-icons";
import Pagination from "../../Pagination/Pagination";
import Flex, { JustifyContent } from "../../Flex/Flex";
import { FC } from "react";


const TeamsTable: FC<any> = ({ columns, items }) => {

    return (
        <div className={Styles.Container}>
            <div className={Styles.TableBorder}>
                <Table>
                    <TableHeader>
                        <TableRow>
                            {columns.map((column: any) => (
                                <TableHeaderCell className={`!text-gray-700 !font-semibold !text-center text-lg ${column.columnKey === "action" && `w-14`} ${column.columnKey === "name" && `!pl-5`}`} key={column.columnKey}>
                                    {column.label}
                                </TableHeaderCell>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {items && items.map((item: any) => {
                            return (
                                <TableRow>
                                    {Object.keys(item).map((key: string) => (
                                       key!=="id" && <TableCell className={key==="name" ? ` w-52` : "pl-2"}>{item[key]}</TableCell>
                                    ))}
                                    <TableCell>
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
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
            <Flex justifyContent={JustifyContent.END}>
                <Pagination />
            </Flex>
        </div>
    );

}
export default TeamsTable;


