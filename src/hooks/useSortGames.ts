import useData from "./useData"


interface SortGames{
    name : string
    released: string

}



const useSortGames = () => useData<SortGames>('')



export default useSortGames