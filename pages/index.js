
import Layout, { Container } from "../src/components/Layout"
import { IconButton, Flex, Heading, Input } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"

export default function Home() {
  return (
    <Layout>
      <Container>
        <Heading>What are we looking for today?</Heading>
        <Flex marginTop={5}>
          <Input size="xl" placeholder="Search..." variant="flushed" isRequired="true"/>
          <IconButton icon={<Search2Icon />} alignSelf="center" size="lg">Search</IconButton>
        </Flex>
      </Container>
    </Layout>
  )
}
