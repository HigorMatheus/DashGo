import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";

interface ProfileProps{
  showProfileData?:boolean;
}
export function Profile({showProfileData=true}:ProfileProps) {
  return (
    <Flex align="center">
     {showProfileData &&(
        <Box mr="4" textAlign="right">
        <Text>Higor Matheus</Text>
        <Text color="gray.300" fontSize="small">
          hmoliveira83@gmail.com
        </Text>
      </Box>
     )}
      <Avatar
        bg="green.300"
        size="md"
        name="Higor Matheus"
        src="https://avatars.githubusercontent.com/u/53712358?v=4"
      />
    </Flex>
  );
}
