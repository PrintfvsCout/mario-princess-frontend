import { useState } from "react"
import {
  CardDeck,
  Card,
  Table,
  Form,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap"
import { axiosPost } from "./Hooks/HttpRequests"

const setCharAt = (str, index, chr) => {
  if (index > str.length - 1) return str
  return str.substring(0, index) + chr + str.substring(index + 1)
}

const Game = () => {
  const [gridsize, setGridSize] = useState(3)

  let genGrid = []

  for (let i = 0; i < gridsize; i++) {
    let generateRow = "-"
    for (let j = 1; j < gridsize; j++) {
      generateRow += "-"
    }
    genGrid.push(generateRow)
  }

  let rows = []
  for (let i = 0; i < gridsize; i++) {
    let rowID = `row${i}`
    let cell = []

    for (let columnId = 0; columnId < gridsize; columnId++) {
      let cellID = `${i}-${columnId}`
      cell.push(
        <td style={{ textAlign: "center" }} key={cellID} id={cellID}>
          <select
            onChange={(e) => {
              let cellValue = e.target.value.toLowerCase()
              let char = null

              if (cellValue === "p") {
                char = "p"
              } else if (cellValue === "m") {
                char = "m"
              } else if (cellValue === "x") {
                char = "x"
              } else {
                char = "-"
              }

              if (
                cellValue === "m" ||
                cellValue === "p" ||
                cellValue === "x" ||
                cellValue === "-"
              )
                genGrid[parseInt(cellID[0])] = setCharAt(
                  genGrid[parseInt(cellID[0])],
                  parseInt(cellID[2]),
                  char
                )
            }}
          >
            <option value="-">-</option>
            <option value="m">m</option>
            <option value="p">p</option>
            <option value="x">x</option>
          </select>
        </td>
      )
    }
    rows.push(
      <tr key={i} id={rowID}>
        {cell}
      </tr>
    )
  }

  return (
    <>
      <Form id="form">
        <CardDeck>
          <Card>
            <Card.Body>
              <Table bordered size="sm" responsive>
                <tbody>{rows}</tbody>
              </Table>
            </Card.Body>
            <Card.Footer>
              <Form.Group>
                <Form.Label>
                  Grid size {gridsize}x{gridsize}
                </Form.Label>
                <div style={{ marginTop: "1.5%" }}></div>
                <Form.Control
                  min="3"
                  max="50"
                  type="range"
                  value={gridsize}
                  onChange={(e) => {
                    setGridSize(e.target.value)
                    document.getElementById("form").reset()
                  }}
                />
              </Form.Group>
              <Container>
                <Row>
                  <Col>
                    <Button
                      variant="success"
                      onClick={() => {
                        console.log(genGrid)
                        const body = {
                          n: gridsize.toString(),
                          grid: JSON.stringify(genGrid, null, 2),
                        }
                        axiosPost(
                          "http://localhost:5000/sendinput",
                          body,
                          "Check grid formatting there can be only ONE princess and ONE mario at the same time",
                          "Succes! Path found, it should be in the first row in the results tab"
                        )
                      }}
                    >
                      SUBMIT
                    </Button>
                  </Col>

                  <Col>
                    <Button
                      type="reset"
                      variant="danger"
                      className="float-right"
                      onClick={() => {
                        for (let i = 0; i < gridsize; i++) {
                          let generateRow = "-"
                          for (let j = 1; j < gridsize; j++) {
                            generateRow += "-"
                          }
                          genGrid[i] = generateRow
                        }
                      }}
                    >
                      RESET
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Form>
    </>
  )
}

export default Game
