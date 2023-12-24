import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFIltroDeEventos } from "../interfaces/IFiltroDeEventos";
import { eventosAsync } from "./seletores";

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: eventosAsync,
});

export const filtroDeEventos = atom<IFIltroDeEventos>({
  key: 'filtroDeEventos',
  default: {}
});