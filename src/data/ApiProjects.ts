export type ApiProjectsProps = {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

export const ApiProjects: ApiProjectsProps[] = [
  {id: 1, title: "Weather API", desc: "Provides real-time weather data.", icon: "streamline-ultimate-color:weather-sun"},
  {id: 2, title: "The Movie DB", desc: "Films and TV shows database..", icon: "streamline-ultimate-color:movies-reel"},
  {id: 1, title: "The Meal DB", desc: "Recipes and meal information source.", icon: "streamline-ultimate-color:fast-food-french-fries"},
]