import { Table, Spinner } from "react-bootstrap"
import { useAxiosGet } from "../Hooks/HttpRequests"

const GameResults = () => {
  const url = "http://localhost:5000/getresults"

  let content = null

  let results = useAxiosGet(url)

  if (results.data) {
    content = results.data
      .slice(0)
      .reverse()
      .map((res, index) => (
        <tr key={index}>
          <td>{res.id}</td>
          <td>{res.path}</td>
          <td>{res.req_date}</td>
          <td>{res.grid}</td>
        </tr>
      ))
  } else {
    content = (
      <tr>
        <td rowSpan="2">
          Something went wrong or the server is offline please refresh
        </td>
      </tr>
    )
  }

  if (results.loading) {
    content = (
      <tr>
        <td
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
            width: "1000px",
          }}
        >
          <Spinner animation="grow" variant="primary" size="large" />
        </td>
      </tr>
    )
  }

  if (results.error) {
    content = (
      <tr>
        <td>Something went wrong or the server is offline please refresh</td>
      </tr>
    )
  }

  return (
    <>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Path</th>
            <th>Request date</th>
            <th>Grid</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </Table>
    </>
  )
}

export default GameResults
