import { useState, useEffect } from "react";
import EpisodesList from "../components/EpisodesList";
import Layout from "../components/Layout";
import { Flex, Text, Image, Box } from "@chakra-ui/react";

interface ShowD {
  image: string;
  summary: string;
  episodes: any[];
  seasons: any[];
}

const Home = () => {
  const [showData, setShowData] = useState<ShowD | null>(null);

  useEffect(() => {
    const fetchAPI = async (): Promise<void> => {
      try {
        const resp = await fetch(
          "https://api.tvmaze.com/shows/530?embed[]=episodes&embed[]=seasons"
        );
        const data = await resp.json();
        setShowData({
          image: data.image.original,
          summary: data.summary,
          episodes: data._embedded.episodes,
          seasons: data._embedded.seasons
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);

  return (
    <Layout>
      {showData && (
        <Flex direction="column" mx="1rem">
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="center"
          >
            <Box maxWidth="300px" m="2rem" width={{ base: "auto", md: "100%" }}>
              <Image src={showData.image} alt="seinfeld" />
            </Box>
            <Text
              width={{ base: "auto", md: "50%" }}
              dangerouslySetInnerHTML={{ __html: `${showData.summary}` }}
            ></Text>
          </Flex>
          <EpisodesList
            showEpisodes={showData.episodes}
            showSeasons={showData.seasons}
          />
        </Flex>
      )}
    </Layout>
  );
};

export default Home;
