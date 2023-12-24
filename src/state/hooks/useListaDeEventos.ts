import { useRecoilValue } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { eventosFiltradosState } from "../seletores";

const useListaDeEventos = (): IEvento[] => {
    return useRecoilValue(eventosFiltradosState);
}

export default useListaDeEventos;