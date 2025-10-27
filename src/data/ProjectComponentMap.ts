import WeatherApiPage from "../pages/WeatherApiPage"
import TheMovieDbPage from "../pages/TheMovieDbPage"
import TheMealDbPage from "../pages/TheMealDbPage"

export const ProjectComponentMap: { [key: string]: React.FC } = {
  "weather-api": WeatherApiPage,
  "movie-api": TheMovieDbPage,
  "meal-api": TheMealDbPage,
}