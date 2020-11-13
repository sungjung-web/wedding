import Head from 'next/head';
import { FC } from 'react';

interface SearchHeadProps {
  title?: string;
  description?: string;
  imagePath?: string;
}

const SearchHead: FC<SearchHeadProps> = ({
  title = '🤵‍♂️ 조성정 𐤟 👰‍♀️ 조유나',
  description = '부여 롯데리조트 2021년 1월 23일 12시 30분',
  imagePath = 'https://wedding.sungjung.dev/images/sns-share.jpg',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:url" content="https://wedding.sungjung.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={imagePath} />
      <meta property="og:image:alt" content="청첩장 사진" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imagePath} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default SearchHead;
