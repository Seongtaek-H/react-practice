import React from "react"
import { Table } from "react-bootstrap"
import { connect } from "react-redux"

function Cart(props) {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {props.상품.map((맵으로쓸꺼, 갯수보통i쓰더라) => {
            return (
              <tr key={갯수보통i쓰더라}>
                <td>{맵으로쓸꺼.id}</td>
                <td>{맵으로쓸꺼.name}</td>
                <td>{맵으로쓸꺼.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "수량증가" })
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "수량감소" })
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

function state를props화(파라미터아무거나) {
  return {
    상품: 파라미터아무거나,
  }
}

export default connect(state를props화)(Cart)
// export default Cart
