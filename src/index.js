const fieldSize = 500

const numberOfCellsInRow = 20

const getGrid = () => {
  const grid = new Array(numberOfCellsInRow)
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(numberOfCellsInRow)
    for (let j = 0; j < grid.length; j++) {
      grid[i][j] = Math.floor(Math.random() * 2)
    }
  }
  return grid
}

const cellStrokeColor = '#aaa'
const cellSize = fieldSize / numberOfCellsInRow

const drawGrid = (ctx, grid) => {
  ctx.strokeStyle = cellStrokeColor
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      const value = grid[i][j]
      if (value) {
        ctx.fillRect(
          i * cellSize,
          j * cellSize,
          cellSize,
          cellSize,
        )
      }
      ctx.strokeRect(
        i * cellSize,
        j * cellSize,
        cellSize,
        cellSize,
      )
    }
  }
}

window.onload = () => {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  const grid = getGrid()
  console.log(grid)
  drawGrid(ctx, grid)
}
