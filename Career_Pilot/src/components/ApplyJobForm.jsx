import { Form, Input,Button, notification } from 'antd'
import Modal from 'antd/es/modal/Modal';
import { useRef, useState } from 'react';
import { ApplyJobUrl, CloudinaryUrl } from '../utils/network';
import {axiosrequest} from '../utils/functions'

const ApplyJobForm=({
    isVisible=false,
    onSucessCallback,
    onClose,
    jobDetails,
    username
})=> {

    const [loading, setLoading]=useState(false)
    const [resumeUrl, setResumeUrl]=useState(null)

    const fileSelect=useRef(null)

    const [form] = Form.useForm();

    const onSubmit=async (values)=>{
        console.log(values)
        if(resumeUrl){
            values={...values,resume:resumeUrl,company_name:jobDetails.Company,job_title:jobDetails.JobTitle,userName:username,posted_by:jobDetails.PostedBy}
        }
        setLoading(true)
        const response = await axiosrequest({
            url:ApplyJobUrl,
            method:'post',
            hasAuth:true,
            payload:values,
        })
        setLoading(false)
        if(response){
            notification.success({
                    message:"Operation Success",
                    description:"Job Applied sucessfully"
               })
            onSucessCallback()
            form.resetFields()
            setResumeUrl(null)
        }
        
    }

    const handleFileChange=async(e)=>{
        const formItem = new FormData()
        formItem.append("file",e.target.files[0])
        formItem.append("upload_preset","inventory_app")
        formItem.append("tags", "inventory_app")
        setLoading(true)
        const response = await axiosrequest({
            url:CloudinaryUrl,
            method:'post',
            payload:formItem,
        })
        setLoading(false)
        if(response){
            setResumeUrl(response.data.url)
        }
    }


  return (
    <Modal title="Apply Job" 
    open={isVisible} onCancel={onClose} footer={false} maskClosable={false}>
         <Form layout="vertical" onFinish={onSubmit} form={form}>
                <Form.Item label="Resume">
                    <div 
                        className='imageView'  
                        onClick={()=>!loading && fileSelect.current?.click()}
                        style={{backgroundImage: `url(${resumeUrl ? "https://img.icons8.com/dusk/64/null/task-completed.png" :"https://img.icons8.com/dusk/64/null/upload--v1.png"})`}}    
                    />
                    <input type="file" style={{display:"none"}} ref={fileSelect} onChange={handleFileChange}/>
                </Form.Item>
                <Form.Item label="Username"
                    name="userName"
                >
                    <Input defaultValue={username} disabled={true}/>
                </Form.Item>
                <Form.Item label="Company"
                    name="company_name"
                >
                    <Input defaultValue={jobDetails.Company} disabled={true}/>
                </Form.Item>
                <Form.Item label="Job Title"
                    name="job_title"
                >
                    <Input defaultValue={jobDetails.JobTitle} disabled={true}/>
                </Form.Item>
                <Form.Item label="Posted By"
                    name="posted_by"
                >
                    <Input defaultValue={jobDetails.PostedBy} disabled={true}/>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' block htmlType='submit' loading={loading}>Submit</Button>
                </Form.Item>
            </Form>
      </Modal>
  )
}

export default ApplyJobForm