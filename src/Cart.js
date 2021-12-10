import React from "react"
import { Table } from "react-bootstrap"
import { connect, useDispatch, useSelector } from "react-redux"

function Cart(props) {
  let state = useSelector(state => state)
  //                        ▲ redux 에 있던 모든 state
  console.log(state.reducer)
  let dispatch = useDispatch()

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
          {state.reducer.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch({ type: "수량증가", 데이터: a.id })
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch({ type: "수량감소", 데이터: a.id })
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
      {props.alert열렸나 === true ? (
        <div className="my-alert2">
          <p>지금 구매하시면 신규할인 20%</p>
          <button
            onClick={() => {
              props.dispatch({ type: "alert안보이기" })
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
    </div>
  )
}

// function state를props화(파라미터아무거나) {
//   return {
//     상품: 파라미터아무거나.reducer,
//     alert열렸나: 파라미터아무거나.reducer2,
//   }
// }

// export default connect(state를props화)(Cart)
export default Cart
