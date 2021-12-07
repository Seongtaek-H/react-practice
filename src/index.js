import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"

let 초기값 = [
  { id: 0, name: "멋진신발", quan: 2 },
  { id: 1, name: "멋진신발2", quan: 3 },
]
function reducer(state = 초기값, 액션) {
  // 액션.type : 데이터 수정되는 조건
  // 이름은 아무거나 지어도 됨. 그냥 '수량증가'라는 데이터수정방법을 정의한거임
  if (액션.type === "수량증가") {
    let copy = [...state]
    copy[0].quan++
    return copy
  } else if (액션.type === "수량감소") {
    let copy = [...state]
    copy[0].quan--
    return copy
  } else {
    return state
  }
}
let store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
