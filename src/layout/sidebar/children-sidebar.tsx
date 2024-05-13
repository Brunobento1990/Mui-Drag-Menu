import { ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { INavigation } from "../../routes/type";
import { useDrag } from "react-dnd";
import IconifyIcon from "../../components/icon";
import { ReactNode } from "react";

interface propsChildrenSidebar {
    item?: INavigation,
    key: number;
    navi: (path?: string) => void;
    open: (id: number) => void;
    isActive: (path?: string) => string | undefined;
    isActiveColor: (path?: string) => string | undefined;
    primaryColor: string;
    isOpen: (key: number) => boolean;
    handleIconExpand: (id: number, component: INavigation) => ReactNode;
}

export function ChildrenSidebar(props: propsChildrenSidebar) {
    if (!props.item) return <></>;

    const [, drag] = useDrag(() => ({
        type: "ITEM-MENU",
        item: props.item,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <ListItemButton
            key={`${props.item?.id}-${props.key}`}
            onClick={() => {
                props.open(props.item?.id ?? 0);
                props.navi(props.item?.path);
            }}
            ref={props.item?.isDrag ? drag : undefined}
            sx={{
                pl: 4,
                width: '95%', borderRadius: '0 15px 15px 0',
                backgroundColor: props.isActive(props.item?.path),
                color: props.isActiveColor(props.item?.path),
                ":hover": {
                    backgroundColor: props.primaryColor,
                    color: '#e6edf3',
                }
            }}
        >
            {props.item?.icon &&
                <ListItemIcon>
                    <IconifyIcon icon={props.item?.icon} color={props.isActiveColor(props.item?.path)} />
                </ListItemIcon>
            }
            <ListItemText primary={<Typography noWrap sx={{ fontWeight: 600, fontSize: '18px' }}>{props.item?.titulo}</Typography>} />
            {props.handleIconExpand(props.item?.id, props.item)}
        </ListItemButton>
    );
}