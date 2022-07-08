import React, { useState } from "react";

function Post({onSaveData}){

    const [form, setForm] = useState({
        name:'',
        email:'',
        phone:'',
        website:''
    })

    const handleChange = (e)=> {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]:value
        })
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        onSaveData(form);
        
        //입력폼 초기화
        setForm({
            name:'',
            email:'',
            phone:'',
            website:''
        })
    };

    return(
        <div>
            <div className="">고객정보 추가하기</div>
            <form className="" onSubmit={handleSubmit}>
                <div className="">
                    <label className="">고객이름</label>
                    <input className="" placeholder="이름을 입력해주세요" type='text' name="name" value={form.name} onChange={handleChange}></input>
                    <label className="">이메일</label>
                    <input className="" placeholder="이메일을 입력해주세요" type='email' name="email" value={form.email} onChange={handleChange}></input>
                </div>
                <div className="">
                    <label className="">전화번호</label>
                    <input className="" placeholder="전화번호를 입력해주세요" type='text' name="phone" value={form.phone} onChange={handleChange}></input>
                    <label className="">홈페이지</label>
                    <input className="" placeholder="홈페이지를 입력해주세요" type='text' name="website" value={form.website} onChange={handleChange}></input>
                </div>
                <div className="">
                    <button className="" type="submit">저장</button>
                </div>
            </form>
        </div>
    );
}

export default Post;