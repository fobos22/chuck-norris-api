import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Head from "next/head";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import axios from "axios";

export default function Home() {
  const [phrases, setPhrase] = React.useState([]);

  React.useEffect(() => {
    async function get() {
      const phrasesReq = await axios.get(
        "/api/showPhrase"
      );
      setPhrase(phrasesReq.data.phrases);
    }
    get();
  }, []);

  const handleGetPhrase = async () => {
    await axios.get("/api/getPhrase");
    const phrasesReq = await axios.get("}/api/showPhrase");
    setPhrase(phrasesReq.data.phrases);
  };

  const handleDeletePhrases = async () => {
    await axios.get("/api/deletePhrases");
    const phrasesReq = await axios.get("/api/showPhrase");
    setPhrase(phrasesReq.data.phrases);
  };
  return (
    <>
      <Head>
        <title>Chuck Norris - Sabas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/icon.svg" type="image/x-icon" />
      </Head>
      <h1 className="text-center text-4xl">
        Chucknorris.io API - Sabas Gabriel Iñiguez Campuzano
      </h1>
      <p className="text-center text-sm">Mysql, Next.js y React</p>
      <div className="flex justify-center mt-10">
        <div className="flex flex-col justify-center">
          <Image src={"/chucknorris.png"} width="200" height={"200"}></Image>
          <Button
            variant="outlined"
            className="mt-5 mb-10"
            onClick={handleGetPhrase}
          >
            Obtener
          </Button>
          <Button
            variant="outlined"
            className="-mt-8"
            color="error"
            onClick={handleDeletePhrases}
          >
            Eliminar todas las frases
          </Button>
        </div>
        <div>
          {phrases.map((item) => (
            <div className="m-10" key={item.ID}>
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="Chuck Norris"
                  src="avatar.jpg"
                  className="mt-0.5"
                />
                <Card sx={{ minWidth: 375 }}>
                  <CardContent>
                    <Typography variant="body2">{item.phrase}</Typography>
                  </CardContent>
                </Card>
              </Stack>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
