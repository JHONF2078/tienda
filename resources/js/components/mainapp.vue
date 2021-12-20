<template>

    <div>


        <div v-if="$store.state.user">
            <!--========== ADMIN SIDE MENU one ========-->
            <div class="_1side_menu">
                <div class="_1side_menu_logo">
                    <h3 style="text-align: center">Logo Image</h3>
                    <!--<img src="/img/logo.jpg" style="width: 108px;margin-left: 68px;"/>-->
                </div>

                <!--~~~~~~~~ MENU CONTENT ~~~~~~~~-->
                <div class="_1side_menu_content">
                    <div class="_1side_menu_img_name">
                        <!-- <img class="_1side_menu_img" src="/pic.png" alt="" title=""> -->
                        <p class="_1side_menu_name">Admin</p>
                    </div>

                    <!--~~~ MENU LIST ~~~~~~-->
                    <div class="_1side_menu_list" v-if="role_id==1">
                        <ul class="_1side_menu_list_ul">
                            <li>
                                <router-link to="/"
                                    ><Icon type="ios-speedometer" />
                                    Dashboard</router-link
                                >
                            </li>
                            <li>
                                <router-link to="products"
                                    ><Icon type="ios-list-box"/>
                                    Products</router-link
                                >
                            </li>
                            <li>
                                <router-link to="stock"
                                    ><Icon type="ios-paper"/>
                                    Stock</router-link
                                >
                            </li>
                            <li>
                                <router-link to="roles"
                                    ><Icon type="ios-people" />
                                    Roles</router-link
                                >
                            </li>
                            <li>
                                <router-link to="adminusers"
                                    ><Icon type="md-contacts" /> Admin
                                    Users</router-link
                                >
                            </li>
                            <li>
                                <a href="/logout">
                                    <Icon type="md-exit" /> Logout</a
                                >
                            </li>
                        </ul>
                    </div>


                <!--~~~ MENU LIST ~~~~~~-->
                    <div class="_1side_menu_list" v-else>
                        <ul class="_1side_menu_list_ul">
                            <li>
                                <router-link to="/"
                                    ><Icon type="ios-speedometer" />
                                    Dashboard</router-link
                                >
                            </li>
                            <li>
                                <router-link to="products"
                                    ><Icon type="ios-speedometer" />
                                    Products</router-link
                                >
                            </li>
                             <li>
                                <router-link to="stock"
                                    ><Icon type="ios-paper"/>
                                    Stock</router-link
                                >
                            </li>
                            <li>
                                <a href="/logout">
                                    <Icon type="ios-speedometer" /> Logout</a
                                >
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <!--========== ADMIN SIDE MENU ========-->

            <!--========= HEADER ==========-->
            <div class="header">
                <div class="_2menu _box_shadow">
                    <div class="_2menu_logo">
                        <ul class="open_button">
                            <li>
                                <Icon type="ios-list" />
                            </li>
                            <!--<li><Icon type="ios-albums" /></li>-->
                        </ul>
                    </div>
                </div>
            </div>
            <!--========= HEADER ==========-->
        </div>
        <router-view />


    </div>

</template>

<script>
export default {
    data() {
        return {
            isLoggedIn: false,
            role_id:-1
        }
    },
     created() {
       console.log(window.user);
       this.role_id=window.user.role_id;
        console.log(this.role_id);
       this.$store.commit("setUpdateUser", window.user);
    },
};
</script>
