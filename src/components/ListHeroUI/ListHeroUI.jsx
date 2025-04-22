import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { fakeDB } from "../../fakeBD/fakeBD";
import { useEffect, useState } from "react";

const ListHeroUI = () => {
  const [memes, setMemems] = useState([]);

  useEffect(() => {
    setMemems(fakeDB);
  }, [memes]);

  return (
    <div className="mt-10 gap-2 grid grid-cols-2 sm:grid-cols-4">
      {memes.map((meme) => (
        /* eslint-disable no-console */
        <Card key={meme.id} className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="flex items-center text-tiny uppercase font-bold">
              {meme.likes} <HeartIcon />
            </p>
            <h4 className="font-bold text-large w-[80%]">{meme.discribe}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 place-items-center">
            <Image
              alt={meme.discribe}
              className="w-full object-cover h-[140px]"
              radius="lg"
              shadow="sm"
              src={meme.link}
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

const HeartIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill={filled ? fill : "none"}
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default ListHeroUI;
