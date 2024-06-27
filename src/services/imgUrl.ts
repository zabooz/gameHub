import noImage from '../assets/no-image-placeholder-6f3882e0.webp'


const getCroppedImageUrl = (url:string) =>{


    if(!url) return noImage
           

    const target = 'media/'

    const index = url.indexOf(target)  + target.length

    const firstHalf = url.slice(0,index)
    const secondHalf = url.slice(index)
    const croppedImageUrl = firstHalf + 'crop/600/400/' + secondHalf
 
    return croppedImageUrl

}

export default getCroppedImageUrl