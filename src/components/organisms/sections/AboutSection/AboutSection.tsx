import {
  AspectRatio,
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import {connectBlock, Field} from '@atsnek/jaen'
import React, {ReactNode} from 'react'
import {getThemeColor} from '../../../../common/utils'
import {Bullet} from '../../../atoms/Bullet'
import {FixedStrokeLogo} from '../../../molecules/FixedStrokeLogo'
import {FeatureSectionJSX} from '../FeatureSection'
import CardWithImageBackground from '../../../molecules/CardWithImageBackground'
import {CONTAINER_MAX_WIDTH} from '../../../../common/sizes'
import {StickyStrokeLogo} from '../../../molecules/StickyStrokeLogo'
import * as style from './style'
import {Link} from 'gatsby'
import {useContactModal} from '../../../../services/contact'

export interface AboutSectionProps {
  anchor?: string
  name: string
  heading: ReactNode
  displayName: string
}

export interface AboutProps {
  anchor?: string
  heading: ReactNode
}

export const About = ({anchor, heading}: AboutProps) => {
  const cardHeight = {
    base: '12.5rem',
    sm: '15rem',
    md: '17.5rem',
    lg: '20rem',
    xl: '22.5rem'
  }

  const cardWidth = {
    base: '10rem',
    sm: '12.5rem',
    md: '15rem',
    xl: '17.5rem'
  }

  const contactConxtex = useContactModal()

  return (
    <>
      <Box
        id={anchor}
        // position="relative"
        overflow="hidden"
        css={style.Section}>
        {/* <Box
          w="100%"
          h="100%"
          position="absolute"
          style={{clip: 'rect(0, auto, auto, 0)'}}>
          <StickyStrokeLogo
            strokeColor={getThemeColor('stroke')}
            backgroundColor={getThemeColor('background')}
          />
        </Box> */}

        <Divider
          orientation="vertical"
          position="absolute"
          zIndex={-1}
          // w="0"
          // h="100%"
          top="0"
          left="calc(4em + 2.5vw)"
          // borderLeft="1px"
          borderColor="stroke"
          display={{base: 'none', '2xl': 'block'}}
        />
        <Stack
          zIndex={-1}
          py="20"
          px={{base: 0, sm: 4, md: 8}}
          align="center"
          justify="center">
          <Box textAlign="center" my="10">
            <Heading size="2xl">{heading}</Heading>
            <Bullet w="unset" fontSize="xl" mt="5" mb="10" />
          </Box>
          <Container
            justifyContent="space-between"
            as={Flex}
            gap={{base: 32, xl: 8}}
            flexDirection={{base: 'column', xl: 'row'}}
            maxW={CONTAINER_MAX_WIDTH}>
            <Flex gap="4" justify="center" alignSelf="center">
              <Stack flex="1" justify="center">
                <CardWithImageBackground
                  h={cardHeight}
                  w={cardWidth}
                  minW={'none'}
                  displayContent={false}
                  card={{
                    headingFieldName: 'Cardheading1',
                    headingDefaultValue: '   ',
                    textFieldName: 'CardText1',
                    textDefaultValue: '   ',
                    imageFieldName: 'CardImage1',
                    imageDefaultValue: undefined
                  }}
                />
              </Stack>

              <Stack
                gap="4"
                spacing="0"
                h="full"
                w="full"
                align="center"
                justify="center">
                <CardWithImageBackground
                  h={cardHeight}
                  w={cardWidth}
                  minW={'none'}
                  displayContent={false}
                  card={{
                    headingFieldName: 'Cardheading2',
                    headingDefaultValue: '   ',
                    textFieldName: 'CardText2',
                    textDefaultValue: '   ',
                    imageFieldName: 'CardImage2',
                    imageDefaultValue: undefined
                  }}
                />

                <CardWithImageBackground
                  h={cardHeight}
                  w={cardWidth}
                  minW={'none'}
                  displayContent={false}
                  card={{
                    headingFieldName: 'Cardheading3',
                    headingDefaultValue: '   ',
                    textFieldName: 'CardText3',
                    textDefaultValue: '   ',
                    imageFieldName: 'CardImage3',
                    imageDefaultValue: undefined
                  }}
                />
              </Stack>
            </Flex>

            <Stack
              zIndex={'999'}
              maxW={{
                xl: '50%'
              }}
              spacing="8"
              justify="center">
              <Heading
                fontSize={{base: 'md', md: 'xl', xl: '2xl'}}
                lineHeight={{base: '1.25rem', md: '2rem', xl: '2.5rem'}}
                mb="-2"
                whiteSpace="nowrap">
                <Field.Text
                  name="Heading1"
                  defaultValue="Auch die <i>kleinsten</i><br/> Dinge machen viel <i>Freude</i>"
                />
              </Heading>
              <Heading fontSize={{base: 'sm', md: 'md'}} fontWeight="semibold">
                <Field.Text
                  name="subtitle"
                  defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                />
              </Heading>
              <Text
                fontSize={{base: 'sm', md: 'md'}}
                fontWeight="light"
                as="span">
                <Field.Text
                  name="text"
                  defaultValue="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                />
              </Text>
              <ButtonGroup colorScheme="agt.grayScheme" size="lg">
                <Button
                  onClick={() => {
                    contactConxtex.onOpen()
                  }}>
                  Kontakiere uns
                </Button>
                <Button as={Link} to="/products">
                  Unsere Produkte
                </Button>
              </ButtonGroup>
            </Stack>
          </Container>
        </Stack>
      </Box>
    </>
  )
}

export const AboutSection = ({
  anchor,
  name,
  displayName
}: AboutSectionProps) => (
  <About
    anchor={anchor}
    heading={<Field.Text name="heading" defaultValue={'Über uns'} />}
  />
)

export const AboutSectionJSX = ({
  name,
  displayName,
  anchor,
  heading
}: AboutSectionProps) => null
