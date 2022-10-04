import Image from 'next/image';
import {
  DetailsContainer,
  MainImageContainer,
  SecondImageContainer,
  ThirdImageContainer,
  FourthImageContainer,
  DetailsHeading,
  DetailsParagraph,
} from './styles';

const PaintingDetail = ({ paintingData }) => (
  <DetailsContainer
    className={Boolean(paintingData.landscape) ? 'landscape' : 'unset'}
  >
    <MainImageContainer>
      <Image
        src={paintingData.image}
        alt={`painting of ${paintingData.title}`}
        layout='responsive'
        width={paintingData.main_image_width}
        height={paintingData.main_image_height}
        priority
      />
    </MainImageContainer>
    <SecondImageContainer>
      <Image
        src={paintingData.image_close_1}
        alt={`painting of ${paintingData.title}`}
        layout={paintingData.portrait ? 'fill' : 'responsive'}
        width={700}
        height={700}
      />
    </SecondImageContainer>
    <ThirdImageContainer>
      <Image
        src={paintingData.image_close_2}
        alt={`painting of ${paintingData.title}`}
        layout={paintingData.portrait ? 'fill' : 'responsive'}
        width={700}
        height={700}
      />
    </ThirdImageContainer>
    <FourthImageContainer>
      <Image
        src={paintingData.image_close_3}
        alt={`painting of ${paintingData.title}`}
        layout={paintingData.portrait ? 'fill' : 'responsive'}
        width={700}
        height={700}
      />
    </FourthImageContainer>

    <DetailsHeading>
      {paintingData.title}
      {paintingData.description && (
        <DetailsParagraph
          dangerouslySetInnerHTML={{
            __html: paintingData.description,
          }}
        />
      )}
    </DetailsHeading>
  </DetailsContainer>
);

export default PaintingDetail;
