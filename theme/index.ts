import { css } from "styled-components";

//variables used multiples times
const black = "#000";
const btc = "#F5A623";
const errorRed = "#D0021B";
const eth = "#2a53ff";
const darkCeruleanBlue = "#025286";
const gusd = "#1ED4FF";
const kleinBlue = "#002EA7";
const ltc = "#A6A9AA";
const pax = "#00845D";
const paxg = "#d9a600";
const summerSkyBlue = "#1ACAE3";
const usdc = "#3A73BF";
const white = "#FFF";
const usd = "#B0DA16";
const usdt = "#1ba27a";
const link = "#335DD2";
const dai = "#FFA843";
const busd = "#E8B30E";
const bat = "#FF4724";
const uni = "#FF007A";
const unexpectedCurrency = "#E89696";

const COLORS = {
    palette: {
        neutral: {
            0: "#fff",
            100: "#F5F9FF",
            200: "#E6EDF7",
            300: "#E6EDF7",
            500: "#8FA3BF",
            600: "#7C899C",
            900: "#252F3D",
        },
        brand: {
            default: "linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)",
            hover: " linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)",
            light: "#E5F0FF",
            light2: "#CCE1FF",
        },
        red: {
            default: "#E07F4F",
            light: "#FFDFD9",
        },
        specials: {
            illustration:
                "linear-gradient(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%, #EAC0E9 106.58%)",
            sectionbg:
                "linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)",
            aerolab: "linear-gradient(180deg, #FF8800 0%, #FF6600 100%)",
        },
    },
};

export const color = {
    bahamaBlue: "#264D79",
    black: black,
    blueGray: "#96A7B8",
    blueStone: "#173E64",
    lightBlue: "#004CEF",
    cyprusGreen: "#113259",
    darkCeruleanBlue: darkCeruleanBlue,
    errorRed: errorRed,
    fernGreen: "#63AB75",
    gray: "#7f7f7f",
    darkGray: "#AFAFAF",
    heatherGray: "#A8B6C6",
    hawkeBlue: "#E2EAF2",
    kleinBlue: kleinBlue,
    rockBlue: "#90A7BF",
    regalBlue: "#17375B",
    solitude: "#fbfbfc",
    summerSkyBlue: summerSkyBlue,
    solitudeWhite: "#E9EDF2",
    updateGreen: "#4caf50",
    white: white,
    dark: "#141415",
    topazGray: "#89898a",
    //there are more text color, I'm drawing the line at most 8.
};

export const background: Record<string, string> = {
    blueStone: "#173E64",
    black: black,
    blockFiUiToolTip: "#d7f5f8",
    btc: btc,
    darkCeruleanBlue: darkCeruleanBlue,
    easternBlue: "#0089AB",
    errorRed: errorRed,
    eth: eth,
    fernGreen: "#63AB75",
    gray: "#7f7f7f",
    gusd: gusd,
    hawkeBlue: "#E2EAF2",
    kleinBlue: kleinBlue,
    lavenderWhite: "#E5EFF9",
    ltc: ltc, //from litcoin website
    nepalGray: "#A1B0C2",
    pax: pax,
    paxg: paxg,
    regalBlue: "#17375B",
    rockBlue: "#90A7BF",
    solitude: "#fbfbfc",
    summerSkyBlue: summerSkyBlue,
    solitudeWhite: "#E9EDF2",
    usdc: usdc, //from coinbase website rgb(39, 117, 202)
    usdt: usdt,
    usd: "#4caf50",
    white: white,
    busd: "#f0b90b",
    link: "#224dda",
    dai: dai,
    uni: uni,
    bat: bat,
};
// breakpoint sizes
type Size = "sm" | "md" | "lg" | "xl";

const sizes: Record<Size, string> = {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
};


export default {
    v1: {
        palette: {
            neutral: { ...COLORS.palette.neutral },
            brand: { ...COLORS.palette.brand },
            red: { ...COLORS.palette.red },
            specials: { ...COLORS.palette.specials },
        },
        breakpoints: {
            up: (size: Size): string => `@media (min-width: ${sizes[size]})`,
            down: (size: Size): string => `@media (max-width: ${sizes[size]})`,
            between: (from: Size, to: Size): string =>
                `@media (min-width: ${sizes[from]}) and (max-width: ${sizes[to]})`,
        },
        currency: {
            unexpectedCurrency: unexpectedCurrency,
            color: {
                btc: btc,
                eth: eth,
                gusd: gusd,
                ltc: ltc,
                pax: pax,
                paxg: paxg,
                usdc: usdc,
                usd: usd,
                usdt: usdt,
                link: link,
                dai: dai,
                busd: busd,
                uni: uni,
                bat: bat,
            },
        },
        text: {
            font: {
                family: {
                    primary: "Montserrat, Verdana",
                },
                weight: {
                    light: 300,
                    regular: "normal",
                    medium: 500,
                    semibold: 600,
                    bold: "bold",
                    bolder: 900,
                },
                spacing: {

                },
                size: {
                    desktop: {
                        l1: "64px",
                        l2: "48px",
                        l3: "32px",
                    },
                    mobile: {
                        l1: "48px",
                        l2: "32px",
                        l3: "24px"
                    }
                }
            },
        },
        cta: {
            button: {},
        },
        heading: {
            fontsize: "35px",
        },
        card: {
            header: {
                major: {
                    fontsize: "30px",
                },
                minor: {
                    fontsize: "12px",
                },
            },
        },
        container: {
            background: {
                color: {
                    ...background,
                },
            },
            margin: {},
            padding: {
                card: "16.8px 16.5px 11.8px 16.5px",
                modal: "19.5px 33.6px 23px 31.5px",
            },
        },
    },
};
