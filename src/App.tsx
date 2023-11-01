import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Divider } from '@mui/material'
import FakeRegister from './components/Form/FakeRegister'
import FakeLogin from './components/Form/FakeLogin'
import FakeForm from './components/Form/FakeForm'

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

            <FakeForm />
            <Divider sx={{ my: 10 }} />
            <FakeLogin />
            <Divider sx={{ my: 10 }} />
            <FakeRegister />
        </ThemeProvider>
    )
}

export default App
