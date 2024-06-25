import useData from "./useData";
import { Genre } from "./useGenre";

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
  
const useGames = (genre:Genre | null,selectedPlatform:Platform | null) => 
  useData<Game>('/games',{
    params:{
      genres:genre?.id,
      parent_platforms: selectedPlatform?.id
    }},
      [genre?.id,selectedPlatform?.id])



export default useGames