import { Card, CardBody, Text } from "@chakra-ui/react";

const FlashCard = (
  { bodyText,
    fontSize = "6xl",
  }: {
    bodyText: string,
    fontSize?: string,
  }
) => {
  return (
    <Card align='center' variant="outline">
      <CardBody>
        <Text fontSize={fontSize}>{bodyText}</Text>
      </CardBody>
    </Card>
  );
}

export default FlashCard;