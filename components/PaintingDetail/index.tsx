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

export type paintingData = {
  id?: string;
  title: string;
  date: string;
  image: string;
  image_close_1: string;
  image_close_2: string;
  image_close_3: string;
  category: string;
  description: string;
  landscape: boolean;
  portrait: boolean;
  main_image_width: number;
  main_image_height: number;
};

const PaintingDetail = ({ paintingData }: { paintingData }) => (
  <DetailsContainer
    className={
      Boolean(paintingData.landscape)
        ? 'landscape'
        : Boolean(paintingData.portrait)
        ? 'portrait'
        : 'unset'
    }
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
        layout={'responsive'}
        width={700}
        height={700}
      />
    </SecondImageContainer>
    <ThirdImageContainer>
      <Image
        src={paintingData.image_close_2}
        alt={`painting of ${paintingData.title}`}
        layout={'responsive'}
        width={700}
        height={700}
      />
    </ThirdImageContainer>
    <FourthImageContainer>
      <Image
        src={paintingData.image_close_3}
        alt={`painting of ${paintingData.title}`}
        layout={'responsive'}
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
