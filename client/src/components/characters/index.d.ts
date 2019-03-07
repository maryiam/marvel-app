interface CharacterStructure {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: any;
  series: any;
  stories: any;
  events: any;
  urls: any;
}

export interface CharactersProps {
  characters: CharacterStructure[];
}

export interface Thumbnail {
  path: string;
  extension: string;
}
