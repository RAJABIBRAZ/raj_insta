import { Alert, Box, Button, Center, Flex, Image, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthForm = () => {
  const [islogin, setIsLogin]= useState(true);
  const navigate =useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password:"",
    confirmPassword: "",
  }
  );

  const handleAuth = () => {
    if (!inputs.email|| !inputs.password){
      alert("Please fill all the fields");
      return;
    }
    
    navigate("/");
  };
  
  

  return (
    <>
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
      <VStack spacing={4}>
        <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />
        <Input placeholder="Email"
         fontSize={14} 
         type="email"
         value={inputs.email}
         onChange={(e) => setInputs({ ...inputs, email: e.target.value})} 
         />
        <Input placeholder="Password"
         fontSize={14}
         type="password"
         value={inputs.password}
         onChange={(e) => setInputs({ ...inputs, password: e.target.value})}
         />

        {!islogin ? <Input placeholder="Confirm Password" fontSize={14} type="password" 
        value={inputs.confirmPassword}
        onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value})}
        /> : null}

        <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={handleAuth}>
          {islogin ? "Log in": "Sign Up"}
        </Button>

        {/*------------------------OR---------------------*/}
        <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
          <Box flex={2} h={"1px"} bg={"gray.400"} />
          <text mx={1} color="white">
            OR
          </text>
          <Box flex={2} h={"1px"} bg={"gray.400"} />
        </Flex>
        <Flex>
          <Image src="/google.png" w={5} alt="Google logo" />
          <text mx='2' color="blue.500">
            Log in with Google
          </text>
        </Flex>
      </VStack>
    </Box>

    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Box mx={2} fontSize={14}>
          {islogin ? "Don't have an account?" : "Already have an account?"}
        </Box>
        <Box onClick={() => setIsLogin(!islogin)} color={"blue.500"} cursor={"pointer"}>
          {islogin ? "Sign up" : "Log in"}
        </Box>
      </Flex>
    </Box>
    </>

    );
};

export default AuthForm;