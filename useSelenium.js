function getCellElements() {
  return [...document.getElementsByTagName("div")].filter((element) => {
    return element.getAttribute("data-testid") === "primaryColumn";
  });
}

function currentEntries() {
  return Object.fromEntries(
    getCellElements().map((element) => {
      const linkTexts = [...element.getElementsByTagName("div")]
        .filter(
          (linkElement) =>
            linkElement.getAttribute("class") ===
            "css-175oi2r r-1wbh5a2 r-dnmrzs"
        )
        .map((linkElement) => linkElement.text);
      const divTexts = [...element.getElementsByTagName("a")]
        .filter(
          (divElement) =>
            divElement.getAttribute("class") ===
            "css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1loqt21"
        )
        .map((divElement) => divElement.innerText);
      return [linkTexts[1], { info: divTexts }];
    })
  );
}
