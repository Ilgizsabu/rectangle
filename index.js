const findDistance = (a, b, c, d) => {
   return Math.sqrt((a - b) ** 2 + (c - d) ** 2);
}

const isTriangle = (x1, y1, x2, y2, x3, y3) => {
    const AB = findDistance(x2, y2, x1, y1);
    const BC = findDistance(x3, y3, x2, y2);
    const CA = findDistance(x3, y3, x1, y1);

    const exists = (AB + BC > CA && BC + CA > AB && CA + AB > BC);
    const isIsosceles = (AB === BC) || (CA === BC) || (CA === AB);
    const isEquilateral = (AB === BC) && (BC === CA);

    return { 
        exists, 
        isIsosceles, 
        isEquilateral 
    };
}

const isRightTriangle = (x1, y1, x2, y2, x3, y3) => {
    const AB2 = findDistanceSquar(x1, y1, x2, y2);
    const BC2 = findDistanceSquar(x2, y2, x3, y3);
    const CA2 = findDistanceSquar(x3, y3, x1, y1);

    return (AB2 + BC2 === CA2) || (AB2 + CA2 === BC2) || (BC2 + CA2 === AB2);
}

const findDistanceSquar = (a, b, c, d) => {
   return (c - a) ** 2 + (d - b) ** 2;
}


isRightTriangle(-3, -3, 0, 2, 3, -3);
