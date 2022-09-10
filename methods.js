export default {
    matchPlayerImage(player) {
        switch (player) {
            case "Auston Matthews":
                return require("/img/Auston_Matthews.svg");
                break;
            case "Connor McDavid":
                return require("/img/Connor_Mcdavid.svg");
                break;
            case "Alex Ovechkin":
                return require("/img/ovi.svg");
                break;
            case "William Nylander":
                return require("/img/William_Nylander.svg");
                break;
            case "John Tavares":
                return require("/img/John_Tavares.svg");
                break;
            case "Johnny Gaudreau":
                return require("/img/johnny_g.svg");
                break;
            case "Sidney Crosby":
                return require("/img/crosby.svg");
                break;
            case "Sean Monahan":
                return require("/img/Sean Monahan.svg");
                break;
            case "Conner McDavid":
                return require("/img/Connor_Mcdavid.svg");
                break;
            case "Conner McDavid":
                return require("/img/Connor_Mcdavid.svg");
                break;
            case "Carey Price":
                return require("/img/Carey_Price.svg");
                break;
            default:
                return require("/img/Skates-Retro-Pink-2.svg");
        }
    }
}