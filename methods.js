export default function matchPlayerImage(player) {
        switch (player) {
            case "Auston Matthews":
                return "/img/Auston_Matthews.svg";
                break;
            case "Artemi Panarin":
                return "/img/Artemi_Panarin.svg";
                break;
            case "Connor McDavid":
                return "/img/Connor_Mcdavid.svg";
                break;
            case "Alex Ovechkin":
                return "/img/ovi.svg";
                break;
            case "William Nylander":
                return "/img/William_Nylander.svg";
                break;
            case "John Tavares":
                return "/img/John_Tavares.svg";
                break;
            case "Johnny Gaudreau":
                return "/img/johnny_g.svg";
                break;
            case "Sidney Crosby":
                return "/img/crosby.svg";
                break;
            case "Sean Monahan":
                return "/img/Sean Monahan.svg";
                break;
            case "Mitch Marner":
                return "/img/Mitch_Marner.svg";
                break;
            case "Erik Karlsson":
                return "/img/karlsson.png";
                break;
            case "Nikita Kucherov":
                return "/img/Nikita_Kucherov.svg";
                break;
            case "Winnipeg":
                return "/img/Skates-Fighter-Jet.svg";
                break;
            case "Toronto":
                return "/img/FlapjackBag.svg";
                break;
            case "New Jersey":
                return "/img/PlumbersJersey.svg";
                break;
            case "Buffalo":
                return "/img/Nippers.png";
                break;
            case "Steven Stamkos":
                return "/img/Steven_Stamkos.svg";
                break;
            case "Carey Price":
                return "/img/Carey_Price.svg";
                break;
            case "DET":
                return "/img/baseball-player.png";
                break;
            case "LAA":
                return "/img/BaseballGlove.png";
                break;
            case "LAD":
                return "/img/BaseballGlove.png";
                break;
            case "HOU":
                return "/img/baseball-player.png";
                break;
            default:
                return "/img/BaseballGuy.svg";
        }
    }