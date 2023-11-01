import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import FakeRegister from './components/Form/FakeRegister'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#333333'
        }
    }
})

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <FakeRegister />
        </ThemeProvider>
    )
}

export default App
