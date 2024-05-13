import { Produto } from "../pages/estoque/produto";
import { CreateProduto } from "../pages/estoque/produto/form";
import { INavigation } from "./type";

export const produtoRoutes: INavigation = {
    id: 6,
    titulo: "Produtos",
    element: <Produto />,
    path: '/produto',
    icon: 'fluent-mdl2:product-variant',
    isMenu: true,
    isDrag: true,
    children: [
        {
            id: 7,
            titulo: "Produto",
            element: <CreateProduto />
        }
    ]
}