import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

import './SupportPage.scss';

import { writeSupport, getBalance } from "../api";
import { updateBalance } from "../redux/actions";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { changeHeaderDisplay } from "../headerDisplay";
import { setSupportOrder } from "../redux/actions";

export default function SupportPage() {
  useEffect(() => {
    changeHeaderDisplay(window.location.pathname);
    dispatch(setSupportOrder(0));
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    category: '',
    email: '',
    title: '',
    content: '',
  });
  
  const isValidSupportRequest = (inputs) => {
    const { category, email, title, content } = inputs;
    if ( category && email && title && content ) {
      return true;
    } else {
      return false;
    }
  };

  const onClickSubmitSupport = async function () {
    const { category, email, title, content } = inputs;
    if (isValidSupportRequest(inputs)) {
      setIsLoading(true);
      await writeSupport( email, category, content, title );
      dispatch(setSupportOrder(1));
      const { data: { money } } = await getBalance();
      setTimeout(() => {
        setIsLoading(false); 
        localStorage.setItem("balance", money); 
        dispatch(updateBalance(localStorage.getItem('balance'))); 
        alert('리뷰가 작성되었습니다 \n500 SSF가 부여됐습니다. \n감사합니다. '); 
        navigate('/main');
      },100);
    } else {
      setIsLoading(false);
      alert('필수 내용을 모두 작성해주세요');
    }
  };

  const onChangeInputs = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  
  return (
    <div className="SupportPage">
      <h1 className="header">고객센터</h1>
      <div className="sub-title">
        <span >개발자에게 서비스 피드백을 보내주시면 </span><span className="token">500SSF</span><span>를 드립니다!</span>
      </div>
      <div className="form-item">
        <label htmlFor="category-select" className="form-item-title">카테고리</label><span className="asterisk">*</span><br />
        <select name="category" id="category-select" onChange={(e) => onChangeInputs(e)} defaultValue="">
          <option value="" disabled>카테고리 선택</option>
          <option value="cheering" >응원</option>
          <option value="review" >리뷰</option>
          <option value="suggestion">건의사항</option>
          <option value="question">문의사항</option>
        </select>
      </div>
      
      <div className="form-item">
        <label htmlFor="support-email" className="form-item-title">답변 받을 이메일</label><span className="asterisk">*</span><br />
        <input type="text" name="email" id="support-email" onChange={e => onChangeInputs(e)} placeholder="이메일을 입력해주세요" />
      </div>

      <div className="form-item">
        <label htmlFor="support-title" className="form-item-title">제목</label><span className="asterisk">*</span>
        <input type="text" name="title" id="support-title" placeholder="문의 제목을 입력해주세요" onChange={(e) => onChangeInputs(e)} />
      </div>
  
      <div className="form-item">
        <label className="form-item-title">내용 입력</label><span className="asterisk">*</span>
        <p>아래 내용을 기입해주세요</p>
        <textarea name="content" className="feedback-input" id="" cols="30" rows="10" placeholder="내용을 입력해주세요" onChange={(e) => onChangeInputs(e)} >
        </textarea>
      </div>
      
      <div className="buttons">
        <Link to="/main"><button className="cancel-button">취소</button></Link>
        <button className="submit-button" onClick={onClickSubmitSupport}>제출</button>
      </div>
      { isLoading &&
        <>
          <div className="body-blackout"/>
          <img src="/images/static/pokemonStickerGif/picachuhappy.gif" alt="" className="pokeball-spinning-img"/> 
        </>
      }
    </div>
  );
}
