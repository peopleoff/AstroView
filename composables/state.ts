import type { Sign } from "@/types/Sign";
const signs: Array<Sign> = [
  {
    sign: "Aries",
    startDate: "3/21",
    endDate: "4/19",
    imageUrl: "aries.svg",
  },
  {
    sign: "Taurus",
    startDate: "4/20",
    endDate: "5/20",
    imageUrl: "taurus.svg",
  },
  {
    sign: "Gemini",
    startDate: "5/21",
    endDate: "6/20",
    imageUrl: "gemini.svg",
  },
  {
    sign: "Cancer",
    startDate: "6/21",
    endDate: "7/22",
    imageUrl: "cancer.svg",
  },
  {
    sign: "Leo",
    startDate: "7/23",
    endDate: "8/22",
    imageUrl: "leo.svg",
  },
  {
    sign: "Virgo",
    startDate: "8/23",
    endDate: "9/22",
    imageUrl: "virgo.svg",
  },
  {
    sign: "Libra",
    startDate: "9/23",
    endDate: "10/22",
    imageUrl: "libra.svg",
  },
  {
    sign: "Scorpio",
    startDate: "10/23",
    endDate: "11/21",
    imageUrl: "scorpio.svg",
  },
  {
    sign: "Sagittarius",
    startDate: "11/22",
    endDate: "12/21",
    imageUrl: "sagittarius.svg",
  },
  {
    sign: "Capricorn",
    startDate: "12/22",
    endDate: "1/19",
    imageUrl: "capricorn.svg",
  },
  {
    sign: "Aquarius",
    startDate: "1/20",
    endDate: "2/18",
    imageUrl: "aquarius.svg",
  },
  {
    sign: "Pisces",
    startDate: "2/19",
    endDate: "3/20",
    imageUrl: "pisces.svg",
  },
];
export const useSign = () => useState<Array<Sign>>('signs', () => signs)