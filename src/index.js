import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { combineReducers, createStore } from "redux"
import { computeHeadingLevel } from "@testing-library/dom"

let alert초기값 = true
function reducer2(state = alert초기값, 액션) {
  if (액션.type === "alert안보이기") {
    state = false
    return state
  } else {
    return state
  }
}

let 초기값 = [
  { id: 0, name: "멋진신발", quan: 2 },
  { id: 1, name: "멋진신발2", quan: 3 },
]
function reducer(state = 초기값, 액션) {
  if (액션.type === "항목추가") {
    // state안에 id : 액션.데이터인게 있나?
    // findIndex : array안에서 원하는 데이터 찾아주는 함수. 몇번째인지
    // state.findIndex((a)=>{return a === ??}) : 조건식이 맞으면 몇번째 있는지 뱉음
    //                                 ▲ array안에 있던 a(어레이안의 하나하나의 데이터)라는 데이터가 ?? 와 일치하는지?
    let found = state.findIndex(a => {
      return a.id === 액션.데이터.id
    })
    if (found >= 0) {
      let copy = [...state]
      copy[found].quan++
      return copy
    } else {
      let copy = [...state]
      copy.push(액션.데이터)
      return copy
    }
  }
  // 액션.type : 데이터 수정되는 조건
  // 이름은 아무거나 지어도 됨. 그냥 '수량증가'라는 데이터수정방법을 정의한거임
  if (액션.type === "수량증가") {
    let copy = [...state]
    copy[액션.데이터].quan++
    return copy
  } else if (액션.type === "수량감소") {
    let copy = [...state]
    copy[액션.데이터].quan--
    return copy
  } else {
    return state
  }
}
let store = createStore(combineReducers({ reducer, reducer2 }))

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
