import React, { useState } from "react";
import style from "./Filtro.module.scss";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IFIltroDeEventos } from "../../interfaces/IFiltroDeEventos";
import { filtroDeEventos } from "../../state/atom";

const Filtro: React.FC = () => {
  const [data, setData] = useState("");
  const setFiltroDeEventos = useSetRecoilState<IFIltroDeEventos>(filtroDeEventos);
  const filtroAtual = useRecoilValue<IFIltroDeEventos>(filtroDeEventos);

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const filtro: IFIltroDeEventos = {};
    if (data) {
      filtro.data = new Date(data);
    } else {
      filtro.data = null;
    }
    setFiltroDeEventos(filtro);
  };

  return (
    <form className={style.Filtro} onSubmit={evento => {
      if(!filtroAtual.data) {
        submeterForm(evento);
        return;
      } 
      evento.preventDefault();
      setFiltroDeEventos({ data: null });
      setData('');
    }}>
      <h3 className={style.titulo}>Filtrar por data</h3>
      <input
        type="date"
        name="data"
        className={style.input}
        onChange={(evento) => setData(evento.target.value)}
        placeholder="Por data"
        value={data}
      />

      <button className={`${style.botao} ${filtroAtual.data ? style.botaoLimpar : ' ' }`}>{filtroAtual.data ? 'Limpar' : 'Filtrar'}</button>
    </form>
  );
};

export default Filtro;
