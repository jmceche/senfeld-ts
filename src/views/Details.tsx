import { Flex, Image, Text, Heading, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RouteComponentProps, useHistory, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import dayjs from "dayjs";

interface Params {
  season: string;
  episode: string;
}

interface Episodes {
  name: string;
  summary: string;
  runtime: string;
  airdate: string;
  image: { original: string };
}

const Details = () => {
  let history = useHistory<RouteComponentProps>();
  const { season, episode } = useParams<Params>();
  const [episodeData, setEpisodeData] = useState<Episodes | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchEpisode = async (): Promise<void> => {
      try {
        const resp = await fetch(
          `https://api.tvmaze.com/shows/530/episodebynumber?season=${season}&number=${episode}`
        );
        const data = await resp.json();
        data.status === 404 ? history.push("/NotFound") : setEpisodeData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEpisode();
  }, [season, episode, history]);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <Layout>
      {episodeData && (
        <Flex
          justify="center"
          align="center"
          direction={{ base: "column", md: "row" }}
          mx="1rem"
        >
          <Flex w={{ md: "40vw" }} justify="center" align="center">
            <Image
              src={episodeData.image.original}
              alt="seinfeld"
              onLoad={handleLoad}
              display={loaded ? "block" : "none"}
            />
          </Flex>
          <Flex
            direction="column"
            w={{ md: "50vw", lg: "30vw" }}
            ml={{ md: "2rem" }}
            display={loaded ? "block" : "none"}
          >
            <Heading textAlign="center">{episodeData.name}</Heading>
            <Text
              dangerouslySetInnerHTML={{ __html: `${episodeData.summary}` }}
              my="1rem"
            ></Text>
            <Text>
              <strong>Duration: </strong> {episodeData.runtime} min
            </Text>
            <Text>
              <strong>Date:</strong>{" "}
              {dayjs(episodeData.airdate).format("DD - MMMM - YYYY")}
            </Text>
            <Button
              mt="1rem"
              onClick={() => {
                history.push("/");
              }}
            >
              Back
            </Button>
          </Flex>
        </Flex>
      )}
    </Layout>
  );
};

export default Details;
