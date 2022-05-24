import React from "react";

export function Login() {
     return(
        <div align = "middle">
            <h2>patternBot 로그인</h2>
            <div>
                <label  htmlFor='input_id'>이메일 : </label>
                <input placeholder="이메일" type='text' name='input_id'   />
            </div>
            <div>
                <label htmlFor='input_pw'>비밀번호 : </label>
                <input placeholder="비밀번호" type='password' name='input_pw'  />
            </div>

            <div>
                <button type='button'>Google 계정으로 계속하기</button>
            </div>

            <div>
                <h5>계속 진행하면 patternBot의 서비스 약관 및 개인정보 보호정책에 동의한 것으로 간주됩니다.</h5>
            </div>

        </div>
    )
}