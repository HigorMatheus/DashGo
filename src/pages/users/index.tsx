import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Pagination } from "../../components/Pagination";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";
import Link from "next/link";

export default function UserList() {
  const isWindowVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <SideBar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWindowVersion && <Th>Data de cadastro</Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Higor Matheus</Text>
                    <Text fontSize="sm" color="gray.300">
                      hmoliveira83@gmail.com.br
                    </Text>
                  </Box>
                </Td>
                {isWindowVersion && <Td> 04 de abril de 2021</Td>}
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Higor Matheus</Text>
                    <Text fontSize="sm" color="gray.300">
                      hmoliveira83@gmail.com.br
                    </Text>
                  </Box>
                </Td>
                {isWindowVersion && <Td> 04 de abril de 2021</Td>}
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Higor Matheus</Text>
                    <Text fontSize="sm" color="gray.300">
                      hmoliveira83@gmail.com.br
                    </Text>
                  </Box>
                </Td>
                {isWindowVersion && <Td> 04 de abril de 2021</Td>}
              </Tr>
            </Tbody>
          </Table>
          <Pagination></Pagination>
        </Box>
      </Flex>
    </Box>
  );
}
