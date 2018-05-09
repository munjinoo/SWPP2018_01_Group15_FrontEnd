import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const Signup = ({ onSignup }) => {

    let username = '';
    let password = '';
    let email = '';
    let name = '';
    let college = '';
    let major = '';
    let admission_year = '';

    const onClick = () => {
        if (username != undefined && password != undefined && email != undefined && name != undefined && college != undefined && major != undefined && admission_year != undefined) {
            onSignup(username.value, password.value, email.value, name.value, college.value, major.value, admission_year.value);
            username.value = '';
            password.value = '';
            email.value = '';
            name.value = '';
            college.value = '';
            major.value = '';
            admission_year.value = '';
        }
    }

    const loadSelectElement =(options)=>{
		console.log(options)
            var selObj = document.getElementById('select02');

            // clear the target select element apart from the "select your..." option
            selObj.options.length = 1;
            // copy options from array of [value, pair] arrays to select box
            // IE doesn't work if you use the DOM-standard method, however...
            if (typeof(window.clientInformation) != 'undefined') {
                // IE doesn't take the second "before" parameter...
                for (var loop=0; loop<options.length; loop++){
                var option = document.createElement("option");
                option.text=options[loop];
                selObj.add(option,selObj[loop+1]);
                }
            } 
            else {
                for (var loop=0; loop<options.length; loop++){                 		   var option = document.createElement("option");
                option.text=options[loop];
                selObj.add(null);
                }
        }



    }

    const madeSelection =() =>{
		console.log(college.value)
                switch(college.value) {
                    case '인문대학':
                        loadSelectElement([
'인문대학 광역',
'국어국문학과',
'중어중문학과',
'영어영문학과',
'불어불문학과',
'독어독문학과',
'노어노문학과',
'서어서문학과',
'아시아언어문명학부',
'언어학과',
'국사학과',
'동양사학과',
'서양사학과',
'철학과',
'종교학과',
'미학과',
'고고미술사학과'
                        ]);
                        return;

                    case '사회과학대학':
                        loadSelectElement([
'사회과학대학 광역',
'정치외교학부',
'정치외교학부(정치학전공)',
'정치외교학부(외교학전공)',
'경제학부',
'사회학과',
'인류학과',
'심리학과',
'지리학과',
'사회복지학과',
'언론정보학과'                           
                        ]);
                        return;

                    case '자연과학대학':
                        loadSelectElement([
'수리과학부',
'통계학과',
'물리천문학부',
'물리천문학부(물리학전공)',
'물리천문학부(천문학전공)',
'화학부',
'생명과학부',
'지구환경과학부'
                        ]);
                        return;

                    case '간호대학':
                        loadSelectElement([
'간호학과'
                        ]);
                        return;
                       
                    case '경영대학':
                        loadSelectElement([
'경영학과'
                        ]);
                        return;
                        
                    case '공과대학':
                        loadSelectElement([
'건설환경공학부',
'기계항공공학부',
'기계항공공학부(기계공학전공)',
'기계항공공학부(우주항공공학전공)',
'재료공학부',
'전기·정보공학부',
'컴퓨터공학부',
'화학생물공학부',
'건축학과',
'산업공학과',
'에너지자원공학과',
'원자핵공학과',
'조선해양공학과',
                        ]);
                        return;

                    case '농업생명과학대학':
                        loadSelectElement([
'식물생산과학부',
'산림과학부',
'응용생물화학부',
'식품·동물생명공학부',
'바이오시스템·소재학부',
'조경·지역시스템공학부',
'농경제사회학부'
                        ]);
                        return;
                        
                    case '미술대학':
                        loadSelectElement([
'동양화과',
'서양화과',
'조소과',
'디자인학부(공예)',
'디자인학부(디자인)'
                        ]);
                        return;
                    case '사범대학':
                        loadSelectElement([
'교육학과',
'국어교육과',
'영어교육과',
'불어교육과',
'독어교육과',
'사회교육과',
'역사교육과',
'지리교육과',
'윤리교육과',
'수학교육과',
'물리교육과',
'화학교육과',
'생물교육과',
'지구과학교육과',
'체육교육과'
                        ]);
                        return;
                    case '생활과학대학':
                        loadSelectElement([
'소비자아동학부',
'소비자아동학부(소비자학전공)',
'소비자아동학부(아동가족학전공)',
'식품영양학과',
'의류학과'

                        ]);
                        return;
                    case '수의과대학':
                        loadSelectElement([
'수의예과',
'수의학과'
                        ]);
                        return;
                    case '약학대학':
                        loadSelectElement([
'약학과',
'제약학과'
                        ]);
                        return;

                    case '음악대학':
                        loadSelectElement([
'성악과',
'기악과',
'작곡과',
'국악과'
                        ]);
                        return;
                        
                    case '의과대학':
                        loadSelectElement([
'의예과',
'의학과'
                        ]);
                        return;
                        
                    case '자유전공학부':
                        loadSelectElement([
'자유전공학부'
                        ]);
                        return;
                        
                    case '보건대학원':
                        loadSelectElement([
'보건학과',
'보건행정학과'
                        ]);
                        return;
                        
                    case '행정대학원':
                        loadSelectElement([
'행정학과'

                        ]);
                        return;
                        
                    case '환경대학원':
                        loadSelectElement([
'환경계획학과',
'환경조경학과'

                        ]);
                        return;
                        
                    case '행정대학원':
                        loadSelectElement([
'행정학과'

                        ]);
                        return;
                        
                    case '국제대학원':
                        loadSelectElement([
'국제학과'

                        ]);
                        return;
                        
                    case '경영전문대학원':
                        loadSelectElement([
'Global MBA',
'SNU MBA'

                        ]);
                        return;
                        
                    case '치의학대학원':
                        loadSelectElement([
'치의학과'

                        ]);
                        return;
                        
                    case '의학대학원':
                        loadSelectElement([
'의학과'

                        ]);
                        return;
                        
                    case '법학전문대학원':
                        loadSelectElement([
'법학과'

                        ]);
                        return;

                    case '융합과학기술대학원':
                        loadSelectElement([
'융합과학부',
'분자의학 및 바이오제약학과'
                        ]);
                        return;
                        
                    case '공학전문대학원 ':
                        loadSelectElement([
'공학전문대학원'

                        ]);
                        return;
                        
                    case '국제농업기술대학원':
                        loadSelectElement([
'국제농업기술대학원'

                        ]);
                        return;


}	


    }

    return (
        <Wrapper>
            아이디: <input type="text" ref={node => {username = node;}} /><br/>
            비밀번호: <input type="password" ref={node => {password = node;}} /><br/>
            이메일: <input type="email" ref={node => {email = node;}} /><br/>
            이름: <input type="test" ref={node => {name = node;}} /><br/>
                        

        단과대학: <select ref={node => {college = node;}} name="select01" id="select01" onChange={madeSelection}>
            <option value="">--선택--</option>
            <option value="인문대학">인문대학</option>
            <option value="사회과학대학">사회과학대학</option>
            <option value="자연과학대학">자연과학대학</option>
            <option value="간호대학">간호대학</option>
            <option value="경영대학">경영대학</option>
            <option value="공과대학">공과대학</option>
            <option value="농업생명과학대학">농업생명과학대학</option>
            <option value="미술대학">미술대학</option>
            <option value="사범대학">사범대학</option>
            <option value="생활과학대학">생활과학대학</option>
            <option value="수의과대학">수의과대학</option>
            <option value="약학대학">약학대학</option>
            <option value="음악대학">음악대학</option>
            <option value="의과대학">의과대학</option>
            <option value="자유전공학부">자유전공학부</option>
            <option value="보건대학원">보건대학원</option>
            <option value="행정대학원">행정대학원</option>
            <option value="환경대학원">환경대학원</option>
            <option value="국제대학원">국제대학원</option>
            <option value="치의학대학원">치의학대학원</option>
            <option value="경영전문대학원">경영전문대학원</option>
            <option value="의학대학원">의학대학원</option>
            <option value="법학전문대학원">법학전문대학원</option>
            <option value="융합과학기술대학원">융합과학기술대학원</option>
            <option value="국제농업기술대학원">국제농업기술대학원</option>
            <option value="공학전문대학원">공학전문대학원</option>
        </select>

        <div id="select02Container">
            전공: <select name="select02" id="select02">
                <option value="">--선택--</option>
            </select>
        </div>


입학년도: <input type="" ref={node => {admission_year = node;}} /><br/>
            <button onClick={onClick}>회원가입</button>
        </Wrapper>
    )
}

Signup.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default Signup
