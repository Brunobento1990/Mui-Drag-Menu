import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { INavigation } from "../../routes/type";
import IconifyIcon from "../../components/icon";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDrag } from "react-dnd";
import { ChildrenSidebar } from "./children-sidebar";

export function ItensSidebar(item: INavigation) {
    const navigate = useNavigate();
    const primaryColor = '#1976d2;'
    const [opens, setOpens] = useState<number[]>([]);

    const [, drag] = useDrag(() => ({
        type: "ITEM-MENU",
        item,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    function isOpen(id?: number): boolean {
        return opens.some((x) => x === id);
    }

    function open(id?: number): void {
        const contains = opens.some((x) => x === id);
        if (!contains && id) {
            setOpens([...opens, id]);
            return;
        }

        if (id && contains) {
            const filters = opens.filter((x) => x !== id);
            setOpens(filters);
        }
    }

    function navi(path?: string) {
        if (!path) return;
        navigate(path);
    }

    function handleIconExpand(id: number, component: INavigation) {
        if (!component?.children) return <></>;
        if (Array.isArray(component.children)) {
            const filter = component.children.filter((x) => x.isMenu);
            if (filter?.length === 0) return <></>
        }
        if (component.children) {
            if (!component.isMenu) {
                return <></>
            }
        }
        const contains = isOpen(id);
        if (contains) {
            return <IconifyIcon icon='ic:baseline-expand-less' />
        }

        return <IconifyIcon icon='ic:baseline-expand-more' />
    }

    // function handleChildren(key: number, itemChildren?: INavigation | INavigation[]): ReactNode {
    //     if (!itemChildren) return <></>;

    //     if (Array.isArray(itemChildren)) {
    //         return (
    //             <Collapse in={isOpen(key)} timeout="auto" unmountOnExit>
    //                 <List component="div" disablePadding key={`${key}-${Math.random()}`}>
    //                     {itemChildren.filter((x) => x.isMenu).map((children, index) => (
    //                         <Fragment key={`${children.id}-${index}`}>
    //                             <ListItemButton
    //                                 key={children.id}
    //                                 onClick={() => {
    //                                     open(children.id);
    //                                     navi(children.path)
    //                                 }}
    //                                 ref={!children.children ? drag : undefined}
    //                                 sx={{
    //                                     pl: 4,
    //                                     width: '95%', borderRadius: '0 15px 15px 0',
    //                                     backgroundColor: isActive(children.path),
    //                                     color: isActiveColor(children.path),
    //                                     ":hover": {
    //                                         backgroundColor: primaryColor,
    //                                         color: '#e6edf3',
    //                                     }
    //                                 }}
    //                             >
    //                                 {children.icon &&
    //                                     <ListItemIcon>
    //                                         <IconifyIcon icon={children.icon} color={isActiveColor(children.path)} />
    //                                     </ListItemIcon>
    //                                 }
    //                                 <ListItemText primary={<Typography noWrap sx={{ fontWeight: 600, fontSize: '18px' }}>{children.titulo}</Typography>} />
    //                                 {handleIconExpand(children.id, children)}
    //                             </ListItemButton>
    //                             {handleChildren(children.id, children.children)}
    //                         </Fragment>
    //                     ))}
    //                 </List>
    //             </Collapse>
    //         )
    //     }
    // }

    function isActive(path?: string): string | undefined {
        if (!path) return undefined;
        if (location.pathname === path) {
            return primaryColor;
        }
    }

    function isActiveColor(path?: string): string | undefined {
        if (location.pathname === path) {
            return '#e6edf3';
        }
        return undefined;
    }

    return (
        <>
            <ListItemButton
                ref={item.isDrag ? drag : undefined}
                onClick={() => {
                    open(item.id);
                    navi(item.path)
                }}
                sx={{
                    width: '95%', borderRadius: '0 15px 15px 0',
                    backgroundColor: isActive(item.path),
                    color: isActiveColor(item.path),
                    ":hover": {
                        backgroundColor: primaryColor,
                        color: '#e6edf3',
                    }
                }}
            >
                {item.icon && <ListItemIcon>
                    <IconifyIcon icon={item.icon} color={isActiveColor(item.path)} />
                </ListItemIcon>}
                <ListItemText primary={<Typography sx={{ fontWeight: 600, fontSize: '18px' }}>{item.titulo}</Typography>} />
                {handleIconExpand(item.id, item)}
            </ListItemButton>
            {Array.isArray(item.children) &&
                <Collapse in={isOpen(item.id)} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Fragment>
                            {item.children.map((children, index) =>
                                <Fragment key={`${children.id}-${index}`}>
                                    <ChildrenSidebar
                                        isActive={isActive}
                                        isActiveColor={isActiveColor}
                                        key={item.id}
                                        navi={navi}
                                        open={open}
                                        primaryColor={primaryColor}
                                        item={children}
                                        isOpen={isOpen}
                                        handleIconExpand={handleIconExpand}
                                    />
                                    {Array.isArray(children?.children) &&
                                        <Collapse in={isOpen(children.id)} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <Fragment key={`${children.id}-${index}`}>
                                                    {children.children.map((childrenItem) => (
                                                        <ChildrenSidebar
                                                            isActive={isActive}
                                                            isActiveColor={isActiveColor}
                                                            key={children.id}
                                                            navi={navi}
                                                            open={open}
                                                            primaryColor={primaryColor}
                                                            item={childrenItem}
                                                            isOpen={isOpen}
                                                            handleIconExpand={handleIconExpand}
                                                        />
                                                    ))}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    }
                                </Fragment>
                            )}
                        </Fragment>
                    </List>
                </Collapse>
            }
            {/* {handleChildren(item.id, item.children)} */}
        </>
    )
}