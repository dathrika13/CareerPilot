import { useContext, useEffect } from "react"
import { authhandler, getAllAvailableJobs, getAppliedJobs, getPostedJobsByRecruiter, getappliedApplicants } from "./functions"
import { store } from "./store"
import ActionTypes from "./type"

export const useAuth=async ({
    errorCallBack,
    successCallBack
})=>{

    const {dispatch}=useContext(store)

    const checkUser=async()=>{
            const user = await authhandler()
            if(!user){
                if(errorCallBack){
                    errorCallBack()
                }
                return
            }
            if(successCallBack){
                dispatch({type: ActionTypes.UPDATE_USER_INFO, payload:user})
                successCallBack()
            }
            return
        }

    useEffect(()=>{
        checkUser()
    },[])
}

export const useGetAppliedApplicants=(setAppledApplicants,setFetching,username)=>{

    useEffect(()=>{
        getappliedApplicants(setAppledApplicants,setFetching,username)
    },[])
}


export const useGetAllAvailableJobs=(setAllAppliedJobs,setFetching)=>{

    useEffect(()=>{
        getAllAvailableJobs(setAllAppliedJobs,setFetching)
    },[])
}


export const useGetPostedJobsByRecruiter=(setInventories,setFetching,username)=>{

    useEffect(()=>{
        getPostedJobsByRecruiter(setInventories,setFetching,username)
    },[])
}


export const useGetAppliedJobs=(setAppliedJobs,setFetching,username)=>{

    useEffect(()=>{
        getAppliedJobs(setAppliedJobs,setFetching,username)
    },[])
}

