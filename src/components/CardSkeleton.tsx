import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"




const CardSkeleton =()=> {
  return (
    <Card width="350px" height="350px" borderRadius={10} overflow="hidden" >
      <Skeleton height={40}>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Skeleton>
    </Card>
  )
}

export default CardSkeleton