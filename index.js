const isTriangle = (x1, y1, x2, y2, x3, y3) => {
    const AB = distanceA(x2, y2, x1, y1);
    const BC = distanceA(x3, y3, x2, y2);
    const CA = distanceA(x3, y3, x1, y1);

    return (AB + BC > CA && BC + CA > AB && CA + AB > BC);
}

const distance = (a, b, c, d) => {
   return Math.sqrt((a - b) ** 2 + (c - d) ** 2);
}

isTriangle(-3, -3, 0, 2, 3, -3);

//

const isIsosceles = (x1, y1, x2, y2, x3, y3) => {
    const AB = distanceB(x2, y2, x1, y1);
    const BC = distanceB(x3, y3, x2, y2);
    const CA = distanceB(x3, y3, x1, y1);

    return (AB === BC) || (CA === BC) || (CA === AB);
}

const distanceB = (a, b, c, d) => {
   return Math.sqrt((a - b) ** 2 + (c - d) ** 2);
}

isIsosceles(-3, -3, 0, 2, 3, -3);

//

const isEquilateral = (x1, y1, x2, y2, x3, y3) => {
    const AB = distanceC(x2, y2, x1, y1);
    const BC = distanceC(x3, y3, x2, y2);
    const CA = distanceC(x3, y3, x1, y1);

    return (AB === BC) && (BC === CA);
}

const distanceC = (a, b, c, d) => {
   return Math.sqrt((a - b) ** 2 + (c - d) ** 2);
}

isEquilateral(-3, -3, 0, 2, 3, -3);

//

const isRightTriangle = (x1, y1, x2, y2, x3, y3) => {
    const AB2 = distanceD(x1, y1, x2, y2);
    const BC2 = distanceD(x2, y2, x3, y3);
    const CA2 = distanceD(x3, y3, x1, y1);

    return (AB2 + BC2 === CA2) || (AB2 + CA2 === BC2) || (BC2 + CA2 === AB2);
}

const distanceD = (a, b, c, d) => {
   return (c - a) ** 2 + (d - b) ** 2;
}

isRightTriangle(-3, -3, 0, 2, 3, -3);
