import { GameQuery } from "../App";
import useData from "./useData";


export interface Platform{
  id:number
  name:string
  slug:string
}


export interface Game {
    id: number;
    name: string;
    background_image:string
    parent_platforms: {platform:Platform}[]
    metacritic :number
    genres:string
  
  }
  
const useGames = (gameQuery:GameQuery) => 
  useData<Game>('/games',{
    params:{
      genres:gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      page_size: 20
    }},
      [gameQuery])



export default useGames