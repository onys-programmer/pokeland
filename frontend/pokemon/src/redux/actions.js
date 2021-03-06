import { fetchExistingPokemons, fetchExistingNfps } from '../api';

export function updateHeaderDisplay(headerDisplay) {
  return {
    type: 'updateHeaderDisplay',
    payload: {
      headerDisplay,
    },
  };
}

export function updateJwt(jwt) {
  return {
    type: 'updateJwt',
    payload: {
      jwt,
    },
  };
}

export function updateBalance(balance) {
  return {
    type: 'updateBalance',
    payload: {
      balance,
    },
  };
}

export function setExistingPokemons(existingPokemons) {
  return {
    type: 'setExistingPokemons',
    payload: {
      existingPokemons,
    },
  };
}

export function loadExistingPokemons(jwt) {
  return async (dispatch) => {
    const existingPokemons = await fetchExistingPokemons(jwt);
    dispatch(setExistingPokemons(existingPokemons));
  };
}

export function setExistingNfps(existingNfps) {
  return {
    type: 'setExistingNfps',
    payload: {
      existingNfps,
    },
  };
}

export function loadExistingNfps(publicKey, pokedexId) {
  return async (dispatch) => {
    const existingNfps = await fetchExistingNfps(publicKey, pokedexId);
    dispatch(setExistingNfps(existingNfps));
  };
}

export function setIsMusicMuted(isMusicMuted) {
  return {
    type: 'setIsMusicMuted',
    payload: {
      isMusicMuted
    }
  };
}

export function setGachaOrder(gachaOrder) {
  return {
    type: 'setGachaOrder',
    payload: {
      gachaOrder
    }
  };
}

export function setSupportOrder(supportOrder) {
  return {
    type: 'setSupportOrder',
    payload: {
      supportOrder
    }
  };
}

export function setCardgameOrder(cardgameOrder) {
  return {
    type: 'setCardgameOrder',
    payload: {
      cardgameOrder
    }
  };
}

export function setCardgameFlipped(cardgameFlipped) {
  return {
    type: 'setCardgameFlipped',
    payload: {
      cardgameFlipped
    }
  };
}
