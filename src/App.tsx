import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
// import FakeRegister from './components/Form/FakeRegister'
import FakeLogin from './components/Form/FakeLogin'

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
            <FakeLogin />
            {/* <FakeRegister /> */}
        </ThemeProvider>
    )
}

export default App
