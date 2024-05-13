import List from '@mui/material/List';
import { navigations } from '../../routes/navigations';
import { ItensSidebar } from './itens-sidebar';

export default function Sidebar() {
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            key={1}
        >
            {navigations.filter((x) => x.isMenu).map((nav) => (<ItensSidebar key={nav.id} {...nav} />))}
        </List>
    );
}
