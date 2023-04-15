export const STANDARD_DIMENTIONS: Dimentions = {dx: 1, dy: 2, dz: 3}

export function fill(packingArea: PackingArea, boxes: Box[]): FilledPackingArea {
  return {
    palletes: [{
      boxes: boxes.map(box => ({box: box, position: {x: 0, y: 0, z: 0}})),
      dimentions: packingArea.palletes[0][0].dimentions
    }]
  };
}

export interface PackingArea {
  palletes: Pallete[][]
}

export function makePackingArea(
  palleteDimention: Dimentions,
  width: number,
  length: number
): PackingArea {
  return {
    palletes: [...Array(length)].map(() => Array(width).map(() => ({dimentions: palleteDimention})))
  };
}

export interface Pallete {
  dimentions: Dimentions
}

export interface FilledPackingArea {
  palletes: FilledPallete[]
}

export interface FilledPallete extends Pallete {
  boxes: PositionedBox[]
}

export interface PositionedBox {
  box: Box
  position: Position
}

export interface Box {
  dimentions: Dimentions
  weight: number
}

export interface Position {
  x: number
  y: number
  z: number
}

export interface Dimentions {
  dx: number
  dy: number
  dz: number
}
