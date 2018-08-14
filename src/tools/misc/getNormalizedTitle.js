//get normalized title from get title (x_x = X X / xx = Xx)
export default function getNormalizedTitle(getTitle) {
    getTitle = getTitle.split("_")
    getTitle = getTitle.map(elem => {
      return elem[0].toUpperCase() + elem.slice(1);
    })
    return getTitle = getTitle.join(" ")
}