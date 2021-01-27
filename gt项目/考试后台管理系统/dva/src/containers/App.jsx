import React, { Component } from "react";
import { connect } from "dva";
import Layout from "@/components/layout";
import Slide from "@/components/slide";
import RouterView from "@/router";
import { _getinfoView} from "@/api/home.js"
import { _getInfo} from "@/api/home.js"

@connect(store => {
  return store.home;
})
class Home extends Component {
   async componentDidMount(){
    await this.props.dispatch({type:'home/efcgetInfo'})
    let result = await _getInfo()
    //获取到用户的 user_id
    let info_user_id = result.data.data.user_id
    localStorage.setItem('info', JSON.stringify(result.data.data))
    this.getresultinfo(info_user_id)
  }
  getresultinfo = async(info_user_id)=>{
    await this.props.dispatch({type:'home/efcgetInfoData',user_id :info_user_id})
    let resultinfo = await _getinfoView(info_user_id)
    //获取到视图信息
    let data = resultinfo.data.data
    //本地储存data
    localStorage.setItem("infoData" , JSON.stringify(data))

  }
  render() {
    const { routes, history } = this.props;
    return (
      <Layout>
        <Slide>
          <RouterView routes={routes} history={history} ></RouterView>
        </Slide>
      </Layout>
    );
  }
}

export default connect(store=>store.Home)(Home);
