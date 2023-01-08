import { useState } from 'react';
import './App.css';

function App() {
  let [post, setPost] = useState([
    { title: '남자코트 추천', cnt: 0 },
    { title: '강남 우동 맛집', cnt: 0 },
    { title: '파이썬 독학', cnt: 0 },
  ]);

  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState('');
  let [title, setTitle] = useState('');
  return (
    <div className="App">
      <div className="black-nav">
        <div>ReactBlog</div>
      </div>
      <div>
        {post.map((obj, i) => {
          return (
            <div className="list" key={i}>
              <h4
                onClick={() => {
                  setModal(true);
                  setModalTitle(obj.title);
                }}
              >
                {obj.title}
                <span
                  onClick={() => {
                    let copy = [...post];
                    copy[i].cnt++;
                    setPost(copy);
                  }}
                >
                  👍
                </span>{' '}
                {obj.cnt}{' '}
              </h4>
              <p>2월 17일 발행</p>
              <button
                onClick={() => {
                  let copy = [...post];
                  copy.splice(i, 1);
                  setPost(copy);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}

        {/* <button
          onClick={() => {
            setModal(!modal);
          }}
        >
          모달 버튼
        </button> */}
        <input
          onChange={(e) => {
            console.log(e.target.value);
            setTitle(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let copy = [...post];
            copy.unshift({ title: title, cnt: 0 });
            setPost(copy);
          }}
        >
          글 발행하기
        </button>
        <button
          onClick={() => {
            let copy = [...post];
            copy.sort(function (a, b) {
              if (a.title > b.title) return 1;
              if (a.title < b.title) return -1;
              return 0;
            });
            setPost(copy);
          }}
        >
          ㄱㄴㄷ 정렬 버튼
        </button>
      </div>

      {modal === true ? <Modal post={modalTitle} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.post}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
