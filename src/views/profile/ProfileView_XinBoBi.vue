<template>
     <!--header-->
     <div class="header">
        <router-link :to="{ name: 'profile' }"> <button type="button" class=" text-reset custom-backbtn">
                <img src="img/back icon.png">
            </button></router-link>
        <div class="header-link">新博币</div>
        <btn class="btn btn-list custom-sharebtn profile-myhireBTNs" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas-WithdrawHistory" aria-controls="offcanvasBottom">
            提现记录
        </btn>
    </div>
    <!--新博幣餘額盒子-->
    <div class="MoneyBox">
        <div class="MoneyBoxLeft">
            <div class="MoneyBoxLeftTitle">新博币余额</div>
            <div class="MoneyBoxLeft-balance">
                <span class="BalanceCount">{{getExtcreditsData2}}</span>
                <!-- BananaFish不知道轉換比 -->
                <div class="BalanceBox">约<span>8.295</span>元</div>
            </div>
            <btn class="btn btn-list custom-sharebtn profile-myhireBTNs" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas-WithdrawRules" aria-controls="offcanvasBottom">
                <div class="MoneyBoxLeft-rules">
                    <img src="img/Question-white.png">
                    <div class="MoneyBoxLeft-rulesText">等级越高，提现比例越高</div>
                </div>
            </btn>
        </div>
        <div class="MoneyBoxRight">
            <!-- BananaFish不知道等級 -->
            <div class="MoneyBoxRightText">LV.<span>6</span></div>
        </div>
    </div>
    <div class="XBBBodyContainer">
        <div class="XBBbolderText">
            账户类型
        </div>
        <div id="upperradio">
            <label for="Card"><input type="radio" name="upperRadioGroup" id="Card" value="银行卡" checked="checked"><span
                    class="round button">银行卡</span></label>
        </div>
        <div class="XBBbolderText">
            新博币提现
        </div>
        <div class="XBBCoin">
            单位为新博币
        </div>
        <div id="lowerradio">
            <label for="2000"><input type="radio" name="lowerRadioGroup" id="2000" value="2000" checked="checked"><span
                    class="round button">2000</span></label>
            <label for="3000"><input type="radio" name="lowerRadioGroup" id="3000" value="3000"><span
                    class="round button">3000</span></label>
            <label for="5000"><input type="radio" name="lowerRadioGroup" id="5000" value="5000"><span
                    class="round button">5000</span></label>
            <label for="8000"><input type="radio" name="lowerRadioGroup" id="8000" value="8000"><span
                    class="round button">8000</span></label>
            <label for="10000"><input type="radio" name="lowerRadioGroup" id="10000" value="10000"><span
                    class="round button">10000</span></label>
        </div>
        <div class="XBBbolderText2">
            新博币提现规则
        </div>
        <div class="XBBrulesDetail">
            １、每月10号之前可申请提现1次，审核后5个工作日到账，特殊情况会延迟。
        </div>
        <div class="XBBrulesDetail">
            ２、提现方式仅支持USDT钱包，汇率按实时比例，矿工手续费由用户承担。
        </div>
        <div class="XBBrulesDetail">
            ３、提现申请最低2000新博币，最高不超过10000新博币，提现必须为整数。
        </div>
        <div class="XBBrulesDetail">
            ４、对于恶意卡漏洞获取博币的用户，一经发现全部清空，并永久封禁账号。
        </div>
        <button id="withdrawButton" class="XBBWithdrawBTN">
            提现
        </button>

        <!--提現彈窗-->
        <div class="popup" id="popup-success">
            提现成功！
        </div>
        <div class="popup" id="popup">
            请选择提现金额
        </div>
        <div class="popup" id="popup">
            提现金额大于当前金额
        </div>

    </div>

    <!--提現規則Offcanvas-->
    <div class="offcanvas offcanvas-fullscreen" tabindex="-1" id="offcanvas-WithdrawRules"
        aria-labelledby="offcanvas-WithdrawHistory-label">
        <div class="offcanvas-header profile-TGGroupHeader">
            <button type="button" class=" text-reset custom-backbtn" data-bs-dismiss="offcanvas" aria-label="Close">
                <img src="img/back icon.png">
            </button>
            <div class="profile-TGGroupTitle">
                提现规则
            </div>
            <button class="btn btn-list custom-sharebtn" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas-report" aria-controls="offcanvasBottom">
                <img src="img/adit.png" class="header-img2">
            </button>
        </div>
        <iframe src="http://m.bn.live/lv.html" class="XBB-iframe">
        </iframe>
    </div>

    <!--提現紀錄Offcanvas-->
    <div class="offcanvas offcanvas-fullscreen" tabindex="-1" id="offcanvas-WithdrawHistory"
        aria-labelledby="offcanvas-WithdrawHistory-label">
        <div class="offcanvas-header profile-TGGroupHeader">
            <button type="button" class=" text-reset custom-backbtn" data-bs-dismiss="offcanvas" aria-label="Close">
                <img src="img/back icon.png">
            </button>
            <div class="profile-TGGroupTitle">
                新博币明细
            </div>
        </div>
        <div class="offcanvas-body profile-TGGroupBody">
            <div class="profile-CompanyTitle">
                <img src="img/ic_list_empty.png">
                <div class="profile-CompanyTitles2">暂无更多内容</div>
            </div>
        </div>
    </div>

    <!--三個點的offcanvas-->
    <div class="offcanvas offcanvas-bottom sharingbox" tabindex="-1" id="offcanvas-report"
        aria-labelledby="offcanvas-report">
        <div class="XBB-browserContainer">
            <div class="XBB-browserContainerBold">复制链接</div>
            <div class="XBB-browserContainerBold">使用浏览器打开</div>
            <div>取消</div>
        </div>
    </div>
</template>
<style scoped>
@import url('../../../public/css/XinBoBi.css');
</style>
<script>


import { onMounted } from "vue";
import { mapGetters } from "vuex";


export default {
    computed: {
        ...mapGetters("ws", [
            "getExtcreditsData",
        ]),
        getExtcreditsData2() {
            if (this.getExtcreditsData.length > 0) {
                return this.getExtcreditsData[0].extcredits3;
            }
            return 0; // 或其他默认值
        },
    },

    setup() {


        onMounted(() => {

        });
        return {

        };
    }

}


</script>