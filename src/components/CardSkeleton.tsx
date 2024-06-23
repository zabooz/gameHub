import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"




const CardSkeleton =()=> {
  return (
    <Card height="100%">
      <Skeleton height="60%" >
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Skeleton>
    </Card>
  )
}

export default CardSkeleton