type Rectangle = {
    width: number,
    height: number,
}

const getRectangleArea = (rectangle: Rectangle) => {
    return rectangle.width * rectangle.height
}

const getRectanglePerimiter = (rectangle: Rectangle) => {
    return 2 * (rectangle.width + rectangle.height)
}