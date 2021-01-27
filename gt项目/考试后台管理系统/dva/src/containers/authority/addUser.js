import React, { Component } from 'react';
import {message} from "antd";
import {_addUser} from '../../api/home'
import Adduser from '@/components/user/adduser.js'
import Addauthority from "@/components/user/addauthority.js"
import Addapi from "@/components/user/addapi.js"
import AddView from "@/components/user/addView.js"
import AddApiAuthority from "@/components/user/addApiauthority"
import AddViewAuthority from "@/components/user/addviewAuth"
class addUser extends Component {
    state = {
        gutterKey: 1,
        vgutterKey: 1,
        colCountKey: 2,
      };
      onFinish = async (values) => {
        console.log("Success:", values);
        let result = await _addUser(values)
        if(result.data.code){
            message.info('添加成功');
        }else{
            message.info(result.data.msg);
        }
      };
      changeName = (e) => {
        console.log(e.target.value);
      };
      onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
      handleCancel = () => {
       console.log("handleCancel")
      };
    render() {
        return (
            <div className= "addUser">
                <ul className = "addUserlyout" >
                    <Adduser></Adduser>
                    <Addauthority></Addauthority>
                    <Addapi></Addapi>
                    <AddView></AddView>
                    <AddApiAuthority></AddApiAuthority>
                    <AddViewAuthority></AddViewAuthority>
                </ul>
            </div>
        );
    }
}

export default addUser;