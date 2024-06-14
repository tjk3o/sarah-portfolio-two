import Link from 'next/link';
import { paintingData } from '../PaintingDetail';
import {
  CategoryHeading,
  CategoryContainer,
  CategoryLink,
  CategoryImage,
} from './styles';

type PaintingsDataType = [paintingData];

export const Category = ({
  paintingsData,
  category,
}: {
  paintingsData: PaintingsDataType;
  category?: string;
}) => {
  const categoryTitles = {
    ocean: 'Ocean',
    land: 'Land',
    city: 'City',
  };
  
  paintingsData.sort((a, b) => {
    return a.index - b.index;
  });

  return (
    <>
      {category && (
        <CategoryHeading>
          Paintings of the {categoryTitles[category]}...
        </CategoryHeading>
      )}
      <CategoryContainer>
        {paintingsData?.map((painting, i) => (
          <Link key={painting.id} href={`/paintings/${painting.id}`} passHref>
            <CategoryLink>
              <CategoryImage
                priority={i === 0}
                src={painting.image}
                alt={`painting of ${painting.title}`}
                width={600}
                height={600}
                quality={25}
              />
            </CategoryLink>
          </Link>
        ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
