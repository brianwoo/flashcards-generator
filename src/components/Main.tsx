import { Box, Button, Center, Divider, FormControl, FormLabel, Heading, Select, SimpleGrid, Textarea } from "@chakra-ui/react";
import FlashCard from "./FlashCard";
import { ReactNode, useEffect, useState } from "react";


const getFlashCards = (words: string[]): ReactNode => {
  const cards = words.map((eachWord, index) => <FlashCard key={index} bodyText={eachWord} />)
  return cards;
}

const Main = () => {
  const [wordsInString, setWordsInString] = useState<string>('');
  const [delimiter, setDelimiter] = useState<string>(',');
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    const wordsSplit = wordsInString.split(delimiter);
    if (wordsSplit.length !== 0 && wordsSplit[0] !== '') {
      setWords(wordsSplit);
    }
  }, [wordsInString, delimiter]);

  const handleWordsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWordsInString(e.target.value);
  }

  return (
    <>
      <Box sx={{
        '@media print': {
          display: 'none',
        },
      }}>
        <Box pb={5}>
          <Heading>Flashcards Generator</Heading>
        </Box>
        <Textarea
          onChange={handleWordsChange}
          colorScheme='teal'
          focusBorderColor="teal.500"
          variant="filled"
          placeholder='Enter your words here'
          resize="vertical"
        />
        <Box pt={5}>
          <FormControl>
            <FormLabel>Select delimiter</FormLabel>
            <Select
              colorScheme='teal'
              focusBorderColor="teal.500"
              value={delimiter}
              onChange={(e) => setDelimiter(e.target.value)}>
              <option value=','>,</option>
              <option value='|'>|</option>
              <option value=';'>;</option>
            </Select>
          </FormControl>
        </Box>
        <Center paddingY={10}>
          <Button
            colorScheme='teal'
            mx={2}
            isDisabled={words.length === 0}
            onClick={() => window.print()}>
            Print the Flashcards!
          </Button>
        </Center>
      </Box >

      <Divider height='50px' />

      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {getFlashCards(words)}
      </SimpleGrid>
    </>
  );
}

export default Main;