declare module 'boardgame.io/react' {
  import { ComponentType } from 'react';
  import { Context, DefaultGameStatePlayerView, DefaultMoves, DefaultPlayerID, DefaultPhaseID } from 'boardgame.io/core';

  export interface BoardProps<
    GameStatePlayerView = DefaultGameStatePlayerView,
    Moves = DefaultMoves,
    PlayerID = DefaultPlayerID,
    PhaseID = DefaultPhaseID,
  > {
    G: GameStatePlayerView;
    ctx: Context<PlayerID, PhaseID>;
    moves: Moves;
    gameID: string;
    playerID: PlayerID;
    isActive: boolean;
    isMultiplayer: boolean;
    isConnected: boolean;
  }

  export interface Client<
    GameStatePlayerView = DefaultGameStatePlayerView,
    Moves = DefaultMoves,
    PlayerID = DefaultPlayerID,
    PhaseID = DefaultPhaseID,
  > {
    game: object;
    numPlayers?: number;
    board?: ComponentType<BoardProps<GameStatePlayerView, Moves, PlayerID, PhaseID>>;
    multiplayer?: boolean | { server: string } | { local: boolean };
    debug?: boolean;
  }

  export interface ClientProps<
    PlayerID = DefaultPlayerID,
  > {
    gameID?: string;
    playerID?: PlayerID;
    debug?: boolean;
  }

  export function Client<
    GameStatePlayerView = DefaultGameStatePlayerView,
    Moves = DefaultMoves,
    PlayerID = DefaultPlayerID,
    PhaseID = DefaultPhaseID,
  >(client: Client<GameStatePlayerView, Moves, PlayerID, PhaseID>): ComponentType<ClientProps<PlayerID>>;
}
