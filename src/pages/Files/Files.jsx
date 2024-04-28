import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const Files = () => {
  const documents = [
    {
      name: "Trame de prospection",
      category: "Document",
      availability: "Tous",
      path: "",
    },
    {
      name: "Trame de tournage",
      category: "Document",
      availability: "Tous",
      path: "",
    },
    {
      name: "Trame de publication",
      category: "Document",
      availability: "Tous",
      path: "",
    },
  ];

  const videos = [
    {
      name: "Vidéo de formation 1",
      category: "Vidéo",
      availability: "Tous",
      path: "",
    },
    {
      name: "Vidéo de formation 2",
      category: "Vidéo",
      availability: "Tous",
      path: "",
    },
    {
      name: "Vidéo de formation 3",
      category: "Vidéo",
      availability: "Tous",
      path: "",
    },
  ];

  const autresElements = [
    { name: "Logos", category: "Autre" },
    {
      name: "Détails typographies",
      category: "Autre",
      availability: "Tous",
      path: "",
    },
    {
      name: "Contrats et feuille de route",
      category: "Autre",
      availability: "Tous",
      path: "",
    },
    {
      name: "Fiche générale de bienvenue",
      category: "Autre",
      availability: "Tous",
      path: "",
    },
  ];

  return (
    <div>
      <Divider />
      <Typography variant="h5" gutterBottom>
        Documents
      </Typography>
      <List>
        {documents.map((document, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={document.name}
              secondary={document.category}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography variant="h5" gutterBottom>
        Vidéos de Formation
      </Typography>
      <List>
        {videos.map((video, index) => (
          <ListItem key={index}>
            <ListItemText primary={video.name} secondary={video.category} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography variant="h5" gutterBottom>
        Autres Éléments
      </Typography>
      <List>
        {autresElements.map((element, index) => (
          <ListItem key={index}>
            <ListItemText primary={element.name} secondary={element.category} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Files;
