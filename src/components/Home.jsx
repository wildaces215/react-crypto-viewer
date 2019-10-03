import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { createStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

import "./stylec.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptos: []
    };
  }

  componentDidMount() {
    fetch("https://api.coincap.io/v2/assets?limit=5")
      .then(results => results.json())
      .then(data => {
        this.setState({ cryptos: data.data });
        console.log(this.state.cryptos);
      });
    console.log(this.state.cryptos);
    document.title = "Crypto Viewer";
  }

  render() {
    return (
      <div>
        <title>Crypto Viewer</title>
        <h1 style={{ color: "white" }}>
          Current Major Crytocurrencies and Prices
        </h1>
        <Container>
          <Paper>
            <Table style={{ backgroundColor: "#dfdfbf" }}>
              <TableHead>
                <TableCell align="center">Symbol</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Price(USD)</TableCell>
              </TableHead>
              <TableBody style={{ color: "white" }}>
                {this.state.cryptos.map(crypto => (
                  <TableRow key={crypto.name}>
                    <TableCell style={{ color: "gray" }} align="center">
                      {crypto.symbol}
                    </TableCell>
                    <TableCell style={{ color: "gray" }} align="center">
                      {crypto.name}
                    </TableCell>
                    <TableCell style={{ color: "gray" }} align="center">
                      {crypto.priceUsd}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Container>
      </div>
    );
  }
}
export default Home;
