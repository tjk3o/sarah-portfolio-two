import {
  AboutContainer,
  AboutMainImage,
  AboutText,
  StyledH1,
  StyledParagraph,
  Signature,
} from './styles';
import Image from 'next/image';

const About = () => (
  <AboutContainer>
    <AboutMainImage>
      <Image
        src='/images/sarah/sarah_anne_portrait.jpg'
        alt={`picture of me painting`}
        width={1146}
        height={1575}
        priority
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </AboutMainImage>
    <AboutText>
      <StyledH1>About me</StyledH1>
      <StyledParagraph>
        Hi, thank you for visiting! Welcome to my website where you can find out
        more about me, explore my painting style, and see some of the work I
        have to offer.
        <br />
        <br />
        I am a Conservation Architect, working in London and specialising in
        historic buildings. I am also an artist and painter, capturing the world
        around me.
        <br />
        <br />
        The majority of my work is in oil paint, applied in layer upon layer to
        work up texture and a blending of colours with a palette knife and
        various mediums. My work is intuitive - I will capture a scene or a
        moment, but the painting will emerge and evolve during the course of its
        making. I’m inspired by the sense of atmosphere in the painterly
        landscapes of Claude Monet, combined with the textures and chance of
        Gerhard Richter’s abstract work. I aim to create evocative paintings
        that form an overall image when seen from a distance, but also have
        depth and discovery when viewed up close so that there is always more to
        explore as your eyes draw around the painting. My paintings have the
        ability to transport the viewer, and will be perceived differently based
        on life experiences and emotions in the moment of stopping, and looking.
        <br />
        <br />
        All artwork shown here is my own original artwork - I hope that you
        enjoy exploring the site. Please do contact me for general enquires, if
        you like any of the pieces shown here, or if you admire my style and are
        interested in commissioning your own piece. I can work to individual
        briefs, to capture a treasured scene or colour palette! Whatever it is,
        I’d love to hear from you.
        <br />
        <br />
        Lots of Love
      </StyledParagraph>
      <Signature>
        <Image
          src='/images/sarah/signature.png'
          alt={`my signature`}
          width={207}
          height={126}
          priority
        />
      </Signature>
    </AboutText>
  </AboutContainer>
);

export default About;
