import {Button, Form, Input, Select} from 'antd'
import { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import { Option } from 'antd/es/mentions';
import LoginImage from '../assets/CarrerPortal_Login_illustration.jpg'

const groups=[
    {
        id:'Student',
        name:'Student'
    },
    {
        id:'Recruiter',
        name:'Recruiter'
    }
]

const AuthComponent=({
    title="Sign In",
    isPassword=true,
    buttonText="Login",
    linkText="New User?",
    linkPath="/signUp",
    onSubmit,
    loading=false,
    isUpdatePassword=false,
    role=false,
    email=false,
    firstname=false,
    lastname=false,
    phonenumber=false
})=>{


    const location=useLocation()
    const [activePath, setActivePath]= useState(location.pathname)

    console.log(activePath)

    useEffect(()=>{
        setActivePath(location.pathname)
    },[location.pathname])

    const loginclass= activePath==="/login"?"": "signup"


    return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
        <img src={LoginImage} alt="Online Job Interview Illustration" style={{ maxWidth: '100vw', maxHeight: '90vh' }} />
        <a style={{textDecoration:'None', fontSize:'10px'}} href="https://www.freepik.com/free-vector/man-having-online-job-interview_9430578.htm#query=job%20portal&position=1&from_view=keyword&track=ais">Image by pikisuperstar</a>
      </div>
    <div className={`login ${loginclass}`}>
        <div className="inner">
            <div className="header">
                <h3>{title}</h3>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700', fontSize: '1.5rem', color: '#621273' }}>CareerPilot</h2>
            </div>
            <Form layout="vertical" onFinish={onSubmit}>
                <Form.Item label="UserName"
                    name="userName"
                    rules={[{ required: true, message: 'Please input Username!' }]}>
                    <Input placeholder='input your Username' type='text'/>
                </Form.Item>
                {
                    email && <Form.Item label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}>
                    <Input placeholder='input Email' type='email'/>
                </Form.Item>
                }
                { role && <Form.Item label="Role"
                    name="role"
                    rules={[{ required: true, message: 'Please input your role!' }]}>
                    <Select placeholder="input Role">
                        {
                            groups.map((item, index)=><Option value={item.id} key={index} >{item.name}</Option>)
                        }
                    </Select>
                </Form.Item>
                }
                {firstname && <Form.Item label="First Name"
                    name="first_name"
                    rules={[{ required: true, message: 'Please input your first name!' }]}>
                    <Input placeholder='input your first name' type='text'/>
                </Form.Item>}
                { lastname && <Form.Item label="Last Name"
                    name="last_name"
                    rules={[{ required: true, message: 'Please input your Last name!' }]}>
                    <Input placeholder='input your Last name' type='text'/>
                </Form.Item>}
                {phonenumber && <Form.Item label="Phone Number"
                    name="phone_number"
                    rules={[{ required: true, message: 'Please input your Phone Number!' }]}>
                    <Input min={111111111} max={9999999999} placeholder='input your phone number' type='number'/>
                </Form.Item>}
                {isPassword && <Form.Item label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password placeholder='input Password'/>
                </Form.Item>}
                {isUpdatePassword && <Form.Item label="Confirm Password"
                name="cpassword"
                rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password placeholder='Confirm Password'/>
                </Form.Item>}
                <Form.Item>
                    <Button type='primary' block htmlType='submit' loading={loading}>{buttonText}</Button>
                </Form.Item>
                <Link to={linkPath}>{linkText}</Link>
            </Form>

        </div>
    </div>
    </div>
    )
}

export default AuthComponent