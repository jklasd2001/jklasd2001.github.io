const generateRandomInt = (min = 0, max = 0) => {
  if (min > max) {
    return max
  }
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const generateRandomFloat = (min = 0.0, max = 1.0, fixed = 1) => {
  if (min > max) {
    return max
  }
  return Number.parseFloat((Math.random() * (max - min) + min).toFixed(fixed))
}

interface RandomNumberOptionProps {
  fixed?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
}
/**
 *
 * @param min 최소값 (이상)
 * @param max 최대값 (이하)
 * @param option fixed : 생성할 소수점 자리수
 * @returns 랜덤수
 */
export const generateRandomNumber = (
  min: number,
  max: number,
  option?: RandomNumberOptionProps,
): number => {
  if (min > max) {
    return max
  }
  if (option) {
    const { fixed } = option
    if (fixed) {
      return generateRandomFloat(min, max, fixed)
    }
  }
  return generateRandomInt(min, max)
}
