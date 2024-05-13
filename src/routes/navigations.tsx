import { Pedido } from "../pages/pedidos";
import { categoriasRoutes } from "./categoria-routes";
import { configuracoesRoutes } from "./configuracoes-routes";
import { produtoRoutes } from "./produto-routes";
import { INavigation } from "./type";

export const navigations: INavigation[] = [
    {
        id: 1,
        titulo: "Home",
        element: <p>Home</p>,
        path: '/',
        icon: 'material-symbols:order-approve-sharp',
        isMenu: true,
        isDrag: true,
    },
    {
        id: 2,
        titulo: "Pedido",
        element: <Pedido />,
        path: '/pedido',
        icon: 'material-symbols:order-approve-sharp',
        isMenu: true,
        isDrag: true,
    },
    {
        id: 3,
        titulo: "Estoque",
        icon: "healthicons:stock-out-outline",
        isMenu: true,
        children: [
            {
                ...categoriasRoutes
            },
            {
                ...produtoRoutes
            }
        ]
    },
    {
        ...configuracoesRoutes
    }
]