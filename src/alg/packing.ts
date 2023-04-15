export const SIZE_DELTA = 20;

export const SAMPLE_FILLED_PACKING_AREA: FilledPackingArea = {
  palettes: [{
    boxes: [
      {
        box: {
          dimensions: {
            dx: SIZE_DELTA * 3,
            dy: SIZE_DELTA * 2,
            dz: SIZE_DELTA * 1
          },
          weight: 20,
        },
        position: {x: 0, y: 0, z: 0}
      },
      {
        box: {
          dimensions: {
            dx: SIZE_DELTA * 1,
            dy: SIZE_DELTA * 1,
            dz: SIZE_DELTA * 1
          },
          weight: 10,
        },
        position: {x: 0, y: 0, z: 1}
      },
      {
        box: {
          dimensions: {
            dx: SIZE_DELTA * 2,
            dy: SIZE_DELTA * 3,
            dz: SIZE_DELTA * 1
          },
          weight: 40,
        },
        position: {x: 3, y: 0, z: 1}
      },
    ],
    dimentions: {
      dx: SIZE_DELTA * 8,
      dy: SIZE_DELTA * 10,
      dz: SIZE_DELTA * 4
    }
  }]
}

export function fill(packingArea: PackingArea, boxes: Box[]): FilledPackingArea {
  return {
    palettes: [{
      boxes: boxes.map(box => ({box: box, position: {x: 0, y: 0, z: 0}})),
      dimentions: packingArea.palettes[0][0].dimentions
    }]
  };
}

export interface PackingArea {
  palettes: Palette[][]
}

export function makePackingArea(
  paletteDimention: Dimentions,
  width: number,
  length: number
): PackingArea {
  return {
    palettes: [...Array(length)].map(() => Array(width).map(() => ({dimentions: paletteDimention})))
  };
}

export interface Palette {
  dimentions: Dimentions
}

export interface FilledPackingArea {
  palettes: FilledPalette[]
}

export interface FilledPalette extends Palette {
  boxes: PositionedBox[]
}

export interface PositionedBox {
  box: Box
  position: Position
}

export interface Box {
  dimensions: Dimentions
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
