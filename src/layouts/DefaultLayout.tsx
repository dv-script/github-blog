import { Header } from "../components/Header";
import { Outlet } from "react-router";

import * as S from './styles';

export function DefaultLayout() {
    return (
        <S.Container>
            <Header />
            <Outlet />
        </S.Container>
    )
}