import { Outlet } from "react-router-dom";
import { Content, DivContent, Header, Navigation } from "./style";

export default function BasePages() {
    return (
        <>
            <Header/>
            <DivContent>
                <Navigation/>
                <Content>
                    olá
                    <Outlet/>
                </Content>
            </DivContent>
        </>
    );
}