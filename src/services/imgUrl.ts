const getCroppedImageUrl = (url:string) =>{

const target = 'media/'


    const index = url.indexOf(target)  + target.length

    const firstHalf = url.slice(0,index)
    const secondHalf = url.slice(index)


    
    const croppedImageUrl = firstHalf + 'crop/600/400/' + secondHalf
    console.log(croppedImageUrl)

    return croppedImageUrl

}

export default getCroppedImageUrl