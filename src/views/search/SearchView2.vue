<template>
    <!--SearchBar-->
    <div class="searchbarContainer">
        <div class="searchbar">
            <img src="img/search.png" style="width: 1.2rem;"> 
            <input type="text" placeholder="请输入搜索关键词">
        </div>
        <a class="custom-backbtn closeOffcanvasBtn"  @click="$router.go(-1)">
            <div>取消</div>
        </a>
    </div>
    
     <!--清單tab-->
     <div class="profile-missionContainer">
        <ul class="nav " id="myTabs" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="SearchForAllPagesDetailNewbie-tab" data-toggle="tab" href="#SearchForAllPagesDetailNewbie" role="tab" aria-controls="newbie" aria-selected="true">新闻</a>
            </li>
            <li class="nav-item profile-missionNavTabsContainer" role="presentation">
                <a class="nav-link" id="SearchForAllPagesDetailDaily-tab" data-toggle="tab" href="#SearchForAllPagesDetailDaily" role="tab" aria-controls="daily" aria-selected="false">社区</a>
            </li>
            <li class="nav-item profile-missionNavTabsContainer" role="presentation">
                <a class="nav-link" id="SearchForAllPagesDetailAdvanced-tab" data-toggle="tab" href="#SearchForAllPagesDetailAdvanced" role="tab" aria-controls="advanced" aria-selected="false">用户</a>
            </li>
            <li class="nav-item profile-missionNavTabsContainer" role="presentation">
                <a class="nav-link" id="SearchForAllPagesDetailZp-tab" data-toggle="tab" href="#SearchForAllPagesDetailZp" role="tab" aria-controls="zp" aria-selected="false">招聘</a>
            </li>
            <li class="nav-item profile-missionNavTabsContainer" role="presentation">
                <a class="nav-link" id="SearchForAllPagesDetailQy-tab" data-toggle="tab" href="#SearchForAllPagesDetailQy" role="tab" aria-controls="qy" aria-selected="false">企业</a>
            </li>
        </ul>

        <div class="tab-content" id="myTabsContent">
            <!--Tab1-新闻-->
            <div class="tab-pane fade show active profile-missionTabContainer" id="SearchForAllPagesDetailNewbie" role="tabpanel" aria-labelledby="SearchForAllPagesDetailNewbie-tab">
                <!--AD-->
                <div class="SearchForAllPagesAD" id="SearchForAllPagesAD">
                    <img src="img/img1.jpg">
                    <button class="SearchForAllPagesADLink" id="SearchForAllPagesADPopupButton">
                        广告
                    </button>
                    
                    <div class="SearchForAllPagesADPopup" id="SearchForAllPagesADPopup">
                        无效的链接地址
                    </div>
                </div>
                <div id="SearchForAllPagesDetailNewbieCon">
                    <div class="SearchForAllPagesDetailBox">
                        <div class="SearchForAllPagesDetailBoxTitleContainer">
                            <div class="SearchForAllPagesDetailBoxTitle">
                                <div class="ellipsis-content">
                                    亚洲行业领军企业Light&Wonder望成为全球第一博彩
                                </div>
                            </div>
                            <div class="SearchForAllPagesDetailBoxText">
                                产业新闻
                            </div>
                        </div>
                        <img src="img/2.jpg">
                    </div>
                    <div class="SearchForAllPagesDetailBox">
                        <div class="SearchForAllPagesDetailBoxTitleContainer">
                            <div class="SearchForAllPagesDetailBoxTitle">
                                <div class="ellipsis-content">
                                    亚洲行业领军企业Light&Wonder望成为全球第一博彩
                                </div>
                            </div>
                            <div class="SearchForAllPagesDetailBoxText">
                                产业新闻
                            </div>
                        </div>
                        <img src="img/3.jpg">
                    </div>
                </div>
               
            </div>

            <!--Tab2-社区-->
            <div class="tab-pane fade" id="SearchForAllPagesDetailDaily" role="tabpanel" aria-labelledby="SearchForAllPagesDetailDaily-tab">
               <!--AD-->
               <div class="SearchForAllPagesAD" id="SearchForAllPagesAD">
                    <img src="img/img1.jpg">
                    <button class="SearchForAllPagesADLink" id="SearchForAllPagesADPopupButton">
                        广告
                    </button>
                    
                    <div class="SearchForAllPagesADPopup" id="SearchForAllPagesADPopup">
                        无效的链接地址
                    </div>
                </div>

               <div id="SearchForAllPagesDetailDailyCon">
                    <div class="SearchForAllPagesDetailBox">
                        <div class="SearchForAllPagesDetailBoxTitleContainer">
                            <div class="SearchForAllPagesDetailBoxTitle">
                                <div class="ellipsis-content">
                                    亚洲行业领军企业Light&Wonder望成为全球第一博彩
                                </div>
                            </div>
                            <div class="SearchForAllPagesDetailBoxText">
                                产业新闻
                            </div>
                        </div>
                        <img src="img/2.jpg">
                    </div>
                    <div class="SearchForAllPagesDetailBox">
                        <div class="SearchForAllPagesDetailBoxTitleContainer">
                            <div class="SearchForAllPagesDetailBoxTitle">
                                <div class="ellipsis-content">
                                    亚洲行业领军企业Light&Wonder望成为全球第一博彩
                                </div>
                            </div>
                            <div class="SearchForAllPagesDetailBoxText">
                                产业新闻
                            </div>
                        </div>
                        <img src="img/3.jpg">
                    </div>
                </div>
            </div>

            <!--Tab3-用户-->
            <div class="tab-pane fade" id="SearchForAllPagesDetailAdvanced" role="tabpanel" aria-labelledby="SearchForAllPagesDetailAdvanced-tab">
                <!--AD-->
                <div class="SearchForAllPagesAD" id="SearchForAllPagesAD">
                    <img src="img/img1.jpg">
                    <button class="SearchForAllPagesADLink" id="SearchForAllPagesADPopupButton">
                        广告
                    </button>
                    
                    <div class="SearchForAllPagesADPopup" id="SearchForAllPagesADPopup">
                        无效的链接地址
                    </div>
                </div>
                <div id="SearchForAllPagesDetailAdvanceCon">
                    <div class="SearchForAllPagesDetailMember">
                        <img src="img/profilePic.jpg">
                        <div class="SearchForAllPagesDetailMemberName">ChloeCC</div>
                    </div>
                    <div class="SearchForAllPagesDetailMember">
                        <img src="img/profilePic2.jpg">
                        <div class="SearchForAllPagesDetailMemberName">123CC</div>
                    </div>
                    <div class="SearchForAllPagesDetailMember">
                        <img src="img/profilePic3.jpg">
                        <div class="SearchForAllPagesDetailMemberName">456CC</div>
                    </div>
                    <div class="SearchForAllPagesDetailMember">
                        <img src="img/profilePic4.jpg">
                        <div class="SearchForAllPagesDetailMemberName">789CC</div>
                    </div>
                </div>
               
            </div>

            
            <!--Tab4-招聘-->
            <div class="tab-pane fade" id="SearchForAllPagesDetailZp" role="tabpanel" aria-labelledby="SearchForAllPagesDetailZp-tab">
                <!--AD-->
                <div class="SearchForAllPagesAD" id="SearchForAllPagesAD">
                    <img src="img/img1.jpg">
                    <button class="SearchForAllPagesADLink" id="SearchForAllPagesADPopupButton">
                        广告
                    </button>
                    
                    <div class="SearchForAllPagesADPopup" id="SearchForAllPagesADPopup">
                        无效的链接地址
                    </div>
                </div>
                <div id="SearchForAllPagesDetailZpCon">
                    <div class="SearchForAllPagesDetailJobCard">
                        <div class="SearchForAllPagesDetailHeader">
                            <div class="SearchForAllPagesDetailJobCardTitle">
                                <div class="SearchForAllPagesDetailJobCardTitleIcon">急</div>
                                <div>SEO/运维/职能/推广/招商</div>
                            </div>
                            <div class="SearchForAllPagesDetailSalary"><span class="SearchForAllPagesDetailBlueText">20k-30k</span></div>
                        </div>
                        <div class="SearchForAllPagesDetailRequirements">
                            <div class="SearchForAllPagesDetailRequirement">不限</div>
                            <div class="SearchForAllPagesDetailRequirement">不限</div>
                            <div class="SearchForAllPagesDetailRequirement">菲律宾·马尼拉</div>
                        </div>
                        <div class="SearchForAllPagesDetailCompany">
                            <div class="SearchForAllPagesDetailCompanyInfo">
                                <img src="img/comp1.jpeg" alt="公司图片">
                                <div class="SearchForAllPagesDetailCompanyName">TIANXING集团<span>·20-100人</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="SearchForAllPagesDetailJobCard">
                        <div class="SearchForAllPagesDetailHeader">
                            <div class="SearchForAllPagesDetailJobCardTitle">
                                <div class="SearchForAllPagesDetailJobCardTitleIcon">急</div>
                                <div>SEO/运维/职能/推广/招商</div>
                            </div>
                            <div class="SearchForAllPagesDetailSalary"><span class="SearchForAllPagesDetailBlueText">20k-30k</span></div>
                        </div>
                        <div class="SearchForAllPagesDetailRequirements">
                            <div class="SearchForAllPagesDetailRequirement">不限</div>
                            <div class="SearchForAllPagesDetailRequirement">不限</div>
                            <div class="SearchForAllPagesDetailRequirement">菲律宾·马尼拉</div>
                        </div>
                        <div class="SearchForAllPagesDetailCompany">
                            <div class="SearchForAllPagesDetailCompanyInfo">
                                <img src="img/comp1.jpeg" alt="公司图片">
                                <div class="SearchForAllPagesDetailCompanyName">TIANXING集团<span>·20-100人</span></div>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>

            <!--Tab5-企业-->
            <div class="tab-pane fade" id="SearchForAllPagesDetailQy" role="tabpanel" aria-labelledby="SearchForAllPagesDetailQy-tab">
                <!--AD-->
                <div class="SearchForAllPagesAD" id="SearchForAllPagesAD">
                    <img src="img/img1.jpg">
                    <button class="SearchForAllPagesADLink" id="SearchForAllPagesADPopupButton">
                        广告
                    </button>
                    
                    <div class="SearchForAllPagesADPopup" id="SearchForAllPagesADPopup">
                        无效的链接地址
                    </div>
                </div>
                <div id="SearchForAllPagesDetailQyCon">
                    <div class="SearchForAllPagesDetailCompanyContainer">
                        <div class="SearchForAllPagesDetailCompanyHeader">
                            <div class="SearchForAllPagesDetailCompanyTitle">
                                <div class="SearchForAllPagesDetailCompanyImgContainer">
                                    <img src="img/comp1.jpeg" alt="Your Image" >
                                </div>
                                <div class="SearchForAllPagesDetailCompanyImgIcon">
                                    V
                                </div>
                            </div>
                            <div class="SearchForAllPagesDetailCompanyName2">
                                <div style="margin-bottom: 0.3rem;">环宇国际</div>
                            </div>
                        </div>
                        <div class="SearchForAllPagesDetailCompanyLocation">
                            <div>菲律宾</div>
                            <div>｜</div>
                            <div>1000-3000人</div>
                        </div>
                        <div class="SearchForAllPagesDetailCompanyJob">
                            热招职位 ：其他岗位等1个职位
                        </div>
                    </div>
                    <div class="SearchForAllPagesDetailCompanyContainer">
                        <div class="SearchForAllPagesDetailCompanyHeader">
                            <div class="SearchForAllPagesDetailCompanyTitle">
                                <div class="SearchForAllPagesDetailCompanyImgContainer">
                                    <img src="img/comp1.jpeg" alt="Your Image" >
                                </div>
                                <div class="SearchForAllPagesDetailCompanyImgIcon">
                                    V
                                </div>
                            </div>
                            <div class="SearchForAllPagesDetailCompanyName2">
                                <div style="margin-bottom: 0.3rem;">环宇国际</div>
                            </div>
                        </div>
                        <div class="SearchForAllPagesDetailCompanyLocation">
                            <div>菲律宾</div>
                            <div>｜</div>
                            <div>1000-3000人</div>
                        </div>
                        <div class="SearchForAllPagesDetailCompanyJob">
                            热招职位 ：其他岗位等1个职位
                        </div>
                    </div>
                    <div class="SearchForAllPagesDetailCompanyContainer">
                        <div class="SearchForAllPagesDetailCompanyHeader">
                            <div class="SearchForAllPagesDetailCompanyTitle">
                                <div class="SearchForAllPagesDetailCompanyImgContainer">
                                    <img src="img/comp1.jpeg" alt="Your Image" >
                                </div>
                                <div class="SearchForAllPagesDetailCompanyImgIcon">
                                    V
                                </div>
                            </div>
                            <div class="SearchForAllPagesDetailCompanyName2">
                                <div style="margin-bottom: 0.3rem;">环宇国际</div>
                            </div>
                        </div>
                        <div class="SearchForAllPagesDetailCompanyLocation">
                            <div>菲律宾</div>
                            <div>｜</div>
                            <div>1000-3000人</div>
                        </div>
                        <div class="SearchForAllPagesDetailCompanyJob">
                            热招职位 ：其他岗位等1个职位
                        </div>
                    </div>
                </div>
                
            </div>

            <!--Tab6-若無內容再打開-->
            <div class="tab-pane fade" id="none" role="tabpanel" aria-labelledby="none-tab">
                <div class="SearchForAllPagesDetailNone">
                    <img src="img/ic_list_empty.png">
                    <div>暂无更多内容</div>
                </div>
            </div>
            
        </div>
    </div>

</template>
<style scoped>

@import url('../../../public/css/SearchForAllPagesDetail.css');
</style>