import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { fakeDB } from "../../fakeBD/fakeBD";
import ModalUsage from "../../components/Modal/Modal";

const TableHeroUI = () => {
  const [data, setData] = useState(fakeDB);
  const [validLinks, setValidLinks] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Cookies.set("memes", JSON.stringify(fakeDB), { expires: 365 });

    const checkLinks = async () => {
      const results = {};

      await Promise.all(
        data.map((meme) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = meme.link;

            img.onload = () => {
              results[meme.id] = true;
              resolve();
            };
            img.onerror = () => {
              results[meme.id] = false;
              resolve();
            };
          });
        })
      );

      setValidLinks(results);
      setLoading(true);
    };

    checkLinks();
  }, [data, loading]);

  if (!loading) {
    return <h1>Loading</h1>;
  }

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Id</TableColumn>
        <TableColumn>Discribe</TableColumn>
        <TableColumn>Link</TableColumn>
        <TableColumn>Likes</TableColumn>
        <TableColumn>Action</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((meme) => {
          const isValid = validLinks[meme.id];

          return (
            <TableRow key={meme.id}>
              <TableCell>{meme.id}</TableCell>
              <TableCell>{meme.discribe}</TableCell>
              <TableCell>
                {isValid === undefined ? (
                  "Перевірка..."
                ) : isValid ? (
                  meme.link
                ) : (
                  <span style={{ color: "red" }}>Адреса не доступна</span>
                )}
              </TableCell>
              <TableCell>{meme.likes}</TableCell>
              <TableCell>
                <ModalUsage
                  id={meme.id}
                  discription={meme.discribe}
                  link={meme.link}
                  setData={setData}
                />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TableHeroUI;
