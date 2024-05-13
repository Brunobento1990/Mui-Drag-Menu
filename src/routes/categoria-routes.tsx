import { Categoria } from "../pages/estoque/categoria/categoria";
import { CreateCategoria } from "../pages/estoque/categoria/form";
import { INavigation } from "./type";

export const categoriasRoutes: INavigation = {
    id: 4,
    titulo: "Categorias",
    element: <Categoria />,
    path: '/categoria',
    icon: 'carbon:categories',
    isMenu: true,
    isDrag: true,
    children: [
        {
            id: 5,
            titulo: "Categoria",
            path: '/categoria/create',
            element: <CreateCategoria />,
            isMenu: true,
        }
    ]
}