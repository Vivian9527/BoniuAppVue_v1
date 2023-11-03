<template>
    <!--SearchBar-->
    <div class="searchbarContainer">
        <div class="searchbar">
            <img src="img/search.png" style="width: 1.2rem;">
            <router-link :to="{ name: 'Search2' }"> <input type="text" placeholder="请输入搜索关键词"
                    class="searchbarForAll"></router-link>
        </div>
        <a class="custom-backbtn closeOffcanvasBtn" @click="$router.go(-1)">
            <div>取消</div>
        </a>
    </div>
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
    <!--搜索紀錄-->
    <div class="SearchForAllPagesSearcHistory">
        <div class="SearchForAllPagesSearcHistoryTitle">搜索记录</div>
        <!--搜索記錄列表-->
        <div class="SearchForAllPagesSearcHistorysFa">
            <div class="SearchForAllPagesSearcHistorys">
                <img src="img/clock-gray.png" class="SearchForAllPagesSearcHistoryClockImg">
                <div class="SearchForAllPagesSearcHistoryText"><span>1123</span></div>
                <btn class="SearchForAllPagesSearcHistoryClearBTN">
                    <img src="img/close-icon.png" class="SearchForAllPagesSearcHistoryClearImg">
                </btn>
            </div>
            <div class="SearchForAllPagesSearcHistorys">
                <img src="img/clock-gray.png" class="SearchForAllPagesSearcHistoryClockImg">
                <div class="SearchForAllPagesSearcHistoryText"><span>1123</span></div>
                <btn class="SearchForAllPagesSearcHistoryClearBTN">
                    <img src="img/close-icon.png" class="SearchForAllPagesSearcHistoryClearImg">
                </btn>
            </div>
            <div class="SearchForAllPagesSearcHistorys">
                <img src="img/clock-gray.png" class="SearchForAllPagesSearcHistoryClockImg">
                <div class="SearchForAllPagesSearcHistoryText"><span>1123</span></div>
                <btn class="SearchForAllPagesSearcHistoryClearBTN">
                    <img src="img/close-icon.png" class="SearchForAllPagesSearcHistoryClearImg">
                </btn>
            </div>
            <div class="SearchForAllPagesSearcHistorys">
                <img src="img/clock-gray.png" class="SearchForAllPagesSearcHistoryClockImg">
                <div class="SearchForAllPagesSearcHistoryText"><span>1123</span></div>
                <btn class="SearchForAllPagesSearcHistoryClearBTN">
                    <img src="img/close-icon.png" class="SearchForAllPagesSearcHistoryClearImg">
                </btn>
            </div>
        </div>


        <!--清除搜索紀錄-->
        <btn class="SearchForAllPagesSearcHistoryClearBTN2">
            清除搜索记录
        </btn>
    </div>
</template>
<style scoped>
@import url('../../../public/css/SearchForAllPages.css');
</style>