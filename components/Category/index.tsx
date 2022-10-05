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

  paintingsData.sort(function (a: { date: string }, b: { date: string }) {
    const firstDate = new Date(b.date);
    const secondDate = new Date(a.date);
    return firstDate.getTime() - secondDate.getTime();
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
                layout='responsive'
                width={600}
                height={600}
                objectFit='cover'
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
