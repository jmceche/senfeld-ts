import { Link as RouteLink } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  List,
  ListItem,
  Link,
  Divider
} from "@chakra-ui/react";
import React from "react";

interface Props {
  showEpisodes: any[];
  showSeasons: any[];
}

const EpisodesList = ({ showEpisodes, showSeasons }: Props) => {
  return (
    <>
      <Accordion
        defaultIndex={[0]}
        allowMultiple
        m="2rem auto"
        w={{ base: "90%", md: "70%" }}
        bg="#fafafa"
      >
        {showSeasons.map(season => (
          <AccordionItem key={season.id}>
            <h2>
              <AccordionButton _focus={{ outline: "none" }}>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Season {season.number}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={0}>
              <List spacing={2}>
                {showEpisodes.map(
                  (episode: any) =>
                    episode.season === season.number && (
                      <React.Fragment key={episode.id}>
                        <Link
                          as={RouteLink}
                          to={`/season/${episode.season}/episode/${episode.number}`}
                        >
                          <ListItem
                            _first={{ marginTop: ".5rem" }}
                            ml="1rem"
                            _hover={{ fontWeight: "bold" }}
                          >
                            {episode.number} - {episode.name}
                          </ListItem>
                        </Link>
                        <Divider />
                      </React.Fragment>
                    )
                )}
              </List>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default EpisodesList;
