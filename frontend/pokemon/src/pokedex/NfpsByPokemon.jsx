import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import NfpList from "./NfpList";
import PokemonNotFound from "./PokemonNotFound";

export default function NfpsByPokemon() {
  const { pokedexId } = useParams();
  const nfps = useSelector(state => state.nfps)[pokedexId];
  const existingPokemons = useSelector(state => state.existingPokemons);
  const hasThisPokemon = existingPokemons.find(ele => ele == pokedexId);

  const numOfNfps =  nfps ? nfps.length : 0;
  const [page, setPage] = useState(1);
  
  const handleClickGoToPrev = () => {
    setPage(page - 1);
    if (page <= 1) {
      setPage(1);
    }
  };

  const handleClickGoToNext = () => {
    const maxPage = Math.ceil(numOfNfps / 6);
    setPage(page + 1);
    if (page >= maxPage) {
      setPage(maxPage);
    }
  };

  return(
    hasThisPokemon
      ?
      <div className="pokemon-list">
        <div className="PokedexPage">
          <NfpList
            pokedexId={pokedexId}
            page={page}
            onClickGoToPrev={handleClickGoToPrev}
            onClickGoToNext={handleClickGoToNext}
          />
        </div>
      </div>
      :
      <PokemonNotFound pokedexId={pokedexId}/>
  );
}
