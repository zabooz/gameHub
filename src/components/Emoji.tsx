import  bullsEye  from '../assets/bulls-eye.webp'
import thumpsUp from '../assets/thumbs-up.webp'
import meh from '../assets/meh.webp'
import { Image, ImageProps } from '@chakra-ui/react'

interface Props{
    rating : number
}

function Emoji({rating}:Props) {

    if(rating < 3) return null

    const emojiMap:{[key:number] : ImageProps} = {
        3:{src:meh,alt:'meh',boxSize:'25px'},
        4:{src:thumpsUp,alt:'recommendet',boxSize:'25px'},
        5:{src:bullsEye,alt:'excepional',boxSize:'35px'},
        }
    


  return (
    <Image {...emojiMap[rating]} mt={2} ></Image>
  )
}

export default Emoji