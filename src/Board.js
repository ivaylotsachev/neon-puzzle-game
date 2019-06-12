import React from "react";
import Cell from "./Cell";

import "./Board.css";

class Board extends React.Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartOn: 0.25
  };

  constructor(props) {
    super(props);

    this.state = {
      hasWon: false,
      board: this.createBoard()
    };
  }

  flipCellsAround(coords) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coords.split("-").map(Number);

    function flipCell(y, x) {
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y, x);
    flipCell(y, x - 1);
    flipCell(y, x + 1);
    flipCell(y - 1, x);
    flipCell(y + 1, x);

    let hasWon = board.every(row => row.every(cell => !cell));
    this.setState({ board, hasWon });
  }

  createBoard() {
    let board = [];

    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];

      for (let x = 0; x < this.props.ncols; x++) {
        row.push(Math.random() < this.props.chanceLightStartOn);
      }

      board.push(row);
    }

    return board;
  }

  componentDidMount() {
    console.error("Board", this.props);
  }

  render() {
    if (this.state.hasWon) {
      return (
        <div className="Board-title">
          <div className="flux">YOU</div>
          <div className="neon">WON!</div>
        </div>
      );
    }

    let tableBoard = [];

    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];

      for (let x = 0; x < this.props.ncols; x++) {
        let coord = `${y}-${x}`;

        row.push(
          <Cell
            key={coord}
            isLit={this.state.board[y][x]}
            flipCellsAroundMe={() => this.flipCellsAround(coord)}
          />
        );
      }

      tableBoard.push(<tr key={y}>{row}</tr>);
    }

    return (
      <div>
        <div className="Board-title">
          <div className="flux">Lights</div>
          <div className="neon">Out</div>
        </div>
        <table className="Board">
          <tbody>{tableBoard}</tbody>
        </table>
        <div className="action">
          <button
            className="btn"
            onClick={() =>
              this.setState({
                board: this.createBoard()
              })
            }
          >
            restart
          </button>
          <button
            onClick={() => this.props.toggleRules(true)}
            className="btn rules_btn"
          >
            how to play
          </button>
        </div>
      </div>
    );
  }
}

export default Board;
