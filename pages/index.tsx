import { Flex, Heading, Input, Button, useColorMode, useColorModeValue, Center, AspectRatio } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

const IndexPage = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue('gray.100', 'gray.700')
  return (
    <>
      <Flex height='100vh' alignItems='center' justifyContent='center'>
        <Center boxSize='lg' verticalAlign='middle' margin={6}>
          <Image src='/login.jpg' objectFit='fill' alt='login' borderRadius='5'/>
        </Center>
        <Flex direction='column' background={formBackground} p={12} rounded={6} margin={6}>
          <AspectRatio ratio={4/1} mb={6}>
            <Image src='/logo.png' alt='logo' borderRadius='5' objectFit='fill'/>
          </AspectRatio>
          <Heading mb={6}>Inicia Sesión</Heading>
          <Input placeholder="braulio@estelio.com" variant='filled' mb={6} type='email' />
          <Input placeholder="********" variant='filled' mb={6} type='password' />
          <Button mb={6} colorScheme='teal'>Iniciar Sesion</Button>
          <Button onClick={toggleColorMode}>Cambiar color del tema</Button>
        </Flex>
      </Flex>
    </>
)}

export default IndexPage
