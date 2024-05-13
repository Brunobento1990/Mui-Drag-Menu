import { ReactNode } from "react";

export interface INavigation {
    id: number;
    path?: string;
    titulo: string;
    element?: ReactNode;
    children?: INavigation | INavigation[];
    icon?: string;
    isMenu?: boolean;
    isDrag?: boolean;
}