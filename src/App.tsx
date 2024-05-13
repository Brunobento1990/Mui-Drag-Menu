import { AppThemeProvider } from "./context/app-theme-context";
import { RoutesApp } from "./routes/routes";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export function App() {

  return (
    <DndProvider backend={HTML5Backend}>
      <AppThemeProvider>
        <RoutesApp />
      </AppThemeProvider>
    </DndProvider>
  )
}
