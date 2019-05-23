<template>
    <div class="sidebarBox">
        <div class="userInfo">
            <img class="userIcon" src="https://mirror-gold-cdn.xitu.io/168e0979633e9bb9c26?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1" alt=""> 
            <span class="userName">小可爱</span>
        </div>
        <ul class="userOther">
            <li>
                <i class="iconfont icon-shoucang"></i>
                <span>收藏</span>
            </li>
            <li>
                <i class="iconfont icon-lingdang"></i>
                <span>消息</span>
            </li>
            <li>
                <i class="iconfont icon-shezhi"></i>
                <span>设置</span>
            </li>
        </ul>
        <ul class="menuWrapper">
            <li>
                <i class="iconfont icon-shouye"></i>
                <span>首页</span>
                <i class="iconfont icon-you"></i>
            </li>
        </ul>
        <div class="bottomBox">
            <span>
                <i class="iconfont icon-xiazai"></i>
                <span>离线</span>
            </span>
            <span>
                <i class="iconfont icon-yejianmoshi"></i>
                <i class="iconfont icon-rijianmoshi"></i>
                <span>夜间</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.sidebarBox {
    position: fixed;
    width: 60%;
    height: 100%;
    background-color: #232a30;
    color: #94999d;
    z-index: 20;
    .userInfo {
        position: relative;
        height: 60px;
        .userIcon {
            position: absolute;
            top: 17px;
            left: 22px;
            width: 35px;
            height: 35px;
            border-radius: 50%;
        }
        .userName {
            position: absolute;
            top: 27px;
            left: 70px;
    
        }
    }
    .userOther {
        display: flex;
        padding-left: 0px;
        margin-top: 10px;
        li{
            flex: 1;
            text-align: center;
            i {
                font-size: 24px;
            }
            span {
                display: block;
                transform: scale(0.75);
            }
        }
    }
    .menuWrapper {
        margin-top: 30px;
        font-size: 14px;
        li {
            i {
                vertical-align: middle;
                &:first-child {
                    font-size: 18px;
                    margin-right: 5px;;
                }
                &:last-child {
                    float: right;
                    margin-right: 20px;
                }
            }
            span {
                vertical-align: middle;
            }
        }
    }
    .bottomBox {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        font-size: 16px;
        line-height: 50px;
        >span {
            float: left;
            width: 50%;
            text-align: center;
            i {
                margin-right: 7px;
            }
        }
    }

}
</style>
