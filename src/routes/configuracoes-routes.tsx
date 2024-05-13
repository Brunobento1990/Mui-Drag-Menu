import { ConfiguracaoLayout } from "../pages/configuracoes/layout";
import { ConfiguracaoSistema } from "../pages/configuracoes/sistema";
import { INavigation } from "./type";

export const configuracoesRoutes: INavigation = {
    id: 8,
    titulo: "Configurações",
    icon: "eos-icons:configuration-file-outlined",
    isMenu: true,
    children: [
        {
            id: 9,
            titulo: "Layout",
            element: <ConfiguracaoLayout />,
            path: "/configuracao-layout",
            icon: "eos-icons:configuration-file-outlined",
            isMenu: true,
            isDrag: true
        },
        {
            id: 10,
            titulo: "Sistema",
            element: <ConfiguracaoSistema />,
            path: "/configuracao-sistema",
            icon: "eos-icons:configuration-file-outlined",
            isMenu: true,
            isDrag: true
        }
    ]
}