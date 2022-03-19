export function flipAndInvertimage(image: number[][]): number[][] {
  for (let i = 0; i < image.length; ++i) {
    image[i] = [...image[i]].reverse();
  }

  return image.map((el) => el.map((v) => (v === 1 ? 0 : 1)));
}

export function minTimeToVisitAllPoints(points: number[][]): number {
  let sum = 0;
  for (let i = 1; i < points.length; ++i) {
    sum += Math.max(
      Math.abs(points[i][0] - points[i - 1][0]),
      Math.abs(points[i][1] - points[i - 1][1])
    );
  }
  return sum;
}
