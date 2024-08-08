const findDistance = (a, b, c, d) => {
   return Math.sqrt((a - b) ** 2 + (c - d) ** 2);
}

const isTriangle = (x1, y1, x2, y2, x3, y3) => {
    const ab = findDistance(x2, y2, x1, y1);
    const bc = findDistance(x3, y3, x2, y2);
    const ca = findDistance(x3, y3, x1, y1);

    const exists = (ab + bc > ca && bc + ca > ab && ca + ab > bc);
    const isIsosceles = (ab === bc) || (ca === bc) || (ca === ab);
    const isEquilateral = (ab === bc) && (bc === ca);
    const isRightTriangle = (ab ** 2 + bc ** 2 === ca ** 2) || 
                            (ab ** 2 + ca ** 2 === bc ** 2) || 
                            (bc ** 2 + ca ** 2 === ab ** 2);

    return { 
        exists, 
        isIsosceles, 
        isEquilateral,
        isRightTriangle 
    };
}

isTriangle(-3, -3, 0, 2, 3, -3);