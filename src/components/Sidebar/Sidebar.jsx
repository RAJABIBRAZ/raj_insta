import { Avatar, Box, Flex, Link, Tooltip } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../assets/constants';
import { AiOutlineHome } from 'react-icons/ai';
import {BiLogOut} from 'react-icons/bi';
import { BsBank2 } from "react-icons/bs";



const Sidebar = () => {
    const sidebarItems =[

        {
            icon: <AiOutlineHome size={25} />,
            text: "Home",
            link: "/",
          },

      {
        icon: <SearchLogo />,
        text: "Search",
      },

      {
        icon: <NotificationsLogo />,
        text: "Create",
        
      },

      {
        icon: <BsBank2 size={25} />,
        text: "Chama",
        link: "/chilspotchama",

      },

      {
        icon: <Avatar size={"sm"} name='Abdulhakim Ibrahim' src='/profileepic.png' />,
        text: "Profile",
        link: "/asaprogrammer",
      },
    ];

  return ( <Box
  height={"100vh"}
  borderRight={"1px solid"}
  borderColor={"whiteAlpha.300"}
  py={8}
  position={"sticky"}
  top={0}
  left={0}
  px={{base:2, md:4}}>

<Flex direction={"column"} gap={10} w={"full"} height={"full"}>
    <Link to={"/"} as={RouterLink} p1={2} display={{base:"none", md:"block"}} cursor={"pointer"}>
        <InstagramLogo />
    </Link>

    <Link to={"/"} as={RouterLink} p={2} display={{base:"block", md:"none"}}
     borderRadius={6}
     _hover={{
        bg: "whiteAlpha.200"
        }} 
        w={10} cursor={"pointer"}>
        <InstagramMobileLogo />
    </Link>

    <Flex direction={"column"} gap={5} cursor={"pointer"}>
        {sidebarItems.map((item, index) => (
         <Tooltip 
         key={index}
         hasArrow
         label={item.text}
         placement='right'
         m1={1}
         openDelay={500}
         display={{base:"block", md:"none"}}
         >
            <Link 
            display={"flex"}
            to={item.link || null}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{bg:"whiteAlpha.400"}}
            borderRadius={6}
            p={2}
            w={{base:10, md:"full"}}
            justifyContent={{base:"center", md:"flex-start"}}
            >
                {item.icon}
                <Box display={{base:"none", md:"block"}}>
                    {item.text}
                </Box>

            </Link>

         </Tooltip>   
        ))}
         
    </Flex>
    <Tooltip  
         hasArrow
         label="Logout"
         placement='right'
         m1={1}
         openDelay={500}
         display={{base:"block", md:"none"}}
         >
            <Link 
            display={"flex"}
            to={"/auth"}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{bg:"whiteAlpha.400"}}
            borderRadius={6}
            p={2}
            w={{base:10, md:"full"}}
            mt={"auto"}
            justifyContent={{base:"center", md:"flex-start"}}
            >
                <BiLogOut size={25} />
                <Box display={{base:"none", md:"block"}}>
                  Logout
                </Box>

            </Link>

         </Tooltip>  

</Flex>
</ Box>
  )
}

Sidebar.propTypes = {}

export default Sidebar
