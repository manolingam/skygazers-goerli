import { Flex, Button, Image as ChakraImage } from '@chakra-ui/react';
import { usePathname, useRouter, useParams } from 'next/navigation';

export const HeaderNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  return (
    !params?.id && (
      <Flex
        direction='row'
        alignItems='flex-start'
        justifyContent='space-between'
        pb='3rem'
        px={{ lg: '7.5vw', sm: '1rem' }}
      >
        <Flex direction='row' w='80%'>
          <ChakraImage
            src='/logo.svg'
            w='275px'
            h='175px'
            mr='2rem'
            mb='10px'
          />
          <Flex direction='column' alignItems='flex-start'>
            <Button
              textTransform='uppercase'
              mt='auto'
              bg='transparent'
              color={pathname === '/' ? '#FF5C00' : '#DDB598'}
              fontFamily='gatwickBold'
              fontSize='24px'
              _hover={{
                bg: 'transparent',
                color: '#FF5C00'
              }}
              onClick={() => {
                pathname !== '/' && router.push('/');
              }}
            >
              Home
            </Button>
            <Flex direction='row'>
              <Button
                textTransform='uppercase'
                fontSize='24px'
                mt='auto'
                fontFamily='gatwickBold'
                color={pathname === '/mint' ? '#FF5C00' : '#DDB598'}
                bg='transparent'
                _hover={{
                  bg: 'transparent',
                  color: '#FF5C00'
                }}
                onClick={() => {
                  pathname !== '/mint' && router.push('/mint');
                }}
              >
                Mint
              </Button>
              <Button
                textTransform='uppercase'
                mt='auto'
                bg='transparent'
                color='#DDB598'
                fontFamily='gatwickBold'
                fontSize='24px'
                _hover={{
                  bg: 'transparent'
                }}
                isDisabled
              >
                Lore
              </Button>
              <Button
                textTransform='uppercase'
                mt='auto'
                bg='transparent'
                color='#DDB598'
                fontFamily='gatwickBold'
                fontSize='24px'
                _hover={{
                  bg: 'transparent'
                }}
                isDisabled
              >
                Proposals
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    )
  );
};
