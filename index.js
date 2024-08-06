const isTriangle = (x1, y1, x2, y2, x3, y3) => {
    const AB = distance(x2, y2, x1, y1);
    const BC = distance(x3, y3, x2, y2);
    const CA = distance(x3, y3, x1, y1);

    return (AB + BC > CA && BC + CA > AB && CA + AB > BC);
}

const distance = (a, b, c, d) => {
   return Math.sqrt((a - b) ** 2 + (c - d) ** 2);
}

isTriangle(-3, -3, 0, 2, 3, -3);