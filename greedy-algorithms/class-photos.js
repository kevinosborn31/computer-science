function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeights.sort((a, b) => b - a);

    let frontRow;
    let backRow;
    if (redShirtHeights[0] > blueShirtHeights[0]) {
        frontRow = blueShirtHeights;
        backRow = redShirtHeights;
    } else if (redShirtHeights[0] < blueShirtHeights[0]) {
        frontRow = redShirtHeights;
        backRow = blueShirtHeights;
    } else {
        return false;
    }

    for (let i = 0; i < frontRow.length; i++) {
        if (frontRow[i] >= backRow[i]) {
            return false;
        }
    }

    return true; 
}