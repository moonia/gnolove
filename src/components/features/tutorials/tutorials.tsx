import { Container, Flex, Heading, Text, Card, Grid, Badge, Button, Section } from '@radix-ui/themes';
import YoutubeEmbeddedVideo from '@/element/youtube-embedded-video';
import { TUTORIAL_VIDEOS } from '@/components/features/tutorials/constants';
import Link from 'next/link';

const Tutorials = () => {
  return (
    <Container size='4' py='6'>
      <Section>
        <Flex direction='column' align='center' mb='8'>
          <Heading size='8' align='center' style={{ color: '#dc2626', fontFamily: 'monospace' }}>
            GNOLOVE
          </Heading>
          <Text size='4' align='center' style={{ color: '#ef4444', fontFamily: 'monospace', marginTop: '8px' }}>
            TUTORIALS & GUIDES
          </Text>
        </Flex>

        <Card mb='6' style={{ backgroundColor: 'white', border: '1px solid #e5e5e5' }}>
          <Flex align='center' justify='between' p='4' wrap='wrap' gap='4'>
            <Flex align='center' gap='4'>
              <Badge size='2' color='green'>
                📚 Learning Hub
              </Badge>
              <Text size='2' style={{ color: '#6b7280' }}>
                {TUTORIAL_VIDEOS.length} video(s) available
              </Text>
            </Flex>
            <Link href='https://www.youtube.com/playlist?list=PLJZrQikyfMc-kBojXgAojOz4UQPuq4DiY' target='_blank'>
              <Button size='2' style={{ backgroundColor: '#dc2626', color: 'white' }}>
                Subscribe to Updates
              </Button>
            </Link>
          </Flex>
        </Card>

        <Grid columns={{ initial: '1', sm: '2', lg: '3' }} gap='6'>
          {TUTORIAL_VIDEOS.map(({ src, title }) => (
            <Card key={src}>
              <Flex direction='column' gap='2'>
                <YoutubeEmbeddedVideo className="overflow-hidden rounded-4" src={src} />
                <Text size='3'>{title}</Text>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Section>
    </Container>
  );
};

export default Tutorials;