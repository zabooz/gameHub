import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"




const CardSkeleton =()=> {
  return (
    <Card height='300px' >
      <Skeleton />
      <CardBody display='flex' flexDirection='column' justifyContent='flex-end'>
          <SkeletonText
          noOfLines={4} spacing='4'
          />
      </CardBody>

    </Card>
  )
}

export default CardSkeleton