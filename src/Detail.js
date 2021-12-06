import react, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

let 박스 = styled.div`
  padding: 20px;
`;
let 제목 = styled.div`
  font-size: 25px;
  color: ${props => props.색상};
`;

function Detail(props) {
  useEffect(() => {
    let 타이머 = setTimeout(() => {
      alert변경(false);
    }, 2000);
    return () => {
      clearTimeout(타이머);
    };
  }, []);

  let [alert, alert변경] = useState(true);
  let [inputData, inputData변경] = useState("");
  let { id } = useParams();
  let history = useHistory();
  let 찾은상품 = props.shoes.find(function (상품) {
    return 상품.id == id;
  });

  return (
    <div className="container">
      <박스>
        <제목 색상={"red"}>Detail</제목>
      </박스>
      {alert === true ? (
        <div className="my-arlet2">
          {" "}
          <p> 재고가 얼마 남지 않았습니다.</p>
        </div>
      ) : null}
      {inputData}
      <input
        onChange={e => {
          inputData변경(e.target.value);
        }}
      />

      <div className="row">
        <div className="col-md-6">
          <img
            src={"https://codingapple1.github.io/shop/shoes1.jpg"}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>

          <Info 재고={props.재고}></Info>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.재고변경([9, 11, 12]);
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

function Info(props) {
  return <p>재고:{props.재고}</p>;
}

export default Detail;
