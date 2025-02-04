import BtnTheme from "../BtnTheme/BtnTheme"
import { Header, Logo} from "./HeaderForUnlogged.styled"

const HeaderForUnlogged = () => {
    return (
    
        <Header>
            <Logo to={"/"}>Coach's Sketch</Logo>
            <BtnTheme />
        </Header>
    )
}

export default HeaderForUnlogged