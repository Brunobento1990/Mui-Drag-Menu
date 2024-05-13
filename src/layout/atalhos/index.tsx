import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useDrop } from "react-dnd";
import { INavigation } from "../../routes/type";
import { Fragment, useEffect, useState } from "react";
import IconifyIcon from "../../components/icon";

export function ContainerAtalhos() {
    const [atalhos, setAtalhos] = useState<INavigation[]>([]);
    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: "ITEM-MENU",
            drop: (item: INavigation) => droping(item),
            collect: (monitor) => ({
                isOver: !!monitor.isOver()
            })
        }),
    )

    function droping(item: INavigation) {
        const contains = atalhos.find((x) => x.id === item.id);
        if (!contains) {
            setAtalhos((prevAtalhos) => {
                const newAtalhos = [...prevAtalhos, item];
                localStorage.setItem('atalhos', JSON.stringify(newAtalhos));
                return newAtalhos;
            });
        };
    }

    function init() {
        const atalhosLocalStorage = localStorage.getItem('atalhos');
        if (atalhosLocalStorage) {
            setAtalhos(JSON.parse(atalhosLocalStorage));
        }
    }

    useEffect(() => {
        init();
    }, [])
    return (
        <Box
            ref={drop}
            width='60px'
            sx={{
                height: 'calc(100vh - 170px)',
                position: 'fixed',
                right: 15,
                padding: '10px'
            }}
        >
            <Box
                sx={{
                    border: '1px dashed #a1a1a1',
                    height: '100%',
                    borderRadius: '6px'
                }}
                display='flex'
                alignItems='center'
                justifyContent='center'
                flexDirection='column'
            >
                {isOver &&
                    <Typography sx={{ textOrientation: 'upright', writingMode: 'vertical-rl' }}>Solte aqui</Typography>
                }
                {atalhos.length === 0 && !isOver &&
                    <Typography sx={{ textOrientation: 'upright', writingMode: 'vertical-lr', fontSize: '15px' }}>Arraste um menu e crie um atalho</Typography>
                }
                {!isOver &&
                    <Fragment>
                        {atalhos.map((item) => (
                            <Fragment key={item.id}>
                                {item.icon &&
                                    <Tooltip title={item.titulo} placement="left">
                                        <IconButton>
                                            <IconifyIcon icon={item.icon} />
                                        </IconButton>
                                    </Tooltip>
                                }
                            </Fragment>
                        ))}
                    </Fragment>
                }
            </Box>
        </Box >
    )
}