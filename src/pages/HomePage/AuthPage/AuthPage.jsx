import { Container, Flex, VStack, Box, Image } from "@chakra-ui/react";
import AuthForm from "../../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return(
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>
          <Flex>
            {/*left hand side */}
          <Box display={{base: "none", md: "block"}}>
            <Image src= "/auth.png" h={650} alt='phone img' />
          </Box>

          {/* Right hand-side */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app</Box>
            <Flex gap={5} justifyContent={"center"}>
              <image src="/playstore.png" h={"10"} alt='playstore logo' />
              <image src="/microsoft.png" h={"10"} alt='microsoft logo' />
            </Flex>
          </VStack>
          </Flex>          
        </Container>
    </Flex>

  );
};

export default AuthPage;