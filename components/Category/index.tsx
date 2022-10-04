import Link from 'next/link';
import {
  CategoryHeading,
  CategoryContainer,
  CategoryLink,
  CategoryImage,
} from './styles';

export const Category = ({ paintingsData, category }) => {
  const categoryTitles = {
    ocean: 'Ocean',
    land: 'Land',
    city: 'City',
  };

  paintingsData.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
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
